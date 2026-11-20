import React, { useState } from 'react';
import { PageType, DesignRequestForm, ValidationResult } from '../../types.ts';
import { validateDesignRequest } from '../../utils/calculator.ts';
import { FAQS } from '../../data/studioData.ts';
import {
  ChevronDown,
  ChevronUp,
  Shield,
  ArrowRight,
  CheckCircle2,
  Mail,
  Clock,
  MapPin,
  Lock,
  Upload,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onRequestClick: (preselectedType?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onRequestClick,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Creative Briefing Form State
  const [formData, setFormData] = useState<DesignRequestForm>({
    projectType: 'Product Design',
    projectDescription: '',
    referenceLinks: '',
    desiredOutcome: 'Production-ready 3D master CAD and key visuals',
    fileAttachmentName: '',
    budgetRange: '$12,000 – $25,000',
    desiredTimeline: 'Standard Sprint (2–3 Weeks)',
    additionalRequirements: '',
    name: '',
    email: '',
    company: '',
    requiresNda: true,
  });

  const [validation, setValidation] = useState<ValidationResult>({ isValid: true, errors: {} });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [refCode, setRefCode] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateDesignRequest(formData);
    setValidation(v);
    if (!v.isValid) return;

    setRefCode(`REQ-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSuccess(true);
  };

  return (
    <div className="space-y-28 md:space-y-36 pb-28 pt-28 sm:pt-36">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4"
        >
          <div className="flex items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#b5b2b2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
            <span>COMMISSION INTAKE</span>
            <span aria-hidden="true" className="text-[#525252]">/</span>
            <span>DIRECT SENIOR ENGAGEMENT</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#fcfcfc] tracking-[-0.05em] leading-[0.95] uppercase">
            LET&apos;S BUILD <br />
            <span className="font-serif italic font-normal tracking-tight text-[#d4d2d2] normal-case lowercase text-5xl sm:text-7xl md:text-8xl">
              something
            </span>
            <span className="text-[#fe1e34]">.</span>
          </h1>

          <p className="text-[#b5b2b2] text-base sm:text-lg leading-relaxed font-light">
            Tell us what you&apos;re imagining. We&apos;ll help you turn it into a clear, manufacturing-grade creative direction.
          </p>
        </motion.div>
      </section>

      {/* Main Conversion Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Dedicated Creative Briefing Tool */}
          <div className="lg:col-span-7 bg-[#171617] p-6 sm:p-10 rounded-[14.4px] border border-[#262525] shadow-svz-inset">
            {isSuccess ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-[8px] bg-[#171617] border border-[#fe1e34] flex items-center justify-center mx-auto text-[#fe1e34] shadow-svz-inset">
                  <CheckCircle2 className="w-8 h-8 text-[#fe1e34]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#fe1e34]">
                    Brief Transmitted · Ref #{refCode}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#fcfcfc]">
                    Creative Brief Received
                  </h3>
                  <p className="text-sm text-[#b5b2b2] max-w-md mx-auto leading-relaxed font-light">
                    Thank you, {formData.name}. Our principal 3D director will review your submission and reply to{' '}
                    <span className="text-[#fcfcfc] font-semibold">{formData.email}</span> within 12 business hours.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[8px] border border-[#d4d2d2]/40 hover:border-[#fe1e34] bg-[#080808] hover:bg-[#121212] transition-colors shadow-svz-inset"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#fcfcfc]">
                    Project Creative Brief
                  </h3>
                  <p className="text-xs text-[#b5b2b2] mt-1 font-light">
                    Provide the key parameters for your custom 3D commission.
                  </p>
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1.5">
                      Discipline *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-[8px] bg-[#080808] border border-[#262525] text-sm text-[#fcfcfc] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    >
                      <option value="Product Design">Product Design & Visualization</option>
                      <option value="Character Design">Character Design & Sculpting</option>
                      <option value="3D Modeling">3D Modeling & Digital Assets</option>
                      <option value="3D Printing">3D Printing & Prototyping</option>
                      <option value="Animation">Animation & Motion Design</option>
                      <option value="Architectural Visualization">Architectural Visualization</option>
                      <option value="Custom 3D Project">Custom 3D Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1.5">
                      Estimated Budget *
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-[8px] bg-[#080808] border border-[#262525] text-sm text-[#fcfcfc] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    >
                      <option value="$5,000 – $12,000">$5,000 – $12,000 (Focused Sprint)</option>
                      <option value="$12,000 – $25,000">$12,000 – $25,000 (Studio Benchmark)</option>
                      <option value="$25,000 – $50,000">$25,000 – $50,000 (Flagship Production)</option>
                      <option value="$50,000+">$50,000+ (Dedicated Retainer)</option>
                    </select>
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 rounded-[8px] bg-[#080808] border border-[#262525] text-sm text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    />
                    {validation.errors.name && (
                      <span className="text-[#fe1e34] text-xs mt-1 block">{validation.errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1.5">
                      Direct Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@studio.com"
                      className="w-full px-4 py-3 rounded-[8px] bg-[#080808] border border-[#262525] text-sm text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    />
                    {validation.errors.email && (
                      <span className="text-[#fe1e34] text-xs mt-1 block">{validation.errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Company & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1.5">
                      Studio or Brand (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Hardware Labs"
                      className="w-full px-4 py-3 rounded-[8px] bg-[#080808] border border-[#262525] text-sm text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1.5">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.desiredTimeline}
                      onChange={(e) => setFormData({ ...formData, desiredTimeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-[8px] bg-[#080808] border border-[#262525] text-sm text-[#fcfcfc] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                    >
                      <option value="Rush Sprint (5–8 Days)">Rush Sprint (5–8 Days)</option>
                      <option value="Standard Sprint (2–3 Weeks)">Standard Sprint (2–3 Weeks)</option>
                      <option value="Comprehensive Production (4–6 Weeks)">Comprehensive Production (4–6 Weeks)</option>
                      <option value="Flexible / Milestone-Driven">Flexible / Milestone-Driven</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#d4d2d2] block mb-1.5">
                    Project Narrative & Intent *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Tell us what you are imagining. Reference constraints, dimensions, or target outcomes..."
                    className="w-full px-4 py-3 rounded-[8px] bg-[#080808] border border-[#262525] text-sm text-[#fcfcfc] placeholder-[#525252] focus:outline-none focus:border-[#fe1e34] shadow-svz-inset"
                  />
                  {validation.errors.projectDescription && (
                    <span className="text-[#fe1e34] text-xs mt-1 block">{validation.errors.projectDescription}</span>
                  )}
                </div>

                {/* File Attachment Upload */}
                <div className="p-4 rounded-[8px] border border-dashed border-[#262525] hover:border-[#fe1e34] bg-[#080808]/60 text-center transition-colors">
                  <label className="cursor-pointer block">
                    <Upload className="w-5 h-5 text-[#fe1e34] mx-auto mb-1" />
                    <span className="text-xs text-[#d4d2d2] block">
                      {formData.fileAttachmentName ? formData.fileAttachmentName : 'Attach CAD or Reference Files (.step, .stl, .pdf, .zip)'}
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
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="contact-nda-toggle"
                    checked={formData.requiresNda}
                    onChange={(e) => setFormData({ ...formData, requiresNda: e.target.checked })}
                    className="w-4 h-4 rounded-[3px] bg-[#080808] border-[#262525] text-[#fe1e34] focus:ring-0"
                  />
                  <label htmlFor="contact-nda-toggle" className="text-xs text-[#b5b2b2] flex items-center gap-1.5 cursor-pointer">
                    <Shield className="w-3.5 h-3.5 text-[#fe1e34]" />
                    <span>Send bilateral mutual NDA prior to detailed file inspection</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-4 px-6 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[8px] border border-[#d4d2d2]/40 hover:border-[#fe1e34] bg-[#080808] hover:bg-[#121212] transition-all duration-300 shadow-svz-inset"
                >
                  <span>Transmit Design Request</span>
                  <ArrowRight className="w-4 h-4 text-[#d4d2d2] group-hover:text-[#fe1e34] group-hover:translate-x-1 transition-all" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Coordinates & Guarantees */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="p-8 rounded-[14.4px] bg-[#171617] border border-[#262525] shadow-svz-inset space-y-4">
                <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-[0.2em] block font-semibold">
                  Studio Coordinates
                </span>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 text-[#d4d2d2]">
                    <Mail className="w-4 h-4 text-[#fe1e34] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#525252] block text-[10px] font-mono uppercase">Direct Line</span>
                      <a href="mailto:commissions@3drequests.studio" className="hover:text-[#fcfcfc] transition-colors font-medium">
                        commissions@3drequests.studio
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[#d4d2d2]">
                    <Clock className="w-4 h-4 text-[#fe1e34] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#525252] block text-[10px] font-mono uppercase">Triage Hours</span>
                      <span>08:00 – 19:00 GMT · Mon–Fri (SLA guaranteed)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-[#d4d2d2]">
                    <MapPin className="w-4 h-4 text-[#fe1e34] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#525252] block text-[10px] font-mono uppercase">Studio Hubs</span>
                      <span>London · Zurich · Remote Global Client Direct</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Box */}
              <div className="p-8 rounded-[14.4px] bg-[#171617] border border-[#262525] shadow-svz-inset space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#fe1e34] uppercase tracking-widest">
                  <Lock className="w-3.5 h-3.5" />
                  <span>COMMERCIAL IP INTEGRITY</span>
                </div>
                <h4 className="font-display text-base font-bold text-[#fcfcfc]">Confidentiality Guarantee</h4>
                <p className="text-xs text-[#b5b2b2] leading-relaxed font-light">
                  We never publicize client models or publish case studies without explicit written authorization. All project archives are transferred via end-to-end encrypted storage.
                </p>
              </div>
            </div>

            {/* Direct Technical Alignment Call */}
            <div className="p-8 rounded-[14.4px] bg-[#171617] border border-[#262525] shadow-svz-inset text-center space-y-3">
              <span className="text-[10px] font-mono text-[#fe1e34] uppercase tracking-wider block">
                Prefer a Technical Dialogue?
              </span>
              <p className="text-xs text-[#b5b2b2] font-light">
                Schedule a 20-minute technical geometry alignment call with our principal 3D director.
              </p>
              <button
                type="button"
                onClick={() => onRequestClick()}
                className="w-full py-3 px-4 text-[10px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] hover:text-[#fe1e34] border border-[#262525] hover:border-[#fe1e34] rounded-[8px] bg-[#080808] transition-colors shadow-svz-inset"
              >
                Schedule Technical Alignment ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compact FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="mb-10 text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#b5b2b2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34]" />
            <span>Clarity & FAQs</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-[#fcfcfc] tracking-tight">
            Frequently Addressed Questions<span className="text-[#fe1e34]">.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[8px] border border-[#262525] bg-[#171617] overflow-hidden transition-colors shadow-svz-inset hover:border-[#525252]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-display text-base font-semibold text-[#fcfcfc]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#fe1e34] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#525252] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#b5b2b2] leading-relaxed font-light border-t border-[#262525]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
