import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ProjectItem } from '../../types.ts';
import { soundFX } from '../../utils/soundFX.ts';
import { ArrowLeft, ArrowRight, ArrowUpRight, Cpu, Eye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HorizontalReelProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const HorizontalReel: React.FC<HorizontalReelProps> = ({
  projects,
  onSelectProject,
}) => {
  const reelRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftState, setScrollLeftState] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateScrollState = useCallback(() => {
    if (!reelRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = reelRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < maxScroll - 20);

    // Calculate approximate active card index based on scroll position
    const cardWidth = 480 + 32; // approx card width + gap
    const calculatedIndex = Math.min(
      projects.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveIndex(calculatedIndex);
  }, [projects.length]);

  useEffect(() => {
    const el = reelRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  // Handle horizontal mousewheel scrolling
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!reelRef.current) return;
    // If predominantly vertical scroll, map to horizontal scroll for seamless experience
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      reelRef.current.scrollLeft += e.deltaY * 0.9;
    }
  };

  // Mouse Drag to Pan
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!reelRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - reelRef.current.offsetLeft);
    setScrollLeftState(reelRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !reelRef.current) return;
    e.preventDefault();
    const x = e.pageX - reelRef.current.offsetLeft;
    const walk = (x - startX) * 1.6; // Multiplier for fluid drag
    reelRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!reelRef.current) return;
    soundFX.playSelect();
    const scrollAmount = 520;
    reelRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  if (projects.length === 0) {
    return (
      <div className="py-24 text-center text-[#b5b2b2] font-mono text-xs uppercase tracking-widest">
        No commissions match your active search filters.
      </div>
    );
  }

  return (
    <div className="relative space-y-6 select-none">
      {/* Reel Header Controller & Navigation Indicators */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3 text-xs font-mono text-[#b5b2b2]">
          <span className="text-[#fe1e34] font-bold">
            0{activeIndex + 1}
          </span>
          <span aria-hidden="true" className="text-[#525252]">/</span>
          <span>0{projects.length}</span>
          <span aria-hidden="true" className="text-[#525252]">·</span>
          <span className="hidden sm:inline uppercase text-[10px] tracking-wider text-[#737373]">
            Drag or Scroll to Pan Timeline
          </span>
        </div>

        {/* Navigation Step Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={!canScrollLeft}
            onClick={() => scrollByAmount('left')}
            aria-label="Previous showcase"
            className="p-2.5 rounded-[8px] bg-[#171617] border border-[#262525] text-[#fcfcfc] disabled:opacity-30 disabled:pointer-events-none hover:border-[#fe1e34] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            disabled={!canScrollRight}
            onClick={() => scrollByAmount('right')}
            aria-label="Next showcase"
            className="p-2.5 rounded-[8px] bg-[#171617] border border-[#262525] text-[#fcfcfc] disabled:opacity-30 disabled:pointer-events-none hover:border-[#fe1e34] transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Panoramic Timeline Reel Container */}
      <div
        ref={reelRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => {
                if (!isDragging) {
                  soundFX.playSelect();
                  onSelectProject(project);
                }
              }}
              className="group relative flex-none w-[320px] sm:w-[440px] md:w-[520px] rounded-[14px] bg-[#121112] border border-[#262525] hover:border-[#fe1e34] shadow-svz-inset overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_rgba(254,30,52,0.14)] snap-start"
            >
              {/* Media Container with Dynamic Parallax Crop */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0a0a]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent opacity-95" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#fcfcfc] bg-[#080808]/85 backdrop-blur-md px-3 py-1.5 rounded-[6px] border border-[#262525]">
                    {project.categoryLabel}
                  </span>

                  <span className="p-2 rounded-[6px] bg-[#080808]/85 backdrop-blur-md border border-[#262525] text-[#b5b2b2] group-hover:text-[#fe1e34] transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Middle Holographic Telemetry Strip */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-[8px] bg-[#080808]/80 backdrop-blur-md border border-[#262525] space-y-1">
                  <div className="flex items-center justify-between text-[9px] font-mono text-[#fe1e34] uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3 h-3" />
                      <span>{project.technicalSpecs.topologyType}</span>
                    </span>
                    <span>{project.technicalSpecs.polycount}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#d4d2d2] truncate">
                    Engine: {project.technicalSpecs.engineCompatibility}
                  </div>
                </div>
              </div>

              {/* Editorial Description Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-[#121112]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] tracking-widest uppercase">
                    <span>{project.year}</span>
                    <span aria-hidden="true" className="text-[#525252]">·</span>
                    <span>{project.client}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#fcfcfc] tracking-tight group-hover:text-[#fe1e34] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#b5b2b2] line-clamp-2 font-light leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Deliverables & Inspection Link */}
                <div className="pt-4 border-t border-[#262525] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1 text-[#fe1e34]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-wider text-[#b5b2b2]">
                      {project.deliverables[0]}
                    </span>
                  </div>

                  <span className="flex items-center gap-1 font-semibold text-[#fcfcfc] group-hover:text-[#fe1e34] transition-colors">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Slim Progress Bar Tracking Timeline Navigation */}
      <div className="w-full h-1 bg-[#171617] rounded-full overflow-hidden border border-[#262525]">
        <div
          className="h-full bg-[#fe1e34] transition-all duration-150 ease-out"
          style={{ width: `${Math.max(8, scrollProgress)}%` }}
        />
      </div>
    </div>
  );
};
