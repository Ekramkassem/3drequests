import React from 'react';
import { ProjectItem } from '../../types.ts';
import { soundFX } from '../../utils/soundFX.ts';
import { ArrowUpRight, Eye, Cpu, Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface MainEditorialGalleryProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onRequestCommission?: (project: ProjectItem) => void;
}

export const MainEditorialGallery: React.FC<MainEditorialGalleryProps> = ({
  projects,
  onSelectProject,
}) => {
  if (projects.length === 0) {
    return (
      <div className="py-24 text-center space-y-3">
        <p className="text-sm font-mono text-[#b5b2b2] uppercase tracking-wider">
          No commissions match your active search filters.
        </p>
      </div>
    );
  }

  // Identify featured projects (e.g. Aura-1 and Etherea) vs other commissions
  const primaryFeatured = projects[0];
  const secondaryFeatured = projects.length > 1 ? projects[1] : null;
  const standardProjects = projects.slice(2);

  return (
    <div className="space-y-12">
      {/* 1. Oversized Editorial Hero Showcase (Project 1) */}
      {primaryFeatured && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => {
            soundFX.playSelect();
            onSelectProject(primaryFeatured);
          }}
          className="group relative rounded-[16px] overflow-hidden bg-[#100f10] border border-[#262525] hover:border-[#fe1e34] transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.85)] cursor-pointer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 7 Columns: Visual Canvas */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] overflow-hidden bg-[#0a0a0a]">
              <img
                src={primaryFeatured.heroImage}
                alt={primaryFeatured.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#100f10]/30 to-[#100f10] opacity-90" />

              {/* Top Floating Badge */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#fcfcfc] bg-[#080808]/85 backdrop-blur-md px-3.5 py-1.5 rounded-[6px] border border-[#262525]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34]" />
                <span>PRIMARY STUDIO BENCHMARK</span>
                <span aria-hidden="true" className="text-[#525252]">·</span>
                <span className="text-[#fe1e34]">{primaryFeatured.year}</span>
              </div>
            </div>

            {/* Right 5 Columns: Editorial Content & Engineering Telemetry */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#fe1e34]">
                  <span>{primaryFeatured.categoryLabel}</span>
                  <span aria-hidden="true" className="text-[#525252]">/</span>
                  <span className="text-[#b5b2b2]">{primaryFeatured.client}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-tight leading-[1.05] group-hover:text-white transition-colors">
                  {primaryFeatured.title}
                </h3>

                <p className="text-sm text-[#b5b2b2] font-light leading-relaxed">
                  {primaryFeatured.summary}
                </p>

                {/* Technical Specifications Grid */}
                <div className="p-4 rounded-[8px] bg-[#171617] border border-[#222] space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#fe1e34] uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>{primaryFeatured.technicalSpecs.topologyType}</span>
                    </span>
                    <span className="text-[#fcfcfc] font-semibold">{primaryFeatured.technicalSpecs.polycount}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-[#8e8d8d]">
                    <div>
                      <span className="text-[9px] uppercase block text-[#525252]">Textures</span>
                      <span className="text-[#fcfcfc] truncate block">{primaryFeatured.technicalSpecs.textureResolution}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase block text-[#525252]">Target Compatibility</span>
                      <span className="text-[#fcfcfc] truncate block">{primaryFeatured.technicalSpecs.engineCompatibility}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Inspection Link */}
              <div className="pt-4 border-t border-[#262525] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8e8d8d] uppercase text-[10px] tracking-wider">
                  Deliverables: {primaryFeatured.deliverables[0]}
                </span>
                <span className="flex items-center gap-1 font-semibold text-[#fcfcfc] group-hover:text-[#fe1e34] transition-colors">
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. Asymmetrical Staggered Exhibition Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {secondaryFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              soundFX.playSelect();
              onSelectProject(secondaryFeatured);
            }}
            className="group relative rounded-[14px] overflow-hidden bg-[#100f10] border border-[#262525] hover:border-[#fe1e34] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.7)] cursor-pointer md:col-span-2 flex flex-col justify-between"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a0a0a]">
              <img
                src={secondaryFeatured.heroImage}
                alt={secondaryFeatured.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100f10] via-[#100f10]/30 to-transparent opacity-95" />

              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#fcfcfc] bg-[#080808]/85 backdrop-blur-md px-3 py-1.5 rounded-[6px] border border-[#262525]">
                <span>{secondaryFeatured.categoryLabel}</span>
                <span aria-hidden="true" className="text-[#525252]">·</span>
                <span className="text-[#fe1e34]">{secondaryFeatured.year}</span>
              </div>

              <div className="absolute bottom-4 left-5 right-5 space-y-1.5">
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#fcfcfc] tracking-tight group-hover:text-white transition-colors">
                  {secondaryFeatured.title}
                </h4>
                <p className="text-xs text-[#b5b2b2] line-clamp-2 font-light">
                  {secondaryFeatured.summary}
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-[#262525] bg-[#0d0c0d] flex items-center justify-between text-xs font-mono">
              <span className="text-[#8e8d8d] text-[10px] uppercase">
                {secondaryFeatured.technicalSpecs.polycount}
              </span>
              <span className="flex items-center gap-1 font-semibold text-[#fcfcfc] group-hover:text-[#fe1e34] transition-colors">
                <span>Inspect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        )}

        {standardProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onClick={() => {
              soundFX.playSelect();
              onSelectProject(project);
            }}
            className="group relative rounded-[14px] overflow-hidden bg-[#100f10] border border-[#262525] hover:border-[#fe1e34] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.7)] cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0a]">
              <img
                src={project.heroImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100f10] via-[#100f10]/30 to-transparent opacity-95" />

              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#fcfcfc] bg-[#080808]/85 backdrop-blur-md px-3 py-1.5 rounded-[6px] border border-[#262525]">
                <span>{project.categoryLabel}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <div className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-wider">
                  {project.client}
                </div>
                <h4 className="font-display text-xl font-bold text-[#fcfcfc] tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h4>
              </div>
            </div>

            <div className="p-4 border-t border-[#262525] bg-[#0d0c0d] flex items-center justify-between text-xs font-mono">
              <span className="text-[#8e8d8d] text-[10px] uppercase truncate max-w-[150px]">
                {project.materials[0]}
              </span>
              <span className="flex items-center gap-1 font-semibold text-[#fcfcfc] group-hover:text-[#fe1e34] transition-colors">
                <span>View</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
