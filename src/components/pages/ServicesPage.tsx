import React from 'react';
import { PageType } from '../../types.ts';
import { DETAILED_SERVICES } from '../../data/studioData.ts';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onRequestClick: (preselectedType?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onRequestClick,
}) => {
  return (
    <div className="space-y-28 md:space-y-40 pb-28 pt-28 sm:pt-36">
      {/* Services Exhibition Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4"
        >
          <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#b5b2b2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
            <span>STUDIO CAPABILITIES</span>
            <span aria-hidden="true" className="text-[#525252]">/</span>
            <span>08 COMMISSION DISCIPLINES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#fcfcfc] tracking-[-0.05em] leading-[0.95] uppercase">
            Creative Versatility. <br />
            <span className="font-serif italic font-normal tracking-tight text-[#d4d2d2] normal-case lowercase text-5xl sm:text-7xl md:text-8xl">
              technical
            </span>{' '}
            Mastery<span className="text-[#fe1e34]">.</span>
          </h1>

          <p className="text-[#b5b2b2] text-base sm:text-lg leading-relaxed font-light">
            We partner with hardware inventors, game directors, architects, and luxury brands to execute 3D outcomes with uncompromised aesthetic vision and manufacturing precision.
          </p>
        </motion.div>
      </section>

      {/* Evolving Visual Exhibition: Alternating Asymmetrical Showcases */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
        {DETAILED_SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Media Visual Column */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className={`lg:col-span-6 relative aspect-[4/3] rounded-[14.4px] overflow-hidden bg-[#171617] border border-[#262525] group shadow-svz-inset ${
                  isEven ? 'order-1' : 'order-1 lg:order-2'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 text-[10px] font-mono text-[#fcfcfc] bg-[#080808]/85 backdrop-blur-sm px-3 py-1.5 rounded-[4px] border border-[#262525] flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#fe1e34]" />
                  <span>DISCIPLINE {service.number}</span>
                </div>
              </motion.div>

              {/* Text Narrative Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'order-2' : 'order-2 lg:order-1'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#525252]">
                    <span>{service.timeline}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#fe1e34]">{service.startingRange}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#fcfcfc] tracking-[-0.03em]">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#b5b2b2] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4d2d2] block font-semibold">
                    Core Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#b5b2b2]">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#fe1e34] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software & Suitable Profile */}
                <div className="pt-4 border-t border-[#262525] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <div className="text-[#525252]">
                    <span className="text-[#b5b2b2] block text-[10px] uppercase tracking-wider">Pipeline Stack:</span>
                    <span className="text-[11px]">{service.softwareStack.join(' · ')}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => onRequestClick(service.title)}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 text-[10px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[8px] border border-[#d4d2d2]/40 hover:border-[#fe1e34] bg-[#171617] hover:bg-[#1f1e1f] transition-all duration-300 shadow-svz-inset shrink-0"
                  >
                    <span>Enquire This Discipline</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#d4d2d2] group-hover:text-[#fe1e34] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Assurance Standards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-[14.4px] bg-[#171617] border border-[#262525] shadow-svz-inset grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-[0.2em] block font-semibold">
              CONFIDENTIALITY FIRST
            </span>
            <h3 className="font-display text-lg font-bold text-[#fcfcfc]">Mutual NDA Execution</h3>
            <p className="text-xs text-[#b5b2b2] leading-relaxed font-light">
              We execute bilateral non-disclosure agreements before reviewing CAD files, patents, or confidential hardware schematics.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-[0.2em] block font-semibold">
              MANIFOLD GUARANTEE
            </span>
            <h3 className="font-display text-lg font-bold text-[#fcfcfc]">100% Watertight Mesh</h3>
            <p className="text-xs text-[#b5b2b2] leading-relaxed font-light">
              Every mesh delivered for 3D printing is guaranteed watertight with zero non-manifold edges, verified slicing clearances, and FEA stress audits.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-[0.2em] block font-semibold">
              DIRECT COLLABORATION
            </span>
            <h3 className="font-display text-lg font-bold text-[#fcfcfc]">Senior 3D Directors</h3>
            <p className="text-xs text-[#b5b2b2] leading-relaxed font-light">
              You collaborate directly with principal 3D artists and mechanical engineers. Transparent milestones, interactive 3D review links, zero telephone game.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
