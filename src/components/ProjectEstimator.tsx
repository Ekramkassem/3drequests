import React, { useState } from 'react';
import {
  FileText,
  Camera,
  Layers,
  Box,
  Cpu,
  Sparkles,
  Printer,
  Image as ImageIcon,
  Wrench,
  User,
  Film,
  Zap,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Tag,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectEstimatorProps {
  onRequestWithEstimate: (details: {
    startingAsset: string;
    targetOutcome: string;
    speed: string;
    estimatedPrice: string;
    estimatedDays: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  onRequestWithEstimate,
}) => {
  const [selectedAsset, setSelectedAsset] = useState<number>(0);
  const [selectedOutcome, setSelectedOutcome] = useState<number>(0);
  const [selectedSpeed, setSelectedSpeed] = useState<number>(1); // Standard default

  const assetOptions = [
    { id: 'sketch', label: 'Rough Hand Sketch', icon: FileText, note: 'Paper sketch or iPad doodle' },
    { id: 'photo', label: 'Phone Photos', icon: Camera, note: 'Front/side photos + rough dimensions' },
    { id: 'vector', label: '2D Logo or Drawing', icon: Layers, note: '.AI, .SVG, .PNG, or .PDF blueprint' },
    { id: 'idea', label: 'Just an Idea', icon: Sparkles, note: 'Written description & reference links' },
    { id: 'scan', label: '3D Scan / Raw Mesh', icon: Box, note: 'Dirty scan cleanup or remesh' },
    { id: 'cad', label: 'Existing CAD File', icon: Cpu, note: '.STEP, .IGES, or .OBJ for conversion' },
  ];

  const outcomeOptions = [
    {
      id: 'print',
      label: '3D Printable Model (.STL)',
      icon: Printer,
      basePrice: 100,
      days: 2,
      deliverables: 'Watertight STL, Sliced Preview, Wall-Thickness Verified',
      bestFor: 'Inventors, 3D printers, hobbyists & tabletop makers',
    },
    {
      id: 'render',
      label: '4K Commercial Render',
      icon: ImageIcon,
      basePrice: 150,
      days: 2,
      deliverables: '3× Ultra-HD 4K Renders, Custom Lighting, Transparent PNGs',
      bestFor: 'Shopify brands, Amazon sellers & Kickstarter campaigns',
    },
    {
      id: 'cad',
      label: 'Production CAD (.STEP)',
      icon: Wrench,
      basePrice: 280,
      days: 3,
      deliverables: 'Manufacturing-Ready STEP/IGES, Toleranced Nurbs, Engineering Tree',
      bestFor: 'Hardware startups, CNC machining & injection molding',
    },
    {
      id: 'character',
      label: 'Character or Bust Sculpt',
      icon: User,
      basePrice: 180,
      days: 3,
      deliverables: 'ZBrush High-Poly Sculpt, Quad Topology, Printable Base',
      bestFor: 'Game studios, collectibles & miniature figurines',
    },
    {
      id: 'motion',
      label: 'Cinematic 3D Video Loop',
      icon: Film,
      basePrice: 320,
      days: 4,
      deliverables: '60fps 4K Turntable Video, Sound Design, Alpha Channel',
      bestFor: 'Product launches, social ad hooks & pitch decks',
    },
  ];

  const speedOptions = [
    { id: 'rush', label: '⚡ 48-Hour Rush Sprint', multiplier: 1.25, dayModifier: -1, badge: 'Fastest' },
    { id: 'standard', label: '★ Standard (3–4 Days)', multiplier: 1.0, dayModifier: 0, badge: 'Popular' },
    { id: 'flexible', label: '📅 Flexible (1–2 Weeks)', multiplier: 0.9, dayModifier: +4, badge: 'Save 10%' },
  ];

  // Dynamic calculations
  const activeAsset = assetOptions[selectedAsset];
  const activeOutcome = outcomeOptions[selectedOutcome];
  const activeSpeed = speedOptions[selectedSpeed];

  // Asset complexity multiplier
  const assetMultiplier = selectedAsset === 3 ? 1.15 : selectedAsset === 5 ? 0.95 : 1.0;

  const rawPrice = Math.round(activeOutcome.basePrice * activeSpeed.multiplier * assetMultiplier);
  const discountedPrice = Math.round(rawPrice * 0.9); // FIRST3D 10% promo
  const estimatedDays = Math.max(1, activeOutcome.days + activeSpeed.dayModifier);

  const handleLockEstimate = () => {
    onRequestWithEstimate({
      startingAsset: activeAsset.label,
      targetOutcome: activeOutcome.label,
      speed: activeSpeed.label,
      estimatedPrice: `$${discountedPrice}`,
      estimatedDays: `${estimatedDays} business days`,
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="rounded-[14.4px] bg-[#171617]/90 border border-[#262525] p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Subtle Ambient Caustic Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_70%_20%,rgba(254,30,52,0.12)_0%,transparent_70%)] pointer-events-none" />

        {/* Header Hook */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#262525]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#fe1e34] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span>INSTANT 3D ESTIMATOR</span>
              <span aria-hidden="true" className="text-[#525252]">/</span>
              <span>TRANSPARENT FIXED SCOPE</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#fcfcfc] tracking-[-0.03em]">
              Estimate Your 3D Project in 10 Seconds<span className="text-[#fe1e34]">.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#b5b2b2] font-light leading-relaxed">
              No endless discovery calls or mysterious pricing. Pick what you have and what you need—get an instant transparent quote with guaranteed delivery.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-[#fcfcfc] bg-[#080808]/80 px-3.5 py-2 rounded-[6px] border border-[#262525] shrink-0">
            <Tag className="w-3.5 h-3.5 text-[#fe1e34]" />
            <span>Code <strong className="text-[#fe1e34]">FIRST3D</strong> applied: 10% off your first commission</span>
          </div>
        </div>

        {/* 3 Step Interactive Chooser + Live Output Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Left 8 Columns: Step Choosers */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: What do you have? */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#d4d2d2]">
                <span className="text-[#fcfcfc] font-bold">1. WHAT ARE YOU STARTING WITH?</span>
                <span className="text-[#525252] text-[10px]">No CAD software needed</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {assetOptions.map((opt, idx) => {
                  const Icon = opt.icon;
                  const isSelected = selectedAsset === idx;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedAsset(idx)}
                      className={`p-3.5 rounded-[8px] border text-left transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#fe1e34] bg-[#080808] text-[#fcfcfc] shadow-svz-inset ring-1 ring-[#fe1e34]'
                          : 'border-[#262525] bg-[#080808]/50 text-[#b5b2b2] hover:border-[#525252] hover:text-[#fcfcfc]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-[#fe1e34]' : 'text-[#525252]'}`} />
                      <div>
                        <span className="text-xs font-medium block leading-snug">{opt.label}</span>
                        <span className="text-[10px] text-[#525252] block line-clamp-1 mt-0.5 font-light">
                          {opt.note}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: What outcome do you need? */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#d4d2d2]">
                <span className="text-[#fcfcfc] font-bold">2. WHAT OUTCOME DO YOU NEED?</span>
                <span className="text-[#525252] text-[10px]">Choose primary deliverable</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {outcomeOptions.map((opt, idx) => {
                  const Icon = opt.icon;
                  const isSelected = selectedOutcome === idx;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedOutcome(idx)}
                      className={`p-4 rounded-[8px] border text-left transition-all duration-200 flex items-start gap-3 ${
                        isSelected
                          ? 'border-[#fe1e34] bg-[#080808] text-[#fcfcfc] shadow-svz-inset ring-1 ring-[#fe1e34]'
                          : 'border-[#262525] bg-[#080808]/50 text-[#b5b2b2] hover:border-[#525252] hover:text-[#fcfcfc]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-[#fe1e34]' : 'text-[#525252]'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold">{opt.label}</span>
                          <span className="text-[11px] font-mono font-bold text-[#fe1e34]">
                            ${opt.basePrice}+
                          </span>
                        </div>
                        <span className="text-[10px] text-[#525252] block mt-0.5 font-light line-clamp-1">
                          {opt.bestFor}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Turnaround Speed */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#d4d2d2]">
                <span className="text-[#fcfcfc] font-bold">3. DELIVERY SPEED</span>
                <span className="text-[#525252] text-[10px]">Guaranteed deadline SLA</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {speedOptions.map((opt, idx) => {
                  const isSelected = selectedSpeed === idx;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedSpeed(idx)}
                      className={`p-3 rounded-[8px] border text-center transition-all duration-200 flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? 'border-[#fe1e34] bg-[#080808] text-[#fcfcfc] shadow-svz-inset ring-1 ring-[#fe1e34]'
                          : 'border-[#262525] bg-[#080808]/50 text-[#b5b2b2] hover:border-[#525252] hover:text-[#fcfcfc]'
                      }`}
                    >
                      <span className="text-xs font-medium">{opt.label}</span>
                      <span className="text-[9px] font-mono text-[#fe1e34] uppercase tracking-wider">
                        {opt.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Live Calculated Quote Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-[12px] bg-[#080808] border border-[#262525] shadow-svz-inset space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262525]">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fe1e34]">
                  LIVE ESTIMATE GAUGE
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-[#b5b2b2]">
                  <Clock className="w-3 h-3 text-[#fe1e34]" />
                  <span>{estimatedDays} Day Delivery</span>
                </span>
              </div>

              {/* Price Display with Strike-through */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#fcfcfc] tracking-tight">
                    ${discountedPrice}
                  </span>
                  <span className="text-base font-mono text-[#525252] line-through">
                    ${rawPrice}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-[4px] bg-[#fe1e34]/15 text-[#fe1e34] font-bold">
                    SAVE 10%
                  </span>
                </div>
                <p className="text-xs text-[#b5b2b2] font-light">
                  Estimated range: ${Math.round(discountedPrice * 0.9)} – ${Math.round(discountedPrice * 1.15)} based on model complexity.
                </p>
              </div>

              {/* Scope Breakdown */}
              <div className="p-4 rounded-[8px] bg-[#171617] border border-[#262525] space-y-2 text-xs">
                <span className="text-[10px] font-mono text-[#525252] uppercase block font-semibold">
                  DELIVERABLES INCLUDED
                </span>
                <p className="text-[#fcfcfc] font-medium leading-relaxed">
                  {activeOutcome.deliverables}
                </p>
                <div className="pt-2 border-t border-[#262525] flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#b5b2b2]">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#fe1e34]" /> 2 Free Revision Rounds
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#fe1e34]" /> 100% Commercial IP Rights
                  </span>
                </div>
              </div>

              {/* Triple Trust Guarantees */}
              <div className="space-y-2 text-xs text-[#b5b2b2] pt-1 font-light">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#fe1e34] shrink-0" />
                  <span><strong>100% Watertight Slicing Guarantee</strong> — If it doesn&apos;t print, we fix it free.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#fe1e34] shrink-0" />
                  <span><strong>No CAD Software Needed</strong> — Just upload what you have.</span>
                </div>
              </div>
            </div>

            {/* Lock In CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleLockEstimate}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[8px] border border-[#fe1e34] bg-[#171617] hover:bg-[#1f1e1f] transition-all duration-300 shadow-svz-inset"
            >
              <span>Lock In This Estimate & Submit ↗</span>
              <ArrowRight className="w-4 h-4 text-[#fe1e34]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
