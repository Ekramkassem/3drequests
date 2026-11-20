import React, { useRef, useState, useEffect } from 'react';
import {
  SYNTHESIZER_IMAGE,
  CHARACTER_BUST_IMAGE,
  LIQUID_CHROME_IMAGE,
  LATTICE_IMAGE,
  CHRONO_ORB_IMAGE,
  PAVILION_IMAGE,
  HERO_SCULPTURE_IMAGE,
} from '../data/studioData.ts';
import { soundFX } from '../utils/soundFX.ts';
import { computeDeckScrollMetrics } from '../utils/deckScrollMath.ts';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface PinnedDisciplinesDeckProps {
  onRequestClick: (preselectedType?: string, preselectedBudget?: string) => void;
}

interface DisciplineCardItem {
  num: string;
  tag: string;
  title: string;
  copy: string;
  specs: string[];
  image: string;
  bgColor: string;
  textColor: string;
  mutedColor: string;
  accentColor: string;
  borderColor: string;
  startingPrice: string;
}

const DISCIPLINE_CARDS: DisciplineCardItem[] = [
  {
    num: '01',
    tag: '(01) BESPOKE GEOMETRY',
    title: 'CUSTOM 3D MODELING',
    copy: 'From rough napkin sketches, 2D blueprints, or reference photographs to production-grade 3D assets built with clean topology and exact proportions.',
    specs: ['Sub-D Quad Meshes', 'Hard-Surface & Organic', '.OBJ / .FBX / .BLEND / .MAX'],
    image: CHRONO_ORB_IMAGE,
    bgColor: '#F3EFEF',
    textColor: '#0A0B0E',
    mutedColor: '#4A4E58',
    accentColor: '#fe1e34',
    borderColor: '#D4D2D2',
    startingPrice: 'From $150',
  },
  {
    num: '02',
    tag: '(02) INDUSTRIAL & CONSUMER',
    title: 'PRODUCT DESIGN & VISUALIZATION',
    copy: 'Iterative 3D form development, CMF (Color, Material, Finish) exploration, and studio-grade visualization for physical products before tooling begins.',
    specs: ['CMF Variants', 'Packaging & Hardware', '4K–8K Print & Web Ready'],
    image: SYNTHESIZER_IMAGE,
    bgColor: '#161920',
    textColor: '#F7F8FA',
    mutedColor: '#A9B0BC',
    accentColor: '#fe1e34',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    startingPrice: 'From $280',
  },
  {
    num: '03',
    tag: '(03) ADDITIVE MANUFACTURING',
    title: '3D PRINTING & PROTOTYPES',
    copy: 'Watertight, manifold meshes engineered specifically for SLA, SLS, FDM, and MJF printing—complete with wall-thickness verification, keying, and tolerances.',
    specs: ['Manifold Checked', 'Multi-Part Keying & Hollowing', '.STL / .3MF / .STEP'],
    image: LATTICE_IMAGE,
    bgColor: '#fe1e34',
    textColor: '#FFFFFF',
    mutedColor: 'rgba(255, 255, 255, 0.88)',
    accentColor: '#080808',
    borderColor: '#ff4d5e',
    startingPrice: 'From $100',
  },
  {
    num: '04',
    tag: '(04) PRECISION CAD & ASSEMBLIES',
    title: 'MECHANICAL & FUNCTIONAL MODELING',
    copy: 'Dimensionally accurate functional parts, enclosures, interlocking mechanisms, and exploded technical assemblies built for real-world fit and function.',
    specs: ['Parametric & Direct CAD', 'Fitment & Clearance', '.STEP / .IGES / .Parasolid'],
    image: SYNTHESIZER_IMAGE,
    bgColor: '#E4E5E9',
    textColor: '#0A0B0E',
    mutedColor: '#3E434D',
    accentColor: '#fe1e34',
    borderColor: '#C5C8D1',
    startingPrice: 'From $280',
  },
  {
    num: '05',
    tag: '(05) DIGITAL SCULPTING & FIGURINES',
    title: 'CHARACTER & COLLECTIBLE MODELING',
    copy: 'High-detail digital sculpting for stylized characters, gaming miniatures, vinyl toys, statues, and articulated collectibles ready for resin printing or rigging.',
    specs: ['High-Poly ZBrush/Blender Sculpts', 'Cut & Keyed for Print', 'Retopologized for Rigging'],
    image: CHARACTER_BUST_IMAGE,
    bgColor: '#1F1B2C',
    textColor: '#F7F8FA',
    mutedColor: '#C2BDD6',
    accentColor: '#fe1e34',
    borderColor: 'rgba(254, 30, 52, 0.35)',
    startingPrice: 'From $180',
  },
  {
    num: '06',
    tag: '(06) COMMERCIAL LOOKDEV & STILLS',
    title: 'PRODUCT RENDERING',
    copy: 'Campaign-ready packshots, macro material close-ups, lifestyle staging, and e-commerce 360° turntables that outperform traditional studio photography.',
    specs: ['Physically Based Shaders', 'Multi-Pass EXR Compositing', '4K / 8K Stills'],
    image: HERO_SCULPTURE_IMAGE,
    bgColor: '#ECEAE4',
    textColor: '#0A0B0E',
    mutedColor: '#4A4843',
    accentColor: '#0A0B0E',
    borderColor: '#D5D1C8',
    startingPrice: 'From $150',
  },
  {
    num: '07',
    tag: '(07) KINETIC STORYTELLING',
    title: '3D ANIMATION & MOTION',
    copy: 'Feature-reveal product films, exploded-view technical animations, physics simulations, and social launch loops that explain complex products in seconds.',
    specs: ['60fps Product Films', 'Rigid/Soft-Body & Fluid Sims', 'ProRes / MP4 / WebM'],
    image: LIQUID_CHROME_IMAGE,
    bgColor: '#1E2636',
    textColor: '#FFFFFF',
    mutedColor: '#B8C4DC',
    accentColor: '#fe1e34',
    borderColor: 'rgba(255, 255, 255, 0.16)',
    startingPrice: 'From $320',
  },
  {
    num: '08',
    tag: '(08) END-TO-END CAMPAIGN WORLDS',
    title: 'CUSTOM VISUAL PRODUCTION',
    copy: 'Full-scale 3D environments, abstract brand worlds, interactive web 3D assets, and bespoke visual direction tailored for agencies, startups, and enterprise launches.',
    specs: ['Art Direction & Environments', 'Interactive Stage Design', 'Web-Optimized GLB / USDZ / Video'],
    image: PAVILION_IMAGE,
    bgColor: '#0E1015',
    textColor: '#F7F8FA',
    mutedColor: '#A9B0BC',
    accentColor: '#fe1e34',
    borderColor: 'rgba(254, 30, 52, 0.5)',
    startingPrice: 'From $490',
  },
];

