import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, ArrowRight, ShieldCheck, Clock, Sparkles, Send, FileText } from 'lucide-react';

interface InteractiveRequestConfiguratorProps {
  onRequestClick: (preselectedType?: string, preselectedBudget?: string) => void;
}

const DISCIPLINES = [
  { id: '3dprint', label: '3D Printing & Additive STL', basePrice: 100, baseHours: 36, tier: 'Maker' },
  { id: 'product', label: 'Product Design & Hardware CAD', basePrice: 280, baseHours: 72, tier: 'Studio' },
  { id: 'character', label: 'Character Sculpt & Digital Bust', basePrice: 240, baseHours: 72, tier: 'Studio' },
  { id: 'mechanical', label: 'Mechanical & Functional Assemblies', basePrice: 320, baseHours: 96, tier: 'Studio' },
  { id: 'motion', label: '3D Animation & Motion Film', basePrice: 550, baseHours: 120, tier: 'Enterprise' },
  { id: 'architectural', label: 'Architectural & Spatial Viz', basePrice: 450, baseHours: 96, tier: 'Studio' },
];

const TARGET_OUTCOMES = [
  { id: 'sla_print', label: 'SLA / SLS / FDM 3D Printing', mult: 1.0, badge: 'Watertight STL' },
  { id: 'cnc_molding', label: 'CNC Tooling / Injection Molding', mult: 1.35, badge: 'NURBS STEP' },
  { id: 'unreal_game', label: 'Unreal Engine 5 / Real-Time Game', mult: 1.25, badge: 'Sub-D Quad FBX' },
  { id: 'marketing_4k', label: '4K Commercial Product Rendering', mult: 1.2, badge: '8K EXR + Stills' },
  { id: 'web_ar', label: 'Web 3D & Apple Vision Pro AR', mult: 1.15, badge: 'USDZ + GLB' },
];

const INPUT_MATERIALS = [
  { id: 'photos', label: 'Phone Photos or Hand Sketches', mult: 1.0 },
  { id: 'vector_cad', label: '2D CAD / Illustrator / PDF Plans', mult: 0.95 },
  { id: 'rough_mesh', label: 'Rough 3D Scan or Broken Mesh', mult: 1.05 },
  { id: 'idea_only', label: 'Idea / Text Concept Only (No files yet)', mult: 1.1 },
];

const SPEED_OPTIONS = [
  { id: 'standard', label: 'Standard Delivery (3–5 Days)', fee: 0, tag: 'Standard' },
  { id: 'rush_48h', label: '48-Hour Priority Rush', fee: 120, tag: 'Rush +$120' },
  { id: 'rush_24h', label: '24-Hour Urgent Same-Day Sprint', fee: 250, tag: 'Ultra +$250' },
];

