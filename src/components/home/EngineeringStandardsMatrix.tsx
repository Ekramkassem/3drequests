import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, FileCode, Check, Cpu, Sparkles, Box, HardDrive } from 'lucide-react';

interface FormatSpec {
  extension: string;
  category: 'CAD' | 'Additive' | 'Real-Time' | 'Cinematic';
  standard: string;
  description: string;
  compatibleWith: string[];
  qaVerification: string;
}

const FORMAT_SPECS: FormatSpec[] = [
  {
    extension: '.STEP / .STP',
    category: 'CAD',
    standard: 'ISO 10303-214 / AP242 NURBS Boundary Representation',
    description: 'Precision boundary mathematical geometry with zero polygon approximations. Preserves exact spline curves, fillet radiuses, and parametric assembly hierarchies.',
    compatibleWith: ['SolidWorks', 'Autodesk Fusion 360', 'Rhino 8', 'Siemens NX', 'KeyShot'],
    qaVerification: 'G2 Curvature Continuity & Parting Line Draft Angle Audited',
  },
  {
    extension: '.STL & .3MF',
    category: 'Additive',
    standard: '100% Watertight Manifold Solid Mesh (Binary/ASCII)',
    description: 'Mathematically sealed solids engineered for additive manufacturing. Zero non-manifold edges, zero inverted vertex normals, and verified minimum wall thickness.',
    compatibleWith: ['Bambu Studio', 'Formlabs PreForm', 'UltiMaker Cura', 'PrusaSlicer', 'Materialise Magics'],
    qaVerification: 'Zero-Leak Manifold Slicing Simulation Tested (SLA / SLS / MJF / FDM)',
  },
  {
    extension: '.FBX & .OBJ',
    category: 'Real-Time',
    standard: 'Autodesk FBX 2024 Sub-D Quad Topology with Tangent Normals',
    description: 'Clean four-sided quad meshes with zero triangles on primary curvature faces. Includes UDIM UV coordinates, smoothing groups, and deformation-ready bone rigs.',
    compatibleWith: ['Unreal Engine 5.5', 'Unity 6', 'Blender', 'Autodesk Maya', '3ds Max'],
    qaVerification: 'Sub-D Quad Flow & Non-Pivoting Bone Deformation Checked',
  },
  {
    extension: '.USDZ & .GLB',
    category: 'Real-Time',
    standard: 'Khronos glTF 2.0 / Pixar Universal Scene Description (USD)',
    description: 'Optimized PBR metallic/roughness real-time assets formatted for WebGL canvas embeds, Apple Vision Pro spatial scenes, and mobile AR quick-look.',
    compatibleWith: ['Apple Vision Pro', 'Three.js / WebGL', 'Safari iOS Quick Look', 'Android Scene Viewer'],
    qaVerification: 'Under 15MB Packed Texture Budget & Drako Mesh Compression Tested',
  },
  {
    extension: '.BLEND & .C4D',
    category: 'Cinematic',
    standard: 'Native Master Production Archives with Linked PBR Materials',
    description: 'Full un-collapsed modifier stacks, procedural geometry nodes, and calibrated ACEScg lookdev lighting setups ready for instant production rendering.',
    compatibleWith: ['Blender 4.2+ (Cycles)', 'Cinema 4D (Octane / Redshift)', 'Houdini 20'],
    qaVerification: 'Physical Light Calibration & Zero Broken File Texture Paths',
  },
  {
    extension: '32-BIT .EXR & PRORES',
    category: 'Cinematic',
    standard: 'OpenEXR Multi-Layer Float & Apple ProRes 4444 XQ Alpha',
    description: 'Master broadcast renders containing separate Cryptomatte, Depth, Ambient Occlusion, Specular, and Normal passes for post-production compositing.',
    compatibleWith: ['Adobe After Effects', 'DaVinci Resolve Studio', 'Nuke', 'Photoshop'],
    qaVerification: 'ACEScg Color Pipeline & Alpha Edge Anti-Aliasing Verified',
  },
];

