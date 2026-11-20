import React, { useRef, useState, useEffect } from 'react';
import {
  SYNTHESIZER_IMAGE,
  LATTICE_IMAGE,
  CHRONO_ORB_IMAGE,
  LIQUID_CHROME_IMAGE,
} from '../data/studioData.ts';
import { ArrowDown, Layers } from 'lucide-react';

interface PrecisionManifestoSectionProps {
  onExploreDisciplines?: () => void;
}

const MANIFESTO_TEXT =
  'Anyone can generate a passable image from a prompt or download a stock mesh. Very few can engineer a model that manufactures cleanly, animates without deformation artifacts, and holds up under macro 8K studio lighting. Every request we take on—whether a single 3D-printable prototype, a mechanical assembly, a collectible character, or a full product launch film—is built with clean topology, accurate scale, and deliberate art direction.';

const WORDS = MANIFESTO_TEXT.split(' ');

export const PrecisionManifestoSection: React.FC<PrecisionManifestoSectionProps> = ({
  onExploreDisciplines,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setScrollProgress(1);
      return;
    }

    let rafId: number | null = null;

    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      // Normalized progress t in [0, 1] as section scrolls through active reading zone
      const raw = (vh * 0.85 - rect.top) / (rect.height * 0.68);
      const clamped = Math.min(Math.max(raw, 0), 1);
      setScrollProgress(clamped);
    };

    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const calloutPins = [
    {
      id: 1,
      threshold: 0.25,
      code: 'PIN 01 // MANIFOLD & PRINT-READY GEOMETRY',
      desc: 'Watertight meshes, verified wall thickness, and zero non-manifold edges.',
      formats: '.STL / .3MF / .STEP',
    },
    {
      id: 2,
      threshold: 0.55,
      code: 'PIN 02 // SUBDIVISION & DEFORMATION TOPOLOGY',
      desc: 'Clean quad flow engineered for smooth rigging, animation, and close-up bevels.',
      formats: '.FBX / .OBJ / .BLEND',
    },
    {
      id: 3,
      threshold: 0.8,
      code: 'PIN 03 // PHYSICALLY BASED LOOKDEV',
      desc: 'Calibrated IOR, subsurface scattering, and studio HDRI lighting that sells material truth.',
      formats: '8K EXR / PRORES 4444 / USDZ',
    },
  ];

  // Check if phrase underline should draw
  const isWordRevealed = (idx: number) => {
    const threshold = idx / WORDS.length;
    return scrollProgress >= threshold;
  };

  return (
    <section
      id="manifesto-precision"
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 scroll-mt-24"
    >
      {/* Top Convex SVG Membrane Divider */}
      <div className="mb-10 flex items-center justify-between border-b border-[#262525] pb-4 text-[10px] font-mono uppercase tracking-[0.25em] text-[#fe1e34]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
          <span>[01 // STUDIO PHILOSOPHY & TECHNICAL STANDARD]</span>
        </div>
        <span className="text-[#737373]">SCROLL-SCRUBBED PRECISION MANIFESTO</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left 7 Columns: Word-by-Word Scroll-Illuminated Manifesto (Emblematica M-05 + M-07) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#b5b2b2] font-semibold">
            AT 3DREQUESTS, WE BELIEVE GREAT 3D IS BUILT FROM THE GEOMETRY UP.
          </div>

          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.24] tracking-[-0.02em] select-none">
            {WORDS.map((word, idx) => {
              const revealed = isWordRevealed(idx);
              // Identify key highlighted engineering phrases near the end
              const cleanWord = word.replace(/[.,—]/g, '').toLowerCase();
              const isTopologyTerm =
                (cleanWord === 'clean' && WORDS[idx + 1]?.startsWith('topology')) ||
                cleanWord === 'topology';
              const isScaleTerm =
                (cleanWord === 'accurate' && WORDS[idx + 1]?.startsWith('scale')) ||
                cleanWord === 'scale';
              const isArtDirTerm =
                cleanWord === 'deliberate' ||
                (cleanWord === 'art' && WORDS[idx + 1]?.startsWith('direction')) ||
                cleanWord === 'direction';

              const isUnderlined = isTopologyTerm || isScaleTerm || isArtDirTerm;

              return (
                <React.Fragment key={idx}>
                  <span
                    className={`relative inline-block transition-opacity duration-200 ${
                      revealed ? 'text-[#fcfcfc] opacity-100' : 'text-[#fcfcfc] opacity-[0.16]'
                    }`}
                  >
                    {word}
                    {isUnderlined && (
                      <span
                        className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#fe1e34] rounded-full transition-transform duration-500 origin-left"
                        style={{
                          transform: revealed ? 'scaleX(1)' : 'scaleX(0)',
                        }}
                      />
                    )}
                  </span>{' '}
                </React.Fragment>
              );
            })}
          </p>

          {/* Callout Pins (Animated Leader Lines M-07) */}
          <div className="pt-6 space-y-3">
            {calloutPins.map((pin) => {
              const active = scrollProgress >= pin.threshold;
              const isHovered = hoveredPin === pin.id;
              return (
                <div
                  key={pin.id}
                  onMouseEnter={() => setHoveredPin(pin.id)}
                  onMouseLeave={() => setHoveredPin(null)}
                  className={`p-4 rounded-[14px] transition-all duration-500 cursor-pointer ${
                    active
                      ? 'glass-panel glass-panel-hover'
                      : 'bg-white/[0.015] backdrop-blur-md border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#fe1e34] font-bold uppercase tracking-wider">
                      <span
                        className={`w-2 h-2 rounded-full transition-transform duration-300 ${
                          active ? 'bg-[#fe1e34] scale-110' : 'bg-[#525252]'
                        }`}
                      />
                      <span>{pin.code}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#d4d2d2] px-2.5 py-0.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10">
                      {pin.formats}
                    </span>
                  </div>
                  <p className="text-xs text-[#d4d2d2] font-light pl-4">{pin.desc}</p>
                  {/* Animated Leader Line */}
                  <div className="mt-2.5 pl-4">
                    <div className="w-full h-[1.5px] bg-white/10 overflow-hidden rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-[#fe1e34] to-[#ff6b7b] transition-transform duration-500 origin-left"
                        style={{
                          transform: active || isHovered ? 'scaleX(1)' : 'scaleX(0)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {onExploreDisciplines && (
            <div className="pt-2">
              <button
                type="button"
                onClick={onExploreDisciplines}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#fe1e34] hover:text-[#fcfcfc] transition-colors font-semibold"
              >
                <span>EXPLORE OUR 8 CORE DISCIPLINES</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </button>
            </div>
          )}
        </div>

        {/* Right 5 Columns: Scroll-Scrubbed 4-Layer Exploded 3D Product Assembly */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative rounded-[22px] glass-panel p-6 sm:p-8 overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/12 pb-4 mb-6 text-[10px] font-mono">
              <span className="text-[#fcfcfc] font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#fe1e34]" />
                <span>AXIAL EXPLODED ASSEMBLY</span>
              </span>
              <span className="text-[#fe1e34] font-bold tabular-nums">
                EXPANSION: {Math.round(scrollProgress * 100)}%
              </span>
            </div>

            {/* 4-Layer Axial Separation Viewport Driven 1:1 by Scroll Progress */}
            <div className="relative h-[380px] sm:h-[420px] flex items-center justify-center">
              {/* Central Axial Guide Vector Line */}
              <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[#fe1e34]/45 pointer-events-none" />

              {/* Layer 1: Top Acoustic Bezel & Rotary Encoders (Moves Upward on Scroll) */}
              <div
                style={{
                  transform: `translate3d(0, ${-scrollProgress * 92}px, 0) scale(${
                    1 - scrollProgress * 0.04
                  })`,
                }}
                className={`absolute w-[78%] h-28 rounded-[12px] overflow-hidden border transition-colors duration-300 shadow-2xl ${
                  hoveredPin === 1 ? 'border-[#fe1e34]' : 'border-white/20'
                }`}
              >
                <img
                  src={SYNTHESIZER_IMAGE}
                  alt="Layer 01 — Top CNC Aluminum Unibody"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80 flex items-center justify-between px-3 text-[9px] font-mono">
                  <span className="text-[#fe1e34] font-bold">L01 // CNC BEZEL</span>
                  <span className="text-[#fcfcfc]">±0.02mm STEP</span>
                </div>
              </div>

              {/* Layer 2: Internal Generative Lattice Core (Slightly Above Center) */}
              <div
                style={{
                  transform: `translate3d(0, ${-scrollProgress * 28}px, 0) scale(${
                    0.96 - scrollProgress * 0.02
                  })`,
                }}
                className={`absolute w-[74%] h-28 rounded-[12px] overflow-hidden border transition-colors duration-300 shadow-2xl ${
                  hoveredPin === 2 ? 'border-[#fe1e34]' : 'border-white/15'
                }`}
              >
                <img
                  src={LATTICE_IMAGE}
                  alt="Layer 02 — Structural SLA Lattice Core"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80 flex items-center justify-between px-3 text-[9px] font-mono">
                  <span className="text-[#fe1e34] font-bold">L02 // SLA LATTICE</span>
                  <span className="text-[#fcfcfc]">MANIFOLD STL</span>
                </div>
              </div>

              {/* Layer 3: Kinematic Gear & Optical Core (Slightly Below Center) */}
              <div
                style={{
                  transform: `translate3d(0, ${scrollProgress * 36}px, 0) scale(${
                    0.96 - scrollProgress * 0.02
                  })`,
                }}
                className={`absolute w-[74%] h-28 rounded-[12px] overflow-hidden border transition-colors duration-300 shadow-2xl ${
                  hoveredPin === 2 ? 'border-[#fe1e34]' : 'border-white/15'
                }`}
              >
                <img
                  src={CHRONO_ORB_IMAGE}
                  alt="Layer 03 — Kinematic Sub-D Assembly"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80 flex items-center justify-between px-3 text-[9px] font-mono">
                  <span className="text-[#fe1e34] font-bold">L03 // QUAD TOPOLOGY</span>
                  <span className="text-[#fcfcfc]">SUB-D LV2 FBX</span>
                </div>
              </div>

              {/* Layer 4: Base Thermal & PBR Shader Chassis (Moves Downward on Scroll) */}
              <div
                style={{
                  transform: `translate3d(0, ${scrollProgress * 98}px, 0) scale(${
                    1 - scrollProgress * 0.04
                  })`,
                }}
                className={`absolute w-[78%] h-28 rounded-[12px] overflow-hidden border transition-colors duration-300 shadow-2xl ${
                  hoveredPin === 3 ? 'border-[#fe1e34]' : 'border-white/20'
                }`}
              >
                <img
                  src={LIQUID_CHROME_IMAGE}
                  alt="Layer 04 — Base Thermal & Lookdev Pass"
                  className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80 flex items-center justify-between px-3 text-[9px] font-mono">
                  <span className="text-[#fe1e34] font-bold">L04 // PBR SHADER</span>
                  <span className="text-[#fcfcfc]">8K MULTI-UDIM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
