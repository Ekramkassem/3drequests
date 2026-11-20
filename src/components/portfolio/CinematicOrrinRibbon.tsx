import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ProjectItem } from '../../types.ts';
import { soundFX } from '../../utils/soundFX.ts';
import { magneticCursor } from '../../utils/magneticCursorState.ts';
import {
  ArrowUpRight,
  RotateCcw,
  FastForward,
  Eye,
  Box,
} from 'lucide-react';

interface CinematicOrrinRibbonProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onRequestClick: () => void;
  onExploreWorkClick: () => void;
}

// Module-scope reusable helpers to prevent GC allocations
const _raycaster = new THREE.Raycaster();
const _mouse = new THREE.Vector2();

export const CinematicOrrinRibbon: React.FC<CinematicOrrinRibbonProps> = ({
  projects,
  onSelectProject,
  onRequestClick,
  onExploreWorkClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);

  // Intro UI phases tracked via state for DOM overlays
  const [phase, setPhase] = useState<'intro' | 'resting'>('intro');
  const [showWordmark, setShowWordmark] = useState<boolean>(true);
  const [showMakeItReal, setShowMakeItReal] = useState<boolean>(false);
  const [showHeadline, setShowHeadline] = useState<boolean>(false);

  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Scroll tracking for 3D card dispersion & parallax
  const scrollProgressRef = useRef<number>(0);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null);

  interface RibbonCard {
    group: THREE.Group;
    mesh: THREE.Mesh;
    outline: THREE.LineSegments;
    outlineMat: THREE.LineBasicMaterial;
    isHero: boolean;
    heroIndex: number;
    heroProject?: ProjectItem;
    baseRestPos: THREE.Vector3;
    baseRestRot: THREE.Euler;
    restScale: number;
    driftPhase: number;
    driftSpeed: number;
  }
  const ribbonCardsRef = useRef<RibbonCard[]>([]);
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const smoothCursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isRestingRef = useRef<boolean>(false);

  // 6 COMPACT SLOTS FLANKING AROUND THE HEADLINE (Zero overlap with central text!)
  // Left side: Slots 0, 2, 4 | Right side: Slots 1, 3, 5
  // Center [-2.6 to +2.6] is completely clear for the headline and CTAs
  const getRestingSlot = useCallback((index: number, containerWidth: number) => {
    const isNarrow = containerWidth < 1024;
    const isMobile = containerWidth < 768;

    if (isMobile) {
      // On mobile: arranged in a compact lower arc below the text
      const angle = ((index - 2.5) / 5) * 1.8;
      return {
        pos: new THREE.Vector3(Math.sin(angle) * 3.2, -2.2 + Math.cos(angle) * 0.4, 1.2),
        rot: new THREE.Euler(0.05, -angle * 0.5, 0),
        scale: 0.95,
      };
    }

    const spreadX = isNarrow ? 3.4 : 3.85;

    const slots = [
      // Left Flank - Top (Aura-1 Synthesizer)
      { pos: new THREE.Vector3(-spreadX, 1.35, 0.5), rot: new THREE.Euler(0.06, 0.18, -0.03), scale: 1.12 },
      // Right Flank - Top (Etherea Android)
      { pos: new THREE.Vector3(spreadX, 1.35, 0.5), rot: new THREE.Euler(0.06, -0.18, 0.03), scale: 1.12 },
      // Left Flank - Middle (Kinetic Liquid Chrome)
      { pos: new THREE.Vector3(-(spreadX + 0.25), 0.0, 0.7), rot: new THREE.Euler(0, 0.24, -0.02), scale: 1.15 },
      // Right Flank - Middle (Solaria Pavilion)
      { pos: new THREE.Vector3(spreadX + 0.25, 0.0, 0.7), rot: new THREE.Euler(0, -0.24, 0.02), scale: 1.15 },
      // Left Flank - Bottom (Biomorphic Cellular Lattice)
      { pos: new THREE.Vector3(-spreadX, -1.35, 0.5), rot: new THREE.Euler(-0.06, 0.18, 0.03), scale: 1.12 },
      // Right Flank - Bottom (Chrono-Core Mechanical Relic)
      { pos: new THREE.Vector3(spreadX, -1.35, 0.5), rot: new THREE.Euler(-0.06, -0.18, -0.03), scale: 1.12 },
    ];
    return slots[index % slots.length];
  }, []);

  // Skip introduction directly to resting state
  const handleSkipIntro = useCallback(() => {
    if (masterTimelineRef.current) {
      masterTimelineRef.current.progress(1);
    }
    isRestingRef.current = true;
    setPhase('resting');
    setShowWordmark(false);
    setShowMakeItReal(false);
    setShowHeadline(true);
    soundFX.playPowerup(true);
  }, []);

  // Replay cinematic sequence
  const handleReplayIntro = useCallback(() => {
    isRestingRef.current = false;
    setPhase('intro');
    setShowWordmark(true);
    setShowMakeItReal(false);
    setShowHeadline(false);
    soundFX.playNextStage();

    if (masterTimelineRef.current) {
      masterTimelineRef.current.restart();
    }
  }, []);

  // Initialize Three.js scene ONCE
  useEffect(() => {
    const container = containerRef.current;
    const mount = canvasMountRef.current;
    if (!container || !mount || projects.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Depth Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, 0.04);
    sceneRef.current = scene;

    // 2. Camera Setup
    const width = container.clientWidth;
    const height = container.clientHeight || 820;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.4);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. WebGL Renderer with Alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);

    // 4. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x141414, 0.85);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(6, 8, 9);
    scene.add(keyLight);

    const rimLightLeft = new THREE.DirectionalLight(0xfe1e34, 2.8);
    rimLightLeft.position.set(-7, 3, -4);
    scene.add(rimLightLeft);

    const rimLightRight = new THREE.DirectionalLight(0xff4d5d, 1.8);
    rimLightRight.position.set(7, -2, -2);
    scene.add(rimLightRight);

    // Subtle Ground Perspective Wireframe
    const grid = new THREE.GridHelper(36, 44, 0x1f1f1f, 0x0f0f0f);
    grid.position.y = -3.7;
    scene.add(grid);

    // 5. Build the 44-card 3D Project Ribbon
    const TOTAL_CARDS = 44;
    const textureLoader = new THREE.TextureLoader();

    const projectTextures = projects.map((p) => {
      const tex = textureLoader.load(p.heroImage);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tex;
    });

    const cardWidth = 1.75;
    const cardHeight = 2.35;
    const cardDepth = 0.04;
    const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
    const outlineGeometry = new THREE.EdgesGeometry(cardGeometry);

    ribbonCardsRef.current = [];

    // Calculate Ribbon Coordinates & Build Meshes
    for (let i = 0; i < TOTAL_CARDS; i++) {
      const cardGroup = new THREE.Group();
      const projIndex = i % projects.length;
      const isHero = i < 6;
      const project = projects[projIndex];
      const texture = projectTextures[projIndex];

      const frontMat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.2,
        metalness: 0.12,
      });

      const backMat = new THREE.MeshStandardMaterial({
        color: 0x0e0e0e,
        roughness: 0.45,
        metalness: 0.8,
      });

      const borderMat = new THREE.MeshStandardMaterial({
        color: 0x1c1c1c,
        roughness: 0.5,
        metalness: 0.5,
      });

      const materials = [borderMat, borderMat, borderMat, borderMat, frontMat, backMat];
      const mesh = new THREE.Mesh(cardGeometry, materials);
      mesh.userData = { project, index: i, isHero, heroIndex: i };
      cardGroup.add(mesh);

      // Edge outline
      const outlineMat = new THREE.LineBasicMaterial({
        color: isHero ? 0xfe1e34 : 0x2e2e2e,
        transparent: true,
        opacity: isHero ? 0.8 : 0.3,
      });
      const outline = new THREE.LineSegments(outlineGeometry, outlineMat);
      cardGroup.add(outline);

      // Parametric S-curve placement along ribbon (curves gracefully around the perimeter)
      const t = (i / (TOTAL_CARDS - 1)) * 2 - 1; // -1 to +1
      const ribbonX = Math.sin(t * Math.PI) * 3.8;
      const ribbonY = -t * 3.4;
      const ribbonZ = Math.cos(t * Math.PI) * 2.2 - 0.8;

      const rotY = Math.cos(t * Math.PI) * 1.25;
      const rotZ = Math.sin(t * Math.PI) * 0.22;

      const restSlot = getRestingSlot(i, width);

      if (prefersReducedMotion) {
        if (isHero) {
          cardGroup.position.copy(restSlot.pos);
          cardGroup.rotation.copy(restSlot.rot);
          cardGroup.scale.set(restSlot.scale, restSlot.scale, restSlot.scale);
        } else {
          cardGroup.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, -4.5);
          cardGroup.scale.set(0.3, 0.3, 0.3);
        }
      } else {
        // Start behind camera in deep space
        cardGroup.position.set(ribbonX, ribbonY + (Math.random() - 0.5) * 4, ribbonZ - 14);
        cardGroup.rotation.set(0.1, rotY, rotZ);
        cardGroup.scale.set(0.08, 0.08, 0.08);
      }

      scene.add(cardGroup);
      ribbonCardsRef.current.push({
        group: cardGroup,
        mesh,
        outline,
        outlineMat,
        isHero,
        heroIndex: i,
        heroProject: project,
        baseRestPos: isHero ? restSlot.pos.clone() : cardGroup.position.clone(),
        baseRestRot: isHero ? restSlot.rot.clone() : cardGroup.rotation.clone(),
        restScale: isHero ? restSlot.scale : 0.45,
        driftPhase: (i / 6) * Math.PI * 2,
        driftSpeed: 1.0 + Math.random() * 0.4,
      });
    }

    // 6. Master GSAP Choreography Timeline (Strict 6.0-Second Deterministic Sequence)
    if (!prefersReducedMotion) {
      const tl = gsap.timeline({
        onComplete: () => {
          isRestingRef.current = true;
          setPhase('resting');
          setShowHeadline(true);
        },
      });
      masterTimelineRef.current = tl;

      // 0.0s - 1.0s: Wordmark in center
      tl.call(() => {
        setShowWordmark(true);
        setShowMakeItReal(false);
        setShowHeadline(false);
      }, undefined, 0);

      // 1.0s: Reveal "MAKE IT REAL" typography
      tl.call(() => {
        setShowWordmark(false);
        setShowMakeItReal(true);
        soundFX.playNextStage();
      }, undefined, 1.0);

      // 1.2s - 3.8s: 44 Cards assemble into the controlled in-bounds S-curve ribbon
      ribbonCardsRef.current.forEach((card, idx) => {
        const t = (idx / (TOTAL_CARDS - 1)) * 2 - 1;
        const targetX = Math.sin(t * Math.PI) * 3.8;
        const targetY = -t * 3.4;
        const targetZ = Math.cos(t * Math.PI) * 2.2 - 0.8;
        const rotY = Math.cos(t * Math.PI) * 1.25;
        const rotZ = Math.sin(t * Math.PI) * 0.22;

        tl.to(
          card.group.position,
          {
            x: targetX,
            y: targetY,
            z: targetZ,
            duration: 1.8,
            ease: 'power3.out',
          },
          1.2 + idx * 0.028
        );

        tl.to(
          card.group.rotation,
          {
            x: 0.1,
            y: rotY,
            z: rotZ,
            duration: 1.8,
            ease: 'power3.out',
          },
          1.2 + idx * 0.028
        );

        tl.to(
          card.group.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 1.6,
            ease: 'back.out(1.2)',
          },
          1.2 + idx * 0.028
        );
      });

      // 3.8s - 4.4s: Hold ribbon formation
      tl.to({}, { duration: 0.6 });

      // 4.4s - 6.0s: THE CINEMATIC BURST — Flanking cleanly AROUND the main headline
      tl.call(() => {
        setShowMakeItReal(false);
        setShowHeadline(true);
        soundFX.playPowerup(true);
      }, undefined, 4.4);

      ribbonCardsRef.current.forEach((card, idx) => {
        if (card.isHero) {
          // Hero cards settle cleanly into their left and right flanking slots around the headline
          tl.to(
            card.group.position,
            {
              x: card.baseRestPos.x,
              y: card.baseRestPos.y,
              z: card.baseRestPos.z,
              duration: 1.6,
              ease: 'power3.out',
            },
            4.4 + idx * 0.05
          );

          tl.to(
            card.group.rotation,
            {
              x: card.baseRestRot.x,
              y: card.baseRestRot.y,
              z: card.baseRestRot.z,
              duration: 1.6,
              ease: 'power3.out',
            },
            4.4 + idx * 0.05
          );

          tl.to(
            card.group.scale,
            {
              x: card.restScale,
              y: card.restScale,
              z: card.restScale,
              duration: 1.5,
              ease: 'power3.out',
            },
            4.4 + idx * 0.05
          );
        } else {
          // Non-hero cards gently arrange into an ambient background arc far behind
          const angle = (idx / TOTAL_CARDS) * Math.PI * 2;
          const bgX = Math.cos(angle) * 5.6;
          const bgY = Math.sin(angle) * 3.4;
          const bgZ = -4.8;

          tl.to(
            card.group.position,
            {
              x: bgX,
              y: bgY,
              z: bgZ,
              duration: 1.6,
              ease: 'power2.inOut',
            },
            4.4 + idx * 0.015
          );

          tl.to(
            card.group.scale,
            {
              x: 0.3,
              y: 0.3,
              z: 0.3,
              duration: 1.4,
              ease: 'power2.out',
            },
            4.4 + idx * 0.015
          );
        }
      });
    } else {
      isRestingRef.current = true;
      setPhase('resting');
      setShowWordmark(false);
      setShowMakeItReal(false);
      setShowHeadline(true);
    }

    // 7. Continuous Render Loop with Cursor Parallax & Controlled Levitation
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth cursor parallax with clamped bounds
      smoothCursorRef.current.x = THREE.MathUtils.damp(
        smoothCursorRef.current.x,
        cursorRef.current.x,
        4.5,
        delta
      );
      smoothCursorRef.current.y = THREE.MathUtils.damp(
        smoothCursorRef.current.y,
        cursorRef.current.y,
        4.5,
        delta
      );

      const cx = smoothCursorRef.current.x;
      const cy = smoothCursorRef.current.y;

      // Dynamic camera perspective reacting to cursor and scroll
      const sp = scrollProgressRef.current;
      camera.position.x = THREE.MathUtils.damp(camera.position.x, cx * 0.28, 4.0, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, cy * 0.18 - sp * 1.2, 4.0, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, 8.5 + sp * 2.0, 4.0, delta);
      camera.lookAt(0, -sp * 0.8, 0);

      // In resting phase, hero cards float gently and disperse cinematically on scroll
      if (isRestingRef.current) {
        ribbonCardsRef.current.forEach((card) => {
          if (card.isHero) {
            const waveY = Math.sin(elapsed * card.driftSpeed + card.driftPhase) * 0.05;
            const waveRotZ = Math.cos(elapsed * 0.8 + card.driftPhase) * 0.012;

            // Parallax dispersion: cards fan outward into deep 3D space as user scrolls down
            const isLeft = card.baseRestPos.x < 0;
            const scrollDispersionX = isLeft ? -sp * 2.2 : sp * 2.2;
            const scrollDispersionY = (card.heroIndex % 2 === 0 ? 1.5 : -1.5) * sp;
            const scrollDispersionZ = -sp * 3.5;
            const scrollTiltZ = (isLeft ? -1 : 1) * sp * 0.35;

            card.group.position.x = THREE.MathUtils.damp(
              card.group.position.x,
              card.baseRestPos.x + scrollDispersionX,
              4.0,
              delta
            );
            card.group.position.y = THREE.MathUtils.damp(
              card.group.position.y,
              card.baseRestPos.y + waveY + scrollDispersionY,
              4.0,
              delta
            );
            card.group.position.z = THREE.MathUtils.damp(
              card.group.position.z,
              card.baseRestPos.z + scrollDispersionZ,
              4.0,
              delta
            );

            // Controlled subtle cursor tilt + dynamic scroll rotation
            card.group.rotation.x = card.baseRestRot.x + cy * 0.06 - sp * 0.3;
            card.group.rotation.y = card.baseRestRot.y + cx * 0.08 + (isLeft ? sp * 0.2 : -sp * 0.2);
            card.group.rotation.z = card.baseRestRot.z + waveRotZ + scrollTiltZ;
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1.6);
      scrollProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 820;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);

      // Recalculate hero resting positions on resize to keep cards in bounds and around text
      ribbonCardsRef.current.forEach((card) => {
        if (card.isHero) {
          const newSlot = getRestingSlot(card.heroIndex, w);
          card.baseRestPos.copy(newSlot.pos);
          card.baseRestRot.copy(newSlot.rot);
          card.restScale = newSlot.scale;
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      if (masterTimelineRef.current) {
        masterTimelineRef.current.kill();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [projects, getRestingSlot]);

  // Pointer interactions for 3D card hover detection & parallax
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current || !cameraRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    cursorRef.current = { x: nx, y: ny };
    setTooltipPos({ x: e.clientX, y: e.clientY });

    // Raycast hover check against hero cards
    _mouse.x = nx;
    _mouse.y = ny;
    _raycaster.setFromCamera(_mouse, cameraRef.current);

    const heroMeshes = ribbonCardsRef.current
      .filter((c) => c.isHero)
      .map((c) => c.mesh);

    const intersects = _raycaster.intersectObjects(heroMeshes, false);

    if (intersects.length > 0) {
      const hitProject: ProjectItem = intersects[0].object.userData.project;
      const hitHeroIndex: number = intersects[0].object.userData.heroIndex;

      if (!hoveredProject || hoveredProject.id !== hitProject.id) {
        setHoveredProject(hitProject);
        soundFX.playHover();

        // Lift card in place in its flank without moving toward center
        ribbonCardsRef.current.forEach((c) => {
          if (c.heroIndex === hitHeroIndex) {
            gsap.to(c.group.position, { z: c.baseRestPos.z + 0.6, duration: 0.3, ease: 'power2.out' });
            gsap.to(c.group.scale, {
              x: c.restScale * 1.14,
              y: c.restScale * 1.14,
              z: c.restScale * 1.14,
              duration: 0.3,
              ease: 'power2.out',
            });
            c.outlineMat.color.set(0xfe1e34);
            c.outlineMat.opacity = 1.0;

            const worldPos = new THREE.Vector3();
            c.group.getWorldPosition(worldPos);
            worldPos.project(cameraRef.current!);
            const screenX = (worldPos.x * 0.5 + 0.5) * rect.width + rect.left;
            const screenY = (-worldPos.y * 0.5 + 0.5) * rect.height + rect.top;
            magneticCursor.hoverProject({
              title: hitProject.title,
              category: hitProject.categoryLabel,
              actionLabel: 'INSPECT 3D',
              targetPoint: { x: screenX, y: screenY },
            });
          }
        });
      }
    } else if (hoveredProject) {
      setHoveredProject(null);
      magneticCursor.reset();
      // Reset cards
      ribbonCardsRef.current.forEach((c) => {
        if (c.isHero) {
          gsap.to(c.group.position, { z: c.baseRestPos.z, duration: 0.4, ease: 'power2.out' });
          gsap.to(c.group.scale, {
            x: c.restScale,
            y: c.restScale,
            z: c.restScale,
            duration: 0.4,
            ease: 'power2.out',
          });
          c.outlineMat.color.set(0xfe1e34);
          c.outlineMat.opacity = 0.8;
        }
      });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current || !cameraRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    _mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    _mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    _raycaster.setFromCamera(_mouse, cameraRef.current);
    const heroMeshes = ribbonCardsRef.current
      .filter((c) => c.isHero)
      .map((c) => c.mesh);

    const intersects = _raycaster.intersectObjects(heroMeshes, false);

    if (intersects.length > 0) {
      const hitProject: ProjectItem = intersects[0].object.userData.project;
      soundFX.playSelect();
      onSelectProject(hitProject);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
      className="relative w-full h-[760px] sm:h-[840px] md:h-[900px] overflow-hidden text-[#fcfcfc] select-none text-left"
    >
      {/* 3D WebGL Canvas Layer */}
      <div ref={canvasMountRef} className="absolute inset-0 pointer-events-auto cursor-crosshair z-0" />

      {/* Smooth Bottom Gradient Fade into Website Layout */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent pointer-events-none z-10" />

      {/* 0.0s - 1.0s: Centered Blurred Wordmark Reveal */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-all duration-700 ${
          showWordmark ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="text-center space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#fe1e34] block font-semibold">
            3D REQUESTS STUDIO
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-[#fcfcfc] tracking-[-0.04em] uppercase">
            3D Requests<span className="text-[#fe1e34]">.</span>
          </h2>
        </div>
      </div>

      {/* 1.0s - 4.4s: Opening "MAKE IT REAL" Typography Flanking the Ribbon */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-between px-6 sm:px-10 md:px-16 pointer-events-none transition-all duration-700 ${
          showMakeItReal ? 'opacity-85 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="space-y-1">
          <span className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#fcfcfc] tracking-[-0.05em] block leading-none">
            MAKE
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#b5b2b2] block">
            01 / IDEAS
          </span>
        </div>

        <div className="space-y-1 text-right">
          <span className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#fe1e34] tracking-[-0.05em] block leading-none">
            IT REAL.
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#b5b2b2] block">
            02 / FORM
          </span>
        </div>
      </div>

      {/* 4.4s+: Resting State Editorial Headline & Primary CTAs (Centered with Guaranteed Clear Perimeter) */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center pointer-events-none transition-all duration-1000 ${
          showHeadline ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6 pointer-events-none'
        }`}
      >
        {/* Maximum width 540px guarantees 3D cards flanking at ±3.8 never collide with or get hidden behind this text */}
        <div className="max-w-[540px] mx-auto space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#121112]/90 border border-[#262525] text-[10px] font-mono tracking-[0.25em] text-[#fe1e34] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
            <span>INDEPENDENT 3D PRODUCTION</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#fcfcfc] tracking-[-0.04em] leading-[1.02] uppercase">
            Ideas take shape<span className="text-[#fe1e34]">.</span> <br />
            <span className="font-serif italic font-normal tracking-tight text-[#d4d2d2] normal-case lowercase text-4xl sm:text-6xl md:text-7xl">
              We make them
            </span>{' '}
            real<span className="text-[#fe1e34]">.</span>
          </h1>

          {/* Supporting line */}
          <p className="text-xs sm:text-sm text-[#b5b2b2] font-light max-w-md mx-auto leading-relaxed">
            From product concepts and digital sculptures to production-ready models and immersive visuals.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 pointer-events-auto">
            <button
              type="button"
              onClick={onExploreWorkClick}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] bg-[#fe1e34] hover:bg-[#d6172a] text-[#fcfcfc] font-mono text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-[0_0_25px_rgba(254,30,52,0.45)]"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Hover Project Tooltip */}
      {hoveredProject && (
        <div
          className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-12 transition-all duration-150"
          style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
        >
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-[6px] bg-[#0c0c0c]/95 border border-[#fe1e34] text-xs font-mono shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-md">
            <Eye className="w-3.5 h-3.5 text-[#fe1e34]" />
            <span className="font-semibold text-[#fcfcfc]">{hoveredProject.title}</span>
            <span aria-hidden="true" className="text-[#525252]">·</span>
            <span className="text-[#b5b2b2]">{hoveredProject.categoryLabel}</span>
            <span className="text-[#fe1e34] font-bold">Inspect ↗</span>
          </div>
        </div>
      )}

      {/* Top Floating Controls: Skip Intro / Replay (Positioned cleanly below global header) */}
      <div className="absolute top-20 right-6 sm:right-8 z-30 flex items-center gap-2 pointer-events-auto">
        {phase === 'intro' ? (
          <button
            type="button"
            onClick={handleSkipIntro}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-[#121112]/90 border border-[#262525] text-[10px] font-mono uppercase tracking-wider text-[#b5b2b2] hover:text-[#fcfcfc] hover:border-[#fe1e34] transition-colors backdrop-blur-md"
          >
            <FastForward className="w-3.5 h-3.5 text-[#fe1e34]" />
            <span>Skip Intro</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReplayIntro}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-[#121112]/90 border border-[#262525] text-[10px] font-mono uppercase tracking-wider text-[#b5b2b2] hover:text-[#fcfcfc] hover:border-[#fe1e34] transition-colors backdrop-blur-md"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#fe1e34]" />
            <span className="hidden sm:inline">Replay Intro</span>
          </button>
        )}
      </div>

    </div>
  );
};
