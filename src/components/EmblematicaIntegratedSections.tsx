import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PageType } from '../types.ts';
import {
  TactileSynthesizerCutout,
  BiomorphicLatticeCutout,
  SculpturalBustCutout,
  ExplodedCadGearCutout,
  LiquidChromeSculptureCutout,
  ChronoCoreArtifactCutout,
  LookDevViewportCutout,
} from './emblematica/EmblematicaHeroObjects.tsx';
import {
  computeHeroParallaxSplit,
  computeWordIllumination,
  computeWhatWeDoBestStack,
} from '../utils/emblematicaScrollMath.ts';
import {
  HERO_SCULPTURE_IMAGE,
  SYNTHESIZER_IMAGE,
  LATTICE_IMAGE,
  CHARACTER_BUST_IMAGE,
  CHRONO_ORB_IMAGE,
  LIQUID_CHROME_IMAGE,
} from '../data/studioData.ts';
import { ArrowUpRight, X, Check, Sparkles, RotateCcw, ArrowLeft, Layers, ShieldCheck } from 'lucide-react';

interface EmblematicaIntegratedSectionsProps {
  onNavigate: (page: PageType) => void;
  onRequestClick: (preselectedType?: string, preselectedBudget?: string) => void;
}

interface HeroCollageItem {
  id: string;
  badgeText: string;
  priceTag: string;
  hoverBg: string;
  side: 'left' | 'right';
  depthFactor: number;
  baseRotate: number;
  positionClass: string;
}

const HERO_COLLAGE_ITEMS: HeroCollageItem[] = [
  {
    id: 'synthesizer',
    badgeText: 'PRODUCT DESIGN & CAD',
    priceTag: 'FROM $150',
    hoverBg: 'rgba(29, 20, 23, 0.08)',
    side: 'left',
    depthFactor: 0.9,
    baseRotate: -3,
    positionClass: 'left-[-2%] sm:left-[1%] bottom-[9%] w-[230px] sm:w-[295px] lg:w-[355px] z-20',
  },
  {
    id: 'lattice',
    badgeText: '3D PRINTING & PROTOTYPES',
    priceTag: 'FROM $100',
    hoverBg: 'rgba(41, 9, 14, 0.08)',
    side: 'left',
    depthFactor: 0.75,
    baseRotate: -6,
    positionClass: 'left-[1%] sm:left-[2%] top-[14%] w-[175px] sm:w-[225px] lg:w-[265px] z-20',
  },
  {
    id: 'bust',
    badgeText: 'CHARACTER & COLLECTIBLES',
    priceTag: 'FROM $180',
    hoverBg: 'rgba(25, 21, 34, 0.08)',
    side: 'left',
    depthFactor: 0.55,
    baseRotate: 3,
    positionClass: 'left-[18%] sm:left-[20%] bottom-[6%] w-[195px] sm:w-[255px] lg:w-[305px] z-30',
  },
  {
    id: 'gears',
    badgeText: 'MECHANICAL STEP ASSEMBLIES',
    priceTag: 'FROM $280',
    hoverBg: 'rgba(19, 24, 34, 0.08)',
    side: 'left',
    depthFactor: 0.85,
    baseRotate: -4,
    positionClass: 'left-[35%] sm:left-[38%] top-[37%] w-[205px] sm:w-[265px] lg:w-[315px] z-20',
  },
  {
    id: 'chrome',
    badgeText: '3D ANIMATION & MOTION',
    priceTag: 'FROM $320',
    hoverBg: 'rgba(31, 24, 18, 0.08)',
    side: 'right',
    depthFactor: 0.6,
    baseRotate: -5,
    positionClass: 'right-[18%] sm:right-[20%] bottom-[6%] w-[215px] sm:w-[280px] lg:w-[335px] z-30',
  },
  {
    id: 'relic',
    badgeText: 'GAME-READY HERO ASSETS',
    priceTag: 'FROM $320',
    hoverBg: 'rgba(24, 20, 30, 0.08)',
    side: 'right',
    depthFactor: 0.75,
    baseRotate: 4,
    positionClass: 'right-[1%] sm:right-[2%] top-[13%] w-[180px] sm:w-[235px] lg:w-[275px] z-20',
  },
  {
    id: 'lookdev',
    badgeText: '8K PRODUCT RENDERING',
    priceTag: 'FROM $150',
    hoverBg: 'rgba(43, 8, 14, 0.08)',
    side: 'right',
    depthFactor: 0.95,
    baseRotate: 5,
    positionClass: 'right-[-2%] sm:right-[0%] bottom-[8%] w-[245px] sm:w-[325px] lg:w-[390px] z-30',
  },
];

interface WhatWeDoCardData {
  num: string;
  category: string;
  title: string;
  description: string;
  specs: string;
  startingPrice: string;
  bgColor: string;
  textColor: string;
  mutedColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  image: string;
  imageAlt: string;
  hasSpecOverlay?: boolean;
}