export const PinnedDisciplinesDeck: React.FC<PinnedDisciplinesDeckProps> = ({
  onRequestClick,
}) => {
  const outerTrackRef = useRef<HTMLDivElement>(null);
  const viewportStageRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [scrollDistancePx, setScrollDistancePx] = useState<number>(2400);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const measureAndSync = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);

      if (!outerTrackRef.current) return;
      const vh = window.innerHeight || 800;
      const trackScrollW = horizontalTrackRef.current?.scrollWidth || 5600;
      const stageClientW = viewportStageRef.current?.clientWidth || window.innerWidth || 1440;
      const maxTranslate = Math.max(0, trackScrollW - stageClientW);

      // Set vertical scroll runway proportional to horizontal travel so all 8 cards finish smoothly
      const targetRunway = Math.max(1800, Math.round(maxTranslate * 0.62));
      setScrollDistancePx((prev) => (Math.abs(prev - targetRunway) > 8 ? targetRunway : prev));

      const rect = outerTrackRef.current.getBoundingClientRect();
      const metrics = computeDeckScrollMetrics({
        sectionTop: rect.top,
        sectionHeight: vh + targetRunway,
        viewportHeight: vh,
        trackScrollWidth: trackScrollW,
        trackClientWidth: stageClientW,
        cardCount: DISCIPLINE_CARDS.length,
      });

      setProgress(metrics.progress);
      setTranslateX(metrics.translateX);
      setActiveCardIndex(metrics.activeCardIndex);
    };

    measureAndSync();

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measureAndSync);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', measureAndSync);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measureAndSync);
    };
  }, []);

  const jumpToCard = (idx: number) => {
    soundFX.playSelect();
    if (!outerTrackRef.current) return;
    const rect = outerTrackRef.current.getBoundingClientRect();
    const topOfTrack = window.scrollY + rect.top;
    const vh = window.innerHeight || 800;
    const scrollable = Math.max(outerTrackRef.current.offsetHeight - vh, 1);
    const targetRatio = idx / (DISCIPLINE_CARDS.length - 1);
    window.scrollTo({
      top: topOfTrack + targetRatio * scrollable,
      behavior: 'smooth',
    });
  };

  // Mobile layout: tactile vertical sticky card stack
  if (isMobile) {
    return (
      <section id="disciplines-deck" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8 scroll-mt-24">
        <div className="border-b border-[#262525] pb-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#fcfcfc] tracking-tight uppercase">
            Eight Specialized 3D Verticals<span className="text-[#fe1e34]">.</span>
          </h2>
        </div>

        <div className="space-y-6 pb-8">
          {DISCIPLINE_CARDS.map((card, idx) => (
            <div
              key={card.num}
              style={{
                backgroundColor: card.bgColor,
                color: card.textColor,
                borderColor: card.borderColor,
                top: `${76 + idx * 10}px`,
              }}
              className="sticky rounded-[24px] border p-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)] space-y-5"
            >
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                <span className="font-bold">{card.tag}</span>
                <span className="px-2.5 py-0.5 rounded-full border border-current/25 text-[10px]">
                  {card.startingPrice}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-[0.95] tracking-tight uppercase">
                    {card.title}
                  </h3>
                  <p style={{ color: card.mutedColor }} className="text-xs sm:text-sm leading-relaxed font-medium">
                    {card.copy}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.specs.map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-current/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-5">
                  <div className="aspect-[4/3] rounded-[16px] overflow-hidden border border-black/15 shadow-lg">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRequestClick(card.title, card.startingPrice)}
                style={{
                  backgroundColor: card.accentColor,
                  color: '#FFFFFF',
                }}
                className="w-full py-3 px-5 rounded-[10px] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>COMMISSION {card.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop Layout: Emblematica-style Pinned Horizontal & 3D Tilt Stack (M-06)
  return (
    <section
      id="disciplines-deck"
      ref={outerTrackRef}
      style={{ height: `calc(100vh + ${scrollDistancePx}px)` }}
      className="relative w-full scroll-mt-20"
    >
      <div
        ref={viewportStageRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 pb-10 px-6 sm:px-10"
      >
        {/* Top Deck Header & Direct Step Controls */}
        <div className="max-w-7xl mx-auto w-full flex items-end justify-between gap-6 border-b border-white/12 pb-5 z-20">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-[-0.035em] uppercase leading-none">
              Eight Specialized 3D Verticals<span className="text-[#fe1e34]">.</span> One Studio<span className="text-[#fe1e34]">.</span>
            </h2>
          </div>

          {/* Interactive Stepper & Card Selector Pills */}
          <div className="flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-1 glass-panel p-1 rounded-full">
              {DISCIPLINE_CARDS.map((c, idx) => (
                <button
                  key={c.num}
                  type="button"
                  onClick={() => jumpToCard(idx)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition-all ${
                    activeCardIndex === idx
                      ? 'bg-[#fe1e34] text-white font-bold shadow-[0_0_14px_rgba(254,30,52,0.5)]'
                      : 'text-[#b5b2b2] hover:text-[#fcfcfc]'
                  }`}
                >
                  {c.num}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => jumpToCard(Math.max(0, activeCardIndex - 1))}
              aria-label="Previous Discipline Card"
              className="p-2.5 rounded-full glass-button text-[#fcfcfc] transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => jumpToCard(Math.min(DISCIPLINE_CARDS.length - 1, activeCardIndex + 1))}
              aria-label="Next Discipline Card"
              className="p-2.5 rounded-full glass-button text-[#fcfcfc] transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Pinned Kinetic Card Track */}
        <div className="relative flex-1 flex items-center my-auto overflow-visible">
          <div
            ref={horizontalTrackRef}
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              transition: 'transform 50ms linear',
            }}
            className="flex w-max items-center gap-7 pl-[4vw] pr-[6vw] will-change-transform"
          >
            {DISCIPLINE_CARDS.map((card, idx) => {
              // Calculate distance from current focal progress for Emblematica 3D tilt effect
              const cardCenterRatio = idx / (DISCIPLINE_CARDS.length - 1);
              const delta = cardCenterRatio - progress;
              const rotateZ = Math.max(-3.5, Math.min(3.5, delta * 6.5));
              const scale = Math.max(0.93, 1 - Math.abs(delta) * 0.12);

              return (
                <div
                  key={card.num}
                  style={{
                    backgroundColor: card.bgColor,
                    color: card.textColor,
                    borderColor: card.borderColor,
                    transform: `scale(${scale}) rotateZ(${rotateZ}deg)`,
                  }}
                  className="group relative w-[640px] md:w-[720px] h-[430px] md:h-[460px] rounded-[28px] border p-8 md:p-10 flex flex-col justify-between shrink-0 shadow-[0_30px_80px_rgba(0,0,0,0.65)] transition-transform duration-300 select-none overflow-hidden"
                >
                  {/* Top Row: Index Tag & Price Badge */}
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.15em] z-10">
                    <span className="font-bold">{card.tag}</span>
                    <span className="px-3 py-1 rounded-full border border-current/25 font-bold text-[11px]">
                      {card.startingPrice}
                    </span>
                  </div>

                  {/* Middle Row: 2-Column Split (Bold Display Typography Left + Cutout 3D Visual Right) */}
                  <div className="grid grid-cols-12 gap-6 items-center my-auto z-10">
                    <div className="col-span-7 space-y-4">
                      <h3 className="font-display text-3xl md:text-4xl font-extrabold leading-[0.92] tracking-[-0.03em] uppercase">
                        {card.title}
                      </h3>
                      <p
                        style={{ color: card.mutedColor }}
                        className="text-xs md:text-sm leading-relaxed font-medium"
                      >
                        {card.copy}
                      </p>

                      {/* Deliverable Spec Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {card.specs.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-current/20 font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right 5 Columns: 3D Cutout Visual Showcase with Hover Elevation */}
                    <div className="col-span-5">
                      <div className="relative aspect-[4/3.6] rounded-[20px] overflow-hidden border border-black/15 shadow-2xl group-hover:-translate-y-2.5 group-hover:scale-[1.04] transition-all duration-500">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/75 text-white text-[9px] font-mono uppercase tracking-wider">
                          DISCIPLINE #{card.num}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Bar Inside Card */}
                  <div className="pt-4 border-t border-current/15 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase tracking-widest opacity-80">
                      100% COMMERCIAL IP · 2 FREE REVISIONS
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        soundFX.playSelect();
                        onRequestClick(card.title, card.startingPrice);
                      }}
                      style={{
                        backgroundColor: card.accentColor,
                        color: '#FFFFFF',
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-lg"
                    >
                      <span>COMMISSION THIS SERVICE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Progress Scrubber Bar */}
        <div className="max-w-7xl mx-auto w-full pt-4 border-t border-[#262525] flex items-center justify-between gap-6 text-[11px] font-mono text-[#b5b2b2] z-20">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <span className="text-[#fe1e34] font-bold">[01]</span>
            <div className="flex-1 h-1.5 bg-[#1b1a1c] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#fe1e34] transition-all duration-75"
                style={{ width: `${Math.max(8, progress * 100)}%` }}
              />
            </div>
            <span className="text-[#fcfcfc] font-bold">[08]</span>
          </div>

          <button
            type="button"
            onClick={() => onRequestClick('Multi-Discipline Custom Package')}
            className="inline-flex items-center gap-2 text-[#fcfcfc] hover:text-[#fe1e34] transition-colors font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#fe1e34]" />
            <span>NEED MULTIPLE DISCIPLINES? BUILD A CUSTOM PACKAGE →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
