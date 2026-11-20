import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { DETAILED_SERVICES } from '../../data/studioData.ts';
import { ArrowUpRight, CheckCircle2, Cpu, Layers, Sparkles, Box, Wrench, Shield } from 'lucide-react';
import { magneticCursor } from '../../utils/magneticCursorState.ts';

interface PinnedDisciplinesDeckProps {
  onRequestClick: (preselectedType?: string, preselectedBudget?: string) => void;
}

const DISCIPLINE_ICONS = [
  Box,
  Layers,
  Wrench,
  Cpu,
  Sparkles,
  Layers,
  Box,
  Shield,
];

export const PinnedDisciplinesDeck: React.FC<PinnedDisciplinesDeckProps> = ({ onRequestClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDeckIndex, setActiveDeckIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const deckX = useTransform(smoothProgress, [0.15, 0.85], ['4%', '-62%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 border-t border-[#262525]/80 bg-[#080808]/90 overflow-hidden"
    >
      {/* Subtle ambient red & volt glow behind deck */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(254,30,52,0.06)_0%,transparent_70%)] blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(210,255,40,0.04)_0%,transparent_70%)] blur-3xl z-0" />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#262525]">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-[#b5b2b2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span>01.C // STUDIO CAPABILITIES DECK</span>
              <span className="text-[#525252]">/</span>
              <span>8 SPECIALIZED PRODUCTION DISCIPLINES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-[-0.04em] uppercase">
              WHAT WE DO <span className="font-serif italic font-normal lowercase tracking-tight text-[#e5e5e5] text-4xl sm:text-5xl md:text-6xl">best</span>
              <span className="text-[#fe1e34]">.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#b5b2b2] max-w-md font-light leading-relaxed">
            High-velocity, mathematical 3D craftsmanship engineered for production. Each discipline is supported by verified manufacturing standards, native CAD exports, and strict sub-D topology audits.
          </p>
        </div>
      </div>

      {/* Kinetic Horizontal Card Deck */}
      <div className="relative z-10 w-full overflow-x-auto no-scrollbar py-6 cursor-grab active:cursor-grabbing">
        <motion.div
          style={{ x: deckX }}
          className="flex gap-6 px-6 sm:px-12 w-max"
        >
          {DETAILED_SERVICES.map((service, idx) => {
            const Icon = DISCIPLINE_ICONS[idx % DISCIPLINE_ICONS.length];
            return (
              <DeckCard
                key={service.id}
                service={service}
                index={idx}
                Icon={Icon}
                onCommission={() => onRequestClick(service.title, service.startingRange)}
                onHoverChange={(isHovered, bounds) => {
                  if (isHovered && bounds) {
                    setActiveDeckIndex(idx);
                    magneticCursor.triggerHover(
                      bounds.left + bounds.width / 2,
                      bounds.top + bounds.height / 2,
                      bounds.width,
                      bounds.height,
                      'COMMISSION'
                    );
                  } else {
                    magneticCursor.clearHover();
                  }
                }}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Mobile / Keyboard Deck Navigator indicators */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 mt-8 flex items-center justify-between text-[11px] font-mono text-[#737373]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#fe1e34]" />
          <span className="uppercase tracking-widest text-[#d4d2d2]">
            {activeDeckIndex + 1} / {DETAILED_SERVICES.length} DISCIPLINES READY
          </span>
        </div>
        <span className="hidden sm:inline uppercase tracking-widest text-[#a3a3a3]">
          &larr; DRAG HORIZONTALLY TO EXPLORE &rarr;
        </span>
      </div>
    </section>
  );
};

interface DeckCardProps {
  service: (typeof DETAILED_SERVICES)[number];
  index: number;
  Icon: React.ElementType;
  onCommission: () => void;
  onHoverChange: (isHovered: boolean, bounds?: DOMRect) => void;
}

const DeckCard: React.FC<DeckCardProps> = ({
  service,
  index,
  Icon,
  onCommission,
  onHoverChange,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      onHoverChange(true, cardRef.current.getBoundingClientRect());
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onHoverChange(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-[340px] sm:w-[400px] shrink-0 rounded-[14px] bg-[#121112] border border-[#262525] hover:border-[#fe1e34]/60 p-7 flex flex-col justify-between overflow-hidden shadow-2xl transition-colors duration-300 select-none"
    >
      {/* Top ambient highlight gradient */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 bg-[#fe1e34]/10 rounded-full blur-2xl group-hover:bg-[#fe1e34]/20 transition-all duration-500" />

      {/* Discipline Index & Icon */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#262525]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-[#fe1e34] font-semibold">
            [{service.number} / 08]
          </span>
          <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider">
            PRODUCTION READY
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#1c1b1c] border border-[#2e2d2e] flex items-center justify-center text-[#d4d2d2] group-hover:text-[#fe1e34] group-hover:border-[#fe1e34]/40 transition-colors">
          <Icon className="w-4 h-4" />
        </div>
      </div>

      {/* Card Preview Image with Subtle Zoom & Mask */}
      <div className="relative z-10 my-5 h-44 w-full rounded-[8px] overflow-hidden border border-[#262525] bg-[#080808]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121112] via-transparent to-transparent opacity-80" />
        
        {/* Turnaround Badge */}
        <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#080808]/85 backdrop-blur-md border border-[#333] text-[10px] font-mono text-[#d4d2d2] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF28]" />
          <span>{service.timeline}</span>
        </div>

        {/* Pricing Badge */}
        <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-[#080808]/85 backdrop-blur-md border border-[#333] text-[10px] font-mono text-[#fcfcfc] font-bold">
          {service.startingRange}
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="relative z-10 space-y-2.5">
        <h3 className="font-display text-xl font-bold text-[#fcfcfc] tracking-tight group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-xs text-[#a3a3a3] font-light leading-relaxed line-clamp-2">
          {service.tagline}
        </p>
      </div>

      {/* Deliverable Formats Badges */}
      <div className="relative z-10 mt-5 pt-4 border-t border-[#262525]/80 space-y-3">
        <div className="text-[10px] font-mono text-[#737373] uppercase tracking-wider">
          DELIVERABLE STANDARDS
        </div>
        <div className="flex flex-wrap gap-1.5">
          {service.deliverables.slice(0, 3).map((item, dIdx) => (
            <span
              key={dIdx}
              className="text-[10px] font-mono text-[#d4d2d2] bg-[#1a191a] border border-[#2a292a] px-2 py-0.5 rounded"
            >
              {item.split(' ')[0]} {item.split(' ')[1] || ''}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-6 pt-2">
        <button
          type="button"
          onClick={onCommission}
          className="w-full py-3 px-4 rounded-[8px] bg-[#1a191a] hover:bg-[#fe1e34] border border-[#2e2d2e] hover:border-[#fe1e34] text-[#fcfcfc] hover:text-white text-[11px] font-mono tracking-[0.16em] uppercase transition-all duration-200 flex items-center justify-between group/btn cursor-pointer"
        >
          <span>Commission Discipline</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#a3a3a3] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