const WHAT_WE_DO_CARDS: WhatWeDoCardData[] = [
  {
    num: '[01]',
    category: 'INDUSTRIAL & CONSUMER CAD',
    title: 'PRODUCT\nDESIGN & CAD',
    description:
      'MANUFACTURING-READY NURBS CAD, CMF MATERIAL EXPLORATION, AND EXPLODED MECHANICAL ASSEMBLIES FOR HARDWARE STARTUPS AND CONSUMER BRANDS.',
    specs: '.STEP · .IGES · .PARASOLID · KEYSHOT CMF',
    startingPrice: 'FROM $150',
    bgColor: '#F3EFEF',
    textColor: '#080808',
    mutedColor: '#4A4848',
    borderColor: '#D4D2D2',
    badgeBg: '#fe1e34',
    badgeText: '#FFFFFF',
    image: SYNTHESIZER_IMAGE,
    imageAlt: 'Aura-1 tactile aluminum synthesizer CAD and product visualization',
  },
  {
    num: '[02]',
    category: 'ADDITIVE MANUFACTURING',
    title: '3D PRINTING &\nPROTOTYPES',
    description:
      '100% WATERTIGHT, MANIFOLD MESHES ENGINEERED FOR SLA RESIN, SLS NYLON, AND FDM PRINTING—COMPLETE WITH WALL-THICKNESS AND KEYING CHECKS.',
    specs: '.STL · .3MF · .STEP · ZERO SLICING ERRORS',
    startingPrice: 'FROM $100',
    bgColor: '#fe1e34',
    textColor: '#FFFFFF',
    mutedColor: 'rgba(255,255,255,0.9)',
    borderColor: '#ff5263',
    badgeBg: '#080808',
    badgeText: '#FFFFFF',
    image: LATTICE_IMAGE,
    imageAlt: 'Biomorphic cellular SLA 3D printed lattice prototype',
  },
  {
    num: '[03]',
    category: 'DIGITAL SCULPTING & FIGURINES',
    title: 'CHARACTERS &\nCOLLECTIBLES',
    description:
      'HIGH-DETAIL ZBRUSH & BLENDER DIGITAL SCULPTING FOR STYLIZED CHARACTERS, GAMING MINIATURES, VINYL TOYS, AND ARTICULATED RESIN COLLECTIBLES.',
    specs: 'ZBRUSH · SUB-D QUADS · CUT & KEYED FOR PRINT',
    startingPrice: 'FROM $180',
    bgColor: '#12141A',
    textColor: '#FCFCFC',
    mutedColor: '#B5B2B2',
    borderColor: 'rgba(254, 30, 52, 0.45)',
    badgeBg: '#fe1e34',
    badgeText: '#FFFFFF',
    image: CHARACTER_BUST_IMAGE,
    imageAlt: 'Etherea cybernetic sculptural character bust in smoked glass and 24k gold',
    hasSpecOverlay: true,
  },
  {
    num: '[04]',
    category: 'COMMERCIAL LOOKDEV & REAL-TIME',
    title: '8K RENDERS &\nGAME ASSETS',
    description:
      'CAMPAIGN-READY 8K PRODUCT PACKSHOTS, MACRO MATERIAL STUDIES, 360° E-COMMERCE TURNTABLES, AND NANITE-READY UNREAL ENGINE 5 HERO PROPS.',
    specs: '8K EXR · SUB-D FBX / GLB · UNREAL 5 & UNITY',
    startingPrice: 'FROM $150',
    bgColor: '#E4E5E9',
    textColor: '#080808',
    mutedColor: '#3E4149',
    borderColor: '#C5C7CF',
    badgeBg: '#080808',
    badgeText: '#FCFCFC',
    image: CHRONO_ORB_IMAGE,
    imageAlt: 'Chrono-Core mechanical bronze hero relic with glowing quartz core',
  },
  {
    num: '[05]',
    category: 'KINETIC STORYTELLING',
    title: '3D MOTION &\nANIMATION',
    description:
      '60FPS PRODUCT LAUNCH FILMS, EXPLODED-VIEW TECHNICAL ANIMATIONS, AND FLUID SIMULATIONS THAT EXPLAIN COMPLEX HARDWARE IN SECONDS.',
    specs: 'PRORES 4444 · 60FPS 4K · HOUDINI & OCTANE',
    startingPrice: 'FROM $320',
    bgColor: '#191B22',
    textColor: '#FCFCFC',
    mutedColor: '#B5B2B2',
    borderColor: 'rgba(226, 177, 122, 0.4)',
    badgeBg: '#e2b17a',
    badgeText: '#080808',
    image: LIQUID_CHROME_IMAGE,
    imageAlt: 'Kinetic liquid chrome ribbon and refractive glass motion study',
  },
];

const MANIFESTO_TEXT =
  'In a world of generic stock meshes and automated generators, anyone can output a rough shape. But not everyone can engineer production-ready geometry that actually manufactures, prints, and renders flawlessly. Every commission starts with your exact tolerances, topology requirements, and commercial goals—delivering watertight STL prototypes, native STEP assemblies, and 8K visuals built to launch real products.';

interface CreativeMethodToken {
  word: string;
  highlightGroup?: 'project_vision' | 'creative_idea' | 'idea_and_mood';
}

const CREATIVE_METHOD_TOKENS: CreativeMethodToken[] = [
  { word: 'First' },
  { word: 'we' },
  { word: 'engineer' },
  { word: 'the' },
  { word: 'geometry.' },
  { word: 'Then' },
  { word: 'we' },
  { word: 'perfect' },
  { word: 'every' },
  { word: 'photon.' },
  { word: 'We' },
  { word: 'audit' },
  { word: 'your' },
  { word: 'brief' },
  { word: 'and' },
  { word: 'establish' },
  { word: 'a' },
  { word: 'technical blueprint:', highlightGroup: 'project_vision' },
  { word: 'exact' },
  { word: 'dimensional' },
  { word: 'tolerances,' },
  { word: 'polygon' },
  { word: 'budgets,' },
  { word: 'and' },
  { word: 'material' },
  { word: 'shaders.' },
  { word: 'Every' },
  { word: 'milestone' },
  { word: 'includes' },
  { word: 'an' },
  { word: 'interactive 3D turntable,', highlightGroup: 'creative_idea' },
  { word: 'wireframe' },
  { word: 'topology' },
  { word: 'check,' },
  { word: 'and' },
  { word: 'slicing' },
  { word: 'verification,' },
  { word: 'so' },
  { word: 'you' },
  { word: 'approve' },
  { word: 'the' },
  { word: 'watertight master files', highlightGroup: 'idea_and_mood' },
  { word: 'with' },
  { word: 'complete' },
  { word: 'confidence.' },
];

