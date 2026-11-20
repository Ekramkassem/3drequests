import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ProjectItem } from '../../types.ts';
import { soundFX } from '../../utils/soundFX.ts';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';

interface ThreeSpatialExhibitionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onRequestCommission?: (project: ProjectItem) => void;
}

// Reusable math vectors to avoid GC in render loop
const _mouse = new THREE.Vector2();
const _raycaster = new THREE.Raycaster();

export const ThreeSpatialExhibition: React.FC<ThreeSpatialExhibitionProps> = ({
  projects,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);

  // UI state
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cardsGroupRef = useRef<THREE.Group | null>(null);
  const cardMeshesRef = useRef<{ group: THREE.Group; mesh: THREE.Mesh; outline: THREE.LineSegments; wireframe: THREE.Mesh; project: ProjectItem; index: number }[]>([]);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Rotation & Drag state
  const targetRotationYRef = useRef<number>(0);
  const currentRotationYRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const startPointerXRef = useRef<number>(0);
  const startRotationYRef = useRef<number>(0);
  const pointerVelocityRef = useRef<number>(0);
  const lastPointerXRef = useRef<number>(0);
  const lastPointerTimeRef = useRef<number>(0);

  const radius = 6.8; // Radius of 3D circular carousel
  const angleStep = projects.length > 0 ? (Math.PI * 2) / projects.length : 0;

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    const container = containerRef.current;
    const mount = canvasMountRef.current;
    if (!container || !mount || projects.length === 0) return;

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

    // 1. Scene & Atmospheric Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#080808', 0.045);
    sceneRef.current = scene;

    // 2. Camera Setup
    const width = container.clientWidth;
    const height = container.clientHeight || 650;
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 9.6);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. WebGL Renderer
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
    rendererRef.current = renderer;

    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    // 4. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1a1a1a, 0.8);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(6, 8, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xfe1e34, 2.2);
    rimLight.position.set(-6, -2, -5);
    scene.add(rimLight);

    // Subtle red atmospheric point light
    const pointLight = new THREE.PointLight(0xfe1e34, 2.5, 14);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // 5. Digital Ground Grid Plane
    const gridHelper = new THREE.GridHelper(30, 40, 0x333333, 0x171717);
    gridHelper.position.y = -2.2;
    scene.add(gridHelper);

    // 6. Atmospheric Floating Particle Field (350 floating micro-nodes)
    const particleCount = isSoftwareGl ? 120 : 350;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 22;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 22;
      particleScales[i] = Math.random() * 0.04 + 0.02;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xfe1e34,
      size: 0.06,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // 7. Cards Carousel Group
    const cardsGroup = new THREE.Group();
    scene.add(cardsGroup);
    cardsGroupRef.current = cardsGroup;

    const textureLoader = new THREE.TextureLoader();
    cardMeshesRef.current = [];

    // Geometry for 3D Monolith Cards
    const cardWidth = 2.6;
    const cardHeight = 3.4;
    const cardDepth = 0.08;
    const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
    const outlineGeometry = new THREE.EdgesGeometry(cardGeometry);

    projects.forEach((proj, i) => {
      const cardGroup = new THREE.Group();

      // Compute circular position
      const angle = i * angleStep;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      cardGroup.position.set(x, 0, z);
      // Face towards center
      cardGroup.rotation.y = angle;

      // Load Artwork Texture
      const texture = textureLoader.load(proj.heroImage, () => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      });

      // Front artwork material with specular sheen
      const frontMat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.25,
        metalness: 0.1,
      });

      // Titanium back plate material
      const backMat = new THREE.MeshStandardMaterial({
        color: 0x121112,
        roughness: 0.4,
        metalness: 0.8,
      });

      // Side border material
      const sideMat = new THREE.MeshStandardMaterial({
        color: 0x242424,
        roughness: 0.5,
        metalness: 0.5,
      });

      const materials = [
        sideMat, // right
        sideMat, // left
        sideMat, // top
        sideMat, // bottom
        frontMat, // front
        backMat, // back
      ];

      const mesh = new THREE.Mesh(cardGeometry, materials);
      mesh.userData = { project: proj, index: i };
      cardGroup.add(mesh);

      // Glowing border frame
      const outlineMaterial = new THREE.LineBasicMaterial({
        color: 0x333333,
        transparent: true,
        opacity: 0.6,
      });
      const outline = new THREE.LineSegments(outlineGeometry, outlineMaterial);
      cardGroup.add(outline);

      // Floating 3D holographic wireframe satellite (geometry representation)
      const wireGeo =
        i % 2 === 0
          ? new THREE.IcosahedronGeometry(0.35, 1)
          : new THREE.TorusGeometry(0.3, 0.08, 12, 24);

      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xfe1e34,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      wireMesh.position.set(0, 2.1, 0);
      cardGroup.add(wireMesh);

      cardsGroup.add(cardGroup);
      cardMeshesRef.current.push({
        group: cardGroup,
        mesh,
        outline,
        wireframe: wireMesh,
        project: proj,
        index: i,
      });
    });

    setIsLoading(false);

    // 8. Animation & Render Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Slowly rotate particle field
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.02;
      }

      // Rotate card holographic satellites
      cardMeshesRef.current.forEach((item, idx) => {
        item.wireframe.rotation.x = elapsed * 0.6 + idx;
        item.wireframe.rotation.y = elapsed * 0.8 + idx;
        item.wireframe.position.y = 2.05 + Math.sin(elapsed * 2 + idx) * 0.08;
      });

      // Handle Auto-Rotation or Momentum Drag
      if (cardsGroupRef.current) {
        if (!isDraggingRef.current && isAutoRotating) {
          targetRotationYRef.current -= delta * 0.15;
        }

        // Smooth exponential damping to target rotation
        currentRotationYRef.current = THREE.MathUtils.damp(
          currentRotationYRef.current,
          targetRotationYRef.current,
          8,
          delta
        );
        cardsGroupRef.current.rotation.y = currentRotationYRef.current;

        // Calculate which project is closest to facing the camera
        const normalizedAngle =
          ((-currentRotationYRef.current % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const activeIdx = Math.round(normalizedAngle / angleStep) % projects.length;
        setActiveIndex(activeIdx);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 650;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [projects, angleStep, isAutoRotating]);

  // Pointer interaction for 3D Drag & Momentum
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startPointerXRef.current = e.clientX;
    startRotationYRef.current = targetRotationYRef.current;
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    pointerVelocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current || !cameraRef.current || !sceneRef.current) return;

    // Raycast hover check
    const rect = containerRef.current.getBoundingClientRect();
    _mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    _mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    _raycaster.setFromCamera(_mouse, cameraRef.current);
    const meshes = cardMeshesRef.current.map((c) => c.mesh);
    const intersects = _raycaster.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      const hitIndex = intersects[0].object.userData.index;
      if (hoveredIndex !== hitIndex) {
        setHoveredIndex(hitIndex);
        soundFX.playHover();

        // Highlight hit card outline and scale
        cardMeshesRef.current.forEach((c) => {
          const isHit = c.index === hitIndex;
          gsap.to(c.group.scale, {
            x: isHit ? 1.08 : 1,
            y: isHit ? 1.08 : 1,
            z: isHit ? 1.08 : 1,
            duration: 0.3,
            ease: 'power2.out',
          });
          (c.outline.material as THREE.LineBasicMaterial).color.set(isHit ? 0xfe1e34 : 0x333333);
        });
      }
    } else if (hoveredIndex !== null) {
      setHoveredIndex(null);
      cardMeshesRef.current.forEach((c) => {
        gsap.to(c.group.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: 'power2.out' });
        (c.outline.material as THREE.LineBasicMaterial).color.set(0x333333);
      });
    }

    // Handle Drag Movement
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startPointerXRef.current;
    targetRotationYRef.current = startRotationYRef.current + deltaX * 0.004;

    const now = performance.now();
    const dt = now - lastPointerTimeRef.current;
    if (dt > 10) {
      pointerVelocityRef.current = (e.clientX - lastPointerXRef.current) / dt;
      lastPointerXRef.current = e.clientX;
      lastPointerTimeRef.current = now;
    }
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    // Apply inertia based on release velocity
    if (Math.abs(pointerVelocityRef.current) > 0.1) {
      targetRotationYRef.current += pointerVelocityRef.current * 0.4;
    }
  };

  // Click card to zoom and open project
  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current || !cameraRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    _mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    _mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    _raycaster.setFromCamera(_mouse, cameraRef.current);
    const meshes = cardMeshesRef.current.map((c) => c.mesh);
    const intersects = _raycaster.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      const hitProject: ProjectItem = intersects[0].object.userData.project;
      const hitIndex: number = intersects[0].object.userData.index;

      soundFX.playSelect();

      // Smoothly snap carousel to face clicked project
      snapToIndex(hitIndex);

      // GSAP Camera zoom animation
      if (cameraRef.current) {
        gsap.to(cameraRef.current.position, {
          z: 7.2,
          y: 0.4,
          duration: 0.6,
          ease: 'power3.inOut',
          onComplete: () => {
            onSelectProject(hitProject);
            // Reset camera back
            if (cameraRef.current) {
              cameraRef.current.position.set(0, 0.8, 9.6);
            }
          },
        });
      }
    }
  };

  // Snap carousel to a specific project index
  const snapToIndex = useCallback(
    (index: number) => {
      soundFX.playSelect();
      const targetAngle = -index * angleStep;
      // Adjust to closest modular rotation
      const current = targetRotationYRef.current;
      const diff = ((targetAngle - current + Math.PI) % (Math.PI * 2)) - Math.PI;
      targetRotationYRef.current = current + diff;
      setActiveIndex(index);
    },
    [angleStep]
  );

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % projects.length;
    snapToIndex(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + projects.length) % projects.length;
    snapToIndex(prevIdx);
  };

  const currentActiveProject = projects[activeIndex] || projects[0];

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onClick={handleClick}
      className="relative w-full h-[620px] sm:h-[700px] md:h-[760px] rounded-[16px] overflow-hidden bg-[#070707] border border-[#262525] shadow-[0_30px_100px_rgba(0,0,0,0.85)] select-none cursor-grab active:cursor-grabbing text-left"
    >
      {/* 3D WebGL Canvas Mount */}
      <div ref={canvasMountRef} className="absolute inset-0 pointer-events-auto" />

      {/* Top Holographic Navigation Header */}
      <div className="absolute top-5 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#fe1e34] uppercase bg-[#080808]/85 backdrop-blur-md px-3.5 py-2 rounded-[8px] border border-[#262525]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[#fcfcfc] font-bold">THREE.JS SPATIAL EXHIBITION</span>
            <span aria-hidden="true" className="text-[#525252]">/</span>
            <span>REAL-TIME 3D MONOLITHS</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Auto Rotation Toggle */}
          <button
            type="button"
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            aria-label={isAutoRotating ? 'Pause rotation' : 'Resume rotation'}
            className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-[#b5b2b2] hover:text-[#fcfcfc] rounded-[8px] bg-[#0e0e0e]/90 backdrop-blur-md border border-[#262525] hover:border-[#fe1e34] transition-colors"
          >
            {isAutoRotating ? (
              <>
                <Pause className="w-3 h-3 text-[#fe1e34]" />
                <span className="hidden sm:inline">Orbiting</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#525252]" />
                <span className="hidden sm:inline">Orbit Paused</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => snapToIndex(0)}
            aria-label="Reset perspective"
            className="p-2 rounded-[8px] bg-[#0e0e0e]/90 backdrop-blur-md border border-[#262525] text-[#b5b2b2] hover:text-[#fcfcfc] hover:border-[#fe1e34] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating Center Orbit Drag Prompt */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-2 text-[9px] font-mono uppercase tracking-widest text-[#525252] pointer-events-none">
        <span className="[writing-mode:vertical-lr] rotate-180">DRAG ORBIT · CLICK TO INSPECT</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#fe1e34] to-transparent mx-auto" />
      </div>

      {/* Collapsible Ergonomic Bottom Inspection Dock (Skill Directive §5) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-4xl pointer-events-auto">
        <div className="p-5 sm:p-6 rounded-[12px] bg-[#0c0c0c]/92 backdrop-blur-xl border border-[#262525] shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Active Project Telemetry */}
          {currentActiveProject && (
            <div className="space-y-1.5 max-w-lg">
              <div className="flex items-center gap-2.5 text-[10px] font-mono text-[#fe1e34] uppercase tracking-widest">
                <span>0{activeIndex + 1} / 0{projects.length}</span>
                <span aria-hidden="true" className="text-[#525252]">·</span>
                <span>{currentActiveProject.categoryLabel}</span>
                <span aria-hidden="true" className="text-[#525252]">·</span>
                <span className="text-[#b5b2b2]">{currentActiveProject.year}</span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#fcfcfc] tracking-tight truncate">
                {currentActiveProject.title}
              </h2>

              <div className="flex items-center gap-4 text-xs font-mono text-[#b5b2b2] pt-0.5">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#fe1e34]" />
                  <span>{currentActiveProject.technicalSpecs.polycount}</span>
                </span>
                <span aria-hidden="true" className="text-[#525252]">/</span>
                <span className="flex items-center gap-1.5 truncate">
                  <Layers className="w-3.5 h-3.5 text-[#525252]" />
                  <span>{currentActiveProject.technicalSpecs.topologyType}</span>
                </span>
              </div>
            </div>
          )}

          {/* Stepper Controls & Full Case Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous 3D Monolith"
                className="p-3 rounded-[8px] bg-[#171617] border border-[#262525] text-[#fcfcfc] hover:border-[#fe1e34] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next 3D Monolith"
                className="p-3 rounded-[8px] bg-[#171617] border border-[#262525] text-[#fcfcfc] hover:border-[#fe1e34] transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {currentActiveProject && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playSelect();
                  onSelectProject(currentActiveProject);
                }}
                className="group flex items-center gap-2 px-6 py-3 rounded-[8px] bg-[#fe1e34] hover:bg-[#d6172a] text-[#fcfcfc] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(254,30,52,0.4)] whitespace-nowrap"
              >
                <span>Inspect Full Case</span>
                <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#080808]/90 backdrop-blur-md">
          <div className="text-center space-y-3 font-mono text-xs text-[#fe1e34] tracking-widest uppercase">
            <div className="w-8 h-8 border-2 border-[#fe1e34] border-t-transparent rounded-full animate-spin mx-auto" />
            <p>Initializing WebGL Spatial Arena...</p>
          </div>
        </div>
      )}
    </div>
  );
};
