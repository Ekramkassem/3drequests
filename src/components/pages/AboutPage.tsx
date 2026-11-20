import React from 'react';
import { PageType } from '../../types.ts';
import { STUDIO_PRINCIPLES, TESTIMONIALS, CHARACTER_BUST_IMAGE } from '../../data/studioData.ts';
import { ArrowUpRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onRequestClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onRequestClick,
}) => {
  return (
    <div className="space-y-28 md:space-y-36 pb-28 pt-28 sm:pt-36">
      {/* Brand Statement Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-6"
        >
          <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#b5b2b2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
            <span>STUDIO MANIFESTO</span>
            <span aria-hidden="true" className="text-[#525252]">/</span>
            <span>FIRST PRINCIPLES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#fcfcfc] tracking-[-0.05em] leading-[0.95] uppercase">
            THOUGHTFUL DESIGN. <br />
            <span className="font-serif italic font-normal tracking-tight text-[#d4d2d2] normal-case lowercase text-5xl sm:text-7xl md:text-8xl">
              extraordinary
            </span>{' '}
            EXECUTION<span className="text-[#fe1e34]">.</span>
          </h1>

          <p className="text-[#b5b2b2] text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
            3D Requests was founded to cure the industry of lazy stock CAD, hollow renders, and fragile non-manifold geometry. We operate as an intimate creative studio where design intention and engineering rigor coexist without compromise.
          </p>
        </motion.div>
      </section>

      {/* Philosophy & Striking Visual Split */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Striking Supporting Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative rounded-[14.4px] overflow-hidden bg-[#171617] border border-[#262525] aspect-[4/5] shadow-svz-inset"
          >
            <img
              src={CHARACTER_BUST_IMAGE}
              alt="Etherea Android Sculpture Study"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fe1e34] block">
                Sculptural Study
              </span>
              <span className="text-sm font-semibold text-[#fcfcfc] block mt-0.5">
                Etherea: Smoked glass cranium & mechanical gold armature
              </span>
            </div>
          </motion.div>

          {/* 3 Core Principles */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4d2d2] block font-semibold">
                The 3 Core Principles
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#fcfcfc] tracking-tight">
                Crafted for Ideas Worth Bringing to Life<span className="text-[#fe1e34]">.</span>
              </h2>
            </motion.div>

            <div className="space-y-8 pt-2">
              {STUDIO_PRINCIPLES.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="space-y-2 border-b border-[#262525] pb-6"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-[#fe1e34]">0{idx + 1}</span>
                    <h3 className="font-display text-xl font-bold text-[#fcfcfc] tracking-tight">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#b5b2b2] leading-relaxed font-light pl-6">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="pb-8 border-b border-[#262525] mb-12 space-y-2"
        >
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#b5b2b2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34]" />
            <span>Validation & Proof</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#fcfcfc] tracking-tight">
            Client Voices<span className="text-[#fe1e34]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="p-8 rounded-[8px] bg-[#171617] border border-[#262525] shadow-svz-inset flex flex-col justify-between space-y-6 hover:border-[#fe1e34] transition-colors duration-300"
            >
              <Quote className="w-6 h-6 text-[#fe1e34]" />

              <p className="text-xs sm:text-sm text-[#d4d2d2] leading-relaxed font-light italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-[#262525] space-y-1">
                <span className="text-[11px] font-mono text-[#fe1e34] block font-semibold tracking-wider">
                  {item.outcome}
                </span>
                <span className="text-sm font-bold text-[#fcfcfc] block">{item.author}</span>
                <span className="text-xs text-[#525252] block">
                  {item.role} · {item.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Enquiry CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-[14.4px] bg-[#171617] border border-[#262525] shadow-svz-inset flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1.5">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#fcfcfc] tracking-tight">
              Ready to elevate your 3D visual standard?
            </h3>
            <p className="text-xs sm:text-sm text-[#b5b2b2] font-light">
              Submit your creative brief today for a senior engineering review within 12 business hours.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onRequestClick}
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[8px] border border-[#d4d2d2]/40 hover:border-[#fe1e34] bg-[#080808] hover:bg-[#121212] transition-all duration-300 shadow-svz-inset shrink-0 whitespace-nowrap"
          >
            <span>Submit a Design Request</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#d4d2d2] group-hover:text-[#fe1e34] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
