import React, { useState, useRef, useCallback } from 'react';
import { ProjectItem } from '../../types.ts';
import { soundFX } from '../../utils/soundFX.ts';
import { Eye, ArrowUpRight, Cpu, Layers, Disc3 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SpatialProjectCardProps {
  project: ProjectItem;
  index: number;
  isLarge?: boolean;
  onSelect: (project: ProjectItem) => void;
  onRequestCommission?: (project: ProjectItem) => void;
}

export const SpatialProjectCard: React.FC<SpatialProjectCardProps> = ({
  project,
  index,
  isLarge = false,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const slideshowTimerRef = useRef<number | null>(null);

  // High performance pointer-based 3D tilt calculation
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle max 10 degree tilt for natural perspective
    const rotX = ((y - centerY) / centerY) * -9;
    const rotY = ((x - centerX) / centerX) * 9;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.35 });
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
    soundFX.playHover();

    // Start cinematic quick-peek slideshow if multiple images exist
    if (project.galleryImages && project.galleryImages.length > 1) {
      let currentIdx = 0;
      slideshowTimerRef.current = window.setInterval(() => {
        currentIdx = (currentIdx + 1) % project.galleryImages.length;
        setActiveImageIndex(currentIdx);
      }, 1600);
    }
  }, [project.galleryImages]);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    setActiveImageIndex(0);

    if (slideshowTimerRef.current) {
      clearInterval(slideshowTimerRef.current);
      slideshowTimerRef.current = null;
    }
  }, []);

  const handleClick = () => {
    soundFX.playSelect();
    onSelect(project);
  };

  const currentDisplayImage =
    project.galleryImages && project.galleryImages.length > 1
      ? project.galleryImages[activeImageIndex] || project.heroImage
      : project.heroImage;

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
          isHovered ? 1.018 : 1
        }, ${isHovered ? 1.018 : 1}, 1)`,
        transition: isHovered
          ? 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`group relative rounded-[14px] overflow-hidden bg-[#121112] border transition-colors duration-300 cursor-pointer select-none ${
        isHovered ? 'border-[#fe1e34]/70 shadow-[0_20px_50px_rgba(254,30,52,0.15)]' : 'border-[#262525] shadow-svz-inset'
      } ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      {/* Dynamic Specular Sheen Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.16) 0%, rgba(254, 30, 52, 0.1) 40%, transparent 80%)`,
        }}
      />

      {/* Artwork Container with Zoom & Layered Depth */}
      <div className={`relative w-full overflow-hidden bg-[#0a0a0a] ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <img
          src={currentDisplayImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Ambient Vignette & Scrim Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent opacity-95 transition-opacity group-hover:opacity-85" />

        {/* Top Floating Badge Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#fcfcfc] bg-[#080808]/80 backdrop-blur-md px-3 py-1.5 rounded-[6px] border border-[#262525]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
            <span className="text-[#fe1e34]">{project.year}</span>
            <span aria-hidden="true" className="text-[#525252]">·</span>
            <span>{project.client}</span>
          </div>

          <div
            className={`p-2 rounded-[6px] bg-[#080808]/85 backdrop-blur-md border border-[#262525] text-[#fcfcfc] transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100 text-[#fe1e34] border-[#fe1e34]/50' : 'opacity-0 scale-90'
            }`}
          >
            <Eye className="w-4 h-4" />
          </div>
        </div>

        {/* Holographic HUD Engineering Overlay (Appears on Hover) */}
        <div
          className={`absolute inset-x-4 top-16 z-20 p-3.5 rounded-[8px] bg-[#080808]/90 backdrop-blur-md border border-[#fe1e34]/30 space-y-2 transition-all duration-300 pointer-events-none ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          <div className="flex items-center justify-between text-[9px] font-mono text-[#fe1e34] uppercase tracking-widest border-b border-[#262525] pb-1.5">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-[#fe1e34]" />
              <span>TOPOLOGY TELEMETRY</span>
            </span>
            <span className="text-[#b5b2b2]">{project.technicalSpecs.polycount}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div>
              <span className="text-[#525252] block text-[8px] uppercase">Structure</span>
              <span className="text-[#fcfcfc] truncate block font-medium">
                {project.technicalSpecs.topologyType}
              </span>
            </div>
            <div>
              <span className="text-[#525252] block text-[8px] uppercase">Textures</span>
              <span className="text-[#fcfcfc] truncate block font-medium">
                {project.technicalSpecs.textureResolution}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Image Dots Indicator if multi-image */}
        {project.galleryImages && project.galleryImages.length > 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-none">
            {project.galleryImages.map((_, idx) => (
              <span
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeImageIndex === idx ? 'w-4 bg-[#fe1e34]' : 'w-1 bg-[#ffffff]/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Primary Project Title & Category Typography */}
        <div className="absolute bottom-4 left-5 right-5 z-20 space-y-1.5 pointer-events-none">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#fe1e34] tracking-widest uppercase">
            <span>{project.categoryLabel}</span>
            {project.dimensions && (
              <>
                <span aria-hidden="true" className="text-[#525252]">·</span>
                <span className="text-[#b5b2b2]">{project.dimensions}</span>
              </>
            )}
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfcfc] tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-[#b5b2b2] line-clamp-2 font-light leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Card Footer Technical Ribbon */}
      <div className="p-4 border-t border-[#262525] bg-[#0e0d0e] flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-3 text-[#b5b2b2]">
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#525252]" />
            <span className="text-[#fcfcfc]">{project.software[0]}</span>
          </span>
          <span aria-hidden="true" className="text-[#525252]">/</span>
          <span className="truncate max-w-[130px] sm:max-w-[180px] text-[#8e8d8d]">
            {project.materials[0]}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[#fcfcfc] font-semibold group-hover:text-[#fe1e34] transition-colors">
          <span className="tracking-wide">Inspect Case</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};