export const InteractiveRequestConfigurator: React.FC<InteractiveRequestConfiguratorProps> = ({
  onRequestClick,
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(DISCIPLINES[0]);
  const [selectedOutcome, setSelectedOutcome] = useState(TARGET_OUTCOMES[0]);
  const [selectedInput, setSelectedInput] = useState(INPUT_MATERIALS[0]);
  const [selectedSpeed, setSelectedSpeed] = useState(SPEED_OPTIONS[0]);
  const [copied, setCopied] = useState(false);

  // Calculate live estimate
  const rawPrice = Math.round(selectedDiscipline.basePrice * selectedOutcome.mult * selectedInput.mult + selectedSpeed.fee);
  const roundedPrice = Math.ceil(rawPrice / 10) * 10;
  const estimatedHours = selectedSpeed.id === 'rush_24h' ? 24 : selectedSpeed.id === 'rush_48h' ? 48 : selectedDiscipline.baseHours;

  const specReceiptText = `
=== 3D REQUESTS // TECHNICAL PRODUCTION SPEC ===
Discipline: ${selectedDiscipline.label}
Deliverable Standard: ${selectedOutcome.badge} (${selectedOutcome.label})
Client Inputs: ${selectedInput.label}
Target Turnaround: ${selectedSpeed.label} (~${estimatedHours}h SLA)
Estimated Budget: $${roundedPrice} Flat Fee
Commercial Rights: 100% IP Transfer Included
Revisions: 2 Complete Revision Rounds Included
================================================
`.trim();

  const handleCopySpec = () => {
    navigator.clipboard.writeText(specReceiptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleProceed = () => {
    onRequestClick(
      selectedDiscipline.label,
      `$${roundedPrice} (${selectedSpeed.label})`
    );
  };

  return (
    <section id="interactive-configurator" className="relative w-full py-24 bg-[#080808] border-t border-[#262525]">
      {/* Background glow highlights */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(254,30,52,0.06)_0%,transparent_70%)] blur-3xl z-0" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(210,255,40,0.04)_0%,transparent_70%)] blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#262525] mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.25em] text-[#b5b2b2]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span>06 // INTERACTIVE SPECIFICATION ENGINE</span>
              <span className="text-[#525252]">/</span>
              <span>LIVE ESTIMATOR & SCOPE BUILDER</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-[-0.04em] uppercase">
              CONFIGURE YOUR <span className="font-serif italic font-normal lowercase tracking-tight text-[#e5e5e5] text-4xl sm:text-5xl md:text-6xl">commission</span>
              <span className="text-[#fe1e34]">.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#b5b2b2] max-w-sm font-light leading-relaxed">
            Configure your technical scope in 30 seconds. Get an instant, binding milestone estimate and live engineering specification sheet.
          </p>
        </div>

        {/* 2-Column Configurator: Left 4-Step Options / Right Live Spec Sheet Receipt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* STEP 1: Discipline */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#fe1e34] font-semibold">
                  STEP 01 // CHOOSE PRIMARY DISCIPLINE
                </span>
                <span className="text-[10px] font-mono text-[#737373]">
                  {DISCIPLINES.length} DISCIPLINES
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DISCIPLINES.map((d) => {
                  const isSelected = selectedDiscipline.id === d.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDiscipline(d)}
                      className={`text-left p-3.5 rounded-[10px] border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1a191a] border-[#fe1e34] text-white shadow-md'
                          : 'bg-[#121112] border-[#262525] text-[#b5b2b2] hover:border-[#383738] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold">{d.label}</span>
                        <span className="text-[10px] text-[#737373]">From ${d.basePrice}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Target Outcome / Manufacturing */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#fe1e34] font-semibold block">
                STEP 02 // TARGET MANUFACTURING / PLATFORM
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TARGET_OUTCOMES.map((o) => {
                  const isSelected = selectedOutcome.id === o.id;
                  return (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => setSelectedOutcome(o)}
                      className={`text-left p-3.5 rounded-[10px] border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1a191a] border-[#D2FF28] text-white shadow-md'
                          : 'bg-[#121112] border-[#262525] text-[#b5b2b2] hover:border-[#383738] hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-mono font-medium">{o.label}</div>
                      <div className="text-[10px] font-mono text-[#D2FF28] mt-1">
                        &rarr; {o.badge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Reference Materials */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#fe1e34] font-semibold block">
                STEP 03 // AVAILABLE REFERENCE MATERIAL
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {INPUT_MATERIALS.map((input) => {
                  const isSelected = selectedInput.id === input.id;
                  return (
                    <button
                      key={input.id}
                      type="button"
                      onClick={() => setSelectedInput(input)}
                      className={`text-left p-3.5 rounded-[10px] border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1a191a] border-[#38bdf8] text-white shadow-md'
                          : 'bg-[#121112] border-[#262525] text-[#b5b2b2] hover:border-[#383738] hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-mono">{input.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: Production Speed */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#fe1e34] font-semibold block">
                STEP 04 // TIMELINE & PRODUCTION SPEED
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {SPEED_OPTIONS.map((speed) => {
                  const isSelected = selectedSpeed.id === speed.id;
                  return (
                    <button
                      key={speed.id}
                      type="button"
                      onClick={() => setSelectedSpeed(speed)}
                      className={`text-left p-3.5 rounded-[10px] border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1a191a] border-[#fe1e34] text-white shadow-md'
                          : 'bg-[#121112] border-[#262525] text-[#b5b2b2] hover:border-[#383738] hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-mono font-bold">{speed.label.split('(')[0]}</div>
                      <div className="text-[10px] font-mono text-[#fe1e34] mt-1 font-semibold">
                        {speed.tag}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Engineering Spec Receipt (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-[14px] bg-[#141314] border border-[#2e2d2e] p-6 sm:p-7 space-y-6 shadow-2xl relative overflow-hidden">
              {/* Top Receipt Notch & Barcode Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#262525]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fe1e34] animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4d2d2] font-semibold">
                    LIVE SPEC RECEIPT
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#737373]">
                  SPEC-3DR-{Math.abs(roundedPrice * 17).toString().padStart(4, '0')}
                </span>
              </div>

              {/* Price & Turnaround Summary Display */}
              <div className="p-5 rounded-[10px] bg-[#0c0b0c] border border-[#262525] space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#737373]">
                  FIXED ESTIMATED INVESTMENT
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#fcfcfc]">
                    ${roundedPrice}
                  </span>
                  <span className="text-xs font-mono text-[#737373]">/ guaranteed flat fee</span>
                </div>

                <div className="flex items-center gap-3 pt-2 text-xs font-mono text-[#D2FF28]">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Turnaround SLA: ~{estimatedHours} Hours Delivery</span>
                </div>
              </div>

              {/* Itemized Deliverable Parameters */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-[#222]">
                  <span className="text-[#737373]">Discipline:</span>
                  <span className="text-[#fcfcfc] font-semibold text-right max-w-[200px] truncate">{selectedDiscipline.label}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#222]">
                  <span className="text-[#737373]">Target Format:</span>
                  <span className="text-[#D2FF28] font-bold">{selectedOutcome.badge}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#222]">
                  <span className="text-[#737373]">Reference Basis:</span>
                  <span className="text-[#fcfcfc] text-right max-w-[200px] truncate">{selectedInput.label}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#222]">
                  <span className="text-[#737373]">Production Speed:</span>
                  <span className="text-[#fe1e34] font-semibold">{selectedSpeed.tag}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#222]">
                  <span className="text-[#737373]">Commercial Rights:</span>
                  <span className="text-[#fcfcfc]">100% Full IP Transfer</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#222]">
                  <span className="text-[#737373]">Revisions:</span>
                  <span className="text-[#fcfcfc]">2 Free Rounds Included</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleProceed}
                  className="w-full py-4 px-6 rounded-[8px] bg-[#fe1e34] hover:bg-[#e01428] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#fe1e34]/20 cursor-pointer"
                >
                  <span>Lock Spec & Start Brief</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={handleCopySpec}
                  className="w-full py-2.5 px-4 rounded-[8px] bg-[#1a191a] hover:bg-[#252425] border border-[#2a292a] text-[#d4d2d2] font-mono text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D2FF28]" />
                      <span className="text-[#D2FF28]">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#737373]" />
                      <span>Copy Technical Spec Sheet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Security / NDA Note */}
              <div className="pt-2 flex items-center justify-center gap-2 text-[10px] font-mono text-[#737373]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#fe1e34]" />
                <span>Mutual bilateral NDA executed upon kickoff</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
