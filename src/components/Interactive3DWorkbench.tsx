import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  SYNTHESIZER_IMAGE,
  CHARACTER_BUST_IMAGE,
  LIQUID_CHROME_IMAGE,
  LATTICE_IMAGE,
  CHRONO_ORB_IMAGE,
  PAVILION_IMAGE,
  CURATED_PROJECTS,
  DETAILED_SERVICES,
} from '../data/studioData.ts';
import { ProjectItem } from '../types.ts';
import { soundFX } from '../utils/soundFX.ts';
import { ArrowUpRight, Eye, Layers, Sparkles, Terminal, Sliders } from 'lucide-react';

interface Interactive3DWorkbenchProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestClick: (preselectedType?: string, preselectedBudget?: string) => void;
}

type ShaderMode = 'beauty' | 'clay' | 'wireframe';

export const Interactive3DWorkbench: React.FC<Interactive3DWorkbenchProps> = ({
  onSelectProject,
  onRequestClick,
}) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const centralCardRef = useRef<HTMLDivElement>(null);

  const [shaderMode, setShaderMode] = useState<ShaderMode>('beauty');
  const [pointerOffset, setPointerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [loupeCoords, setLoupeCoords] = useState<{ x: number; y: number; active: boolean }>({
    x: 50,
    y: 50,
    active: false,
  });
  const [HoveredSlot, setHoveredSlot] = useState<string | null>(null);

  // Fast-Track Brief Terminal state (Slot H6)
  const [selectedService, setSelectedService] = useState<string>(DETAILED_SERVICES[0].title);
  const [clientEmail, setClientEmail] = useState<string>('');

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setPointerOffset({ x: nx, y: ny });
  };

  const handleStageMouseLeave = () => {
    setPointerOffset({ x: 0, y: 0 });
  };

  const handleCentralMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!centralCardRef.current) return;
    const rect = centralCardRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    setLoupeCoords({ x: xPct, y: yPct, active: true });
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playSelect();
    onRequestClick(
      selectedService,
      clientEmail ? `Fast-Track Terminal (${clientEmail})` : undefined
    );
  };

  // Floating 3D Cutout Artifacts around the workbench
  const floatingArtifacts = [
    {
      id: 'slot-h1',
      title: 'Chrono-Core Relic',
      discipline: 'MECHANICAL CAD & RIG',
      spec: 'TOLERANCE: ±0.02mm // 64.2K QUADS',
      image: CHRONO_ORB_IMAGE,
      project: CURATED_PROJECTS[5],
      depth: 28,
      positionClass: 'lg:top-6 lg:left-4',
      floatDuration: 4.1,
    },
    {
      id: 'slot-h2',
      title: 'Etherea Android Bust',
      discipline: 'CHARACTER SCULPTING',
      spec: 'SUB-D LV2 // 8K UDIM SHADERS',
      image: CHARACTER_BUST_IMAGE,
      project: CURATED_PROJECTS[1],
      depth: 42,
      positionClass: 'lg:bottom-16 lg:left-8',
      floatDuration: 4.8,
    },
    {
      id: 'slot-h3',
      title: 'Biomorphic Lattice 04',
      discipline: '3D PRINT PROTOTYPING',
      spec: '100% MANIFOLD // SLA CERAMIC',
      image: LATTICE_IMAGE,
      project: CURATED_PROJECTS[4],
      depth: 35,
      positionClass: 'lg:top-8 lg:right-6',
      floatDuration: 3.9,
    },
    {
      id: 'slot-h5',
      title: 'Liquid Chrome Study',
      discipline: '3D ANIMATION & SIMS',
      spec: '60FPS FLIP SOLVER // 1.8M POLYS',
      image: LIQUID_CHROME_IMAGE,
      project: CURATED_PROJECTS[2],
      depth: 48,
      positionClass: 'lg:bottom-48 lg:left-[24%]',
      floatDuration: 5.2,
    },
    {
      id: 'slot-h7',
      title: 'Solaria Glazed Pavilion',
      discipline: 'ARCHITECTURAL & SPATIAL',
      spec: 'NANITE READY // 1.42M POLYGONS',
      image: PAVILION_IMAGE,
      project: CURATED_PROJECTS[3],
      depth: 30,
      positionClass: 'lg:top-44 lg:left-[22%]',
      floatDuration: 4.5,
    },
  ];

  return (
    <section
      id="atelier-workbench"
      ref={stageRef}
      onMouseMove={handleStageMouseMove}
      onMouseLeave={handleStageMouseLeave}
      className="relative max-w-7xl mx-auto px-4 sm:px-8 scroll-mt-24"
    >
      {/* Calibrated Studio Stage Container with CAD Grid Crosshairs */}
      <div className="relative rounded-[24px] bg-[#131214]/90 border border-[#262525] overflow-hidden p-6 sm:p-10 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.85)]">
        {/* Sub-Millimeter CAD Grid Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Section Header Bar */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#262525]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#fe1e34] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span>OPTICAL WORKBENCH // MULTI-PASS SHADER & TOPOLOGY INSPECTOR</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#fcfcfc] tracking-[-0.03em] uppercase">
              Engineered in 3D<span className="text-[#fe1e34]">.</span> Rendered to Convert<span className="text-[#fe1e34]">.</span>
            </h2>
          </div>

          {/* 3-Pass Shader Switcher Pill */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#0a0a0c] border border-[#262525] self-start md:self-auto">
            {(
              [
                { id: 'beauty', label: '01 BEAUTY SHADER' },
                { id: 'clay', label: '02 CLAY + AO' },
                { id: 'wireframe', label: '03 QUAD TOPOLOGY' },
              ] as { id: ShaderMode; label: string }[]
            ).map((mode) => {
              const isActive = shaderMode === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => {
                    soundFX.playSelect();
                    setShaderMode(mode.id);
                  }}
                  aria-pressed={isActive}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#fe1e34] text-white font-bold shadow-[0_0_15px_rgba(254,30,52,0.45)]'
                      : 'text-[#8e8d8d] hover:text-[#fcfcfc]'
                  }`}
                >
                  {mode.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Spatial Diorama Workbench Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center">
          {/* Left 4 Columns: Peripheral Floating Cutout 3D Artifacts (Emblematica Multi-Plane Diorama) */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {floatingArtifacts.map((item, idx) => {
              const isHovered = HoveredSlot === item.id;
              const isDimmed = HoveredSlot !== null && HoveredSlot !== item.id;
              const tx = pointerOffset.x * item.depth;
              const ty = pointerOffset.y * item.depth;

              return (
                <motion.div
                  key={item.id}
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: item.floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.3,
                  }}
                  onMouseEnter={() => {
                    soundFX.playHover();
                    setHoveredSlot(item.id);
                  }}
                  onMouseLeave={() => setHoveredSlot(null)}
                  onClick={() => {
                    soundFX.playSelect();
                    onSelectProject(item.project);
                  }}
                  style={{
                    transform: `translate3d(${tx}px, ${ty}px, 0)`,
                  }}
                  className={`group relative rounded-[14px] overflow-hidden bg-[#18171a] border border-[#2a292c] hover:border-[#fe1e34] p-2.5 cursor-pointer transition-all duration-300 ${
                    idx === 4 ? 'col-span-2 sm:col-span-1 lg:col-span-2' : ''
                  } ${isDimmed ? 'opacity-55 scale-[0.98]' : 'opacity-100 hover:scale-[1.04]'}`}
                >
                  <div className="relative aspect-[16/11] rounded-[10px] overflow-hidden bg-[#0c0c0e]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        shaderMode === 'clay'
                          ? 'grayscale contrast-125 brightness-105'
                          : shaderMode === 'wireframe'
                          ? 'grayscale invert contrast-150 opacity-85'
                          : ''
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#080808]/85 border border-white/10 text-[8px] font-mono text-[#fe1e34] uppercase tracking-wider">
                      {item.discipline}
                    </span>
                  </div>

                  <div className="pt-2 px-1 flex items-center justify-between">
                    <span className="font-display text-xs font-bold text-[#fcfcfc] truncate">
                      {item.title}
                    </span>
                    <Eye className="w-3 h-3 text-[#fe1e34] opacity-70 group-hover:opacity-100 shrink-0" />
                  </div>

                  {/* Monospace Spec Tooltip on Hover */}
                  {isHovered && (
                    <div className="mt-1 px-1.5 py-0.5 rounded bg-[#fe1e34]/15 border border-[#fe1e34]/40 text-[8px] font-mono text-[#fcfcfc] tracking-wider truncate">
                      [{item.spec}]
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Center 4 Columns: Slot H4 — Flagship 3-Pass Shader & Live Optical X-Ray Loupe */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div
              ref={centralCardRef}
              onMouseMove={handleCentralMouseMove}
              onMouseLeave={() => setLoupeCoords((prev) => ({ ...prev, active: false }))}
              onClick={() => {
                soundFX.playSelect();
                onSelectProject(CURATED_PROJECTS[0]);
              }}
              data-project-card="true"
              data-project-title="Aura-1 Tactile Synthesizer"
              data-project-category="3-Pass Optical Inspector"
              className="relative w-full aspect-square rounded-[20px] overflow-hidden bg-[#0a0a0c] border-2 border-[#2e2d30] hover:border-[#fe1e34] cursor-crosshair shadow-[0_20px_60px_rgba(0,0,0,0.9)] group select-none"
            >
              {/* Pass 1: Base Active Pass (Beauty, Clay, or Wireframe) */}
              <img
                src={SYNTHESIZER_IMAGE}
                alt="Aura-1 Tactile Synthesizer — Primary Pass"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  shaderMode === 'clay'
                    ? 'grayscale contrast-125 brightness-110'
                    : shaderMode === 'wireframe'
                    ? 'grayscale contrast-200 brightness-75 saturate-0'
                    : ''
                }`}
              />

              {/* Wireframe SVG Mesh Grid when in Wireframe mode */}
              {shaderMode === 'wireframe' && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #fe1e34 1px, transparent 1px), linear-gradient(to bottom, #fe1e34 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              )}

              {/* Interactive Optical Loupe Layer (Previews Next Shader / Wireframe X-Ray on Hover) */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-200"
                style={{
                  opacity: loupeCoords.active ? 1 : 0,
                  clipPath: `circle(95px at ${loupeCoords.x}% ${loupeCoords.y}%)`,
                }}
              >
                <img
                  src={SYNTHESIZER_IMAGE}
                  alt="X-Ray Topology Pass"
                  className="w-full h-full object-cover grayscale contrast-200 brightness-90"
                />
                <div
                  className="absolute inset-0 opacity-65"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(254,30,52,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(254,30,52,0.55) 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                />
              </div>

              {/* Optical Loupe HUD Ring */}
              {loupeCoords.active && (
                <div
                  className="pointer-events-none absolute w-[190px] h-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#fe1e34] shadow-[0_0_30px_rgba(254,30,52,0.5)] flex items-end justify-center pb-2"
                  style={{ left: `${loupeCoords.x}%`, top: `${loupeCoords.y}%` }}
                >
                  <span className="px-2 py-0.5 rounded bg-[#080808]/90 text-[8px] font-mono text-[#fe1e34] uppercase tracking-widest">
                    TOPOLOGY X-RAY
                  </span>
                </div>
              )}

              {/* Bottom Caption Inside Focal Stage */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-[#fe1e34] uppercase tracking-widest block">
                    SLOT H4 // INTERACTIVE LOUPE STAGE
                  </span>
                  <span className="font-display text-sm font-bold text-[#fcfcfc]">
                    Aura-1 Unibody CAD (168,400 Polys)
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#171617] border border-[#262525] text-[9px] font-mono text-[#d4d2d2]">
                  HOVER FOR X-RAY
                </span>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Slot H6 — Fast-Track Brief Terminal (Inspired by Emblematica's Interactive TV Module) */}
          <div className="lg:col-span-4">
            <div className="rounded-[20px] bg-gradient-to-br from-[#1c191b] via-[#131214] to-[#0c0b0d] border-2 border-[#2e2b2d] p-6 sm:p-7 space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
              {/* Top Hardware Bezel Header */}
              <div className="flex items-center justify-between border-b border-[#262525] pb-3.5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#fe1e34]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fcfcfc] font-bold">
                    FAST-TRACK BRIEF TERMINAL
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#fe1e34] animate-pulse" />
                  <span className="text-[9px] font-mono text-[#b5b2b2]">READY</span>
                </div>
              </div>

              {/* Emissive Terminal Screen Readout */}
              <div className="p-3.5 rounded-[10px] bg-[#070708] border border-[#222] font-mono text-[11px] space-y-1">
                <div className="text-[#fe1e34] font-semibold flex items-center justify-between">
                  <span>&gt; INITIATE DIRECT 3D SPRINT</span>
                  <span>[SLA: 48H]</span>
                </div>
                <p className="text-[#8e8d8d] text-[10px] leading-relaxed">
                  Select your target discipline and email to pre-configure your engineering brief in 5 seconds.
                </p>
              </div>

              {/* Live Interactive Inputs */}
              <form onSubmit={handleTerminalSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="terminal-discipline"
                    className="block text-[10px] font-mono uppercase tracking-wider text-[#b5b2b2]"
                  >
                    01 // SELECT 3D DISCIPLINE
                  </label>
                  <div className="relative">
                    <select
                      id="terminal-discipline"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#0c0b0d] border border-[#2a292c] focus:border-[#fe1e34] text-xs font-mono text-[#fcfcfc] focus:outline-none transition-colors"
                    >
                      {DETAILED_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          ({srv.number}) {srv.title} — {srv.startingRange}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="terminal-email"
                    className="block text-[10px] font-mono uppercase tracking-wider text-[#b5b2b2]"
                  >
                    02 // YOUR WORK OR CREATOR EMAIL
                  </label>
                  <input
                    id="terminal-email"
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="engineer@studio.com"
                    className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#0c0b0d] border border-[#2a292c] focus:border-[#fe1e34] text-xs font-mono text-[#fcfcfc] placeholder-[#525252] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-[8px] bg-[#fe1e34] hover:bg-[#e0192e] text-white font-mono text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(254,30,52,0.4)] transition-all group"
                >
                  <span>INITIATE BRIEF</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>

              <div className="pt-2 border-t border-[#222] flex items-center justify-between text-[9px] font-mono text-[#737373]">
                <span>MUTUAL NDA AVAILABLE</span>
                <span>·</span>
                <span>.STEP / .STL / .FBX / 8K EXR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Architectural Bar (Echoing Emblematica's Signature Perimeter Bar) */}
        <div className="relative z-20 pt-6 border-t border-[#262525] grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-[10px] font-mono uppercase tracking-[0.16em] text-[#b5b2b2]">
          <div className="text-[#fcfcfc] font-semibold">
            PRECISION 3D DESIGN & VISUAL PRODUCTION STUDIO
          </div>
          <div className="text-[#8e8d8d] md:text-center">
            CUSTOM MODELING · PRODUCT CAD · 3D PRINT PROTOTYPES · CHARACTERS & MOTION
          </div>
          <div className="md:text-right">
            <button
              type="button"
              onClick={() => onRequestClick()}
              className="inline-flex items-center gap-1.5 text-[#fe1e34] hover:text-[#fcfcfc] font-bold transition-colors"
            >
              <span>BUILT FOR PRODUCTION — REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
