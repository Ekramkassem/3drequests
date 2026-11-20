import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageType, PortfolioCategory, ProjectItem } from '../../types.ts';
import { CURATED_PROJECTS } from '../../data/studioData.ts';
import { filterProjectsByCategory } from '../../utils/calculator.ts';
import { CinematicOrrinRibbon } from '../portfolio/CinematicOrrinRibbon.tsx';
import { CategoryTileNav } from '../portfolio/CategoryTileNav.tsx';
import { OpaqueProjectStack } from '../portfolio/OpaqueProjectStack.tsx';
import { soundFX } from '../../utils/soundFX.ts';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Box,
  Cpu,
  CheckCircle2,
  Flame,
  Disc3,
  Shapes,
  Clock,
  ShieldCheck,
  FileCode2,
  ArrowDown,
  Gamepad2,
  Building2,
  Search,
  LayoutGrid,
  Eye,
  X,
  SlidersHorizontal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioPageProps {
  onNavigate: (page: PageType) => void;
  onSelectProject: (project: ProjectItem) => void;
  onRequestClick: (preselectedType?: string, preselectedBudget?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onSelectProject,
  onRequestClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(18);
  const [viewMode, setViewMode] = useState<'both' | '3d' | 'grid'>('both');
  const [activeSection, setActiveSection] = useState<'intro' | 'showroom' | 'commission'>('intro');
  const [showStickyDock, setShowStickyDock] = useState<boolean>(false);

  // Section Refs for scroll tracking & navigation
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLElement>(null);
  const showroomSectionRef = useRef<HTMLElement>(null);
  const commissionSectionRef = useRef<HTMLElement>(null);

  // Animated DOM element refs for GSAP ScrollTrigger
  const showroomHeaderRef = useRef<HTMLDivElement>(null);
  const categoryNavRef = useRef<HTMLDivElement>(null);
  const showroomStackRef = useRef<HTMLDivElement>(null);
  const conduit1Ref = useRef<HTMLDivElement>(null);
  const conduit2Ref = useRef<HTMLDivElement>(null);
  const commissionCardRef = useRef<HTMLDivElement>(null);

  // 9 comprehensive categories matching all 217 real studio project commissions
  const categoryTiles: {
    id: PortfolioCategory;
    label: string;
    count: number;
    subtitle: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'all',
      label: 'All Projects',
      count: CURATED_PROJECTS.length,
      subtitle: 'Complete Master Archive',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      id: 'product',
      label: 'Product Design',
      count: CURATED_PROJECTS.filter((p) => p.category === 'product').length,
      subtitle: 'Hardware & CMF',
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      id: 'character',
      label: 'Characters',
      count: CURATED_PROJECTS.filter((p) => p.category === 'character').length,
      subtitle: 'Anatomy & Busts',
      icon: <Flame className="w-4 h-4" />,
    },
    {
      id: 'industrial',
      label: 'Industrial CAD',
      count: CURATED_PROJECTS.filter((p) => p.category === 'industrial').length,
      subtitle: 'Robotics & Tooling',
      icon: <Disc3 className="w-4 h-4" />,
    },
    {
      id: 'game-assets',
      label: 'Game Assets',
      count: CURATED_PROJECTS.filter((p) => p.category === 'game-assets').length,
      subtitle: 'Weapons & Environments',
      icon: <Gamepad2 className="w-4 h-4" />,
    },
    {
      id: '3dprint',
      label: '3D Prototyping',
      count: CURATED_PROJECTS.filter((p) => p.category === '3dprint').length,
      subtitle: 'Additive & SLA',
      icon: <Box className="w-4 h-4" />,
    },
    {
      id: 'animation',
      label: 'Animation & CGI',
      count: CURATED_PROJECTS.filter((p) => p.category === 'animation').length,
      subtitle: 'Kinetic & Fluid',
      icon: <Shapes className="w-4 h-4" />,
    },
    {
      id: 'architecture',
      label: 'Architecture',
      count: CURATED_PROJECTS.filter((p) => p.category === 'architecture').length,
      subtitle: 'Spatial & Interiors',
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      id: 'experimental',
      label: 'Custom 3D',
      count: CURATED_PROJECTS.filter((p) => p.category === 'experimental').length,
      subtitle: 'Specialized Systems',
      icon: <Layers className="w-4 h-4" />,
    },
  ];

  const filteredProjects = filterProjectsByCategory(
    CURATED_PROJECTS,
    selectedCategory,
    searchQuery
  );

  // Reset pagination when category or search changes
  const handleCategorySelect = (cat: PortfolioCategory) => {
    setSelectedCategory(cat);
    setVisibleCount(18);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setVisibleCount(18);
  };

  // Scroll listener for sticky dock, active telemetry spine, and GSAP ScrollTrigger
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyDock(scrollY > 500);

      const showroomTop = showroomSectionRef.current?.offsetTop ?? 700;
      const commissionTop = commissionSectionRef.current?.offsetTop ?? 1800;

      if (scrollY >= commissionTop - 380) {
        setActiveSection('commission');
      } else if (scrollY >= showroomTop - 380) {
        setActiveSection('showroom');
      } else {
        setActiveSection('intro');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // GSAP ScrollTrigger Parallax & Reveal Sequences
    const ctx = gsap.context(() => {
      // 1. Showroom Header Entrance Animation
      if (showroomHeaderRef.current) {
        gsap.fromTo(
          showroomHeaderRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: showroomHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Category Nav Staggered Reveal
      if (categoryNavRef.current) {
        gsap.fromTo(
          categoryNavRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: categoryNavRef.current,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Showroom 3D Viewport entrance with scale reveal
      if (showroomStackRef.current) {
        gsap.fromTo(
          showroomStackRef.current,
          { opacity: 0, scale: 0.97, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: showroomStackRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 4. Connecting Conduits Kinetic Pulse
      [conduit1Ref, conduit2Ref].forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current.querySelector('.conduit-line'),
            { scaleY: 0, transformOrigin: 'top center' },
            {
              scaleY: 1,
              duration: 1.2,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
          gsap.fromTo(
            ref.current.querySelector('.conduit-dot'),
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              delay: 0.6,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      // 5. Final Section 03 Conversion Climax card reveal & trust badge sweep
      if (commissionCardRef.current) {
        gsap.fromTo(
          commissionCardRef.current,
          { opacity: 0, scale: 0.94, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: commissionCardRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        const badges = commissionCardRef.current.querySelectorAll('.trust-badge');
        if (badges.length > 0) {
          gsap.fromTo(
            badges,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: commissionCardRef.current,
                start: 'top 72%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    }, pageContainerRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const scrollToSection = (target: 'intro' | 'showroom' | 'commission') => {
    soundFX.playSelect();
    const refs = {
      intro: introSectionRef,
      showroom: showroomSectionRef,
      commission: commissionSectionRef,
    };
    const targetRef = refs[target]?.current;
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={pageContainerRef}
      className="relative min-h-screen text-left selection:bg-[#fe1e34] selection:text-white"
    >
      {/* 1. PERSISTENT VERTICAL TELEMETRY SPINE (Left Rail on Desktop) */}
      <aside
        aria-label="Portfolio Exhibition Navigation Spine"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-4 pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-md p-2.5 rounded-full border border-[#222]">
          {[
            { id: 'intro', label: '01', title: 'Studio Vision' },
            { id: 'showroom', label: '02', title: '3D Showroom' },
            { id: 'commission', label: '03', title: 'Direct Commission' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id as any)}
                title={item.title}
                className="group relative flex items-center justify-center w-7 h-7 rounded-full transition-all"
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#fe1e34] w-2.5 h-2.5 shadow-[0_0_12px_#fe1e34]'
                      : 'bg-[#333] group-hover:bg-[#888]'
                  }`}
                />
                <span className="absolute left-9 px-2.5 py-1 rounded-[5px] bg-[#121112] border border-[#262525] text-[9px] font-mono uppercase tracking-widest text-[#fcfcfc] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  {item.label} · {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* 2. SECTION 1: CINEMATIC HOOK & FLOATING 3D PROJECT FIELD (Orrin Kinetic Signature) */}
      <section ref={introSectionRef} className="relative w-full">
        <CinematicOrrinRibbon
          projects={CURATED_PROJECTS}
          onSelectProject={onSelectProject}
          onRequestClick={() => onRequestClick()}
          onExploreWorkClick={() => scrollToSection('showroom')}
        />
      </section>

      {/* CONNECTING CONDUIT 1 -> 2 */}
      <div
        ref={conduit1Ref}
        className="flex flex-col items-center justify-center -my-4 sm:-my-6 relative z-20 pointer-events-none"
      >
        <div className="conduit-line h-16 sm:h-24 w-px bg-gradient-to-b from-[#fe1e34] via-[#fe1e34]/40 to-transparent" />
        <div className="conduit-dot w-2 h-2 rounded-full bg-[#fe1e34] shadow-[0_0_14px_#fe1e34] -mt-1" />
      </div>

      {/* 3. SECTION 2: THE 3D SHOWROOM & MASTER ARCHIVE */}
      <section
        ref={showroomSectionRef}
        className="max-w-7xl mx-auto px-6 sm:px-8 pt-10 sm:pt-14 space-y-8 scroll-mt-20"
      >
        {/* Editorial Section Header */}
        <div
          ref={showroomHeaderRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#262525]"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#fe1e34] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34]" />
              <span>02 / CONTINUOUS PRODUCTION SHOWROOM</span>
              <span aria-hidden="true" className="text-[#525252]">·</span>
              <span className="text-[#b5b2b2]">PHYSICALLY TETHERED EXHIBITION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-tight">
              Selected Commissions & Archive<span className="text-[#fe1e34]">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#b5b2b2] font-light leading-relaxed">
              Explore {CURATED_PROJECTS.length} verified commercial commissions and creative artifacts across 9 disciplines through our continuous spatial stack and high-resolution case study archive.
            </p>
          </div>

          {/* Real-time Studio Availability Ticker */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-[8px] bg-[#121112] border border-[#262525] text-[10px] font-mono text-[#b5b2b2]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Studio Capacity: <strong className="text-[#fcfcfc]">2 Q2 Commission Slots Open</strong></span>
            </div>
          </div>
        </div>

        {/* 1. SINGLE UNIFIED SECTOR TAXONOMY (9 Disciplines) */}
        <div ref={categoryNavRef}>
          <CategoryTileNav
            categories={categoryTiles}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>

        {/* SEARCH BAR & VIEW MODE CONTROLS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 rounded-[12px] bg-[#100f10] border border-[#222122]">
          {/* Live Search Input */}
          <div className="relative flex-1 flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-[#888] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder={`Search ${CURATED_PROJECTS.length} projects by name, client, software, or specs...`}
              className="w-full pl-10 pr-9 py-2.5 rounded-[8px] bg-[#171617] border border-[#262525] focus:border-[#fe1e34] text-xs font-mono text-[#fcfcfc] placeholder:text-[#525252] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className="absolute right-3 p-1 rounded-full text-[#888] hover:text-[#fff] transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* View Mode Controls & Count Indicator */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <div className="text-[10px] font-mono text-[#888] hidden md:block">
              Showing <strong className="text-[#fcfcfc]">{Math.min(visibleCount, filteredProjects.length)}</strong> of <strong className="text-[#fe1e34]">{filteredProjects.length}</strong>
            </div>

            <div className="flex items-center gap-1 bg-[#171617] p-1 rounded-[8px] border border-[#262525]">
              <button
                type="button"
                onClick={() => {
                  soundFX.playSelect();
                  setViewMode('both');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[10px] font-mono transition-all ${
                  viewMode === 'both'
                    ? 'bg-[#fe1e34] text-white font-bold'
                    : 'text-[#888] hover:text-white'
                }`}
                title="Dual 3D Stack + Grid View"
              >
                <Eye className="w-3 h-3" />
                <span>Dual</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundFX.playSelect();
                  setViewMode('3d');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[10px] font-mono transition-all ${
                  viewMode === '3d'
                    ? 'bg-[#fe1e34] text-white font-bold'
                    : 'text-[#888] hover:text-white'
                }`}
                title="Interactive 3D Stack View"
              >
                <Layers className="w-3 h-3" />
                <span>3D Stack</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundFX.playSelect();
                  setViewMode('grid');
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[10px] font-mono transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#fe1e34] text-white font-bold'
                    : 'text-[#888] hover:text-white'
                }`}
                title="Full Catalog Grid"
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Catalog</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. SHOWROOM 3D VIEWPORT (When active in 3d or both view modes) */}
        {(viewMode === '3d' || viewMode === 'both') && (
          <div ref={showroomStackRef} className="pt-2 overflow-visible">
            <div className="flex items-center justify-between pb-3 text-[10px] font-mono text-[#888] uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-ping" />
                <span>Spatial 3D Physics Stack · Drag with momentum or scroll wheel</span>
              </span>
              <span className="text-[#fe1e34] font-semibold hidden sm:inline">
                Click any 3D card for case study
              </span>
            </div>

            <OpaqueProjectStack
              projects={filteredProjects}
              allProjects={CURATED_PROJECTS}
              onSelectProject={onSelectProject}
              onRequestClick={() => onRequestClick(selectedCategory !== 'all' ? selectedCategory : undefined)}
              onResetFilters={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            />
          </div>
        )}

        {/* 3. MASTER CATALOG EXHIBITION GRID (When active in grid or both view modes) */}
        {(viewMode === 'grid' || viewMode === 'both') && (
          <div className="pt-6 space-y-6">
            <div className="flex items-center justify-between border-b border-[#262525] pb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#fcfcfc]">
                <LayoutGrid className="w-4 h-4 text-[#fe1e34]" />
                <span className="font-bold">Studio Archive Catalog</span>
                <span className="text-[#525252]">/</span>
                <span className="text-[#888]">
                  {filteredProjects.length} Verified Deliverables
                </span>
              </div>

              {selectedCategory !== 'all' && (
                <button
                  type="button"
                  onClick={() => handleCategorySelect('all')}
                  className="text-[10px] font-mono text-[#fe1e34] hover:underline"
                >
                  Clear Category Filter
                </button>
              )}
            </div>

            {filteredProjects.length === 0 ? (
              <div className="py-20 text-center space-y-4 rounded-[12px] bg-[#100f10] border border-[#222]">
                <p className="text-sm font-mono text-[#b5b2b2]">
                  No studio projects match &ldquo;{searchQuery}&rdquo; in this sector.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-[6px] bg-[#fe1e34] text-white text-xs font-mono uppercase font-semibold"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.slice(0, visibleCount).map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                    onClick={() => {
                      soundFX.playSelect();
                      onSelectProject(project);
                    }}
                    className="group relative rounded-[12px] overflow-hidden bg-[#100f10] border border-[#222122] hover:border-[#fe1e34] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between"
                  >
                    {/* Media Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0a]">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100f10] via-transparent to-transparent opacity-80" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase">
                        <span className="px-2.5 py-1 rounded-[4px] bg-[#0c0c0c]/85 backdrop-blur-md text-[#fcfcfc] border border-[#262525]">
                          {project.categoryLabel}
                        </span>
                        <span className="px-2 py-0.5 rounded-[4px] bg-[#fe1e34]/90 text-white font-bold">
                          {project.year}
                        </span>
                      </div>

                      {/* Bottom Client Overlay */}
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#888] truncate max-w-[180px]">
                          {project.client}
                        </span>
                        <span className="text-[#fe1e34] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 font-bold">
                          <span>INSPECT</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Card Content & Specs */}
                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <h3 className="font-display font-bold text-base text-[#fcfcfc] tracking-tight group-hover:text-white transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[#888] font-light line-clamp-2 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Technical Specs Footer */}
                      <div className="pt-3 border-t border-[#1f1e1f] flex items-center justify-between text-[10px] font-mono text-[#777]">
                        <span className="truncate max-w-[140px]">
                          {project.technicalSpecs.polycount}
                        </span>
                        <span className="text-[#fe1e34] truncate max-w-[120px]">
                          {project.materials[0] || 'High-Spec PBR'}
                        </span>
                      </div>
                    </div>

                    {/* Crimson bottom glow line on hover */}
                    <div className="h-[2px] w-0 group-hover:w-full bg-[#fe1e34] transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination / Load More Controls */}
            {filteredProjects.length > visibleCount && (
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    soundFX.playSelect();
                    setVisibleCount((prev) => prev + 18);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#171617] hover:bg-[#222122] border border-[#2a292a] hover:border-[#fe1e34] text-[#fcfcfc] text-xs font-mono uppercase font-bold tracking-wider transition-all shadow-lg"
                >
                  Load Next 18 Projects ({Math.min(visibleCount + 18, filteredProjects.length)} / {filteredProjects.length})
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundFX.playSelect();
                    setVisibleCount(filteredProjects.length);
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-[8px] bg-transparent hover:bg-[#151415] border border-[#222] text-[#888] hover:text-[#fff] text-xs font-mono uppercase tracking-wider transition-all"
                >
                  Show All ({filteredProjects.length})
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* CONNECTING CONDUIT 2 -> 3 */}
      <div
        ref={conduit2Ref}
        className="flex flex-col items-center justify-center my-10 sm:my-16 relative z-20 pointer-events-none"
      >
        <div className="conduit-line h-16 sm:h-24 w-px bg-gradient-to-b from-[#fe1e34]/70 via-[#fe1e34]/30 to-transparent" />
        <div className="conduit-dot w-2 h-2 rounded-full bg-[#fe1e34] shadow-[0_0_14px_#fe1e34] -mt-1" />
      </div>

      {/* 4. SECTION 3: CONVERSION CLIMAX & DIRECT CREATIVE BRIEFING SUITE */}
      <section
        ref={commissionSectionRef}
        className="max-w-7xl mx-auto px-6 sm:px-8 pb-20 scroll-mt-20"
      >
        <div
          ref={commissionCardRef}
          className="relative rounded-[18px] overflow-hidden bg-gradient-to-br from-[#1a1112] via-[#0d0c0d] to-[#070707] border border-[#2b2324] p-8 sm:p-14 md:p-18 space-y-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#fe1e34]/15 blur-[120px] pointer-events-none" />

          {/* Heading Block */}
          <div className="relative space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fe1e34]/10 border border-[#fe1e34]/30 text-[10px] font-mono text-[#fe1e34] uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span>DIRECT PRODUCTION INITIATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#fcfcfc] tracking-tight">
              Commission Your Custom 3D Asset<span className="text-[#fe1e34]">.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#b5b2b2] font-light leading-relaxed">
              Whether you need manufacturing-ready NURBS STEP CAD, collectible resin print assemblies, or Nanite-ready cinematic characters, our studio delivers with unyielding precision.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onRequestClick(selectedCategory !== 'all' ? selectedCategory : undefined)}
              className="w-full sm:w-auto px-8 py-4 rounded-[10px] bg-[#fe1e34] hover:bg-[#d6172a] text-[#fcfcfc] text-xs font-mono uppercase font-bold tracking-widest transition-all shadow-[0_0_30px_rgba(254,30,52,0.45)] hover:shadow-[0_0_40px_rgba(254,30,52,0.65)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span>Submit a Creative Brief</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-7 py-4 rounded-[10px] bg-[#141314] hover:bg-[#1a191a] text-[#b5b2b2] hover:text-[#fcfcfc] border border-[#2b2526] hover:border-[#444] text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>Explore Capabilities Matrix</span>
            </button>
          </div>

          {/* Trust Guarantees Row */}
          <div className="relative pt-6 border-t border-[#221c1d] grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-[#8e8d8d]">
            <div className="trust-badge flex flex-col items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#fe1e34]" />
              <span className="text-[#fcfcfc] font-semibold">12-Hour SLA Response</span>
              <span className="text-[10px] text-[#525252]">Direct Director Review</span>
            </div>

            <div className="trust-badge flex flex-col items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#fe1e34]" />
              <span className="text-[#fcfcfc] font-semibold">100% Commercial IP</span>
              <span className="text-[10px] text-[#525252]">Bilateral NDA Signed</span>
            </div>

            <div className="trust-badge flex flex-col items-center gap-1.5">
              <FileCode2 className="w-4 h-4 text-[#fe1e34]" />
              <span className="text-[#fcfcfc] font-semibold">NURBS, Sub-D & STL</span>
              <span className="text-[10px] text-[#525252]">Zero Slicing Artifacts</span>
            </div>

            <div className="trust-badge flex flex-col items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#fe1e34]" />
              <span className="text-[#fcfcfc] font-semibold">Fixed-Scope Milestone</span>
              <span className="text-[10px] text-[#525252]">No Unbounded Hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FLOATING STICKY CONVERSION DOCK (HUD at Bottom of Viewport) */}
      <AnimatePresence>
        {showStickyDock && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="pointer-events-auto flex items-center gap-3 p-1.5 pl-4 pr-2 bg-[#0c0c0c]/90 backdrop-blur-xl border border-[#2a292a] rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.9)] text-xs font-mono">
              <div className="flex items-center gap-2 pr-2 border-r border-[#262525]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#fcfcfc] hidden sm:inline text-[11px]">2 Q2 Commission Slots</span>
                <span className="text-[10px] text-[#737373]">· 12h Quote</span>
              </div>

              <button
                type="button"
                onClick={() => onRequestClick()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#fe1e34] hover:bg-[#d6172a] text-[#fcfcfc] text-[10px] uppercase font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(254,30,52,0.4)]"
              >
                <span>Start Commission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('intro')}
                aria-label="Scroll to top of portfolio"
                className="p-2 rounded-full bg-[#171617] hover:bg-[#222122] text-[#8e8d8d] hover:text-[#fcfcfc] border border-[#262525] transition-colors"
              >
                <ArrowDown className="w-3.5 h-3.5 rotate-180" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
