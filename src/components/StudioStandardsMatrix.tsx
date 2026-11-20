import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SYNTHESIZER_IMAGE,
  CHARACTER_BUST_IMAGE,
  LATTICE_IMAGE,
  CHRONO_ORB_IMAGE,
} from '../data/studioData.ts';
import { soundFX } from '../utils/soundFX.ts';
import { ArrowUpRight, CheckCircle2, FileCode2, Layers, ShieldCheck } from 'lucide-react';

interface StudioStandardsMatrixProps {
  onRequestClick: (preselectedType?: string) => void;
}

interface FormatSpecItem {
  ext: string;
  category: 'CAD & Manufacturing' | 'DCC & Real-Time' | 'Visual & Motion';
  disciplines: string[];
  qaGuarantee: string;
}

const FORMAT_SPECS: FormatSpecItem[] = [
  {
    ext: '.STEP / .STP',
    category: 'CAD & Manufacturing',
    disciplines: ['Product Design & Visualization', 'Mechanical & Functional Modeling'],
    qaGuarantee: 'NURBS solid boundary representation verified for CNC & injection molding.',
  },
  {
    ext: '.IGES / .X_T',
    category: 'CAD & Manufacturing',
    disciplines: ['Mechanical & Functional Modeling', 'Product Design & Visualization'],
    qaGuarantee: 'Zero-gap surface continuity calibrated for SolidWorks, Rhino, and Siemens NX.',
  },
  {
    ext: '.STL (MANIFOLD)',
    category: 'CAD & Manufacturing',
    disciplines: ['3D Printing & Prototypes', 'Character & Collectible Modeling'],
    qaGuarantee: '100% watertight manifold volume checked for wall thickness and zero overhangs.',
  },
  {
    ext: '.3MF / .OBJ',
    category: 'CAD & Manufacturing',
    disciplines: ['3D Printing & Prototypes', 'Custom 3D Modeling'],
    qaGuarantee: 'Multi-part keyed assemblies with embedded physical scale & unit metadata.',
  },
  {
    ext: '.BLEND / .FBX',
    category: 'DCC & Real-Time',
    disciplines: ['Custom 3D Modeling', 'Character & Collectible Modeling', '3D Animation & Motion'],
    qaGuarantee: 'Clean subdivision quad flow, non-overlapping UDIM UVs, and hierarchical naming.',
  },
  {
    ext: '.C4D / .MAX / .ZTL',
    category: 'DCC & Real-Time',
    disciplines: ['Character & Collectible Modeling', 'Custom Visual Production'],
    qaGuarantee: 'Native high-poly subdivision levels and procedural shader networks preserved.',
  },
  {
    ext: '.GLB / .USDZ',
    category: 'DCC & Real-Time',
    disciplines: ['Custom Visual Production', 'Product Design & Visualization'],
    qaGuarantee: 'Draco-compressed web & Apple VisionOS AR-ready PBR assets (<5MB budget).',
  },
  {
    ext: '16/32-BIT .EXR',
    category: 'Visual & Motion',
    disciplines: ['Product Rendering', 'Custom Visual Production'],
    qaGuarantee: 'Linear ACEScg multi-pass cryptomatte, specular, refraction, and shadow AOVs.',
  },
  {
    ext: '4K–8K PNG / TIFF',
    category: 'Visual & Motion',
    disciplines: ['Product Rendering', 'Product Design & Visualization'],
    qaGuarantee: 'Straight-alpha cut-outs with separate contact shadow & reflection plates.',
  },
  {
    ext: 'PRORES 4444 / MP4',
    category: 'Visual & Motion',
    disciplines: ['3D Animation & Motion', 'Custom Visual Production'],
    qaGuarantee: '60fps frame-accurate motion loops with alpha channel and web-optimized H.265.',
  },
];

const WHO_WE_SERVE = [
  'Startups & Hardware Founders',
  'Industrial & Product Designers',
  'Manufacturers & R&D Engineers',
  'E-Commerce & Consumer Brands',
  'Creative & Digital Agencies',
  'Individual Inventors & Makers',
];

