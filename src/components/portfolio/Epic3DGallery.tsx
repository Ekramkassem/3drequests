import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ProjectItem } from '../../types.ts';
import { soundFX } from '../../utils/soundFX.ts';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Sparkles,
  Cpu,
  Layers,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';

interface Epic3DGalleryProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onRequestCommission?: (project: ProjectItem) => void;
}

// Module-scope reusable objects for zero-allocation render loop
const _raycaster = new THREE.Raycaster();
const _mouse = new THREE.Vector2();

// Helper to create soft circular glowing particle sprite texture
const createParticleGlowTexture = (): THREE.Texture => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.2, 'rgba(255, 140, 150, 0.95)');
    grad.addColorStop(0.5, 'rgba(254, 30, 52, 0.45)');
    grad.addColorStop(0.85, 'rgba(254, 30, 52, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

export const Epic3DGallery: React.FC<Epic3DGalleryProps> = ({
  projects,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);

  // Active indices and state
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Particle systems references
  const particlesGroupRef = useRef<THREE.Group | null>(null);
  const ambientParticlesRef = useRef<{
    points: THREE.Points;
    geo: THREE.BufferGeometry;
    positions: Float32Array;
    basePositions: Float32Array;
    velocities: Float32Array;
    phases: Float32Array;
  } | null>(null);
  const foregroundParticlesRef = useRef<{
    points: THREE.Points;
    geo: THREE.BufferGeometry;
    positions: Float32Array;
    basePositions: Float32Array;
  } | null>(null);

  // Cursor tracking for interactive reactive particles and camera parallax
  const cursorRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const smoothCursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Card meshes tracking
  interface Card3DData {
    group: THREE.Group;
    mesh: THREE.Mesh;
    outline: THREE.LineSegments;
    satellite: THREE.Mesh;
    frontMaterial: THREE.MeshStandardMaterial;
    outlineMaterial: THREE.LineBasicMaterial;
    project: ProjectItem;
    index: number;
  }
  const cardsRef = useRef<Card3DData[]>([]);

  // Scroll & drag progress tracking
  const progressRef = useRef<{ current: number; target: number }>({ current: 0, target: 0 });
  const dragStartRef = useRef<{ x: number; startTarget: number; lastX: number; lastTime: number }>({
    x: 0,
    startTarget: 0,
    lastX: 0,
    lastTime: 0,
  });

  // Clamp target progress within range
  const setTargetProgress = useCallback(
    (val: number, animate = true) => {
      const clamped = Math.max(0, Math.min(projects.length - 1, val));
      if (animate) {
        gsap.to(progressRef.current, {
          target: clamped,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else {
        progressRef.current.target = clamped;
      }
    },
    [projects.length]
  );

  // Navigate to specific project index
  const goToIndex = useCallback(
    (idx: number) => {
      soundFX.playSelect();
      setTargetProgress(idx);
    },
    [setTargetProgress]
  );

  // Initialize Three.js scene
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

    // 1. Scene & Depth Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.038);
    sceneRef.current = scene;

    // 2. Camera Setup
    const width = container.clientWidth;
    const height = container.clientHeight || 740;
    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 100);
    camera.position.set(0, 0.3, 8.8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer Setup
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
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    // 4. Lighting Rig (3-point studio lighting + arterial red rim)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x141414, 0.85);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(6, 8, 9);
    scene.add(keyLight);

    const rimLightLeft = new THREE.DirectionalLight(0xfe1e34, 2.6);
    rimLightLeft.position.set(-8, 3, -4);
    scene.add(rimLightLeft);

    const rimLightRight = new THREE.DirectionalLight(0xff4455, 1.8);
    rimLightRight.position.set(8, -2, -2);
    scene.add(rimLightRight);

    // 5. Digital Wireframe Ground Grid
    const grid = new THREE.GridHelper(36, 48, 0x2e2e2e, 0x141414);
    grid.position.y = -2.3;
    scene.add(grid);

    // 6. Interactive Reactive Particle System (Dual Layered)
    const particleTexture = createParticleGlowTexture();
    const particlesGroup = new THREE.Group();
    scene.add(particlesGroup);
    particlesGroupRef.current = particlesGroup;

    // Layer A: Volumetric Ambient Cloud (600 floating micro-embers)
    const ambientCount = isSoftwareGl ? 160 : 620;
    const ambientGeo = new THREE.BufferGeometry();
    const ambientPositions = new Float32Array(ambientCount * 3);
    const ambientBasePositions = new Float32Array(ambientCount * 3);
    const ambientVelocities = new Float32Array(ambientCount * 3);
    const ambientPhases = new Float32Array(ambientCount);
    const ambientColors = new Float32Array(ambientCount * 3);

    const redColor = new THREE.Color(0xfe1e34);
    const coralColor = new THREE.Color(0xff6b7a);
    const titaniumColor = new THREE.Color(0xfcfcfc);

    for (let i = 0; i < ambientCount; i++) {
      const x = (Math.random() - 0.5) * 26;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 24;

      ambientPositions[i * 3] = x;
      ambientPositions[i * 3 + 1] = y;
      ambientPositions[i * 3 + 2] = z;

      ambientBasePositions[i * 3] = x;
      ambientBasePositions[i * 3 + 1] = y;
      ambientBasePositions[i * 3 + 2] = z;

      ambientVelocities[i * 3] = (Math.random() - 0.5) * 0.006;
      ambientVelocities[i * 3 + 1] = Math.random() * 0.008 + 0.002;
      ambientVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.006;

      ambientPhases[i] = Math.random() * Math.PI * 2;

      // Color variation: 60% red embers, 25% hot coral, 15% crisp titanium sparks
      const randColor = Math.random();
      const chosenColor = randColor > 0.4 ? redColor : randColor > 0.15 ? coralColor : titaniumColor;
      ambientColors[i * 3] = chosenColor.r;
      ambientColors[i * 3 + 1] = chosenColor.g;
      ambientColors[i * 3 + 2] = chosenColor.b;
    }

    ambientGeo.setAttribute('position', new THREE.BufferAttribute(ambientPositions, 3));
    ambientGeo.setAttribute('color', new THREE.BufferAttribute(ambientColors, 3));

    const ambientMat = new THREE.PointsMaterial({
      size: 0.16,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const ambientPoints = new THREE.Points(ambientGeo, ambientMat);
    particlesGroup.add(ambientPoints);

    ambientParticlesRef.current = {
      points: ambientPoints,
      geo: ambientGeo,
      positions: ambientPositions,
      basePositions: ambientBasePositions,
      velocities: ambientVelocities,
      phases: ambientPhases,
    };

    // Layer B: Close-Camera Interactive Floating Sparks (180 particles for high-contrast foreground depth)
    const fgCount = isSoftwareGl ? 50 : 180;
    const fgGeo = new THREE.BufferGeometry();
    const fgPositions = new Float32Array(fgCount * 3);
    const fgBasePositions = new Float32Array(fgCount * 3);

    for (let i = 0; i < fgCount; i++) {
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 9;
      const z = Math.random() * 5 + 3.2; // Placed right between cards and camera for visceral depth

      fgPositions[i * 3] = x;
      fgPositions[i * 3 + 1] = y;
      fgPositions[i * 3 + 2] = z;

      fgBasePositions[i * 3] = x;
      fgBasePositions[i * 3 + 1] = y;
      fgBasePositions[i * 3 + 2] = z;
    }

    fgGeo.setAttribute('position', new THREE.BufferAttribute(fgPositions, 3));
    const fgMat = new THREE.PointsMaterial({
      size: 0.22,
      map: particleTexture,
      color: 0xfe1e34,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const fgPoints = new THREE.Points(fgGeo, fgMat);
    particlesGroup.add(fgPoints);

    foregroundParticlesRef.current = {
      points: fgPoints,
      geo: fgGeo,
      positions: fgPositions,
      basePositions: fgBasePositions,
    };

    // 7. Procedural 3D Monolith Cards
    cardsRef.current = [];
    const textureLoader = new THREE.TextureLoader();

    const cardWidth = 3.2;
    const cardHeight = 4.1;
    const cardDepth = 0.08;
    const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
    const outlineGeometry = new THREE.EdgesGeometry(cardGeometry);

    projects.forEach((proj, idx) => {
      const cardGroup = new THREE.Group();

      // Texture
      const texture = textureLoader.load(proj.heroImage, () => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      });

      // Front Face Material
      const frontMat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.2,
        metalness: 0.15,
      });

      // Back Titanium Plate Material
      const backMat = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.35,
        metalness: 0.85,
      });

      // Bevel Border Material
      const borderMat = new THREE.MeshStandardMaterial({
        color: 0x222222,
        roughness: 0.5,
        metalness: 0.6,
      });

      const materials = [borderMat, borderMat, borderMat, borderMat, frontMat, backMat];
      const mesh = new THREE.Mesh(cardGeometry, materials);
      mesh.userData = { project: proj, index: idx };
      cardGroup.add(mesh);

      // Edge outline
      const outlineMat = new THREE.LineBasicMaterial({
        color: 0x333333,
        transparent: true,
        opacity: 0.7,
      });
      const outline = new THREE.LineSegments(outlineGeometry, outlineMat);
      cardGroup.add(outline);

      // Floating Holographic Satellite above the card
      const satGeo =
        idx % 2 === 0
          ? new THREE.IcosahedronGeometry(0.38, 1)
          : new THREE.TorusGeometry(0.32, 0.07, 12, 24);

      const satMat = new THREE.MeshBasicMaterial({
        color: 0xfe1e34,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const satellite = new THREE.Mesh(satGeo, satMat);
      satellite.position.set(0, 2.5, 0);
      cardGroup.add(satellite);

      scene.add(cardGroup);
      cardsRef.current.push({
        group: cardGroup,
        mesh,
        outline,
        satellite,
        frontMaterial: frontMat,
        outlineMaterial: outlineMat,
        project: proj,
        index: idx,
      });
    });

    setIsLoading(false);

    // Initial Entrance Stagger with GSAP
    cardsRef.current.forEach((card, i) => {
      card.group.scale.set(0, 0, 0);
      gsap.to(card.group.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.8,
        delay: i * 0.08,
        ease: 'back.out(1.4)',
      });
    });

    // 8. Animation Render Loop with Interactive Particle Physics
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth cursor interpolation with exponential damping
      smoothCursorRef.current.x = THREE.MathUtils.damp(
        smoothCursorRef.current.x,
        cursorRef.current.x,
        5.5,
        delta
      );
      smoothCursorRef.current.y = THREE.MathUtils.damp(
        smoothCursorRef.current.y,
        cursorRef.current.y,
        5.5,
        delta
      );

      const sx = smoothCursorRef.current.x;
      const sy = smoothCursorRef.current.y;

      // 1. Interactive Camera Parallax
      camera.position.x = THREE.MathUtils.damp(camera.position.x, sx * 0.55, 4.5, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, 0.3 + sy * 0.35, 4.5, delta);
      camera.lookAt(0, 0, 0);

      // 2. Interactive Reactive Particle Field Physics
      if (particlesGroupRef.current) {
        // Dynamic group tilt and perspective reaction
        particlesGroupRef.current.rotation.y = sx * 0.35 + elapsed * 0.02;
        particlesGroupRef.current.rotation.x = -sy * 0.28;
        particlesGroupRef.current.position.x = sx * 0.9;
        particlesGroupRef.current.position.y = -sy * 0.65;
      }

      // Individual particle vertex displacement reacting to cursor coordinates in 3D
      if (ambientParticlesRef.current) {
        const { geo, positions, basePositions, phases } = ambientParticlesRef.current;
        const cursorWorldX = sx * 9.0;
        const cursorWorldY = sy * 5.5;

        for (let i = 0; i < ambientCount; i++) {
          const idx = i * 3;
          const bx = basePositions[idx];
          const by = basePositions[idx + 1];
          const bz = basePositions[idx + 2];

          // Natural organic levitation wave
          const phase = phases[i];
          const waveY = Math.sin(elapsed * 1.6 + phase) * 0.25;
          const waveX = Math.cos(elapsed * 1.2 + phase) * 0.18;

          // Reactive interactive repulsion & swirl around cursor
          const dx = bx - cursorWorldX;
          const dy = by - cursorWorldY;
          const distSq = dx * dx + dy * dy;

          let reactX = 0;
          let reactY = 0;
          let reactZ = 0;

          if (distSq < 14) {
            const dist = Math.sqrt(distSq);
            const force = (1.0 - dist / 3.74) * 0.85;
            // Particles gently part and swirl in an arc around the cursor
            reactX = (dx / (dist + 0.001)) * force + Math.sin(elapsed * 4 + i) * 0.15;
            reactY = (dy / (dist + 0.001)) * force + Math.cos(elapsed * 4 + i) * 0.15;
            reactZ = force * 1.2; // Push forward toward viewer
          }

          positions[idx] = bx + waveX + reactX;
          positions[idx + 1] = by + waveY + reactY;
          positions[idx + 2] = bz + reactZ;
        }

        geo.attributes.position.needsUpdate = true;
      }

      // Foreground particles extra parallax drift
      if (foregroundParticlesRef.current) {
        const { geo, positions, basePositions } = foregroundParticlesRef.current;
        for (let i = 0; i < fgCount; i++) {
          const idx = i * 3;
          positions[idx] = basePositions[idx] + Math.sin(elapsed * 2.2 + i) * 0.35 + sx * 1.4;
          positions[idx + 1] = basePositions[idx + 1] + Math.cos(elapsed * 2.0 + i) * 0.3 - sy * 1.1;
        }
        geo.attributes.position.needsUpdate = true;
      }

      // 3. Smooth progress interpolation for 3D Monolith Cards
      progressRef.current.current = THREE.MathUtils.damp(
        progressRef.current.current,
        progressRef.current.target,
        9,
        delta
      );

      const curr = progressRef.current.current;
      const currentClosest = Math.round(curr);
      if (currentClosest !== activeIndex && currentClosest >= 0 && currentClosest < projects.length) {
        setActiveIndex(currentClosest);
      }

      // Position and animate every card along the curved 3D gallery path
      cardsRef.current.forEach((card) => {
        const offset = card.index - curr;
        const absOffset = Math.abs(offset);

        // Curved 3D Spatial Formula
        const targetX = offset * 3.7 - Math.sign(offset) * 0.15;
        const targetZ = -absOffset * 2.1 + (absOffset < 0.3 ? 1.6 : 0);
        const targetRotY = -offset * 0.34;
        const targetScale = Math.max(0.72, 1.22 - absOffset * 0.28);

        card.group.position.x = targetX;
        card.group.position.z = targetZ;
        card.group.position.y = Math.sin(elapsed * 1.5 + card.index) * 0.08;
        card.group.rotation.y = targetRotY;
        card.group.scale.set(targetScale, targetScale, targetScale);

        // Rotate holographic satellite
        card.satellite.rotation.x = elapsed * 0.7 + card.index;
        card.satellite.rotation.y = elapsed * 0.9 + card.index;
        card.satellite.position.y = 2.45 + Math.sin(elapsed * 2.5 + card.index) * 0.07;

        // Active card highlight
        const isActive = card.index === currentClosest;
        card.outlineMaterial.color.set(isActive ? 0xfe1e34 : 0x333333);
        card.outlineMaterial.opacity = isActive ? 0.95 : 0.4;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 740;
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
  }, [projects, setTargetProgress]);

  // Pointer drag controls for smooth 3D scrubbing & cursor position tracking
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current.x = e.clientX;
    dragStartRef.current.startTarget = progressRef.current.target;
    dragStartRef.current.lastX = e.clientX;
    dragStartRef.current.lastTime = performance.now();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current || !cameraRef.current) return;

    // Track cursor coordinates for interactive reactive particle field
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    _mouse.x = nx;
    _mouse.y = ny;
    cursorRef.current = { x: nx, y: ny, active: true };

    // Raycast hover detection for monolith cards
    _raycaster.setFromCamera(_mouse, cameraRef.current);
    const meshes = cardsRef.current.map((c) => c.mesh);
    const intersects = _raycaster.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      const hitIndex = intersects[0].object.userData.index;
      if (hoveredIndex !== hitIndex) {
        setHoveredIndex(hitIndex);
        soundFX.playHover();
      }
    } else if (hoveredIndex !== null) {
      setHoveredIndex(null);
    }

    if (!isDragging) return;

    // Drag move calculation
    const deltaX = dragStartRef.current.x - e.clientX;
    const sensitivity = 0.0035;
    const newTarget = dragStartRef.current.startTarget + deltaX * sensitivity;
    progressRef.current.target = Math.max(-0.2, Math.min(projects.length - 0.8, newTarget));

    dragStartRef.current.lastX = e.clientX;
    dragStartRef.current.lastTime = performance.now();
  };

  const handlePointerLeave = () => {
    cursorRef.current.active = false;
    gsap.to(cursorRef.current, { x: 0, y: 0, duration: 1.0, ease: 'power2.out' });
    if (isDragging) {
      setIsDragging(false);
      const nearest = Math.round(progressRef.current.target);
      setTargetProgress(nearest, true);
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Magnetic snap to nearest integer project
    const nearest = Math.round(progressRef.current.target);
    setTargetProgress(nearest, true);
  };

  // Wheel horizontal scrubbing
  const handleWheel = (e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    const step = delta * 0.0022;
    const newTarget = progressRef.current.target + step;
    setTargetProgress(newTarget, false);
  };

  // Click card handling
  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current || !cameraRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    _mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    _mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    _raycaster.setFromCamera(_mouse, cameraRef.current);
    const meshes = cardsRef.current.map((c) => c.mesh);
    const intersects = _raycaster.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      const hitIndex: number = intersects[0].object.userData.index;
      const hitProject: ProjectItem = intersects[0].object.userData.project;

      soundFX.playSelect();

      // If clicked card is not the active center card, navigate to it
      if (hitIndex !== activeIndex) {
        goToIndex(hitIndex);
      } else {
        // Active card clicked: GSAP camera fly-in zoom into the card!
        if (cameraRef.current) {
          gsap.to(cameraRef.current.position, {
            z: 6.0,
            y: 0.1,
            duration: 0.5,
            ease: 'power3.inOut',
            onComplete: () => {
              onSelectProject(hitProject);
              if (cameraRef.current) {
                cameraRef.current.position.set(0, 0.3, 8.8);
              }
            },
          });
        }
      }
    }
  };

  const currentProject = projects[activeIndex] || projects[0];

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onWheel={handleWheel}
      onClick={handleClick}
      className={`relative w-full h-[660px] sm:h-[740px] md:h-[800px] rounded-[18px] overflow-hidden bg-[#070707] border border-[#262525] shadow-[0_30px_120px_rgba(0,0,0,0.9)] select-none text-left ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {/* Three.js Canvas Mount */}
      <div ref={canvasMountRef} className="absolute inset-0 pointer-events-auto" />

      {/* Top Holographic Navigation Strip */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.22em] text-[#fe1e34] uppercase bg-[#0a0a0a]/90 backdrop-blur-md px-4 py-2 rounded-[8px] border border-[#262525]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[#fcfcfc] font-bold">THREE.JS 3D MONOLITH EXHIBITION</span>
            <span aria-hidden="true" className="text-[#525252]">/</span>
            <span>REACTIVE PARTICLES & GSAP</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={() => goToIndex(0)}
            aria-label="Reset perspective"
            className="flex items-center gap-1.5 px-3 py-2 rounded-[8px] bg-[#0c0c0c]/90 backdrop-blur-md border border-[#262525] text-[10px] font-mono uppercase tracking-wider text-[#b5b2b2] hover:text-[#fcfcfc] hover:border-[#fe1e34] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset View</span>
          </button>
        </div>
      </div>

      {/* Side Quick Step Arrows */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 pointer-events-auto">
        <button
          type="button"
          disabled={activeIndex <= 0}
          onClick={(e) => {
            e.stopPropagation();
            goToIndex(Math.max(0, activeIndex - 1));
          }}
          aria-label="Previous project"
          className="p-3.5 rounded-[12px] bg-[#0c0c0c]/80 backdrop-blur-md border border-[#262525] text-[#fcfcfc] disabled:opacity-20 hover:border-[#fe1e34] hover:bg-[#171617] transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-[#fe1e34]" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 pointer-events-auto">
        <button
          type="button"
          disabled={activeIndex >= projects.length - 1}
          onClick={(e) => {
            e.stopPropagation();
            goToIndex(Math.min(projects.length - 1, activeIndex + 1));
          }}
          aria-label="Next project"
          className="p-3.5 rounded-[12px] bg-[#0c0c0c]/80 backdrop-blur-md border border-[#262525] text-[#fcfcfc] disabled:opacity-20 hover:border-[#fe1e34] hover:bg-[#171617] transition-all"
        >
          <ChevronRight className="w-5 h-5 text-[#fe1e34]" />
        </button>
      </div>

      {/* Main Bottom Ergonomic Inspection Dock */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-4xl pointer-events-auto">
        <div className="p-6 sm:p-7 rounded-[14px] bg-[#0a0a0a]/92 backdrop-blur-2xl border border-[#262525] shadow-[0_20px_50px_rgba(0,0,0,0.95)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Active Project Details */}
          {currentProject && (
            <div className="space-y-2 max-w-lg">
              <div className="flex items-center gap-2.5 text-[10px] font-mono text-[#fe1e34] uppercase tracking-widest">
                <span>0{activeIndex + 1} / 0{projects.length}</span>
                <span aria-hidden="true" className="text-[#525252]">·</span>
                <span className="text-[#fcfcfc] font-semibold">{currentProject.categoryLabel}</span>
                <span aria-hidden="true" className="text-[#525252]">·</span>
                <span className="text-[#b5b2b2]">{currentProject.year}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#fcfcfc] tracking-tight truncate">
                {currentProject.title}
              </h2>

              <p className="text-xs text-[#b5b2b2] line-clamp-1 font-light">
                {currentProject.summary}
              </p>

              {/* Technical Spec Strip */}
              <div className="flex items-center gap-4 text-xs font-mono text-[#b5b2b2] pt-1 border-t border-[#222222]">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#fe1e34]" />
                  <span>{currentProject.technicalSpecs.polycount}</span>
                </span>
                <span aria-hidden="true" className="text-[#525252]">/</span>
                <span className="flex items-center gap-1.5 truncate">
                  <Layers className="w-3.5 h-3.5 text-[#525252]" />
                  <span>{currentProject.technicalSpecs.topologyType}</span>
                </span>
              </div>
            </div>
          )}

          {/* Stepper Buttons & Full Screen Inspect Action */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={activeIndex <= 0}
                onClick={(e) => {
                  e.stopPropagation();
                  goToIndex(Math.max(0, activeIndex - 1));
                }}
                aria-label="Previous Project"
                className="p-3 rounded-[8px] bg-[#171617] border border-[#262525] text-[#fcfcfc] disabled:opacity-30 hover:border-[#fe1e34] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                disabled={activeIndex >= projects.length - 1}
                onClick={(e) => {
                  e.stopPropagation();
                  goToIndex(Math.min(projects.length - 1, activeIndex + 1));
                }}
                aria-label="Next Project"
                className="p-3 rounded-[8px] bg-[#171617] border border-[#262525] text-[#fcfcfc] disabled:opacity-30 hover:border-[#fe1e34] transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {currentProject && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playSelect();
                  onSelectProject(currentProject);
                }}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#fe1e34] hover:bg-[#d6172a] text-[#fcfcfc] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(254,30,52,0.45)] whitespace-nowrap"
              >
                <span>Inspect Exhibition Case</span>
                <Maximize2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Floating Interactive Drag Helper Note */}
      <div className="absolute top-20 right-6 z-10 hidden md:flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-[#525252] pointer-events-none">
        <span>Cursor reacts with particles · Drag to Orbit</span>
        <div className="w-6 h-px bg-[#fe1e34]" />
      </div>

      {/* Loading state indicator */}
      {isLoading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#080808]/90 backdrop-blur-md">
          <div className="text-center space-y-3 font-mono text-xs text-[#fe1e34] tracking-widest uppercase">
            <div className="w-8 h-8 border-2 border-[#fe1e34] border-t-transparent rounded-full animate-spin mx-auto" />
            <p>Constructing 3D Spatial Environment...</p>
          </div>
        </div>
      )}
    </div>
  );
};