export const EngineeringStandardsMatrix: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<FormatSpec>(FORMAT_SPECS[0]);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'CAD' | 'Additive' | 'Real-Time' | 'Cinematic'>('ALL');

  const filteredFormats = activeFilter === 'ALL'
    ? FORMAT_SPECS
    : FORMAT_SPECS.filter((f) => f.category === activeFilter);

  return (
    <section className="relative w-full py-24 bg-[#0a090a] border-t border-[#262525]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#262525] mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-[#b5b2b2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF28]" />
              <span>05 // DELIVERABLE STANDARDS & COMPATIBILITY MATRIX</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-[-0.04em] uppercase">
              ZERO-COMPROMISE <span className="font-serif italic font-normal lowercase tracking-tight text-[#e5e5e5] text-4xl sm:text-5xl md:text-6xl">engineering</span>
              <span className="text-[#fe1e34]">.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {(['ALL', 'CAD', 'Additive', 'Real-Time', 'Cinematic'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#fe1e34] text-white font-bold'
                    : 'bg-[#171617] text-[#b5b2b2] hover:text-white border border-[#262525]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid: Left Formats List / Right Active Specification Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Formats List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#737373] pb-1">
              SELECT STANDARD TO INSPECT COMPATIBILITY:
            </div>
            {filteredFormats.map((item) => {
              const isSelected = selectedFormat.extension === item.extension;
              return (
                <button
                  key={item.extension}
                  type="button"
                  onClick={() => setSelectedFormat(item)}
                  className={`w-full text-left p-4 rounded-[10px] border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#1c1b1c] border-[#fe1e34] shadow-lg shadow-[#fe1e34]/5'
                      : 'bg-[#121112] border-[#262525] hover:border-[#3e3d3e]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className={`font-mono font-bold text-sm ${isSelected ? 'text-[#fe1e34]' : 'text-[#fcfcfc]'}`}>
                        {item.extension}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1f1e1f] text-[#a3a3a3] border border-[#2c2b2c]">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-[#737373] truncate max-w-[260px] sm:max-w-[340px]">
                      {item.standard}
                    </p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#fe1e34] animate-pulse' : 'bg-transparent'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Technical Inspector Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFormat.extension}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-7 sm:p-8 rounded-[14px] bg-[#141314] border border-[#2e2d2e] space-y-6 relative overflow-hidden"
              >
                {/* Accent glow corner */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 bg-[#D2FF28]/10 rounded-full blur-2xl" />

                {/* Badge & Standard Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D2FF28] bg-[#D2FF28]/10 border border-[#D2FF28]/25 px-2.5 py-0.5 rounded-full">
                      QA PASSED // READY FOR INGESTION
                    </span>
                    <span className="font-mono text-xs text-[#737373]">
                      FORMAT // {selectedFormat.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#fcfcfc]">
                    {selectedFormat.extension} Standard
                  </h3>
                  <p className="text-xs font-mono text-[#b5b2b2]">
                    {selectedFormat.standard}
                  </p>
                </div>

                {/* Description */}
                <div className="text-xs sm:text-sm text-[#d4d2d2] font-light leading-relaxed border-t border-[#262525] pt-4">
                  {selectedFormat.description}
                </div>

                {/* QA Verification Protocol */}
                <div className="p-4 rounded-[8px] bg-[#1b1a1b] border border-[#2e2d2e] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D2FF28] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-[#D2FF28] uppercase font-bold tracking-wider">
                      MANDATORY STUDIO QA PROTOCOL:
                    </div>
                    <div className="text-xs font-mono text-[#fcfcfc]">
                      {selectedFormat.qaVerification}
                    </div>
                  </div>
                </div>

                {/* Compatible Software & Engines */}
                <div className="space-y-3 pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#737373]">
                    CERTIFIED TOOL & ENGINE COMPATIBILITY:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedFormat.compatibleWith.map((sw, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded bg-[#080808] border border-[#333] text-xs font-mono text-[#fcfcfc] flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-[#fe1e34]" />
                        <span>{sw}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Assurance Note */}
                <div className="pt-4 border-t border-[#262525] flex items-center justify-between text-[11px] font-mono text-[#737373]">
                  <span>EVERY FILE INCLUDES 100% COMMERCIAL RIGHTS</span>
                  <span className="text-[#fe1e34] font-semibold">ZERO CLEANUP NEEDED</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 3 Core Engineering Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#262525]">
          <div className="p-6 rounded-[12px] bg-[#121112] border border-[#222] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#fe1e34] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34]" />
              <span>GUARANTEE 01</span>
            </div>
            <h4 className="font-display text-base font-bold text-[#fcfcfc]">100% Watertight Solids</h4>
            <p className="text-xs text-[#a3a3a3] font-light leading-relaxed">
              Never experience slicing crashes or hollow inversion errors. Every 3D printing mesh is mathematically verified manifold.
            </p>
          </div>

          <div className="p-6 rounded-[12px] bg-[#121112] border border-[#222] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D2FF28] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF28]" />
              <span>GUARANTEE 02</span>
            </div>
            <h4 className="font-display text-base font-bold text-[#fcfcfc]">Zero Five-Pole Degeneracy</h4>
            <p className="text-xs text-[#a3a3a3] font-light leading-relaxed">
              Clean quad edge flows that deform smoothly without normal pinching or unsightly surface artifacts under extreme lighting.
            </p>
          </div>

          <div className="p-6 rounded-[12px] bg-[#121112] border border-[#222] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              <span>GUARANTEE 03</span>
            </div>
            <h4 className="font-display text-base font-bold text-[#fcfcfc]">Native STEP CAD Master Tooling</h4>
            <p className="text-xs text-[#a3a3a3] font-light leading-relaxed">
              We provide raw STEP/IGES files with true mathematical radii ready for CNC aluminum milling and production injection molds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