export const StudioStandardsMatrix: React.FC<StudioStandardsMatrixProps> = ({
  onRequestClick,
}) => {
  const [activeFormat, setActiveFormat] = useState<FormatSpecItem>(FORMAT_SPECS[0]);

  return (
    <section
      id="studio-standards"
      className="relative max-w-7xl mx-auto px-6 sm:px-8 py-8 scroll-mt-24"
    >
      <div className="relative rounded-[24px] bg-[#141315] border border-[#262525] p-8 sm:p-12 md:p-14 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
        {/* Top Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#262525]">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#fe1e34] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span>[05 // BUILT FOR PRODUCTION TEAMS & COMPATIBILITY MATRIX]</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-[-0.035em] leading-[0.98] uppercase">
              Designed to Plug Seamlessly Into Your Pipeline<span className="text-[#fe1e34]">.</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onRequestClick(activeFormat.disciplines[0])}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-[#fe1e34] hover:bg-[#e0192e] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(254,30,52,0.35)] shrink-0"
          >
            <span>START A PROJECT BRIEF</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-start">
          {/* Left 5 Columns: Studio Identity, Who We Serve & Floating 3D Calibration Tokens */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-sm sm:text-base text-[#d4d2d2] font-light leading-relaxed">
              3DRequests was built to bridge the gap between technical engineering CAD and high-end commercial CGI. Whether you are an individual inventor preparing a prototype for 3D printing, a hardware startup launching a flagship product, or a creative agency needing custom 3D motion on a tight deadline, we deliver studio-grade geometry and visuals without agency bloat.
            </p>

            {/* Who We Serve Pills */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e8d8d] block font-semibold">
                TEAMS & CREATORS WE SERVE:
              </span>
              <div className="flex flex-wrap gap-2">
                {WHO_WE_SERVE.map((group, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-[#1d1c1f] border border-[#2e2d30] text-xs font-mono text-[#fcfcfc]"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Floating 3D Calibration Tokens (Emblematica Section 6 Collage Homage) */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {[
                { img: SYNTHESIZER_IMAGE, label: 'TOKEN 01 // NURBS CAD GEAR', tag: '±0.02mm STEP' },
                { img: LATTICE_IMAGE, label: 'TOKEN 02 // SLA TEST COUPON', tag: '100% MANIFOLD' },
                { img: CHRONO_ORB_IMAGE, label: 'TOKEN 03 // UV SHADER BALL', tag: 'ACEScg 8K PBR' },
                { img: CHARACTER_BUST_IMAGE, label: 'TOKEN 04 // SUB-D TOPOLOGY', tag: 'CLEAN QUADS' },
              ].map((tok, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, rotateZ: i % 2 === 0 ? 1.5 : -1.5 }}
                  transition={{ duration: 0.35 }}
                  className="p-2.5 rounded-[14px] bg-[#0d0c0e] border border-[#262525] hover:border-[#fe1e34] flex items-center gap-3 shadow-lg"
                >
                  <img
                    src={tok.img}
                    alt={tok.label}
                    className="w-12 h-12 rounded-[10px] object-cover shrink-0 border border-white/10"
                  />
                  <div className="min-w-0">
                    <span className="block text-[9px] font-mono text-[#fe1e34] font-bold truncate">
                      {tok.tag}
                    </span>
                    <span className="block text-[10px] font-mono text-[#fcfcfc] truncate">
                      {tok.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right 7 Columns: Interactive Deliverable & Compatibility Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-[18px] bg-[#0c0b0d] border border-[#262525] space-y-6">
              <div className="flex items-center justify-between border-b border-[#222] pb-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#fcfcfc] font-bold flex items-center gap-2">
                  <FileCode2 className="w-4 h-4 text-[#fe1e34]" />
                  <span>INTERACTIVE DELIVERABLE FORMAT MATRIX</span>
                </span>
                <span className="text-[10px] font-mono text-[#8e8d8d]">
                  HOVER OR CLICK ANY FORMAT
                </span>
              </div>

              {/* Format Pills Grouped by Category */}
              <div className="space-y-5">
                {(['CAD & Manufacturing', 'DCC & Real-Time', 'Visual & Motion'] as const).map(
                  (category) => (
                    <div key={category} className="space-y-2.5">
                      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8e8d8d] block">
                        // {category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {FORMAT_SPECS.filter((f) => f.category === category).map((item) => {
                          const isSelected = activeFormat.ext === item.ext;
                          return (
                            <button
                              key={item.ext}
                              type="button"
                              onMouseEnter={() => {
                                soundFX.playHover();
                                setActiveFormat(item);
                              }}
                              onClick={() => {
                                soundFX.playSelect();
                                setActiveFormat(item);
                              }}
                              className={`px-4 py-2 rounded-[8px] font-mono text-xs transition-all duration-200 border ${
                                isSelected
                                  ? 'bg-[#fe1e34] text-white border-[#fe1e34] font-bold shadow-[0_0_20px_rgba(254,30,52,0.4)] scale-105'
                                  : 'bg-[#161518] text-[#d4d2d2] border-[#2a292d] hover:border-[#fe1e34]/60 hover:text-white'
                              }`}
                            >
                              {item.ext}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Dynamic Quality Assurance Inspector Readout Box */}
              <div className="p-5 rounded-[12px] bg-[#151316] border border-[#fe1e34]/40 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#fe1e34] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>QA STANDARD FOR {activeFormat.ext}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#b5b2b2] uppercase px-2.5 py-0.5 rounded bg-[#080808] border border-[#262525]">
                    {activeFormat.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#fcfcfc] font-light leading-relaxed">
                  {activeFormat.qaGuarantee}
                </p>

                <div className="pt-2 border-t border-[#262525] flex flex-wrap items-center gap-2 text-[10px] font-mono">
                  <span className="text-[#8e8d8d]">OUTPUT BY DISCIPLINES:</span>
                  {activeFormat.disciplines.map((d, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#080808] text-[#d4d2d2] border border-[#2a292c]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
