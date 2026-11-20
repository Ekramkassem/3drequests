import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../types.ts';
import { soundFX } from '../utils/soundFX.ts';
import { X, ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onRequestCommission: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
  onRequestCommission,
}) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [activeMediaUrl, setActiveMediaUrl] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveMediaUrl(project.heroImage);
    }
  }, [project?.id, project?.heroImage]);

  // Next / Previous navigation calculation
  const currentIndex = project ? allProjects.findIndex((p) => p.id === project.id) : -1;
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundFX.playSelect();
        onClose();
      } else if (e.key === 'ArrowLeft' && prevProject) {
        soundFX.playNextStage();
        onSelectProject(prevProject);
      } else if (e.key === 'ArrowRight' && nextProject) {
        soundFX.playNextStage();
        onSelectProject(nextProject);
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, prevProject, nextProject, onSelectProject]);

  useEffect(() => {
    if (project && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project?.id]);

  if (!project) return null;

  const handleThumbnailClick = (img: string) => {
    soundFX.playHover();
    setActiveMediaUrl(img);
  };

  const handlePrev = () => {
    soundFX.playNextStage();
    onSelectProject(prevProject);
  };

  const handleNext = () => {
    soundFX.playNextStage();
    onSelectProject(nextProject);
  };

  const handleClose = () => {
    soundFX.playSelect();
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        ref={scrollContainerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-50 flex items-start justify-center p-0 md:p-6 lg:p-10 bg-black/92 backdrop-blur-2xl overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl my-auto min-h-screen md:min-h-0 bg-[#0a0a0a] border-0 md:border md:border-[#262525] md:rounded-[14.4px] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Sticky Close Bar with Project Hierarchy */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#262525]">
            <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#b5b2b2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span className="text-[#fcfcfc] font-semibold">{project.categoryLabel}</span>
              <span aria-hidden="true" className="text-[#525252]">/</span>
              <span>{project.year}</span>
              <span aria-hidden="true" className="text-[#525252]">/</span>
              <span>{project.client}</span>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close project details"
              className="p-1.5 rounded-[4px] bg-[#171617] hover:bg-[#262525] text-[#b5b2b2] hover:text-[#fcfcfc] transition-colors border border-[#262525]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Full-Width Hero Artwork Display */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#000000] overflow-hidden">
            <img
              src={activeMediaUrl || project.heroImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-95" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fe1e34] block mb-1">
                  Exhibition Showcase Details
                </span>
                <h2 id="modal-project-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-[-0.04em]">
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onRequestCommission(project)}
                className="group inline-flex items-center gap-2 px-6 py-3 text-[10px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[8px] border border-[#d4d2d2]/40 hover:border-[#fe1e34] bg-[#171617] hover:bg-[#1f1e1f] transition-all duration-300 shadow-svz-inset shrink-0"
              >
                <span>Commission Similar Discipline</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4d2d2] group-hover:text-[#fe1e34] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
            </div>
          </div>

          {/* Editorial Content Layout */}
          <div className="p-6 sm:p-10 space-y-12">
            {/* Overview & Rationale */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#525252] block font-semibold">
                  Project Intent & Scope
                </span>
                <p className="text-base sm:text-lg text-[#fcfcfc] font-medium leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#525252] block font-semibold">
                  Creative Rationale & Geometry Engineering
                </span>
                <p className="text-sm sm:text-base text-[#b5b2b2] leading-relaxed font-light">
                  {project.creativeRationale}
                </p>
              </div>
            </div>

            {/* Technical Specifications Grid (SVZ Plate) */}
            <div className="p-6 rounded-[8px] bg-[#121112] border border-[#262525] shadow-svz-inset space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fe1e34] block font-semibold">
                Technical Specifications & Mesh Verification
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                <div>
                  <span className="text-[#525252] block text-[10px] font-mono uppercase">Polycount / Resolution</span>
                  <span className="text-[#fcfcfc] font-semibold block mt-1">{project.technicalSpecs.polycount}</span>
                </div>
                <div>
                  <span className="text-[#525252] block text-[10px] font-mono uppercase">Topology Structure</span>
                  <span className="text-[#fcfcfc] font-semibold block mt-1">{project.technicalSpecs.topologyType}</span>
                </div>
                <div>
                  <span className="text-[#525252] block text-[10px] font-mono uppercase">Texture Pipeline</span>
                  <span className="text-[#fcfcfc] font-semibold block mt-1">{project.technicalSpecs.textureResolution}</span>
                </div>
                <div>
                  <span className="text-[#525252] block text-[10px] font-mono uppercase">Engine Target</span>
                  <span className="text-[#fcfcfc] font-semibold block mt-1">{project.technicalSpecs.engineCompatibility}</span>
                </div>
              </div>
            </div>

            {/* Visual Gallery Detail Views with Clickable Selector */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#525252] block font-semibold">
                    Visual Gallery & Alternative Angles (Click to expand)
                  </span>
                  <span className="text-[10px] font-mono text-[#b5b2b2]">
                    {project.galleryImages.length} Curated Frames
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, idx) => {
                    const isSelected = activeMediaUrl === img;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleThumbnailClick(img)}
                        className={`group relative rounded-[8px] overflow-hidden aspect-[4/3] bg-[#121112] border cursor-pointer transition-all duration-300 ${
                          isSelected ? 'border-[#fe1e34] shadow-[0_0_20px_rgba(254,30,52,0.25)]' : 'border-[#262525] hover:border-[#b5b2b2]'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} detail view ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <div className="absolute bottom-3 right-3 p-1.5 rounded-[4px] bg-[#080808]/80 text-[#fcfcfc] opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Deliverables & Material Studies */}
            <div className="grid sm:grid-cols-2 gap-8 pt-4 border-t border-[#262525]">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fe1e34] block font-semibold">
                  Production Deliverables
                </span>
                <ul className="space-y-2">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#b5b2b2]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fe1e34] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fe1e34] block font-semibold">
                  Material Studies & Finishes
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-[11px] font-mono text-[#d4d2d2] bg-[#121112] border border-[#262525] rounded-[4px]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Next / Previous Project Carousel Navigation */}
            <div className="pt-8 border-t border-[#262525] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[#b5b2b2] hover:text-[#fcfcfc] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#fe1e34]" />
                <span className="hidden sm:inline">Previous:</span>
                <span className="font-semibold text-[#fcfcfc]">{prevProject.title}</span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[#b5b2b2] hover:text-[#fcfcfc] border border-[#262525] hover:border-[#fe1e34] rounded-[8px] bg-[#121112] transition-colors"
              >
                Close Exhibition [Esc]
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[#b5b2b2] hover:text-[#fcfcfc] transition-colors"
              >
                <span className="hidden sm:inline">Next:</span>
                <span className="font-semibold text-[#fcfcfc]">{nextProject.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#fe1e34]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
