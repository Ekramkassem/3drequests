import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Box, Activity } from 'lucide-react';

interface SculptureCanvasProps {
  interactive?: boolean;
  className?: string;
  scrollProgress?: number;
  onReady?: () => void;
  onMaterialChange?: (material: string) => void;
}

export type MaterialType = 'chrome' | 'obsidian' | 'bronze' | 'arterial';

export const SculptureCanvas: React.FC<SculptureCanvasProps> = ({
  interactive = true,
  className = '',
  scrollProgress = 0,
  onReady,
  onMaterialChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [materialType, setMaterialType] = useState<MaterialType>('arterial');
  const [isCanvasReady, setIsCanvasReady] = useState<boolean>(false);
  const [velocityMagnitude, setVelocityMagnitude] = useState<number>(0);

  const wireframeRef = useRef(wireframe);
  const isRotatingRef = useRef(isRotating);
  const materialTypeRef = useRef(materialType);
  const scrollProgressRef = useRef(scrollProgress);
  const onReadyRef = useRef(onReady);
  const hasRenderedRef = useRef(false);

  wireframeRef.current = wireframe;
  isRotatingRef.current = isRotating;
  materialTypeRef.current = materialType;
  scrollProgressRef.current = scrollProgress;
  onReadyRef.current = onReady;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.6);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. Gyroscope Root Assembly Group
    const gyroscopeRoot = new THREE.Group();
    scene.add(gyroscopeRoot);

    // Gimbal Rings Hierarchy
    const outerGimbal = new THREE.Group();
    const midGimbal = new THREE.Group();
    const innerGimbal = new THREE.Group();
    const coreCluster = new THREE.Group();

    gyroscopeRoot.add(outerGimbal);
    outerGimbal.add(midGimbal);
    midGimbal.add(innerGimbal);
    innerGimbal.add(coreCluster);

    // 3. Physically-Based Materials
    const materials: Record<MaterialType, THREE.MeshPhysicalMaterial> = {
      arterial: new THREE.MeshPhysicalMaterial({
        color: 0xfe1e34,
        metalness: 0.52,
        roughness: 0.16,
        clearcoat: 0.95,
        clearcoatRoughness: 0.08,
        reflectivity: 0.9,
        wireframe: false,
      }),
      chrome: new THREE.MeshPhysicalMaterial({
        color: 0xf5f5f7,
        metalness: 0.98,
        roughness: 0.06,
        clearcoat: 0.9,
        wireframe: false,
      }),
      obsidian: new THREE.MeshPhysicalMaterial({
        color: 0x0c0c10,
        metalness: 0.88,
        roughness: 0.12,
        clearcoat: 0.95,
        clearcoatRoughness: 0.05,
        wireframe: false,
      }),
      bronze: new THREE.MeshPhysicalMaterial({
        color: 0xd4a373,
        metalness: 0.92,
        roughness: 0.22,
        clearcoat: 0.6,
        wireframe: false,
      }),
    };

    // Shared Ring Material (hairline champagne titanium finish)
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xe2d9cf,
      metalness: 0.94,
      roughness: 0.18,
    });

    const accentRedMat = new THREE.MeshStandardMaterial({
      color: 0xfe1e34,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x550005,
    });

    // Ring 1: Outer Gimbal Ring (Radius 2.8, fine tubular profile)
    const outerRingGeo = new THREE.TorusGeometry(2.7, 0.035, 20, 140);
    const outerRingMesh = new THREE.Mesh(outerRingGeo, ringMat);
    outerGimbal.add(outerRingMesh);

    // Ring 2: Mid Gimbal Ring (Radius 2.2, rotated orthogonal)
    const midRingGeo = new THREE.TorusGeometry(2.15, 0.032, 20, 120);
    const midRingMesh = new THREE.Mesh(midRingGeo, ringMat);
    midRingMesh.rotation.y = Math.PI / 2;
    midGimbal.add(midRingMesh);

    // Ring 3: Inner Gimbal Ring (Radius 1.65)
    const innerRingGeo = new THREE.TorusGeometry(1.65, 0.028, 16, 100);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, ringMat);
    innerRingMesh.rotation.x = Math.PI / 2;
    innerGimbal.add(innerRingMesh);

    // Gyroscope Core Centerpiece: Intricate Stellate Torus Knot
    const coreGeo = new THREE.TorusKnotGeometry(0.95, 0.28, 160, 32, 3, 5);
    const coreMesh = new THREE.Mesh(coreGeo, materials[materialTypeRef.current]);
    coreCluster.add(coreMesh);

    // Central Floating Faceted Monolith / Diamond Seed
    const seedGeo = new THREE.OctahedronGeometry(0.38, 0);
    const seedMesh = new THREE.Mesh(seedGeo, accentRedMat);
    coreCluster.add(seedMesh);

    // Orbital Pivot Bearing Nodes
    const bearingGeo = new THREE.SphereGeometry(0.075, 16, 16);
    const bearing1 = new THREE.Mesh(bearingGeo, accentRedMat);
    bearing1.position.set(2.7, 0, 0);
    outerGimbal.add(bearing1);

    const bearing2 = new THREE.Mesh(bearingGeo, accentRedMat);
    bearing2.position.set(-2.7, 0, 0);
    outerGimbal.add(bearing2);

    // 4. Kinetic Ambient Particle Cloud (1,200 particle points drifting in depth)
    const particleCount = 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 5.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.002;
      particleVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xd4d2d2,
      size: 0.028,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 5. Studio Lighting Rig (Warm Key + Cool Caustic + Arterial Rim)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const warmKeyLight = new THREE.DirectionalLight(0xfff5eb, 3.4);
    warmKeyLight.position.set(6, 6, 5);
    scene.add(warmKeyLight);

    const coolCausticLight = new THREE.DirectionalLight(0x94a3b8, 1.8);
    coolCausticLight.position.set(-6, -4, -3);
    scene.add(coolCausticLight);

    const arterialRimLight = new THREE.PointLight(0xfe1e34, 3.0, 14);
    arterialRimLight.position.set(0, 3.2, 2.5);
    scene.add(arterialRimLight);

    // 6. Interactive Drag & Mouse Velocity Tracking
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
      velocityX = 0;
      velocityY = 0;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;

        velocityX = deltaX * 0.008;
        velocityY = deltaY * 0.008;

        targetRotationY += velocityX;
        targetRotationX += velocityY;

        prevMouseX = clientX;
        prevMouseY = clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const normX = (clientX - rect.left) / rect.width - 0.5;
        const normY = (clientY - rect.top) / rect.height - 0.5;
        camera.position.x += (normX * 0.8 - camera.position.x) * 0.05;
        camera.position.y += (-normY * 0.8 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 7. Responsive Resizing
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // 8. Animation & Physics Momentum Loop
    let animationFrameId: number;
    let lastTime = performance.now();
    const startTime = performance.now();

    const animate = (currentTime: number = performance.now()) => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const elapsedTime = (currentTime - startTime) / 1000;

      // Update material & wireframe
      const currentMat = materials[materialTypeRef.current];
      if (coreMesh.material !== currentMat) {
        coreMesh.material = currentMat;
      }
      currentMat.wireframe = wireframeRef.current;

      // Inertia decay when not actively dragging
      if (!isDragging) {
        velocityX *= 0.94;
        velocityY *= 0.94;
        targetRotationY += velocityX;
        targetRotationX += velocityY;
      }

      // Auto rotation when enabled
      if (isRotatingRef.current) {
        outerGimbal.rotation.z += delta * 0.22;
        midGimbal.rotation.x += delta * 0.34;
        innerGimbal.rotation.y += delta * 0.48;
        coreCluster.rotation.y += delta * 0.65;
        seedMesh.rotation.x += delta * 0.9;
        seedMesh.rotation.y += delta * 0.9;
      }

      // Dynamic tilt synchronized with scroll depth
      const currentScroll = scrollProgressRef.current || 0;
      const scrollTilt = currentScroll * 0.85;
      const scrollZoom = currentScroll * 0.75;
      const scrollElevation = currentScroll * -0.4;

      // Smooth dampening to root assembly
      gyroscopeRoot.rotation.y += (targetRotationY - gyroscopeRoot.rotation.y) * 0.08;
      gyroscopeRoot.rotation.x += (targetRotationX + scrollTilt - gyroscopeRoot.rotation.x) * 0.08;

      camera.position.z += (7.6 + scrollZoom - camera.position.z) * 0.08;
      camera.position.y += (scrollElevation - camera.position.y) * 0.08;

      // Drift particle cloud
      particleSystem.rotation.y += delta * 0.04;
      particleSystem.rotation.x += delta * 0.02;

      // Telemetry magnitude calculation for HUD
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      setVelocityMagnitude(Math.round(speed * 1000));

      renderer.render(scene, camera);

      if (!hasRenderedRef.current) {
        hasRenderedRef.current = true;
        setIsCanvasReady(true);
        if (onReadyRef.current) {
          onReadyRef.current();
        }
      }
    };

    animate(performance.now());

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      dom.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      dom.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      outerRingGeo.dispose();
      midRingGeo.dispose();
      innerRingGeo.dispose();
      coreGeo.dispose();
      seedGeo.dispose();
      bearingGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ringMat.dispose();
      accentRedMat.dispose();
      Object.values(materials).forEach((m) => m.dispose());
      renderer.dispose();

      if (container.contains(dom)) {
        container.removeChild(dom);
      }
    };
  }, []);

  const handleSelectMaterial = (mat: MaterialType) => {
    setMaterialType(mat);
    if (onMaterialChange) onMaterialChange(mat);
  };

  return (
    <div className={`relative w-full h-full select-none overflow-hidden ${className}`}>
      {/* Three.js Canvas Container with smooth readiness fade */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ease-out ${
          isCanvasReady ? 'opacity-100' : 'opacity-0'
        }`}
        title="Drag to spin the multi-axis gyroscope"
      />

      {/* Brand-Aligned 3D Canvas Asset Preloader / Skeleton */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-[#080808] transition-opacity duration-700 pointer-events-none z-10 ${
          isCanvasReady ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative w-16 h-16 flex items-center justify-center mb-3">
          <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-20" />
          <div className="w-12 h-12 rounded-full border border-dashed border-[#fe1e34]/50 animate-spin" style={{ animationDuration: '8s' }} />
          <Box className="w-5 h-5 text-[#fe1e34] animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#d4d2d2] uppercase">
            CALIBRATING GYROSCOPE RIG
          </span>
        </div>
      </div>

      {/* Top Floating HUD: Real-time Telemetry & Polycount */}
      <div className="absolute top-4 right-4 pointer-events-none z-20 hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-[6px] bg-[#171617]/85 backdrop-blur-md border border-[#262525] shadow-svz-inset text-[10px] font-mono text-[#b5b2b2]">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-[#fe1e34]" />
          <span>RIG: 3-AXIS GIMBAL</span>
        </div>
        <span aria-hidden="true" className="text-[#525252]">·</span>
        <span className="text-[#fcfcfc]">148.6K QUADS</span>
        <span aria-hidden="true" className="text-[#525252]">·</span>
        <span className="text-[#fe1e34]">{velocityMagnitude > 0 ? `VEL: ${velocityMagnitude}` : '60 FPS'}</span>
      </div>

      {/* Art-Directed Floating Viewport Controls (SVZ Design System) */}
      {interactive && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto z-20">
          {/* Material Shader Selection */}
          <div className="flex items-center gap-1 p-1 bg-[#171617]/90 backdrop-blur-md rounded-[8px] border border-[#262525] shadow-svz-inset text-[10px] font-mono">
            {(['arterial', 'chrome', 'obsidian', 'bronze'] as MaterialType[]).map((mat) => (
              <button
                key={mat}
                type="button"
                onClick={() => handleSelectMaterial(mat)}
                className={`px-2.5 py-1 rounded-[4px] uppercase tracking-wider transition-all duration-200 ${
                  materialType === mat
                    ? mat === 'arterial'
                      ? 'bg-[#fe1e34] text-white font-bold shadow-sm'
                      : 'bg-[#fcfcfc] text-[#080808] font-bold shadow-sm'
                    : 'text-[#b5b2b2] hover:text-[#fcfcfc]'
                }`}
              >
                {mat}
              </button>
            ))}
          </div>

          {/* Wireframe & Rotation Control */}
          <div className="flex items-center gap-1 p-1 bg-[#171617]/90 backdrop-blur-md rounded-[8px] border border-[#262525] shadow-svz-inset text-[10px]">
            <button
              type="button"
              onClick={() => setWireframe(!wireframe)}
              aria-label={wireframe ? 'Switch to Solid Surface' : 'Switch to Mesh Wireframe'}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-[4px] font-mono uppercase tracking-wider transition-colors ${
                wireframe
                  ? 'bg-[#fe1e34] text-white font-bold'
                  : 'text-[#b5b2b2] hover:text-[#fcfcfc]'
              }`}
            >
              <Box className="w-3 h-3" />
              <span>{wireframe ? 'Wire' : 'Solid'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsRotating(!isRotating)}
              aria-label={isRotating ? 'Pause rotation' : 'Resume rotation'}
              className={`p-1.5 rounded-[4px] transition-colors ${
                isRotating ? 'text-[#fe1e34]' : 'text-[#525252] hover:text-[#d4d2d2]'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
