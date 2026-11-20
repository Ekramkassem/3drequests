import React, { useState } from 'react';
import { Check, Copy, ArrowUpRight, Sparkles, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { DETAILED_SERVICES } from '../data/studioData';
import { magneticCursor } from '../utils/magneticCursorState';

const STUDIO_EMAIL = 'studio@3drequests.com';

const USE_CASES = [
  'Manufacturing / Injection Mold',
  '3D Printing / Rapid Prototype',
  'Product Launch / Marketing Film',
  'Real-Time WebGL / AR / Unreal',
  'Architectural Presentation',
  'Collectible / Miniature Sculpt',
];

const TARGET_FORMATS = [
  '.STEP / .IGES',
  '.STL / .3MF',
  '.BLEND (Native)',
  '.FBX / .OBJ',
  '.GLB / .USDZ',
  '16-Bit .EXR / PNG',
  'ProRes 4444',
];

const TIMELINES = [
  { id: 'expedited', label: 'Expedited Sprint (48–72h)', badge: 'PRIORITY' },
  { id: 'standard', label: 'Standard Studio Window (1–2 Weeks)', badge: 'RECOMMENDED' },
  { id: 'production', label: 'Full Multi-Asset Production (3–4 Weeks)', badge: 'ENTERPRISE' },
];

interface InteractiveRequestConfiguratorProps {
  onNavigate?: (page: string) => void;
}

export const InteractiveRequestConfigurator: React.FC<InteractiveRequestConfiguratorProps> = ({ onNavigate }) => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    DETAILED_SERVICES[0]?.title || 'Custom 3D Modeling',
    DETAILED_SERVICES[1]?.title || 'Product Design & Visualization',
  ]);
  const [selectedUseCase, setSelectedUseCase] = useState<string>('Product Launch / Marketing Film');
  const [selectedFormats, setSelectedFormats] = useState<string[]>(['.STEP / .IGES', '.GLB / .USDZ', '16-Bit .EXR / PNG']);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Standard Studio Window (1–2 Weeks)');
  const [projectName, setProjectName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const toggleDiscipline = (title: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(title) ? (prev.length > 1 ? prev.filter((item) => item !== title) : prev) : [...prev, title]
    );
  };

  const toggleFormat = (fmt: string) => {
    setSelectedFormats((prev) =>
      prev.includes(fmt) ? (prev.length > 1 ? prev.filter((item) => item !== fmt) : prev) : [...prev, fmt]
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(STUDIO_EMAIL).catch(() => {});
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="request-brief"
      className="relative py-28 md:py-36 px-5 md:px-10 bg-[#080808] text-[#f3efef] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Subtle Architectural Grid & Crimson Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[620px] h-[620px] rounded-full opacity-15 blur-[150px]"
        style={{ background: 'radial-gradient(circle, #fe1e34 0%, transparent 70%)' }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#fe1e34]">
                07 // Interactive Commission Configurator
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[0.96]">
              Configure Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3efef] to-[#fe1e34]">
                3D Specification
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#f3efef]/65 max-w-md font-light leading-relaxed">
            Assemble your required disciplines, engineering use-case, and native output packages. Your live specification receipt updates in real time.
          </p>
        </div>

        {/* 12-Column Split Layout: Left 7 Cols Configurator | Right 5 Cols Live Spec Sheet Receipt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT 7 COLUMNS: Interactive 4-Step Multi-Select Configurator */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-10">
            {/* STEP 1: Select Discipline(s) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121112]/90 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#fe1e34] font-semibold">
                  Step 01 // Select Studio Discipline(s)
                </span>
                <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                  Multi-Select ({selectedDisciplines.length} Active)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DETAILED_SERVICES.map((disc) => {
                  const active = selectedDisciplines.includes(disc.title);
                  return (
                    <button
                      key={disc.id}
                      type="button"
                      onClick={() => toggleDiscipline(disc.title)}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        magneticCursor.hoverButton({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
                      }}
                      onMouseLeave={() => magneticCursor.reset()}
                      className={`group text-left px-4 py-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                        active
                          ? 'bg-[#fe1e34]/12 border-[#fe1e34] text-white shadow-[0_0_25px_rgba(254,30,52,0.16)]'
                          : 'bg-white/[0.02] border-white/[0.07] text-[#f3efef]/70 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                            active ? 'bg-[#fe1e34] text-white font-bold' : 'bg-white/[0.05] text-white/45'
                          }`}
                        >
                          {disc.number}
                        </span>
                        <span className="text-xs sm:text-sm font-medium truncate">{disc.title}</span>
                      </div>
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center border shrink-0 transition-colors ${
                          active ? 'border-[#fe1e34] bg-[#fe1e34] text-white' : 'border-white/20'
                        }`}
                      >
                        {active && <Check className="w-2.5 h-2.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Primary End-Use & Target Formats */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121112]/90 border border-white/[0.08] space-y-7">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#fe1e34] font-semibold">
                    Step 02 // Primary Engineering / Visual Use-Case
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {USE_CASES.map((uc) => {
                    const active = selectedUseCase === uc;
                    return (
                      <button
                        key={uc}
                        type="button"
                        onClick={() => setSelectedUseCase(uc)}
                        className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                          active
                            ? 'bg-white text-[#080808] border-white font-semibold shadow-sm'
                            : 'bg-white/[0.02] border-white/[0.07] text-[#f3efef]/70 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        {uc}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-5 border-t border-white/[0.07]">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    Required Native & Exchange Formats
                  </span>
                  <span className="font-mono text-[10px] text-[#fe1e34]">Select All Needed</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {TARGET_FORMATS.map((fmt) => {
                    const active = selectedFormats.includes(fmt);
                    return (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => toggleFormat(fmt)}
                        className={`px-3.5 py-2 rounded-lg font-mono text-xs border transition-all ${
                          active
                            ? 'bg-[#fe1e34] border-[#fe1e34] text-white font-semibold shadow-[0_0_16px_rgba(254,30,52,0.3)]'
                            : 'bg-white/[0.03] border-white/[0.08] text-white/65 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        {fmt}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STEP 3: Target Delivery Window */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121112]/90 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#fe1e34] font-semibold">
                  Step 03 // Target Delivery Window
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINES.map((tl) => {
                  const active = selectedTimeline === tl.label;
                  return (
                    <button
                      key={tl.id}
                      type="button"
                      onClick={() => setSelectedTimeline(tl.label)}
                      className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                        active
                          ? 'bg-[#fe1e34]/12 border-[#fe1e34] text-white'
                          : 'bg-white/[0.02] border-white/[0.07] text-[#f3efef]/70 hover:border-white/25'
                      }`}
                    >
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#fe1e34]">
                        {tl.badge}
                      </span>
                      <span className="text-xs sm:text-sm font-medium leading-snug">{tl.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: Project Reference & Direct Dispatch */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121112]/90 border border-white/[0.08] space-y-5">
              <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-[#fe1e34] font-semibold">
                Step 04 // Reference Notes & Dispatch
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">
                    Project / Component Name
                  </label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g., Monolith Chrono Housing v2"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#fe1e34]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">
                    Your Studio / Engineering Email
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="team@yourcompany.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#fe1e34]"
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">
                  Dimensional Tolerances, CAD Links, or Visual Direction
                </label>
                <textarea
                  rows={3}
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  placeholder="Share bounding box dimensions, target polycount, or reference links..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#fe1e34]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    magneticCursor.hoverButton({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
                  }}
                  onMouseLeave={() => magneticCursor.reset()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#fe1e34] hover:bg-[#e0152b] text-white font-display font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(254,30,52,0.35)] cursor-pointer"
                >
                  <span>{submitted ? 'Specification Logged — Ready' : 'Lock & Transmit 3D Spec'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    Open Full File Upload Portal →
                  </button>
                )}
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-between">
                  <span>
                    ✓ SPEC SHEET GENERATED: Senior 3D Lead review scheduled within 24 hours.
                  </span>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] underline uppercase ml-4"
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          </form>

          {/* RIGHT 5 COLUMNS: Live Engineering Spec Sheet Receipt + 1-Click Direct Copy */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="rounded-2xl bg-[#141314] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Top technical perforation bar */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-dashed border-white/15">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#fe1e34] block">
                    LIVE SPEC RECEIPT // 3DR-2025
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-0.5">
                    {projectName.trim() || 'UNSPECIFIED COMMISSION'}
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 font-mono text-[10px] text-emerald-400">
                  QA VERIFIED
                </div>
              </div>

              {/* Spec Rows */}
              <div className="space-y-5 font-mono text-xs">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#fe1e34]" /> Active Disciplines ({selectedDisciplines.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDisciplines.map((d) => (
                      <span
                        key={d}
                        className="px-2.5 py-1 rounded bg-white/[0.06] border border-white/10 text-white text-[11px]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">Primary Use-Case</span>
                  <span className="text-white text-right font-medium">{selectedUseCase}</span>
                </div>

                <div className="pt-4 border-t border-white/[0.07]">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#fe1e34]" /> Native Deliverable Packages
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFormats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-2.5 py-1 rounded bg-[#fe1e34]/15 border border-[#fe1e34]/40 text-[#fcfcfc] text-[11px]"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">Target Window</span>
                  <span className="text-emerald-400 text-right">{selectedTimeline}</span>
                </div>

                <div className="pt-4 border-t border-white/[0.07] space-y-2 text-[11px] text-white/65">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#fe1e34] shrink-0" />
                    <span>100% Watertight Manifold & Zero Non-Manifold Edges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#fe1e34] shrink-0" />
                    <span>Full Commercial IP & Native Source File Transfer</span>
                  </div>
                </div>
              </div>

              {/* Direct Studio Dispatch Copy Box */}
              <div className="mt-7 pt-5 border-t border-dashed border-white/15">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 mb-2">
                  Direct Studio Dispatch Desk
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-between transition-all group cursor-pointer"
                >
                  <span className="font-mono text-xs text-white">{STUDIO_EMAIL}</span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#fe1e34]">
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> COPIED TO CLIPBOARD
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> COPY EMAIL
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bookend 3-Column Architectural Status Bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-4 items-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
          <div>3DREQUESTS // CUSTOM MODELING & VISUALIZATION</div>
          <div className="md:text-center text-white/70">
            PRODUCTION QUEUE: <span className="text-emerald-400">OPEN FOR NEW COMMISSIONS</span>
          </div>
          <div className="md:text-right text-[#fe1e34]">CLEAN TOPOLOGY. ZERO FRICTION.</div>
        </div>
      </div>
    </section>
  );
};
export default InteractiveRequestConfigurator;