export const EmblematicaIntegratedSections: React.FC<EmblematicaIntegratedSectionsProps> = ({
  onNavigate,
  onRequestClick,
}) => {
  const [hoveredHeroId, setHoveredHeroId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 720, y: 420 });
  const [briefModalOpen, setBriefModalOpen] = useState<boolean>(false);
  const [aboutModalOpen, setAboutModalOpen] = useState<boolean>(false);
  const [selectedServiceForBrief, setSelectedServiceForBrief] = useState<string>('Product Design & CAD');
  const [briefName, setBriefName] = useState<string>('');
  const [briefEmail, setBriefEmail] = useState<string>('');
  const [briefNotes, setBriefNotes] = useState<string>('');
  const [briefError, setBriefError] = useState<string>('');
  const [briefSubmitted, setBriefSubmitted] = useState<boolean>(false);

  // Scroll tracking refs & state
  const heroSectionRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLElement>(null);
  const whatWeDoRef = useRef<HTMLElement>(null);
  const creativeMethodRef = useRef<HTMLElement>(null);
  const foundersRef = useRef<HTMLElement>(null);

  const [heroRect, setHeroRect] = useState<{ top: number; height: number }>({
    top: 0,
    height: 900,
  });
  const [viewportH, setViewportH] = useState<number>(900);
  const [manifestoRect, setManifestoRect] = useState<{ top: number; height: number }>({
    top: 900,
    height: 1100,
  });
  const [whatWeDoRect, setWhatWeDoRect] = useState<{ top: number; height: number }>({
    top: 2000,
    height: 4000,
  });
  const [creativeMethodRect, setCreativeMethodRect] = useState<{ top: number; height: number }>({
    top: 6000,
    height: 1100,
  });

  // Synchronize all scroll-scrubbed sections at 60fps relative to viewport
  useEffect(() => {
    const syncScroll = () => {
      const vh = window.innerHeight || 900;
      setViewportH(vh);

      if (heroSectionRef.current) {
        const r = heroSectionRef.current.getBoundingClientRect();
        setHeroRect({ top: r.top, height: r.height });
      }
      if (manifestoRef.current) {
        const r = manifestoRef.current.getBoundingClientRect();
        setManifestoRect({ top: r.top, height: r.height });
      }
      if (whatWeDoRef.current) {
        const r = whatWeDoRef.current.getBoundingClientRect();
        setWhatWeDoRect({ top: r.top, height: r.height });
      }
      if (creativeMethodRef.current) {
        const r = creativeMethodRef.current.getBoundingClientRect();
        setCreativeMethodRect({ top: r.top, height: r.height });
      }
    };

    syncScroll();
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(syncScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', syncScroll);
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', syncScroll);
    };
  }, []);

  // Compute parallax split based on hero element's scroll through the viewport
  const heroSplit = useMemo(() => {
    // Distance the top of the hero section has scrolled past the top of the viewport
    const progressPx = Math.max(0, -heroRect.top);
    return computeHeroParallaxSplit(progressPx, viewportH);
  }, [heroRect.top, viewportH]);

  const manifestoWords = useMemo(() => MANIFESTO_TEXT.split(' '), []);

  const stackState = useMemo(
    () => computeWhatWeDoBestStack(whatWeDoRect.top, whatWeDoRect.height, viewportH, 5),
    [whatWeDoRect.top, whatWeDoRect.height, viewportH]
  );

  const hoveredHeroItem = useMemo(
    () => HERO_COLLAGE_ITEMS.find((item) => item.id === hoveredHeroId) || null,
    [hoveredHeroId]
  );

  const activeHeroBg = hoveredHeroItem ? hoveredHeroItem.hoverBg : 'rgba(14, 13, 15, 0.06)';

  const jumpToWhatWeDoCard = (cardIdx: number) => {
    if (!whatWeDoRef.current) return;
    const rect = whatWeDoRef.current.getBoundingClientRect();
    const topDoc = window.scrollY + rect.top;
    const scrollable = Math.max(whatWeDoRef.current.offsetHeight - viewportH, 1);
    const ratio = cardIdx === 0 ? 0.02 : (cardIdx / 4) * 0.9;
    window.scrollTo({
      top: topDoc + ratio * scrollable,
      behavior: 'smooth',
    });
  };

  const handleBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!briefName.trim() || !briefEmail.trim() || !briefEmail.includes('@')) {
      setBriefError('Please enter your name and a valid email address.');
      return;
    }
    setBriefError('');
    setBriefSubmitted(true);
  };

  // Compute Production Method highlight progress for the 3 arterial-red SVG hand-drawn strokes
  const projectVisionDraw = computeWordIllumination(
    creativeMethodRect.top,
    creativeMethodRect.height,
    viewportH,
    17,
    CREATIVE_METHOD_TOKENS.length
  );
  const creativeIdeaDraw = computeWordIllumination(
    creativeMethodRect.top,
    creativeMethodRect.height,
    viewportH,
    30,
    CREATIVE_METHOD_TOKENS.length
  );
  const ideaAndMoodDraw = computeWordIllumination(
    creativeMethodRect.top,
    creativeMethodRect.height,
    viewportH,
    43,
    CREATIVE_METHOD_TOKENS.length
  );

  const renderHeroCutout = (id: string) => {
    switch (id) {
      case 'synthesizer':
        return <TactileSynthesizerCutout className="w-full h-auto" />;
      case 'lattice':
        return <BiomorphicLatticeCutout className="w-full h-auto" />;
      case 'bust':
        return <SculpturalBustCutout className="w-full h-auto" />;
      case 'gears':
        return <ExplodedCadGearCutout className="w-full h-auto" />;
      case 'chrome':
        return <LiquidChromeSculptureCutout className="w-full h-auto" />;
      case 'relic':
        return <ChronoCoreArtifactCutout className="w-full h-auto" />;
      case 'lookdev':
        return <LookDevViewportCutout className="w-full h-auto" />;
      default:
        return null;
    }
  };

  return (
    <div
      id="emblematica-integrated-showcase"
      className="relative w-full text-[#FCFCFC] font-sans selection:bg-[#fe1e34] selection:text-white overflow-x-clip"
    >
      {/* =====================================================================
          INTEGRATED SECTION 1 — 3D REQUESTS INTRO HERO & 7 ARTIFACT COLLAGE
          (Integrated into home page with 20% opacity translucent background)
      ===================================================================== */}
      <section
        id="integrated-emblematica-hero"
        ref={heroSectionRef}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseLeave={() => setHoveredHeroId(null)}
        style={{ backgroundColor: activeHeroBg }}
        className="relative h-screen min-h-[700px] w-full overflow-hidden transition-colors duration-500 flex flex-col justify-between select-none border-t border-b border-white/[0.08] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
      >
        {/* Subtle Architectural CAD Grid & Radial Arterial Glow (Low-Opacity Integration) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 42%, rgba(254, 30, 52, 0.18) 0%, transparent 62%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 72px 72px, 72px 72px',
          }}
          aria-hidden="true"
        />

        {/* Center Architectural Studio Headline Backdrop inside Intro */}
        <div
          style={{
            opacity: Math.max(0, 1 - heroSplit.splitProgress * 2.4),
            transform: `translate3d(0, ${-heroSplit.splitProgress * 90}px, 0)`,
          }}
          className="relative z-30 pt-20 sm:pt-22 px-6 text-center pointer-events-none max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4d2d2] mb-3">
            <span className="text-[#fe1e34] font-bold">00 //</span>
            <span>BESPOKE 3D MODELING · STEP CAD · WATERTIGHT STL · 8K LOOKDEV</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[-0.035em] leading-[0.98] text-[#FCFCFC] [text-wrap:balance] drop-shadow-[0_12px_32px_rgba(0,0,0,0.65)]">
            Precision 3D Assets<span className="text-[#fe1e34]">,</span> Engineered On Demand
            <span className="text-[#fe1e34]">.</span>
          </h2>
        </div>

        {/* Floating Circular Studio Spec Hover Badge */}
        {hoveredHeroItem && heroSplit.splitProgress < 0.35 && (
          <div
            style={{
              transform: `translate3d(${cursorPos.x - 56}px, ${cursorPos.y - 56}px, 0)`,
            }}
            className="pointer-events-none absolute top-0 left-0 z-40 w-28 h-28 rounded-full bg-white/[0.06] backdrop-blur-xl text-[#FCFCFC] border border-white/20 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.28),0_12px_32px_rgba(0,0,0,0.45)] flex flex-col items-center justify-center p-2.5 text-center transition-transform duration-75"
          >
            <span className="text-[8.5px] font-mono font-extrabold uppercase leading-[1.15] tracking-tight drop-shadow">
              {hoveredHeroItem.badgeText}
            </span>
            <span className="mt-1 px-2 py-0.5 rounded-full bg-[#fe1e34]/75 backdrop-blur-md border border-white/20 text-white text-[8px] font-mono font-bold">
              {hoveredHeroItem.priceTag}
            </span>
          </div>
        )}

        {/* 7 Interactive 3D Requests Cutout Artifacts that Part Ways on Scroll */}
        <div className="absolute inset-0 max-w-[1520px] mx-auto w-full h-full">
          {HERO_COLLAGE_ITEMS.map((item) => {
            const tf = heroSplit.getObjectTransform(item.side, item.depthFactor, item.baseRotate);
            const isHovered = hoveredHeroId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                aria-label={`${item.badgeText} — ${item.priceTag}`}
                onMouseEnter={() => setHoveredHeroId(item.id)}
                onFocus={() => setHoveredHeroId(item.id)}
                onClick={() => {
                  onRequestClick(item.badgeText, item.priceTag);
                }}
                style={{
                  transform: `translate3d(${tf.translateX}px, ${tf.translateY}px, 0) rotate(${
                    isHovered ? tf.rotateDeg + (item.side === 'left' ? -4 : 4) : tf.rotateDeg
                  }deg) scale(${isHovered ? tf.scale * 1.05 : tf.scale})`,
                }}
                className={`group absolute ${item.positionClass} p-2.5 rounded-[28px] bg-white/[0.01] hover:bg-white/[0.035] backdrop-blur-[4px] hover:backdrop-blur-md border border-white/[0.04] hover:border-[#fe1e34]/45 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16),0_16px_40px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-300 ease-out focus:outline-none`}
              >
                {renderHeroCutout(item.id)}
              </button>
            );
          })}
        </div>

        {/* Bottom Center Studio Proposition Caption */}
        <div
          style={{
            opacity: Math.max(0, 1 - heroSplit.splitProgress * 2.2),
            transform: `translate3d(0, ${-heroSplit.splitProgress * 60}px, 0)`,
          }}
          className="relative z-30 pb-6 sm:pb-8 px-6 text-center pointer-events-none"
        >
          <div className="inline-block px-6 py-2.5 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.07]">
            <p className="max-w-2xl mx-auto text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.12em] leading-[1.45] text-[#d4d2d2]">
              WE ENGINEER CUSTOM 3D MODELS, WATERTIGHT 3D PRINT PROTOTYPES, PRODUCT CAD &amp; 8K
              VISUALIZATIONS — BUILT FOR HARDWARE FOUNDERS, GAME STUDIOS &amp; BRANDS
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTEGRATED SECTION 2 — 3D REQUESTS MANIFESTO (SCROLL-LIT WORD BY WORD)
          (Low-opacity translucent backdrop for seamless integration into home)
      ===================================================================== */}
      <section
        id="integrated-emblematica-manifesto"
        ref={manifestoRef}
        className="relative z-20 bg-[#080808]/[0.08] backdrop-blur-sm pt-16 sm:pt-24 pb-28 sm:pb-36 px-6 sm:px-12 border-b border-white/[0.07]"
      >
        <div className="max-w-5xl mx-auto">
          {/* Top Micro Header Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start mb-10 sm:mb-14 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#d4d2d2]">
            <div className="sm:col-span-4 text-[#fe1e34]">01 // STUDIO MANIFESTO</div>
            <div className="sm:col-span-8 sm:text-center max-w-md sm:mx-auto leading-[1.35]">
              AT 3D REQUESTS, WE BELIEVE EXTRAORDINARY 3D STARTS WITH ENGINEERING PRECISION
            </div>
          </div>

          {/* Giant Scroll-Scrubbed Word-by-Word Paragraph */}
          <h3 className="text-center font-display font-extrabold text-[clamp(1.95rem,4.5vw,4.25rem)] leading-[1.08] tracking-[-0.03em] [text-wrap:balance]">
            {manifestoWords.map((word, idx) => {
              const lit = computeWordIllumination(
                manifestoRect.top,
                manifestoRect.height,
                viewportH,
                idx,
                manifestoWords.length
              );
              // Interpolate brightness between muted dark (#454545) and bright white (#FCFCFC)
              const channel = Math.round(55 + lit * 197);
              return (
                <React.Fragment key={idx}>
                  <span
                    style={{ color: `rgb(${channel}, ${channel}, ${channel})` }}
                    className="transition-colors duration-75"
                  >
                    {word}
                  </span>{' '}
                </React.Fragment>
              );
            })}
          </h3>
        </div>
      </section>

      {/* =====================================================================
          INTEGRATED SECTION 3 — "WHAT WE DO BEST" PINNED 5-CARD TILTED STACK
          (Low-opacity translucent backdrop integrating into the home page flow)
      ===================================================================== */}
      <section
        id="integrated-emblematica-what-we-do"
        ref={whatWeDoRef}
        style={{ height: '420vh' }}
        className="relative z-20 bg-[#080808]/[0.06] backdrop-blur-sm w-full border-b border-white/[0.07]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 pb-8 px-4 sm:px-8">
          {/* Top Centered Kicker */}
          <div className="text-center z-30 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-[0.2em] text-[#fe1e34]">
              02 // WHAT WE DO BEST — CORE 3D DISCIPLINES
            </span>
          </div>

          {/* Center Pinned Overlapping 3D Tilted Cards Stage */}
          <div className="relative flex-1 flex items-center justify-center my-auto w-full max-w-[1100px] mx-auto">
            {WHAT_WE_DO_CARDS.map((card, idx) => {
              const cardTf = stackState.cards[idx] || {
                translateXvw: 0,
                translateYpx: 0,
                rotateDeg: 0,
                scale: 1,
                opacity: 1,
              };

              return (
                <article
                  key={card.num}
                  style={{
                    backgroundColor: card.bgColor,
                    color: card.textColor,
                    borderColor: card.borderColor,
                    zIndex: 10 + idx * 10,
                    opacity: cardTf.opacity,
                    pointerEvents: cardTf.opacity > 0.05 ? 'auto' : 'none',
                    transform: `translate3d(${cardTf.translateXvw}vw, ${cardTf.translateYpx}px, 0) rotate(${cardTf.rotateDeg}deg) scale(${cardTf.scale})`,
                  }}
                  className="absolute w-full max-w-[1040px] h-[440px] sm:h-[470px] rounded-[24px] border p-6 sm:p-9 lg:p-10 flex flex-col justify-between shadow-[0_30px_80px_rgba(0,0,0,0.75)] will-change-transform select-none overflow-hidden"
                >
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-current/15 text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-[0.14em] z-20 shrink-0">
                    <div className="flex items-center gap-4 sm:gap-8 truncate">
                      <span>{card.num}</span>
                      <span className="truncate">{card.category}</span>
                    </div>
                    <span
                      style={{ backgroundColor: card.badgeBg, color: card.badgeText }}
                      className="px-3.5 py-1 rounded-full text-[10px] font-mono font-extrabold tracking-wider shrink-0"
                    >
                      {card.startingPrice}
                    </span>
                  </div>

                  {/* Card Main Content Grid: 7 Columns Typography & Action Left / 5 Columns 3D Render Right */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch flex-1 pt-5 min-h-0">
                    {/* Left 7 Columns: Specs, Display Title, Description & CTA */}
                    <div className="md:col-span-7 flex flex-col justify-between z-20 min-w-0">
                      <div className="space-y-2.5">
                        <span className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] opacity-75">
                          {card.specs}
                        </span>
                        <h4 className="font-display text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] whitespace-pre-line break-words">
                          {card.title}
                        </h4>
                      </div>

                      <div className="pt-4 mt-auto border-t border-current/15 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <p
                          style={{ color: card.mutedColor }}
                          className="text-[10px] sm:text-[11px] font-bold uppercase leading-[1.42] tracking-[0.01em] max-w-[340px]"
                        >
                          {card.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            onRequestClick(card.title.replace('\n', ' '), card.startingPrice);
                          }}
                          className="shrink-0 self-start sm:self-end inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-current/30 text-[10px] font-mono font-extrabold uppercase tracking-wider hover:bg-black/10 transition-colors"
                        >
                          <span>COMMISSION THIS SERVICE</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right 5 Columns: Portfolio Render */}
                    <div className="hidden md:flex md:col-span-5 h-full relative items-center justify-end z-10 min-h-0">
                      <div className="relative w-full h-[320px] lg:h-[340px] rounded-[18px] overflow-hidden border border-black/15 shadow-2xl">
                        <img
                          src={card.image}
                          alt={card.imageAlt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                        {card.hasSpecOverlay && (
                          <div className="absolute bottom-3 left-3 right-3 rounded-[12px] glass-panel text-[#fcfcfc] p-3 flex items-center justify-between">
                            <span className="text-[9px] font-mono uppercase tracking-wider">
                              SUB-D QUAD TOPOLOGY · 8K UDIM
                            </span>
                            <span className="text-[9px] font-mono text-[#fe1e34] font-bold">
                              PRINT &amp; RIG READY
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Stepper Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 z-30">
            {WHAT_WE_DO_CARDS.map((c, idx) => (
              <button
                key={c.num}
                type="button"
                onClick={() => jumpToWhatWeDoCard(idx)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all ${
                  stackState.activeCardIndex === idx
                    ? 'glass-crimson text-[#FFFFFF]'
                    : 'glass-button text-[#b5b2b2] hover:text-white'
                }`}
              >
                {c.num} {c.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTEGRATED SECTION 4 — "4-STAGE PRODUCTION METHOD" + ARTERIAL RED MARKS
          (20% opacity translucent background integrating seamlessly)
      ===================================================================== */}
      <section
        id="integrated-emblematica-creative-method"
        ref={creativeMethodRef}
        className="relative z-20 bg-[#080808]/[0.08] backdrop-blur-sm pt-24 sm:pt-32 pb-32 sm:pb-44 px-6 sm:px-12 border-b border-white/[0.07]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-[0.2em] text-[#fe1e34]">
              03 // 4-STAGE PRODUCTION METHOD
            </span>
          </div>

          <h3 className="text-center font-display font-extrabold text-[clamp(1.95rem,4.5vw,4.3rem)] leading-[1.08] tracking-[-0.03em] [text-wrap:balance]">
            {CREATIVE_METHOD_TOKENS.map((token, idx) => {
              const lit = computeWordIllumination(
                creativeMethodRect.top,
                creativeMethodRect.height,
                viewportH,
                idx,
                CREATIVE_METHOD_TOKENS.length
              );
              const channel = Math.round(55 + lit * 197);

              return (
                <React.Fragment key={idx}>
                  <span
                    style={{ color: `rgb(${channel}, ${channel}, ${channel})` }}
                    className="relative inline-block transition-colors duration-75"
                  >
                    {token.word}

                    {/* Arterial Red Hand-Drawn Double Underline */}
                    {token.highlightGroup === 'project_vision' && (
                      <svg
                        viewBox="0 0 180 24"
                        fill="none"
                        preserveAspectRatio="none"
                        className="absolute left-0 -bottom-2.5 w-full h-4 pointer-events-none overflow-visible"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 10C48 6 118 6 178 11M8 18C58 14 126 14 174 17"
                          stroke="#fe1e34"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                          strokeDasharray="360"
                          strokeDashoffset={Math.round((1 - projectVisionDraw) * 360)}
                        />
                      </svg>
                    )}

                    {/* Arterial Red Hand-Drawn Open Box Bracket */}
                    {token.highlightGroup === 'creative_idea' && (
                      <svg
                        viewBox="0 0 320 76"
                        fill="none"
                        preserveAspectRatio="none"
                        className="absolute -inset-x-3 -bottom-2.5 h-[112%] w-[calc(100%+24px)] pointer-events-none overflow-visible"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 12V68H314V14"
                          stroke="#fe1e34"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="480"
                          strokeDashoffset={Math.round((1 - creativeIdeaDraw) * 480)}
                        />
                      </svg>
                    )}

                    {/* Arterial Red Hand-Drawn Underline */}
                    {token.highlightGroup === 'idea_and_mood' && (
                      <svg
                        viewBox="0 0 280 20"
                        fill="none"
                        preserveAspectRatio="none"
                        className="absolute left-0 -bottom-2 w-full h-3.5 pointer-events-none overflow-visible"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 12C80 7 200 7 278 12"
                          stroke="#fe1e34"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                          strokeDasharray="300"
                          strokeDashoffset={Math.round((1 - ideaAndMoodDraw) * 300)}
                        />
                      </svg>
                    )}
                  </span>{' '}
                </React.Fragment>
              );
            })}
          </h3>
        </div>
      </section>

      {/* =====================================================================
          INTEGRATED SECTION 5 — OPTICAL GLASSMORPHIC ATELIER SHEET
      ===================================================================== */}
      <section
        id="integrated-emblematica-founders"
        ref={foundersRef}
        className="relative z-30 bg-gradient-to-b from-white/[0.03] via-[#151418]/18 to-[#0a0a0d]/24 backdrop-blur-xl saturate-150 text-[#FCFCFC] pt-10 sm:pt-14 pb-0 overflow-hidden border-t border-b border-white/12 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.16),0_20px_60px_rgba(0,0,0,0.45)]"
      >
        {/* Curved Organic Top Edge */}
        <div className="absolute -top-10 left-0 right-0 h-12 overflow-hidden pointer-events-none opacity-20">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full"
            aria-hidden="true"
          >
            <path d="M0 80V36C360 -8 1080 -8 1440 36V80H0Z" fill="#F3EFEF" />
          </svg>
        </div>

        <div className="max-w-[1380px] mx-auto px-6 sm:px-12 pt-4 pb-16">
          <div className="text-center mb-3">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-panel text-[10px] font-mono font-extrabold uppercase tracking-[0.22em] text-[#fe1e34]">
              04 // THE 3D REQUESTS ATELIER
            </span>
          </div>

          {/* Giant Centered Headline */}
          <h3 className="relative z-20 text-center font-display font-extrabold text-[clamp(2.1rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-0.035em] text-[#FCFCFC] max-w-4xl mx-auto mb-10 [text-wrap:balance]">
            Built by senior 3D engineers, digital sculptors &amp; lookdev directors
            <span className="text-[#fe1e34]">.</span>
          </h3>

          {/* 3-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Editorial Block */}
            <div className="lg:col-span-3 self-center glass-panel glass-panel-hover rounded-[20px] p-6 space-y-4 transition-all">
              <p className="text-[11px] font-mono font-bold uppercase leading-[1.45] tracking-[0.01em] text-[#d4d2d2]">
                BEHIND 3D REQUESTS IS A DEDICATED COLLECTIVE OF INDUSTRIAL CAD ENGINEERS, ZBRUSH
                SCULPTORS, AND LOOKDEV DIRECTORS WITH 500+ SHIPPED 3D COMMISSIONS ACROSS HARDWARE,
                3D PRINTING, AND REAL-TIME ENGINES.
              </p>
              <div className="pt-3 border-t border-white/15 flex items-center gap-3 text-[10px] font-mono font-bold uppercase text-[#fe1e34]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% COMMERCIAL IP · BILATERAL NDA</span>
              </div>
            </div>

            {/* Center 3D Requests Monolith Sculpture Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[540px] aspect-[4/3.6] rounded-[28px] overflow-hidden glass-panel border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_28px_70px_rgba(0,0,0,0.65)] group">
                <img
                  src={HERO_SCULPTURE_IMAGE}
                  alt="3D Requests signature monolithic sculpture and precision CAD showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-wider text-[#FCFCFC]">
                  <span className="px-3.5 py-1 rounded-full glass-crimson text-white font-bold">
                    0.02MM CAD TOLERANCE
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/12 backdrop-blur-xl border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                    .STEP · .STL · .FBX · 8K EXR
                  </span>
                </div>
              </div>
            </div>

            {/* Right Editorial Block + Action Links */}
            <div className="lg:col-span-3 self-center glass-panel glass-panel-hover rounded-[20px] p-6 space-y-5 transition-all">
              <p className="text-[11px] font-mono font-bold uppercase leading-[1.45] tracking-[0.01em] text-[#d4d2d2]">
                WE WORK CLOSELY WITH EVERY CLIENT FROM ROUGH NAPKIN SKETCH OR 2D DRAWING TO FINAL
                WATERTIGHT STL PROTOTYPE, NATIVE STEP ASSEMBLY, OR 8K LAUNCH RENDER.
              </p>

              <div className="flex flex-col items-start gap-3 pt-2 border-t border-white/15">
                <button
                  type="button"
                  onClick={() => setAboutModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono font-extrabold uppercase tracking-[0.08em] text-[#fcfcfc] border-b-2 border-[#fe1e34] pb-0.5 hover:text-[#fe1e34] transition-colors"
                >
                  <span>EXPLORE STUDIO STANDARDS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono font-extrabold uppercase tracking-[0.08em] text-[#b5b2b2] hover:text-[#fcfcfc] transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-[#fe1e34]" />
                  <span>VIEW FULL 3D PORTFOLIO STACK →</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Requests Integrated Atelier Bar */}
        <div className="border-t border-white/10 bg-white/[0.02] backdrop-blur-xl px-6 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono font-extrabold uppercase tracking-wider text-[#fcfcfc]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span>3D REQUESTS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34]" />
            </span>
            <span>·</span>
            <span>LONDON · ZURICH · GLOBAL</span>
            <span>·</span>
            <span className="text-[#fe1e34]">SLA &lt; 12H</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setBriefSubmitted(false);
                setBriefModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-full glass-crimson text-white font-extrabold transition-all"
            >
              SUBMIT A 3D REQUEST
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('price-estimator');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onRequestClick('Custom 3D Estimate');
                }
              }}
              className="px-4 py-2 rounded-full glass-button text-[#fcfcfc] hover:text-white transition-all"
            >
              ESTIMATE 3D PROJECT →
            </button>
          </div>
        </div>
      </section>

      {/* Brief Modal */}
      {briefModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <div className="w-full max-w-lg rounded-[28px] glass-panel text-[#FCFCFC] p-7 sm:p-10 relative">
            <button
              type="button"
              onClick={() => setBriefModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#d4d2d2]"
            >
              <X className="w-4 h-4" />
            </button>

            {briefSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#fe1e34] mx-auto flex items-center justify-center">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight">
                  3D REQUEST RECEIVED
                </h3>
                <p className="text-xs font-medium text-[#d4d2d2] max-w-sm mx-auto leading-relaxed">
                  Thank you, {briefName}. Our principal 3D engineering lead will review your{' '}
                  <span className="font-bold text-white">{selectedServiceForBrief}</span> brief and
                  respond within 12 hours with a fixed milestone quote.
                </p>
                <button
                  type="button"
                  onClick={() => setBriefModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#fe1e34] text-white text-xs font-mono font-extrabold uppercase tracking-wider"
                >
                  DONE
                </button>
              </div>
            ) : (
              <form onSubmit={handleBriefSubmit} className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fe1e34]/15 border border-[#fe1e34]/40 text-[#fe1e34] text-[10px] font-mono font-extrabold uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>3D REQUESTS // DIRECT COMMISSION BRIEF</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-none">
                  START YOUR 3D PROJECT<span className="text-[#fe1e34]">.</span>
                </h3>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#b5b2b2] mb-1.5">
                    SELECT 3D DISCIPLINE
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Product Design & CAD',
                      '3D Printing & Prototypes',
                      'Characters & Collectibles',
                      '8K Renders & Game Assets',
                      '3D Motion & Animation',
                    ].map((pkg) => (
                      <button
                        key={pkg}
                        type="button"
                        onClick={() => setSelectedServiceForBrief(pkg)}
                        className={`px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase transition-colors ${
                          selectedServiceForBrief === pkg
                            ? 'bg-[#fe1e34] text-white'
                            : 'bg-[#1f1e20] text-[#d4d2d2] hover:bg-[#2a292b]'
                        }`}
                      >
                        {pkg}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#b5b2b2] mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={briefName}
                      onChange={(e) => setBriefName(e.target.value)}
                      placeholder="Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080808] border border-[#262525] text-xs font-medium text-white focus:outline-none focus:border-[#fe1e34]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#b5b2b2] mb-1">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      value={briefEmail}
                      onChange={(e) => setBriefEmail(e.target.value)}
                      placeholder="alex@hardware.io"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080808] border border-[#262525] text-xs font-medium text-white focus:outline-none focus:border-[#fe1e34]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#b5b2b2] mb-1">
                    PROJECT SPECIFICATIONS, TARGET FORMATS &amp; DIMENSIONS
                  </label>
                  <textarea
                    rows={3}
                    value={briefNotes}
                    onChange={(e) => setBriefNotes(e.target.value)}
                    placeholder="Describe your product, 3D print dimensions, target format (.STEP, .STL, .FBX)..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080808] border border-[#262525] text-xs font-medium text-white focus:outline-none focus:border-[#fe1e34]"
                  />
                </div>

                {briefError && <p className="text-xs font-bold text-[#fe1e34]">{briefError}</p>}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#fe1e34] hover:bg-[#e0192e] text-white text-xs font-mono font-extrabold uppercase tracking-wider shadow-[0_0_25px_rgba(254,30,52,0.4)] transition-transform active:scale-98"
                >
                  SUBMIT 3D REQUEST →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Standards Modal */}
      {aboutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="w-full max-w-xl rounded-[28px] bg-[#141315] text-[#FCFCFC] border border-[#262525] p-8 sm:p-10 shadow-2xl relative space-y-5">
            <button
              type="button"
              onClick={() => setAboutModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#d4d2d2]"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#fe1e34]">
              3D REQUESTS // ENGINEERING DELIVERABLE STANDARDS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-none">
              PRODUCTION-GRADE GEOMETRY, GUARANTEED<span className="text-[#fe1e34]">.</span>
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#d4d2d2] font-medium">
              Every 3D Requests commission undergoes a multi-stage geometry and lookdev audit:
              100% watertight manifold verification for 3D printing (.STL / .3MF), precision G2
              surface continuity for industrial CAD (.STEP / .IGES), and clean Sub-D quad topology
              with 8K UDIM textures for real-time engines and commercial rendering.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#262525] text-center">
              <div>
                <div className="font-display text-2xl font-extrabold text-[#fe1e34]">0.02mm</div>
                <div className="text-[10px] font-mono uppercase text-[#b5b2b2]">CAD TOLERANCE</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#fcfcfc]">100%</div>
                <div className="text-[10px] font-mono uppercase text-[#b5b2b2]">MANIFOLD MESHES</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#fcfcfc]">24–72h</div>
                <div className="text-[10px] font-mono uppercase text-[#b5b2b2]">FAST TURNAROUND</div>
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setAboutModalOpen(false);
                  setBriefSubmitted(false);
                  setBriefModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-full bg-[#fe1e34] text-white text-xs font-mono font-extrabold uppercase tracking-wider"
              >
                COMMISSION A 3D PROJECT →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
