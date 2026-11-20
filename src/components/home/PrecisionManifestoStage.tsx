import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, Layers, Box, Cpu, Eye, ArrowUpRight } from 'lucide-react';
import { SYNTHESIZER_IMAGE, LIQUID_CHROME_IMAGE } from '../../data/studioData.ts';

interface PrecisionManifestoStageProps {
  onRequestClick: (preselectedType?: string) => void;
}

const MANIFESTO_TEXT =
  'Anyone can generate a passable image from a prompt or download an unoptimized stock mesh. Very few can engineer a model that manufactures cleanly, animates without deformation artifacts, and holds up under macro 8K studio lighting. Every request we take on—whether a single 3D-printable prototype, a mechanical assembly, a collectible character, or a full product launch film—is built with clean topology, accurate scale, and deliberate art direction.';

export const PrecisionManifestoStage: React.FC<PrecisionManifestoStageProps> = ({
  onRequestClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeShaderPass, setActiveShaderPass] = useState<'beauty' | 'clay' | 'wireframe'>('beauty');
  const [loupeActive, setLoupeActive] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [activePin, setActivePin] = useState<number | null>(0);

  // Scroll tracking for word-by-word illumination
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 25%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  const words = MANIFESTO_TEXT.split(' ');
  const [progressVal, setProgressVal] = useState<number>(0);

  useEffect(() => {
    return smoothProgress.on('change', (v) => setProgressVal(v));
  }, [smoothProgress]);

  // Track cursor position inside interactive inspector
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const calloutPins = [
    {
      id: 0,
      tag: 'PIN 01 // MANIFOLD GEOMETRY',
      title: 'Watertight Slicing Solids',
      desc: '100% verified outward normals and zero non-manifold edges. Guaranteed to slice for industrial 3D printing (SLS, SLA, DMLS) without mesh repair.',
      format: '.STL · .3MF · .STEP',
    },
    {
      id: 1,
      tag: 'PIN 02 // SUB-D QUAD FLOW',
      title: 'Clean Curvature Topology',
      desc: 'Subdivision-ready edge loops aligned along natural stress and articulation axes. Zero pinching or shading breaks under macro specular highlights.',
      format: '.OBJ · .FBX · .BLEND',
    },
    {
      id: 2,
      tag: 'PIN 03 // PHYSICAL LOOKDEV',
      title: '8K Multi-UDIM PBR Shaders',
      desc: 'ACEScg linear color space, calibrated complex IOR, micro-displacement, and subsurface scattering for campaign-grade cinematic fidelity.',
      format: '16/32-bit EXR · 8K TIFF',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-16"
    >
      {/* Eyebrow Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#262525]">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#fe1e34] uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
            <span>01 // STUDIO PHILOSOPHY & TECHNICAL INVARIANTS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#fcfcfc] tracking-tight">
            Built from the Geometry Up<span className="text-[#fe1e34]">.</span>
          </h2>
        </div>

        <div className="text-[10px] font-mono text-[#8e8d8d] uppercase tracking-wider flex items-center gap-3">
          <span>ZERO AI ARTIFACTS</span>
          <span aria-hidden="true" className="text-[#333]">·</span>
          <span>HUMAN PRECISION ENGINEERING</span>
        </div>
      </div>

      {/* 2-Column Asymmetric Stage: Left = Scroll-Illuminated Manifesto; Right = Interactive 3-Pass Shader Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left 7 Columns: Word-by-Word Scroll-Illuminated Statement */}
        <div className="lg:col-span-7 space-y-8">
          <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold leading-[1.28] tracking-[-0.02em] select-none">
            {words.map((word, idx) => {
              const wordThreshold = idx / words.length;
              const isIlluminated = progressVal >= wordThreshold * 0.85;
              const isKeyTerm =
                word.toLowerCase().includes('clean') ||
                word.toLowerCase().includes('topology') ||
                word.toLowerCase().includes('accurate') ||
                word.toLowerCase().includes('scale') ||
                word.toLowerCase().includes('deliberate') ||
                word.toLowerCase().includes('art') ||
                word.toLowerCase().includes('direction');

              return (
                <span
                  key={idx}
                  className={`inline-block mr-[0.26em] transition-all duration-300 ${
                    isIlluminated
                      ? isKeyTerm
                        ? 'text-[#fcfcfc] font-bold drop-shadow-[0_0_12px_rgba(254,30,52,0.35)]'
                        : 'text-[#fcfcfc]'
                      : 'text-[#383737]'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>

          {/* Interactive Specification Callout Pins */}
          <div className="space-y-3 pt-4 border-t border-[#262525]">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#b5b2b2] block">
              THREE NON-NEGOTIABLE ENGINEERING STANDARDS:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {calloutPins.map((pin) => {
                const isSelected = activePin === pin.id;
                return (
                  <button
                    key={pin.id}
                    type="button"
                    onClick={() => setActivePin(pin.id)}
                    className={`text-left p-3.5 rounded-[8px] border transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#181718] border-[#fe1e34] shadow-[0_0_20px_rgba(254,30,52,0.2)]'
                        : 'bg-[#121112]/60 border-[#262525] hover:border-[#525252]'
                    }`}
                  >
                    <span className="text-[9px] font-mono text-[#fe1e34] block font-bold mb-1">
                      {pin.tag}
                    </span>
                    <span className="font-display text-xs font-bold text-[#fcfcfc] block">
                      {pin.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#8e8d8d] block mt-1">
                      {pin.format}
                    </span>
                  </button>
                );
              })}
            </div>

            {activePin !== null && (
              <motion.div
                key={activePin}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-[8px] bg-[#141314] border border-[#2a292a] text-xs text-[#d4d2d2] font-light leading-relaxed flex items-start gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] mt-1.5 shrink-0" />
                <p>{calloutPins[activePin].desc}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right 5 Columns: Interactive 3-Pass Shader & Optical Loupe Inspection Canvas */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fe1e34] font-semibold flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>LIVE SHADER & TOPOLOGY INSPECTOR</span>
            </span>
            <span className="text-[9px] font-mono text-[#8e8d8d]">HOVER FOR OPTICAL X-RAY</span>
          </div>

          {/* Interactive Inspection Viewport */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setLoupeActive(true)}
            onMouseLeave={() => setLoupeActive(false)}
            className="group relative rounded-[14px] overflow-hidden bg-[#100f10] border border-[#262525] hover:border-[#fe1e34] aspect-[4/3] select-none cursor-crosshair shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-colors duration-300"
          >
            {/* Layer 1: Base Active Shader Image */}
            <img
              src={SYNTHESIZER_IMAGE}
              alt="Aura-1 Tactile Synthesizer Beauty Render"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                activeShaderPass === 'clay'
                  ? 'grayscale contrast-125 brightness-110'
                  : activeShaderPass === 'wireframe'
                  ? 'invert contrast-200 hue-rotate-180'
                  : ''
              }`}
            />

            {/* Layer 2: Optical Loupe Circular X-Ray Overlay (Reveals Wireframe/Topology under cursor) */}
            <div
              style={{
                clipPath: loupeActive
                  ? `circle(115px at ${mousePos.x}% ${mousePos.y}%)`
                  : 'circle(0px at 50% 50%)',
                WebkitClipPath: loupeActive
                  ? `circle(115px at ${mousePos.x}% ${mousePos.y}%)`
                  : 'circle(0px at 50% 50%)',
              }}
              className="absolute inset-0 pointer-events-none transition-[clip-path] duration-75"
            >
              {/* High-Contrast Wireframe Matrix Pass */}
              <img
                src={SYNTHESIZER_IMAGE}
                alt="Wireframe Topology Pass"
                className="w-full h-full object-cover filter invert contrast-200 brightness-125"
              />
              {/* Overlay Quad Topology Grid Effect */}
              <div
                className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#00ffcc_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc_1px,transparent_1px)] bg-[size:16px_16px]"
              />
            </div>

            {/* Loupe HUD Ring Tracking Mouse */}
            {loupeActive && (
              <div
                style={{
                  left: `${mousePos.x}%`,
                  top: `${mousePos.y}%`,
                }}
                className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] rounded-full border border-[#00ffcc]/80 shadow-[0_0_25px_rgba(0,255,204,0.4)] flex items-center justify-center transition-all duration-75"
              >
                <div className="absolute top-2 px-2 py-0.5 rounded-[4px] bg-[#0c0c0c]/90 border border-[#00ffcc]/60 text-[8.5px] font-mono tracking-widest text-[#00ffcc] uppercase font-bold">
                  TOPOLOGY X-RAY :: 420K QUADS
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-ping" />
              </div>
            )}

            {/* Bottom HUD Badge */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between p-2.5 rounded-[8px] bg-[#0c0c0c]/85 backdrop-blur-md border border-[#262525] text-[10px] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#fe1e34] animate-pulse" />
                <span className="text-[#fcfcfc] font-semibold">Aura-1 Unibody Model</span>
              </div>
              <span className="text-[#8e8d8d]">TOLERANCE: ±0.05mm</span>
            </div>
          </div>

          {/* 3-Pass Shader Switcher Pills */}
          <div className="p-1.5 rounded-[9px] bg-[#131213] border border-[#262525] grid grid-cols-3 gap-1.5 text-[10px] font-mono">
            <button
              type="button"
              onClick={() => setActiveShaderPass('beauty')}
              className={`py-2 rounded-[6px] uppercase tracking-wider transition-all font-semibold ${
                activeShaderPass === 'beauty'
                  ? 'bg-[#fe1e34] text-white shadow-[0_0_15px_rgba(254,30,52,0.4)]'
                  : 'text-[#8e8d8d] hover:text-[#fcfcfc]'
              }`}
            >
              01 Final Shader
            </button>

            <button
              type="button"
              onClick={() => setActiveShaderPass('clay')}
              className={`py-2 rounded-[6px] uppercase tracking-wider transition-all font-semibold ${
                activeShaderPass === 'clay'
                  ? 'bg-[#fe1e34] text-white shadow-[0_0_15px_rgba(254,30,52,0.4)]'
                  : 'text-[#8e8d8d] hover:text-[#fcfcfc]'
              }`}
            >
              02 Clay Studio
            </button>

            <button
              type="button"
              onClick={() => setActiveShaderPass('wireframe')}
              className={`py-2 rounded-[6px] uppercase tracking-wider transition-all font-semibold ${
                activeShaderPass === 'wireframe'
                  ? 'bg-[#fe1e34] text-white shadow-[0_0_15px_rgba(254,30,52,0.4)]'
                  : 'text-[#8e8d8d] hover:text-[#fcfcfc]'
              }`}
            >
              03 Quad Wire
            </button>
          </div>

          <button
            type="button"
            onClick={() => onRequestClick('CAD & Sub-D Surface Engineering')}
            className="w-full py-3 rounded-[8px] bg-[#181718] hover:bg-[#222122] text-[#fcfcfc] border border-[#2b2a2b] hover:border-[#fe1e34] font-mono text-[10px] uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Commission Production Model</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#fe1e34] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
