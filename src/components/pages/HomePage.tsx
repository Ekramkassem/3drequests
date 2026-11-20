import React, { useState, useRef, useEffect } from 'react';
import { PageType, ProjectItem } from '../../types.ts';
import { ArrowUpRight, ArrowDown, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { PrecisionManifestoSection } from '../PrecisionManifestoSection.tsx';
import { PinnedDisciplinesDeck } from '../PinnedDisciplinesDeck.tsx';
import { EmblematicaIntegratedSections } from '../EmblematicaIntegratedSections.tsx';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onRequestClick: (preselectedType?: string, preselectedBudget?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  on3dReady?: () => void;
}

const MARQUEE_ITEMS = [
  '48-HOUR RUSH SPRINTS',
  'STARTS AT $100 FLAT PRICING',
  '100% WATERTIGHT 3D PRINT READY',
  'NO CAD SOFTWARE REQUIRED',
  'FREE 2-ROUND REVISION GUARANTEE',
  'MANIFOLD STL & HIGH-RES STEP',
  'PHOTOREALISTIC 4K KEY VISUALS',
  'FULL IP & COMMERCIAL RIGHTS TRANSFERRED',
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onRequestClick,
  on3dReady,
}) => {
  const [, setCurrentScrollProgress] = useState<number>(0);

  const shouldReduceMotion = useReducedMotion();

  // Notify parent that assets are ready
  useEffect(() => {
    on3dReady?.();
  }, [on3dReady]);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      setCurrentScrollProgress(shouldReduceMotion ? 0 : latest);
    });
  }, [smoothProgress, shouldReduceMotion]);

  // Layered Parallax Transformations (Stratum 0: Glow, Stratum 1: Headline)
  const heroTextY = useTransform(smoothProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -65]);
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.75, 1], shouldReduceMotion ? [1, 1, 1] : [1, 0.45, 0.08]);
  const bgGlowY = useTransform(smoothProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['0%', '35%']);
  const bgGlowOpacity = useTransform(smoothProgress, [0, 0.8, 1], shouldReduceMotion ? [1, 1, 1] : [1, 0.6, 0.15]);

  return (
    <div className="space-y-28 md:space-y-36 pb-28">
      {/* ---------------- 01 — HERO: CINEMATIC OPENING EXPERIENCE ---------------- */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex flex-col justify-between pt-20 sm:pt-24 overflow-hidden"
      >
        {/* Ambient Atmospheric Caustic Glow (Arterial Red & Warm Light Sweep) */}
        <motion.div
          style={{ y: bgGlowY, opacity: bgGlowOpacity }}
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-[radial-gradient(circle_at_50%_45%,rgba(254,30,52,0.09)_0%,rgba(23,22,23,0.45)_45%,transparent_70%)] blur-3xl z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-between space-y-8">
          {/* Main Hero Header Presentation */}
          <div className="space-y-6 sm:space-y-8">
            {/* Studio Metadata Kicker with Arterial Red Dot */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#b5b2b2] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span>01 / HIGH-SPEED 3D PRODUCTION</span>
              <span aria-hidden="true" className="text-[#525252]">/</span>
              <span>FOR MAKERS, INVENTORS & STUDIOS</span>
            </motion.div>

            {/* Compact, Ultra-Refined Headline with Staggered Kinetic Word Reveal & Metallic Sheen */}
            <motion.div
              style={{ y: heroTextY, opacity: heroTextOpacity }}
              className="space-y-2 select-none"
            >
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#fcfcfc] tracking-[-0.04em] leading-[0.96] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
                >
                  <span className="inline-block bg-gradient-to-r from-white via-[#f3efef] to-[#a3a3a3] bg-clip-text text-transparent">
                    BRING ANY 3D IDEA
                  </span>
                  <br />
                  <span className="font-serif italic font-normal tracking-tight text-[#e5e5e5] normal-case lowercase text-5xl sm:text-6xl md:text-7xl lg:text-[88px] pr-2">
                    from sketch
                  </span>{' '}
                  <span className="inline-block text-[#fcfcfc]">
                    TO PRODUCTION READY<span className="text-[#fe1e34] inline-block animate-pulse">.</span>
                  </span>
                </motion.h1>
              </div>

              {/* Sub-headline Kicker Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center gap-2 pt-1"
              >
                <span className="text-[10px] font-mono text-[#fe1e34] bg-[#fe1e34]/15 backdrop-blur-md border border-[#fe1e34]/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                  ENTRY TIERS FROM $100
                </span>
                <span className="text-[10px] font-mono text-[#b5b2b2] uppercase tracking-wider">
                  · 48H FAST ITERATION SLA
                </span>
              </motion.div>
            </motion.div>

            {/* Asymmetrical Information & Action Strata */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-5 items-end border-t border-white/12">
              {/* Left Column: Narrative Statement & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-[#d4d2d2] text-sm sm:text-lg max-w-xl leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  Turn rough napkin doodles, phone photos, or concept art into precision 3D print STLs and photorealistic renders in as fast as 48 hours. Zero CAD experience required.
                </p>

                {/* CTA Pair: Glass Button + Crimson Glass Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onRequestClick()}
                    className="group glass-button inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[12px] transition-all duration-300"
                  >
                    <span>Start Your 3D Request</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d4d2d2] group-hover:text-[#fe1e34] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => onNavigate('portfolio')}
                    className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.18em] bg-[#fe1e34] hover:bg-[#e0192e] text-white rounded-[8px] shadow-[0_0_25px_rgba(254,30,52,0.45)] hover:shadow-[0_0_35px_rgba(254,30,52,0.75)] transition-all duration-300 font-bold overflow-hidden"
                  >
                    {/* Animated Shimmer Light Sweep */}
                    <motion.span
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                      animate={{ x: ['-150%', '300%'] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <span className="relative z-10">Explore Portfolio</span>
                    <ArrowUpRight className="relative z-10 w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Trust Badges Bar */}
                <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-[#b5b2b2]">
                  <span className="flex items-center gap-1.5 text-[#fcfcfc]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#fe1e34]" />
                    <span>Fixed Scope & Price</span>
                  </span>
                  <span aria-hidden="true" className="text-[#525252]">·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4d2d2]" />
                    <span>48h Fast Turnaround</span>
                  </span>
                  <span aria-hidden="true" className="text-[#525252]">·</span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4d2d2]" />
                    <span>100% Watertight Print Guarantee</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Studio Commercial Trust Quad Plate */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-[14px] glass-panel glass-panel-hover space-y-1 transition-all duration-300">
                  <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-wider block font-semibold">ENTRY TIER</span>
                  <span className="font-display text-lg font-bold text-[#fcfcfc] block">From $100</span>
                  <span className="text-[11px] text-[#d4d2d2] block font-light">Makers & Printables</span>
                </div>

                <div className="p-4 rounded-[14px] glass-panel glass-panel-hover space-y-1 transition-all duration-300">
                  <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-wider block font-semibold">RUSH DELIVERY</span>
                  <span className="font-display text-lg font-bold text-[#fcfcfc] block">48 Hours</span>
                  <span className="text-[11px] text-[#d4d2d2] block font-light">Rapid Turnaround Available</span>
                </div>

                <div className="p-4 rounded-[14px] glass-panel glass-panel-hover space-y-1 transition-all duration-300">
                  <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-wider block font-semibold">REVISIONS</span>
                  <span className="font-display text-lg font-bold text-[#fcfcfc] block">2 Rounds Free</span>
                  <span className="text-[11px] text-[#d4d2d2] block font-light">Direct Modeler Collaboration</span>
                </div>

                <div className="p-4 rounded-[14px] glass-panel glass-panel-hover space-y-1 transition-all duration-300">
                  <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-wider block font-semibold">OWNERSHIP</span>
                  <span className="font-display text-lg font-bold text-[#fcfcfc] block">100% IP Yours</span>
                  <span className="text-[11px] text-[#d4d2d2] block font-light">Commercial Rights Included</span>
                </div>
              </div>
            </div>

            {/* Disciplines Bar with Clean Unboxed Separators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-mono text-[#737373]"
            >
              <span className="text-[#fcfcfc] font-semibold">WHAT WE BUILD:</span>
              <span className="hover:text-[#d4d2d2] transition-colors">3D Print Ready STLs</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="hover:text-[#d4d2d2] transition-colors">Physical Product CAD</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="hover:text-[#d4d2d2] transition-colors">Character Sculpting</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="hover:text-[#d4d2d2] transition-colors">Photorealistic Visuals</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="hover:text-[#d4d2d2] transition-colors">Interactive 3D Web</span>
            </motion.div>
          </div>

          {/* Bottom Technical Status & Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 pb-4 flex items-center justify-between text-[10px] font-mono text-[#737373] border-t border-white/12"
          >
            <span className="uppercase tracking-[0.2em] text-[#d4d2d2]">
              ACCEPTING COMMISSIONS — FAST SLOTS OPEN FOR THIS WEEK
            </span>
            <button
              type="button"
              onClick={() => {
                document.getElementById('manifesto-precision')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-[#b5b2b2] hover:text-[#fcfcfc] transition-colors cursor-pointer"
            >
              <span className="hidden sm:inline">EXPLORE 8 CORE DISCIPLINES & PIPELINE</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#fe1e34] animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CONTINUOUS KINETIC MARQUEE TICKER ---------------- */}
      <div className="relative w-full overflow-hidden border-y border-white/10 py-4 bg-white/[0.015] backdrop-blur-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_10px_28px_rgba(0,0,0,0.3)] select-none">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
          className="flex whitespace-nowrap items-center text-[10px] font-mono uppercase tracking-[0.25em] text-[#fcfcfc]"
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] shadow-[0_0_8px_#fe1e34]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---------------- PRECISION MANIFESTO: WORD-BY-WORD ILLUMINATION & EXPLODED RIG ---------------- */}
      <PrecisionManifestoSection
        onExploreDisciplines={() => {
          document.getElementById('disciplines-deck')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* ---------------- PINNED 8-CARD HORIZONTAL DISCIPLINES DECK ---------------- */}
      <PinnedDisciplinesDeck onRequestClick={onRequestClick} />

      {/* ---------------- EMBLEMATICA INTEGRATED SHOWCASE SECTIONS (20% OPACITY BG) ---------------- */}
      <EmblematicaIntegratedSections
        onNavigate={onNavigate}
        onRequestClick={onRequestClick}
      />

      {/* ---------------- 04 — THE STUDIO APPROACH: FAST 4-STEP DELIVERY (HIGH-CONTRAST LIGHT SHEET) ---------------- */}
      <section id="production-method" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#f3efef] text-[#080808] rounded-[24px] p-8 sm:p-14 md:p-16 border border-[#d4d2d2] shadow-[0_30px_80px_rgba(0,0,0,0.5)] space-y-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#d4d2d2]">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#525252]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34]" />
                <span>Section 04 — How We Deliver // Production Pipeline</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#080808] tracking-[-0.04em]">
                Fast, Zero-BS Workflow<span className="text-[#fe1e34]">.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525252] max-w-md font-light leading-relaxed">
              No endless discovery meetings or hidden milestone fees. A streamlined 4-step sprint from your initial idea to manufacturing-ready 3D files.
            </p>
          </div>

          {/* Emblematica-Inspired Editorial Method Statement with Animated Crimson Underlines */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e2e2] shadow-sm space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#fe1e34] font-semibold">
              METHODOLOGY // ZERO AMBIGUITY PIPELINE
            </div>
            <p className="font-display text-lg sm:text-2xl text-[#171617] leading-relaxed font-medium">
              Commissioning custom 3D work should never feel like a black box. When you submit a request—whether it is a rough pencil sketch, a CAD drawing, or a creative moodboard—we{' '}
              <span className="underline decoration-[#fe1e34] decoration-2 underline-offset-4 font-bold">
                lock the technical constraints
              </span>{' '}
              upfront and move through a{' '}
              <span className="underline decoration-[#fe1e34] decoration-2 underline-offset-4 font-bold">
                structured four-stage production pipeline
              </span>{' '}
              with clear visual checkpoints before delivering{' '}
              <span className="underline decoration-[#fe1e34] decoration-2 underline-offset-4 font-bold">
                final native files
              </span>
              .
            </p>
          </div>

          {/* 4 Connected Stages with Directional Horizontal Composition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Send Any Sketch or Photo',
                description: 'Upload phone photos, napkin sketches, vector logos, or rough reference links. You don’t need any CAD software or technical files.',
                deliverableSummary: 'Instant Scope & Same-Day Kickoff',
              },
              {
                number: '02',
                title: 'First 3D Model in 48h',
                description: 'Our senior artists build precision Sub-D quads and watertight manifold NURBS, delivering your first interactive preview in 48 hours.',
                deliverableSummary: 'Interactive 3D Web Review Link',
              },
              {
                number: '03',
                title: 'Refining & Tolerancing',
                description: 'Test wall thicknesses, assembly snap-fits, and photorealistic lighting. Two complimentary revision rounds included with every tier.',
                deliverableSummary: '2 Complimentary Revision Rounds',
              },
              {
                number: '04',
                title: 'Production Files & Full IP',
                description: 'Receive production-grade STL, STEP, and 4K renders along with complete signed IP assignment. You own 100% of the commercial rights.',
                deliverableSummary: 'Watertight STL, STEP & Full Rights',
              },
            ].map((stage, idx) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-7 rounded-[16px] bg-white border border-[#e5e2e2] hover:border-[#fe1e34] shadow-sm hover:shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#f3efef] pb-3">
                    <span className="font-display text-3xl font-extrabold text-[#fe1e34]">
                      {stage.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-widest">
                      Step 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#080808] tracking-tight">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-[#525252] leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f3efef] text-[10px] font-mono text-[#171617] font-semibold tracking-wider">
                  {stage.deliverableSummary}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------------- 05 — STUDIO MANIFESTO (TYPOGRAPHIC MOMENT) ---------------- */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#b5b2b2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
            <span>05 / THE 3D QUALITY STANDARD</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#fcfcfc] tracking-[-0.06em] leading-[0.95] uppercase">
            SPEED WITHOUT CUTTING <br />
            <span className="font-serif italic font-normal text-[#d4d2d2] normal-case lowercase tracking-tight">
              a single geometric
            </span>{' '}
            CORNER<span className="text-[#fe1e34]">.</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#737373] tracking-[0.18em] uppercase pt-2">
            WATERTIGHT 3D PRINTS · PRECISION PRODUCT CAD · 48H FIRST SPRINT
          </p>
        </motion.div>
      </section>

      {/* ---------------- 06 — FINAL HIGH-CONVERTING CTA SECTION ---------------- */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] overflow-hidden glass-panel p-10 sm:p-16 md:p-20 text-center space-y-8"
        >
          {/* Ambient radial glass glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-[radial-gradient(circle,rgba(254,30,52,0.18)_0%,transparent_70%)] blur-2xl"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fe1e34]/15 backdrop-blur-md border border-[#fe1e34]/35 text-[#fe1e34] text-[10px] font-mono uppercase tracking-widest shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <Sparkles className="w-3 h-3" />
              <span>LIMITED COMMISSION SLOTS THIS WEEK</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#fcfcfc] tracking-[-0.05em] leading-none uppercase">
              HAVE A 3D IDEA? <br />
              <span className="font-serif italic font-normal tracking-tight text-[#d4d2d2] normal-case lowercase text-5xl sm:text-6xl md:text-7xl">
                let&apos;s build it this week.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#d4d2d2] font-light leading-relaxed">
              From individual 3D print prototypes to complete multi-part product launches. Transparent pricing starting at $100, two free revision rounds, and guaranteed watertight geometry.
            </p>
          </div>

          <div className="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => onRequestClick()}
              className="group glass-crimson inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[12px] transition-all duration-300 font-bold"
            >
              <span>Launch Your 3D Request</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.button>

            <motion.button
              whileHover={{ x: 3 }}
              type="button"
              onClick={() => onNavigate('contact')}
              className="group glass-button inline-flex items-center gap-1.5 px-7 py-4 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[12px] transition-all"
            >
              <span>Direct Studio Inquiry</span>
              <span className="text-[#fe1e34] group-hover:translate-x-0.5 transition-transform">→</span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
