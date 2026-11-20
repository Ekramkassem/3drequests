import React, { useState, useEffect } from 'react';
import { DesignRequestForm, ValidationResult } from '../types.ts';
import { validateDesignRequest } from '../utils/calculator.ts';
import {
  X,
  CheckCircle2,
  Shield,
  Upload,
  ArrowRight,
  ArrowLeft,
  Printer,
  Wrench,
  User,
  Film,
  Building,
  Sparkles,
  Zap,
  Tag,
  Clock,
  Check,
  Flame,
  Award,
  Layers,
  Send,
  MessageSquare,
  DollarSign,
  Cpu,
  Box,
  Compass,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFX } from '../utils/soundFX.ts';

interface DesignRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedType?: string;
  preselectedBudget?: string;
}

export const DesignRequestModal: React.FC<DesignRequestModalProps> = ({
  isOpen,
  onClose,
  preselectedType,
  preselectedBudget,
}) => {
  // 5-Stage Gamified Workshop:
  // 1: Discipline, 2: Scope & Execution, 3: Power-Ups, 4: Estimated Budget, 5: Launch Details
  const [stage, setStage] = useState<number>(1);
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [customBudgetInput, setCustomBudgetInput] = useState<string>('');

  const [formData, setFormData] = useState<DesignRequestForm>({
    projectType: preselectedType || 'Product Design',
    projectDescription: '',
    referenceLinks: '',
    desiredOutcome: 'Production-ready 3D master CAD and photorealistic key visuals',
    fileAttachmentName: '',
    budgetRange: preselectedBudget || '$250 – $500 (Standard Commercial)',
    desiredTimeline: 'Standard Sprint (2–4 Days)',
    additionalRequirements: '',
    name: '',
    email: '',
    preferredChannel: '',
    company: '',
    requiresNda: true,
  });

  const [validation, setValidation] = useState<ValidationResult>({ isValid: true, errors: {} });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');

  const disciplines = [
    {
      id: '3dprint',
      title: '3D Printing & Prototyping',
      icon: Printer,
      badge: 'MAKER & HARDWARE',
      desc: '100% Watertight STL/3MF, zero-fail slicing, generative lattices, mechanical parts',
    },
    {
      id: 'product',
      title: 'Product CAD & Visualization',
      icon: Wrench,
      badge: 'CONSUMER TECH',
      desc: 'Precision unibody hardware, e-commerce 4K renders, SolidWorks STEP master files',
    },
    {
      id: 'character',
      title: 'Character Sculpting & Art',
      icon: User,
      badge: 'DIGITAL SCULPT',
      desc: 'ZBrush organic figures, game assets, tabletop miniatures, anatomical figurines',
    },
    {
      id: 'animation',
      title: '3D Motion & Social Ads',
      icon: Film,
      badge: 'KINETIC 60FPS',
      desc: 'Cinematic turntable loops, fluid physics, exploded views, high-converting ad hooks',
    },
    {
      id: 'arch',
      title: 'Architectural Visualization',
      icon: Building,
      badge: 'SPATIAL & CMF',
      desc: 'Photorealistic interiors, pavilions, lighting choreography, exhibition environments',
    },
    {
      id: 'custom',
      title: 'Custom 3D Vision',
      icon: Sparkles,
      badge: 'BESPOKE CONCEPT',
      desc: 'Experimental art, mechanical relics, rapid prototyping from napkin drawings',
    },
  ];

  // Scope & tier configurations with NO price tags
  const executionTiers = [
    {
      name: 'Maker Sprint',
      sla: '24–48 Hours',
      badge: 'Fast Turnaround',
      icon: Zap,
      summary: 'Optimized for rapid validation, single printable components, and quick iterations.',
      bullets: [
        '100% Watertight Manifold STL / 3MF',
        'Wall-Thickness Slicing Verification',
        '2 Free Complimentary Revision Rounds',
        'Direct 1-on-1 Modeler Chat',
      ],
    },
    {
      name: 'Studio Benchmark',
      sla: '2–4 Days',
      badge: 'Most Popular',
      icon: Flame,
      summary: 'Ideal for Kickstarter hardware, consumer electronics, and agency product pitches.',
      bullets: [
        'Complete Parametric STEP / NURBS Master',
        '3× Ultra-HD 4K Photorealistic Renders',
        'Quad Sub-D Mesh with Clean Edge Loops',
        'Bespoke CMF Finish Specification',
      ],
    },
    {
      name: 'Flagship Production',
      sla: '4–7 Days',
      badge: 'Comprehensive Suite',
      icon: Award,
      summary: 'Full multi-part mechanical assembly, kinetic motion animations, and interactive web 3D.',
      bullets: [
        'Multi-Part Assembly & Toleranced Fits',
        '10s 4K 60fps Exploded-View Turntable Reel',
        'Real-Time WebGL / glTF Web Embed Ready',
        'Direct Senior Director Alignment & Unlimited Sprints',
      ],
    },
  ];

  const powerupAddons = [
    {
      id: 'stl-slicing',
      label: 'Watertight Slicing & Wall-Thickness Audit',
      desc: 'Zero-fail print verification for SLA, SLS, or FDM machines',
      icon: Printer,
    },
    {
      id: 'turntable-video',
      label: '4K 360° Looping Turntable Video (60fps)',
      desc: 'Seamless camera choreography with cinematic lighting pass',
      icon: Film,
    },
    {
      id: 'rush-delivery',
      label: '⚡ 24h Lightning Rush Delivery Guarantee',
      desc: 'Prioritized top-of-queue modeling slot for urgent project deadlines',
      icon: Zap,
    },
    {
      id: 'source-step',
      label: 'Native SolidWorks / Parametric STEP Master',
      desc: 'Fully editable parametric feature tree with manufacturing tolerances',
      icon: Wrench,
    },
    {
      id: 'ar-preview',
      label: 'AR Interactive glTF Web Asset',
      desc: 'Ready for browser 3D inspection and iOS QuickLook / Android AR',
      icon: Box,
    },
  ];

  // Wide options for estimated customer budget
  const budgetOptions = [
    { id: 'b-starter', label: 'Under $150', subtitle: 'Simple parts, quick fix, or rapid 3D print mesh' },
    { id: 'b-maker', label: '$150 – $300', subtitle: 'Standard 3D model, watertight STL + initial renders' },
    { id: 'b-pro', label: '$300 – $600', subtitle: 'Detailed consumer product, clean STEP CAD & 4K renders' },
    { id: 'b-studio', label: '$600 – $1,200', subtitle: 'Multi-part mechanical assembly or character sculpt' },
    { id: 'b-flagship', label: '$1,200 – $2,500', subtitle: 'Full cinematic launch, animation loops & web 3D' },
    { id: 'b-enterprise', label: '$2,500+', subtitle: 'Comprehensive product line or ongoing studio retainer' },
    { id: 'b-custom', label: 'Custom / Flexible Scope', subtitle: 'Let studio estimate based on my attached drawings' },
  ];

  useEffect(() => {
    if (preselectedType) {
      setFormData((prev) => ({ ...prev, projectType: preselectedType }));
    }
  }, [preselectedType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => {
      const willEquip = !prev.includes(id);
      soundFX.playPowerup(willEquip);
      return willEquip ? [...prev, id] : prev.filter((a) => a !== id);
    });
  };

  const handleNextStage = () => {
    if (stage === 1 && !formData.projectType) return;
    soundFX.playNextStage();
    setStage((prev) => Math.min(prev + 1, 5));
  };

  const handlePrevStage = () => {
    soundFX.playHover();
    setStage((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateDesignRequest(formData);
    setValidation(v);
    if (!v.isValid) return;

    soundFX.playLaunchSuccess();
    const ref = `REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(ref);
    setIsSuccess(true);
  };

  const handleCloseSuccess = () => {
    soundFX.playSelect();
    setIsSuccess(false);
    setStage(1);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="briefing-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-[20px] bg-[#101011] border border-[#2a2829] shadow-[0_0_80px_rgba(0,0,0,0.95)] p-6 sm:p-10 my-8 text-left text-[#fcfcfc] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Cyber Grid Matrix */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fe1e3408_1px,transparent_1px),linear-gradient(to_bottom,#fe1e3408_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        {/* Dynamic Atmospheric Red Plasma Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle,rgba(254,30,52,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[radial-gradient(circle,rgba(254,30,52,0.1)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        {/* Top Control Bar (Close Button Only) */}
        <div className="absolute top-5 right-5 flex items-center gap-2 z-20">
          <button
            type="button"
            onClick={() => {
              soundFX.playHover();
              onClose();
            }}
            aria-label="Close custom request configurator"
            className="p-2 rounded-[8px] border border-[#262525] text-[#b5b2b2] hover:text-[#fcfcfc] hover:border-[#fe1e34] bg-[#080808]/80 hover:bg-[#1a1718] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          /* Victory / Success Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="py-10 text-center space-y-6 relative z-10"
          >
            <div className="w-20 h-20 rounded-[14px] bg-[#080808] border-2 border-[#fe1e34] flex items-center justify-center mx-auto text-[#fe1e34] shadow-[0_0_35px_rgba(254,30,52,0.35)] animate-pulse">
              <Award className="w-10 h-10 text-[#fe1e34]" />
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#fe1e34] font-semibold bg-[#fe1e34]/10 px-3 py-1 rounded-full border border-[#fe1e34]/30 inline-block">
                COMMISSION QUEUED · REF #{referenceCode}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#fcfcfc] tracking-tight">
                Project Initialized Successfully!
              </h3>
              <p className="text-sm text-[#b5b2b2] max-w-lg mx-auto leading-relaxed font-light">
                Thank you, <strong className="text-[#fcfcfc]">{formData.name}</strong>. Your project brief and specifications have been assigned to our senior 3D modeling team. We will review your materials and reply to <span className="text-[#fcfcfc] underline font-medium">{formData.email}</span> within <strong className="text-[#fe1e34] font-semibold">12 hours</strong> with your milestone roadmap.
              </p>
              {formData.preferredChannel && (
                <p className="text-xs text-[#a3a3a3] font-mono">
                  Preferred Contact Channel: <span className="text-[#fcfcfc] font-semibold">{formData.preferredChannel}</span>
                </p>
              )}
            </div>

            <div className="p-5 rounded-[12px] bg-[#0a0a0b]/90 border border-[#262525] max-w-md mx-auto space-y-2 text-xs text-[#b5b2b2] text-left font-mono">
              <div className="flex justify-between border-b border-[#1f1e1f] pb-1.5">
                <span>Discipline:</span>
                <span className="text-[#fcfcfc] font-bold">{formData.projectType}</span>
              </div>
              <div className="flex justify-between border-b border-[#1f1e1f] pb-1.5">
                <span>Selected Scope:</span>
                <span className="text-[#fcfcfc] font-bold">{executionTiers[selectedTierIndex].name}</span>
              </div>
              <div className="flex justify-between border-b border-[#1f1e1f] pb-1.5">
                <span>Estimated Budget:</span>
                <span className="text-[#fe1e34] font-bold">{formData.budgetRange}</span>
              </div>
              <div className="flex justify-between border-b border-[#1f1e1f] pb-1.5">
                <span>Target Timeline:</span>
                <span className="text-[#fcfcfc]">{formData.desiredTimeline}</span>
              </div>
              <div className="flex justify-between">
                <span>Equipped Add-Ons:</span>
                <span className="text-[#fcfcfc]">{selectedAddons.length > 0 ? `${selectedAddons.length} power-ups` : 'Core sprint'}</span>
              </div>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleCloseSuccess}
                className="px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[8px] border border-[#fe1e34] bg-[#080808] hover:bg-[#1a1718] transition-all shadow-[0_0_20px_rgba(254,30,52,0.2)]"
              >
                Return to Studio Exhibition
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6 relative z-10">
            {/* Gamified Header & Stage Level Bar */}
            <div className="space-y-3 pb-4 border-b border-[#262525]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#fe1e34] uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
                  <span>STAGE {stage} OF 5</span>
                  <span aria-hidden="true" className="text-[#525252]">·</span>
                  <span className="text-[#d4d2d2]">
                    {stage === 1 && 'CHOOSE DISCIPLINE'}
                    {stage === 2 && 'SCOPE & EXECUTION'}
                    {stage === 3 && 'POWER-UP ADD-ONS'}
                    {stage === 4 && 'YOUR ESTIMATED BUDGET'}
                    {stage === 5 && 'LAUNCH & BRIEFING'}
                  </span>
                </div>

                {/* Stage Step Indicator Badges (Clickable back to previewed steps) */}
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      disabled={s > stage}
                      onClick={() => {
                        if (s < stage) {
                          soundFX.playHover();
                          setStage(s);
                        }
                      }}
                      title={`Go to Stage ${s}`}
                      className={`w-6 h-6 rounded-[5px] text-[10px] font-mono font-bold flex items-center justify-center transition-all ${
                        s === stage
                          ? 'bg-[#fe1e34] text-white shadow-[0_0_10px_rgba(254,30,52,0.5)] ring-1 ring-[#fe1e34]'
                          : s < stage
                          ? 'bg-[#262525] text-[#d4d2d2] hover:bg-[#383737] cursor-pointer'
                          : 'bg-[#141415] text-[#525252] cursor-not-allowed'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Glowing High-Tech Progress Bar */}
              <div className="w-full h-1.5 bg-[#0a0a0b] rounded-full overflow-hidden p-0.5 border border-[#1f1e1f]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#fe1e34] to-[#ff5264] rounded-full shadow-[0_0_10px_rgba(254,30,52,0.8)]"
                  initial={{ width: '20%' }}
                  animate={{ width: `${stage * 20}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* STAGE 1: CHOOSE DISCIPLINE */}
            {stage === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <h3 id="briefing-modal-title" className="font-display text-xl sm:text-2xl font-bold text-[#fcfcfc] flex items-center gap-2">
                    <span>What type of 3D project are you creating?</span>
                    <span className="text-[10px] font-mono text-[#fe1e34] bg-[#fe1e34]/10 border border-[#fe1e34]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      STEP 1 / 5
                    </span>
                  </h3>
                  <p className="text-xs text-[#b5b2b2] mt-1 font-light">
                    Select your primary project focus. From simple 3D print fixes to complete CAD engineering.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {disciplines.map((d) => {
                    const Icon = d.icon;
                    const isSelected = formData.projectType === d.title;
                    return (
                      <motion.button
                        key={d.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onMouseEnter={() => soundFX.playHover()}
                        onClick={() => {
                          soundFX.playSelect();
                          setFormData({ ...formData, projectType: d.title });
                        }}
                        className={`p-4 rounded-[12px] border text-left transition-all duration-200 flex items-start gap-3.5 relative overflow-hidden group ${
                          isSelected
                            ? 'border-[#fe1e34] bg-[#1a1718] text-[#fcfcfc] shadow-[0_0_25px_rgba(254,30,52,0.25)] ring-1 ring-[#fe1e34]'
                            : 'border-[#262525] bg-[#0a0a0b]/80 text-[#b5b2b2] hover:border-[#525252] hover:text-[#fcfcfc]'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#fe1e34]/25 to-transparent pointer-events-none" />
                        )}
                        <Icon className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isSelected ? 'text-[#fe1e34]' : 'text-[#525252] group-hover:text-[#d4d2d2]'}`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-display text-sm font-bold text-[#fcfcfc]">{d.title}</span>
                            <span className="text-[9px] font-mono text-[#fe1e34] font-semibold bg-[#fe1e34]/10 px-2 py-0.5 rounded tracking-wider">{d.badge}</span>
                          </div>
                          <span className="text-xs text-[#b5b2b2] block mt-1 font-light leading-relaxed">
                            {d.desc}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STAGE 2: SCOPE & EXECUTION METHOD (NO PRICES) */}
            {stage === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfcfc] flex items-center gap-2">
                    <span>Select Scope & Deliverables Level</span>
                    <span className="text-[10px] font-mono text-[#fe1e34] bg-[#fe1e34]/10 border border-[#fe1e34]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      STEP 2 / 5
                    </span>
                  </h3>
                  <p className="text-xs text-[#b5b2b2] mt-1 font-light">
                    Every tier includes 2 complimentary revision rounds, complete commercial rights, and guaranteed turnaround SLAs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {executionTiers.map((tier, idx) => {
                    const isSelected = selectedTierIndex === idx;
                    const Icon = tier.icon;
                    return (
                      <motion.button
                        key={tier.name}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onMouseEnter={() => soundFX.playHover()}
                        onClick={() => {
                          soundFX.playSelect();
                          setSelectedTierIndex(idx);
                        }}
                        className={`p-4 rounded-[12px] border text-left transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                          isSelected
                            ? 'border-[#fe1e34] bg-[#1a1718] text-[#fcfcfc] shadow-[0_0_25px_rgba(254,30,52,0.25)] ring-1 ring-[#fe1e34]'
                            : 'border-[#262525] bg-[#0a0a0b]/80 text-[#b5b2b2] hover:border-[#525252] hover:text-[#fcfcfc]'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#fe1e34]/25 to-transparent pointer-events-none" />
                        )}
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-[#fe1e34] uppercase font-bold tracking-wider bg-[#fe1e34]/10 px-2 py-0.5 rounded">
                              {tier.badge}
                            </span>
                            <span className="text-[10px] font-mono text-[#b5b2b2] flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#fe1e34]" />
                              <span>{tier.sla}</span>
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${isSelected ? 'text-[#fe1e34]' : 'text-[#737373]'}`} />
                            <h4 className="font-display text-lg font-bold text-[#fcfcfc]">{tier.name}</h4>
                          </div>

                          <p className="text-[11px] text-[#b5b2b2] font-light leading-relaxed">
                            {tier.summary}
                          </p>

                          <ul className="space-y-1.5 pt-2 text-[11px] text-[#d4d2d2] border-t border-[#262525]">
                            {tier.bullets.map((b, i) => (
                              <li key={i} className="flex items-center gap-1.5 font-light">
                                <Check className="w-3 h-3 text-[#fe1e34] shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Timeline Selector */}
                <div className="pt-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1.5">
                    Target Delivery Speed
                  </label>
                  <select
                    value={formData.desiredTimeline}
                    onChange={(e) => {
                      soundFX.playSelect();
                      setFormData({ ...formData, desiredTimeline: e.target.value });
                    }}
                    className="w-full px-4 py-2.5 rounded-[8px] bg-[#080808] border border-[#262525] text-xs text-[#fcfcfc] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                  >
                    <option value="Rush Sprint (24–48 Hours)">⚡ Rush Sprint (24–48 Hours)</option>
                    <option value="Standard Sprint (2–4 Days)">★ Standard Sprint (2–4 Days)</option>
                    <option value="Flexible (1–2 Weeks)">📅 Flexible / Milestone-Driven (1–2 Weeks)</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* STAGE 3: POWER-UP ADD-ONS (NO PRICES) */}
            {stage === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfcfc] flex items-center gap-2">
                    <span>Equip Optional Power-Up Add-Ons</span>
                    <span className="text-[10px] font-mono text-[#fe1e34] bg-[#fe1e34]/10 border border-[#fe1e34]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      STEP 3 / 5
                    </span>
                  </h3>
                  <p className="text-xs text-[#b5b2b2] mt-1 font-light">
                    Equip technical upgrades, slicing verification, or motion assets to include with your request.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {powerupAddons.map((addon) => {
                    const isEquipped = selectedAddons.includes(addon.id);
                    const Icon = addon.icon;
                    return (
                      <motion.button
                        key={addon.id}
                        type="button"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onMouseEnter={() => soundFX.playHover()}
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-full p-4 rounded-[12px] border text-left transition-all duration-200 flex items-center justify-between ${
                          isEquipped
                            ? 'border-[#fe1e34] bg-[#1a1718] text-[#fcfcfc] shadow-[0_0_20px_rgba(254,30,52,0.2)]'
                            : 'border-[#262525] bg-[#0a0a0b]/80 text-[#b5b2b2] hover:border-[#525252] hover:text-[#fcfcfc]'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all ${
                              isEquipped ? 'bg-[#fe1e34] border-[#fe1e34] text-white shadow-sm' : 'border-[#525252]'
                            }`}
                          >
                            {isEquipped && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <Icon className={`w-4 h-4 ${isEquipped ? 'text-[#fe1e34]' : 'text-[#737373]'}`} />
                          <div>
                            <span className="text-xs font-semibold text-[#fcfcfc] block">{addon.label}</span>
                            <span className="text-[11px] text-[#8e8d8d] block font-light">{addon.desc}</span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono uppercase px-2 py-1 rounded tracking-wider ${
                          isEquipped ? 'text-[#fe1e34] bg-[#fe1e34]/10 font-bold' : 'text-[#525252]'
                        }`}>
                          {isEquipped ? 'EQUIPPED' : 'OPTIONAL'}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-[8px] bg-[#080808] border border-[#262525] text-xs text-[#b5b2b2] flex items-center justify-between font-mono">
                  <span>Equipped Add-Ons:</span>
                  <span className="text-[#fcfcfc] font-bold">{selectedAddons.length} Selected</span>
                </div>
              </motion.div>
            )}

            {/* STAGE 4: ESTIMATED BUDGET FROM WIDE OPTIONS + CUSTOM INPUT */}
            {stage === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfcfc] flex items-center gap-2">
                    <span>What is your estimated project budget?</span>
                    <span className="text-[10px] font-mono text-[#fe1e34] bg-[#fe1e34]/10 border border-[#fe1e34]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      STEP 4 / 5
                    </span>
                  </h3>
                  <p className="text-xs text-[#b5b2b2] mt-1 font-light">
                    Choose an estimated range or specify your custom target. We tailor our modeling methodology to match your budget.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {budgetOptions.map((opt) => {
                    const isSelected = formData.budgetRange === opt.label;
                    return (
                      <motion.button
                        key={opt.id}
                        type="button"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onMouseEnter={() => soundFX.playHover()}
                        onClick={() => {
                          soundFX.playSelect();
                          setFormData({ ...formData, budgetRange: opt.label });
                        }}
                        className={`p-3.5 rounded-[10px] border text-left transition-all duration-200 flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#fe1e34] bg-[#1a1718] text-[#fcfcfc] shadow-[0_0_20px_rgba(254,30,52,0.2)] ring-1 ring-[#fe1e34]'
                            : 'border-[#262525] bg-[#0a0a0b]/80 text-[#b5b2b2] hover:border-[#525252] hover:text-[#fcfcfc]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-sm font-bold text-[#fcfcfc]">{opt.label}</span>
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#fe1e34] bg-[#fe1e34]' : 'border-[#525252]'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#8e8d8d] font-light mt-1 block">
                          {opt.subtitle}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Custom Budget Specification */}
                <div className="pt-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1">
                    Or Type Specific Budget / Target Currency (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={customBudgetInput}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCustomBudgetInput(val);
                        if (val.trim()) {
                          setFormData({ ...formData, budgetRange: val });
                        }
                      }}
                      placeholder="e.g. $450 USD, €350, or £500 total"
                      className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#080808] border border-[#262525] text-xs text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 5: LAUNCH & BRIEFING (WITH PREFERRED CHANNEL & 12H SLA) */}
            {stage === 5 && (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#fcfcfc] flex items-center gap-2">
                    <span>Launch Project & Share Details</span>
                    <span className="text-[10px] font-mono text-[#fe1e34] bg-[#fe1e34]/10 border border-[#fe1e34]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      FINAL STEP
                    </span>
                  </h3>
                  <p className="text-xs text-[#b5b2b2] mt-1 font-light">
                    Describe your project or upload sketches. No complex CAD files required—we handle the rest.
                  </p>
                </div>

                {/* Project Description */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1">
                    Project Narrative & What You Are Imagining *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Describe what you want to create (approximate dimensions, physical use, key visual vibe, or links)..."
                    className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#080808] border border-[#262525] text-xs text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                  />
                  {validation.errors.projectDescription && (
                    <span className="text-[#fe1e34] text-[11px] mt-1 block">{validation.errors.projectDescription}</span>
                  )}
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#080808] border border-[#262525] text-xs text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    />
                    {validation.errors.name && (
                      <span className="text-[#fe1e34] text-[11px] mt-1 block">{validation.errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1">
                      Direct Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@studio.com"
                      className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#080808] border border-[#262525] text-xs text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    />
                    {validation.errors.email && (
                      <span className="text-[#fe1e34] text-[11px] mt-1 block">{validation.errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Optional Preferred Channel */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] flex items-center justify-between mb-1">
                    <span>Preferred Way / Channel to Connect (Optional)</span>
                    <span className="text-[10px] text-[#525252] lowercase font-sans">e.g. WhatsApp, Discord, Telegram, or Google Meet</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.preferredChannel || ''}
                      onChange={(e) => setFormData({ ...formData, preferredChannel: e.target.value })}
                      placeholder="e.g. WhatsApp +1 555-0192, Telegram @username, or Discord #1234"
                      className="w-full px-3.5 py-2.5 rounded-[8px] bg-[#080808] border border-[#262525] text-xs text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    />
                  </div>
                </div>

                {/* File Attachment Upload */}
                <div className="p-3.5 rounded-[8px] border border-dashed border-[#262525] hover:border-[#fe1e34] bg-[#080808]/60 text-center transition-colors">
                  <label className="cursor-pointer block">
                    <Upload className="w-4 h-4 text-[#fe1e34] mx-auto mb-1" />
                    <span className="text-xs text-[#d4d2d2] block">
                      {formData.fileAttachmentName ? formData.fileAttachmentName : 'Attach sketches, photos, reference images, or CAD (.zip, .stl, .jpg, .step)'}
                    </span>
                    <span className="text-[10px] font-mono text-[#525252] block">Encrypted transfer up to 500MB</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setFormData({ ...formData, fileAttachmentName: file.name });
                      }}
                    />
                  </label>
                </div>

                {/* Mutual NDA Checkbox */}
                <div className="flex items-center gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="modal-nda-toggle"
                    checked={formData.requiresNda}
                    onChange={(e) => setFormData({ ...formData, requiresNda: e.target.checked })}
                    className="w-4 h-4 rounded-[3px] bg-[#080808] border-[#262525] text-[#fe1e34] focus:ring-0"
                  />
                  <label htmlFor="modal-nda-toggle" className="text-xs text-[#b5b2b2] flex items-center gap-1.5 cursor-pointer">
                    <Shield className="w-3.5 h-3.5 text-[#fe1e34]" />
                    <span>Send bilateral mutual NDA prior to reviewing proprietary files</span>
                  </label>
                </div>

                {/* SLA Notice & Submit Action */}
                <div className="pt-1 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#b5b2b2] px-1">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#fe1e34]" />
                      <span>Studio Reply Guarantee: Within 12 Hours</span>
                    </span>
                    <span className="text-[#fe1e34]">{formData.budgetRange}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevStage}
                      className="flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-[#b5b2b2] hover:text-[#fcfcfc] transition-colors border border-[#262525] rounded-[8px] hover:border-[#525252] bg-[#080808]"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={() => soundFX.playHover()}
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[8px] border border-[#fe1e34] bg-[#fe1e34] hover:bg-[#e0192e] transition-all shadow-[0_0_25px_rgba(254,30,52,0.35)] font-bold"
                    >
                      <span>Submit 3D Commission Request</span>
                      <Send className="w-3.5 h-3.5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.form>
            )}

            {/* Bottom Step Navigation (Stages 1–4) */}
            {stage < 5 && (
              <div className="flex items-center justify-between pt-4 border-t border-[#262525]">
                {stage > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStage}
                    className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono text-[#b5b2b2] hover:text-[#fcfcfc] transition-colors border border-[#262525] rounded-[8px] hover:border-[#525252] bg-[#080808]"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Stage {stage - 1}</span>
                  </button>
                ) : (
                  <div />
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleNextStage}
                  className="flex items-center gap-2 px-6 py-3 text-[11px] font-mono uppercase tracking-wider text-[#fcfcfc] rounded-[8px] border border-[#fe1e34] bg-[#fe1e34] hover:bg-[#e0192e] transition-all shadow-[0_0_15px_rgba(254,30,52,0.3)] font-semibold"
                >
                  <span>Continue to Stage {stage + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </motion.button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
