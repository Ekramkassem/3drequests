import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ProjectItem } from '../../types.ts';
import { soundFX } from '../../utils/soundFX.ts';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { magneticCursor } from '../../utils/magneticCursorState.ts';

gsap.registerPlugin(Draggable);

interface OpaqueProjectStackProps {
  projects: ProjectItem[];
  allProjects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onRequestClick: () => void;
  onResetFilters?: () => void;
}

// Module-scope reusable objects to prevent GC overhead in 60fps animation loop
const _raycaster = new THREE.Raycaster();
const _mouse = new THREE.Vector2();

export const OpaqueProjectStack: React.FC<OpaqueProjectStackProps> = ({
  projects,
  allProjects,
  onSelectProject,
  onRequestClick,
  onResetFilters,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);

  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Stack movement state (physics & endless looping)
  const offsetRef = useRef<number>(0);
  const targetOffsetRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  // Track cards in WebGL
  interface StackCard3D {
    group: THREE.Group;
    mesh: THREE.Mesh;
    outline: THREE.LineSegments;
    outlineMat: THREE.LineBasicMaterial;
    frontMat: THREE.MeshStandardMaterial;
    project: ProjectItem;
    baseIndex: number;
    stackIndex: number;
    isHovered: boolean;
  }
  const stackCardsRef = useRef<StackCard3D[]>([]);
  const isTransitioningRef = useRef<boolean>(false);

  // Active projects list for the 3D loop (capped to 24 for optimal 60fps WebGL texture memory)
  const allActiveList = projects.length > 0 ? projects : allProjects;
  const activeProjects = allActiveList.slice(0, 24);
  const REPETITIONS = Math.max(3, Math.ceil(18 / Math.max(1, activeProjects.length)));
  const TOTAL_STACK_CARDS = activeProjects.length * REPETITIONS;

  // Initialize Three.js 3D Stack Scene & GSAP Draggable
  useEffect(() => {
    const container = containerRef.current;
    const mount = canvasMountRef.current;
    if (!container || !mount || activeProjects.length === 0) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // 1. Scene with clean alpha transparency to integrate directly into website page
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Narrow Perspective Camera for Architectural Look
    const width = container.clientWidth;
    const height = container.clientHeight || 780;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 10.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. WebGL Renderer with Alpha enabled to integrate seamlessly into page background
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    rendererRef.current = renderer;

    mount.innerHTML = '';
    renderer.domElement.className = 'w-full h-full block bg-transparent outline-none overflow-visible pointer-events-auto';
    mount.appendChild(renderer.domElement);

    // 4. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x141414, 0.9);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
    keyLight.position.set(5, 7, 8);
    scene.add(keyLight);

    const redRimLight = new THREE.DirectionalLight(0xfe1e34, 2.8);
    redRimLight.position.set(-6, 2, -3);
    scene.add(redRimLight);

    const fillLight = new THREE.DirectionalLight(0xff5566, 1.4);
    fillLight.position.set(6, -3, -2);
    scene.add(fillLight);

    // Subtle Horizon Grid Plane
    const grid = new THREE.GridHelper(36, 44, 0x1f1f1f, 0x0f0f0f);
    grid.position.y = -3.8;
    scene.add(grid);

    // 5. Ambient Floating Kinetic Particles reacting to cursor
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 28;
      particlePositions[i + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16 - 2;

      particleVelocities[i] = (Math.random() - 0.5) * 0.003;
      particleVelocities[i + 1] = (Math.random() - 0.5) * 0.004;
      particleVelocities[i + 2] = (Math.random() - 0.5) * 0.002;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xfe1e34,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Build Stack Cards (3:4 portrait ratio)
    const cardWidth = 2.45;
    const cardHeight = 3.35;
    const cardDepth = 0.05;
    const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
    const outlineGeometry = new THREE.EdgesGeometry(cardGeometry);

    const textureLoader = new THREE.TextureLoader();
    const loadedTextures = activeProjects.map((p) => {
      const tex = textureLoader.load(p.heroImage);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tex;
    });

    stackCardsRef.current = [];

    for (let i = 0; i < TOTAL_STACK_CARDS; i++) {
      const cardGroup = new THREE.Group();
      const projIndex = i % activeProjects.length;
      const project = activeProjects[projIndex];
      const texture = loadedTextures[projIndex];

      const frontMat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.18,
        metalness: 0.12,
      });

      const backMat = new THREE.MeshStandardMaterial({
        color: 0x101010,
        roughness: 0.45,
        metalness: 0.85,
      });

      const borderMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.5,
        metalness: 0.5,
      });

      const materials = [borderMat, borderMat, borderMat, borderMat, frontMat, backMat];
      const mesh = new THREE.Mesh(cardGeometry, materials);
      mesh.userData = { project, index: i, projIndex };
      cardGroup.add(mesh);

      const outlineMat = new THREE.LineBasicMaterial({
        color: 0x333333,
        transparent: true,
        opacity: 0.65,
      });
      const outline = new THREE.LineSegments(outlineGeometry, outlineMat);
      cardGroup.add(outline);

      scene.add(cardGroup);
      stackCardsRef.current.push({
        group: cardGroup,
        mesh,
        outline,
        outlineMat,
        frontMat,
        project,
        baseIndex: projIndex,
        stackIndex: i,
        isHovered: false,
      });
    }

    // 7. Animation Render Loop with Diagonal Stack Physics & Endless Wrapping
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Responsive interpolation: when actively dragging, damping is tight (34) for physically tethered feel
      const dampingSpeed = isDraggingRef.current ? 34 : 10;
      offsetRef.current = THREE.MathUtils.damp(
        offsetRef.current,
        targetOffsetRef.current,
        dampingSpeed,
        delta
      );

      const offset = offsetRef.current;
      const count = TOTAL_STACK_CARDS;

      // Spacing constants along diagonal trajectory
      const stepX = 1.35;
      const stepY = 0.52;
      const stepZ = -0.16;
      const rotYAngle = -0.52;
      const rotXAngle = 0.12;
      const rotZAngle = 0.05;

      const halfRange = (count * stepX) / 2;

      stackCardsRef.current.forEach((card) => {
        if (isTransitioningRef.current && card.isHovered) {
          return;
        }

        const naturalX = card.stackIndex * stepX - offset * stepX;
        const wrappedX = ((((naturalX + halfRange) % (count * stepX)) + (count * stepX)) % (count * stepX)) - halfRange;

        const s = wrappedX / stepX;
        const targetY = s * stepY;
        const targetZ = s * stepZ;

        const hoverLiftZ = card.isHovered ? 0.75 : 0;
        const hoverShiftX = card.isHovered ? -0.25 : 0;
        const hoverShiftY = card.isHovered ? 0.2 : 0;
        const hoverRotY = card.isHovered ? -0.26 : rotYAngle;

        card.group.position.x = wrappedX + hoverShiftX;
        card.group.position.y = targetY + hoverShiftY;
        card.group.position.z = targetZ + hoverLiftZ;

        card.group.rotation.x = rotXAngle;
        card.group.rotation.y = hoverRotY;
        card.group.rotation.z = rotZAngle;

        const distFromCenter = Math.abs(wrappedX);
        const scale = Math.max(0.78, 1.05 - (distFromCenter / halfRange) * 0.32);
        card.group.scale.set(scale, scale, scale);

        card.frontMat.opacity = 1.0;
        card.frontMat.transparent = false;
      });

      // Ambient particle motion reacting to mouse
      const posArr = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        posArr[i] += particleVelocities[i] + _mouse.x * 0.001;
        posArr[i + 1] += particleVelocities[i + 1] + _mouse.y * 0.001;
        posArr[i + 2] += particleVelocities[i + 2];

        if (posArr[i] > 14) posArr[i] = -14;
        if (posArr[i] < -14) posArr[i] = 14;
        if (posArr[i + 1] > 8) posArr[i + 1] = -8;
        if (posArr[i + 1] < -8) posArr[i + 1] = 8;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Update active center project index based on current scroll
      const activeIdx = Math.round((((offset % activeProjects.length) + activeProjects.length) % activeProjects.length));
      if (activeIdx !== activeProjectIndex) {
        setActiveProjectIndex(activeIdx);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. GSAP Draggable for Physically Tethered Momentum & Inertia Damping
    const proxy = document.createElement('div');
    let startOffset = 0;
    let lastDragX = 0;
    let lastDragTime = performance.now();
    let currentVelocity = 0;

    const draggables = Draggable.create(proxy, {
      trigger: container,
      type: 'x',
      dragClickables: false,
      allowEventDefault: false,
      onPress: function () {
        gsap.killTweensOf(targetOffsetRef);
        startOffset = targetOffsetRef.current;
        hasDraggedRef.current = false;
        isDraggingRef.current = true;
        setIsDragging(true);
        magneticCursor.setDrag(true);
        lastDragX = this.x;
        lastDragTime = performance.now();
        currentVelocity = 0;
      },
      onDrag: function () {
        const deltaX = this.startX - this.x;
        if (Math.abs(deltaX) > 6) {
          hasDraggedRef.current = true;
        }

        const now = performance.now();
        const dt = (now - lastDragTime) / 1000;
        if (dt > 0.008) {
          currentVelocity = (this.x - lastDragX) / dt;
          lastDragX = this.x;
          lastDragTime = now;
        }

        const sensitivity = 0.0038;
        targetOffsetRef.current = startOffset + deltaX * sensitivity;
      },
      onDragEnd: function () {
        isDraggingRef.current = false;
        setIsDragging(false);
        magneticCursor.setDrag(false);

        const momentum = -currentVelocity * 0.00042;
        const duration = Math.min(1.5, Math.max(0.5, Math.abs(momentum) * 0.4));

        gsap.to(targetOffsetRef, {
          current: targetOffsetRef.current + momentum,
          duration,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      },
    });

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 780;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      draggables.forEach((d) => d.kill());
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [activeProjects, TOTAL_STACK_CARDS]);

  // Keyboard navigation for Left/Right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        gsap.to(targetOffsetRef, {
          current: targetOffsetRef.current + 1.25,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        soundFX.playSelect();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        gsap.to(targetOffsetRef, {
          current: targetOffsetRef.current - 1.25,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        soundFX.playSelect();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mouse Wheel Navigation along Diagonal Trajectory with smooth GSAP damping
  const handleWheel = (e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    gsap.to(targetOffsetRef, {
      current: targetOffsetRef.current + delta * 0.0028,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  // Pointer move for Raycasting & Tooltip tracking (suppressed during active dragging)
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current || !cameraRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    _mouse.x = nx;
    _mouse.y = ny;
    setTooltipPos({ x: e.clientX, y: e.clientY });

    if (isDraggingRef.current) {
      if (hoveredProject) {
        setHoveredProject(null);
        stackCardsRef.current.forEach((c) => {
          c.isHovered = false;
          c.outlineMat.color.set(0x333333);
          c.outlineMat.opacity = 0.65;
        });
      }
      return;
    }

    _raycaster.setFromCamera(_mouse, cameraRef.current);
    const meshes = stackCardsRef.current.map((c) => c.mesh);
    const intersects = _raycaster.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      const hitIndex = intersects[0].object.userData.index;
      const hitProject: ProjectItem = intersects[0].object.userData.project;
      const hitCard = stackCardsRef.current.find((c) => c.stackIndex === hitIndex);

      // Compute 3D mesh center projected onto 2D screen coordinates for gravitational pull
      let targetScreenX = e.clientX;
      let targetScreenY = e.clientY;
      if (hitCard && containerRef.current && cameraRef.current) {
        const worldPos = new THREE.Vector3();
        hitCard.mesh.getWorldPosition(worldPos);
        const projected = worldPos.project(cameraRef.current);
        targetScreenX = (projected.x * 0.5 + 0.5) * rect.width + rect.left;
        targetScreenY = (-projected.y * 0.5 + 0.5) * rect.height + rect.top;
      }

      magneticCursor.hoverProject({
        title: hitProject.title,
        category: hitProject.categoryLabel,
        actionLabel: 'INSPECT ↗',
        targetPoint: { x: targetScreenX, y: targetScreenY },
        magneticStrength: 0.35,
      });

      if (!hoveredProject || hoveredProject.id !== hitProject.id) {
        setHoveredProject(hitProject);
        soundFX.playHover();

        stackCardsRef.current.forEach((c) => {
          const isHit = c.stackIndex === hitIndex;
          c.isHovered = isHit;
          c.outlineMat.color.set(isHit ? 0xfe1e34 : 0x333333);
          c.outlineMat.opacity = isHit ? 1.0 : 0.65;
        });
      }
    } else if (hoveredProject) {
      setHoveredProject(null);
      magneticCursor.reset();
      stackCardsRef.current.forEach((c) => {
        c.isHovered = false;
        c.outlineMat.color.set(0x333333);
        c.outlineMat.opacity = 0.65;
      });
    }
  };

  // Click Cinematic Transition: Glides card to center front, faces camera, then opens project detail view
  const handleClick = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) return;
    if (!containerRef.current || !cameraRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    _mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    _mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    _raycaster.setFromCamera(_mouse, cameraRef.current);
    const meshes = stackCardsRef.current.map((c) => c.mesh);
    const intersects = _raycaster.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      const hitProject: ProjectItem = intersects[0].object.userData.project;
      const hitCard = stackCardsRef.current.find((c) => c.stackIndex === intersects[0].object.userData.index);

      if (hitCard) {
        soundFX.playSelect();
        isTransitioningRef.current = true;
        hitCard.isHovered = true;

        gsap.to(hitCard.group.position, {
          x: 0,
          y: 0,
          z: 3.4,
          duration: 0.65,
          ease: 'power3.inOut',
        });

        gsap.to(hitCard.group.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.65,
          ease: 'power3.inOut',
        });

        gsap.to(hitCard.group.scale, {
          x: 1.45,
          y: 1.45,
          z: 1.45,
          duration: 0.65,
          ease: 'power3.inOut',
          onComplete: () => {
            onSelectProject(hitProject);
            isTransitioningRef.current = false;
            hitCard.isHovered = false;
          },
        });
      }
    }
  };

  // Step Navigation Buttons
  const stepStack = (direction: 'prev' | 'next') => {
    soundFX.playSelect();
    const step = direction === 'next' ? 1.5 : -1.5;
    gsap.to(targetOffsetRef, {
      current: targetOffsetRef.current + step,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  if (activeProjects.length === 0) {
    return (
      <div className="py-24 text-center space-y-4 rounded-[14px] bg-[#100f10] border border-[#222]">
        <p className="text-sm font-mono text-[#b5b2b2] uppercase tracking-wider">
          No 3D projects match your active search filters.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-4 py-2 rounded-[6px] bg-[#1a191a] hover:bg-[#252425] text-xs font-mono uppercase text-[#fcfcfc] border border-[#333]"
          >
            Clear Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full text-left overflow-visible">
      {/* MAIN 3D CANVAS VIEWPORT (Integrated Directly into the Website Canvas - Uncropped) */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          setHoveredProject(null);
          magneticCursor.reset();
        }}
        onClick={handleClick}
        className={`relative w-full h-[660px] sm:h-[740px] md:h-[800px] select-none text-left touch-none overflow-visible bg-transparent ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {/* Three.js Canvas Mount - Clean Pure Alpha Transparency Without Any Black Gradients */}
        <div ref={canvasMountRef} className="absolute inset-0 pointer-events-auto bg-transparent overflow-visible" />

        {/* Bottom Navigation Toolbar: Prev / Next Buttons + Active Project Telemetry */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 z-20 flex items-center justify-between pointer-events-none">
          {/* Left / Right Quick Step Arrows */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                stepStack('prev');
              }}
              aria-label="Previous Stack Position"
              className="p-3 rounded-[8px] bg-[#121112]/90 hover:bg-[#1a191a] backdrop-blur-md border border-[#262525] hover:border-[#fe1e34] text-[#fcfcfc] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.8)]"
            >
              <ChevronLeft className="w-4 h-4 text-[#fe1e34]" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                stepStack('next');
              }}
              aria-label="Next Stack Position"
              className="p-3 rounded-[8px] bg-[#121112]/90 hover:bg-[#1a191a] backdrop-blur-md border border-[#262525] hover:border-[#fe1e34] text-[#fcfcfc] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.8)]"
            >
              <ChevronRight className="w-4 h-4 text-[#fe1e34]" />
            </button>
          </div>

          {/* Active Project Telemetry Pill */}
          {activeProjects[activeProjectIndex] && (
            <div className="pointer-events-auto flex items-center gap-3 bg-[#0c0c0c]/90 backdrop-blur-md px-4 py-2 rounded-[8px] border border-[#262525] shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <span className="text-[10px] font-mono text-[#fe1e34] font-bold">
                {activeProjectIndex + 1 < 10 ? `0${activeProjectIndex + 1}` : activeProjectIndex + 1} / {activeProjects.length < 10 ? `0${activeProjects.length}` : activeProjects.length}
              </span>
              {allActiveList.length > activeProjects.length && (
                <span className="text-[9px] font-mono text-[#888] hidden lg:inline">
                  (Showing 24 of {allActiveList.length})
                </span>
              )}
              <span className="w-1 h-1 rounded-full bg-[#333]" />
              <span className="text-xs font-display font-semibold text-[#fcfcfc] max-w-[180px] sm:max-w-[260px] truncate">
                {activeProjects[activeProjectIndex].title}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playSelect();
                  onSelectProject(activeProjects[activeProjectIndex]);
                }}
                className="text-[9px] font-mono text-[#fe1e34] hover:text-white uppercase tracking-wider flex items-center gap-0.5 ml-1 transition-colors"
              >
                <span>Open Spec</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Contextual Cursor-Following Hover Label */}
        {hoveredProject && !isDragging && (
          <div
            className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-16 transition-all duration-150"
            style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
          >
            <div className="p-3.5 rounded-[10px] bg-[#0c0c0c]/95 border border-[#fe1e34] shadow-[0_15px_40px_rgba(0,0,0,0.95)] backdrop-blur-xl space-y-1.5 min-w-[220px]">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#fe1e34] uppercase tracking-widest">
                <span>{hoveredProject.categoryLabel}</span>
                <span>{hoveredProject.year}</span>
              </div>

              <div className="font-display font-bold text-sm text-[#fcfcfc] tracking-tight">
                {hoveredProject.title}
              </div>

              <div className="text-[10px] font-mono text-[#b5b2b2] flex items-center justify-between pt-1 border-t border-[#222]">
                <span>{hoveredProject.client}</span>
                <span className="text-[#fe1e34] font-bold flex items-center gap-0.5">
                  VIEW PROJECT <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
