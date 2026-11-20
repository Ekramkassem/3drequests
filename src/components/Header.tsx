import React, { useState, useEffect } from 'react';
import { PageType } from '../types.ts';
import { ArrowUpRight, Menu, X, Check, Copy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { soundFX } from '../utils/soundFX.ts';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onRequestClick: (preselectedType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onRequestClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen]);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNav = (page: PageType, sectionId?: string) => {
    soundFX.playSelect();
    setDrawerOpen(false);
    if (currentPage !== page) {
      onNavigate(page);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 480);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    soundFX.playSelect();
    navigator.clipboard?.writeText('commissions@3drequests.studio');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <>
      {/* Slim Global Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-white/[0.04] pointer-events-none select-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ scaleX, transformOrigin: '0%' }}
          className="h-full bg-gradient-to-r from-[#fe1e34]/70 via-[#fe1e34] to-[#ff4757] shadow-[0_0_8px_rgba(254,30,52,0.7)]"
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#080808]/85 backdrop-blur-xl border-b border-[#262525]'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-4">
          {/* Left: Distinctive 3D Requests Wordmark + Live Status */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNav('home');
              }}
              className="group flex items-baseline gap-1.5 font-display text-lg sm:text-xl font-extrabold tracking-tight text-[#fcfcfc] hover:text-[#d4d2d2] transition-colors whitespace-nowrap"
            >
              <span className="tracking-tighter">3D REQUESTS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] group-hover:scale-125 transition-transform" />
            </a>

            <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.025] backdrop-blur-md border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] text-[9px] font-mono tracking-[0.18em] text-[#d4d2b2] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[#d4d2d2]">ACCEPTING REQUESTS</span>
            </span>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex items-center gap-5 lg:gap-7">
            <nav className="hidden md:flex items-center gap-6 lg:gap-7 px-5 py-1.5 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.07] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-[11px] uppercase tracking-[0.18em] font-medium text-[#d4d2d2]">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    type="button"
                    onClick={() => handleNav(link.page)}
                    className={`transition-all duration-300 relative py-1 hover:text-[#fcfcfc] whitespace-nowrap ${
                      isActive ? 'text-[#fcfcfc] font-semibold' : 'text-[#d4d2d2]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#fe1e34]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Far Right: Submit Request CTA & Mobile Menu */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onRequestClick()}
              className="group glass-button hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-[#fcfcfc] active:scale-[0.98] rounded-[10px] transition-all duration-300 whitespace-nowrap"
            >
              <span className="transition-colors">Submit a Design Request</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4d2d2] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>

            {/* Mobile Hamburger Fallback */}
            <button
              type="button"
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="md:hidden p-2 rounded-lg glass-button text-[#d4d2d2] hover:text-[#fcfcfc] transition-colors"
              aria-label="Toggle Navigation"
            >
              {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Emblematica-Style FLIP Spatial Drawer Overlay (840ms cubic-bezier(0.18, 0.82, 0.22, 1)) */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Gaussian Blurred Backdrop */}
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.72, ease: [0.18, 0.82, 0.22, 1] }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[55] bg-black/65 backdrop-blur-md"
            />

            {/* Right-Aligned Spatial Drawer */}
            <motion.aside
              key="drawer-panel"
              initial={{ x: '100%', borderTopLeftRadius: '120px', borderBottomLeftRadius: '120px' }}
              animate={{ x: '0%', borderTopLeftRadius: '24px', borderBottomLeftRadius: '24px' }}
              exit={{ x: '100%', borderTopLeftRadius: '120px', borderBottomLeftRadius: '120px' }}
              transition={{ duration: 0.84, ease: [0.18, 0.82, 0.22, 1] }}
              aria-label="Studio Spatial Index Drawer"
              className="fixed top-0 right-0 bottom-0 z-[60] w-full md:w-[58vw] lg:w-[52vw] bg-[#0e0c0d]/80 backdrop-blur-2xl border-l border-white/15 p-8 sm:p-12 md:p-14 flex flex-col justify-between overflow-y-auto shadow-[0_0_90px_rgba(0,0,0,0.95)]"
            >
              {/* Top Bar Inside Drawer */}
              <div className="flex items-center justify-between border-b border-[#262525] pb-5">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#fe1e34]">
                  <span className="w-2 h-2 rounded-full bg-[#fe1e34] animate-pulse" />
                  <span>3DREQUESTS // SPATIAL INDEX</span>
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.62, ease: [0.18, 0.82, 0.22, 1], delay: 0.1 }}
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1819] hover:bg-[#fe1e34] text-[#fcfcfc] border border-[#2e2c2d] text-[10px] font-mono uppercase tracking-[0.2em] transition-colors"
                >
                  <span>CLOSE ::</span>
                  <X className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              {/* Primary Stacked Display Navigation */}
              <div className="my-auto py-8 space-y-6">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#686D78] block">
                    HOMEPAGE EXHIBITION CHAPTERS
                  </span>
                  <div className="flex flex-col space-y-2.5">
                    {[
                      { num: '01', title: 'PHILOSOPHY & EXPLODED VIEW', id: 'manifesto-precision', page: 'home' as PageType },
                      { num: '02', title: '8 CORE 3D DISCIPLINES DECK', id: 'disciplines-deck', page: 'home' as PageType },
                      { num: '03', title: '4-STAGE PRODUCTION PIPELINE', id: 'production-method', page: 'home' as PageType },
                      { num: '04', title: '3D PORTFOLIO EXHIBITION', id: undefined, page: 'portfolio' as PageType },
                    ].map((item, idx) => (
                      <motion.button
                        key={`${item.page}-${item.id || idx}`}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 + idx * 0.05, ease: [0.18, 0.82, 0.22, 1] }}
                        type="button"
                        onClick={() => handleNav(item.page, item.id)}
                        className="group flex items-baseline justify-between text-left py-1.5 border-b border-white/[0.05] hover:border-[#fe1e34]/50 transition-colors"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="text-[11px] font-mono text-[#fe1e34]">{item.num} //</span>
                          <span className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[#fcfcfc] group-hover:text-[#fe1e34] tracking-tight transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#525252] group-hover:text-[#fe1e34] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Direct Page Routes */}
                <div className="pt-2 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#686D78] block">
                    STUDIO PAGES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {navLinks.map((link) => (
                      <button
                        key={link.page}
                        type="button"
                        onClick={() => handleNav(link.page)}
                        className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all ${
                          currentPage === link.page
                            ? 'bg-[#fe1e34] text-white border-[#fe1e34] font-bold'
                            : 'bg-[#171617] text-[#d4d2d2] border-[#262525] hover:border-[#fe1e34]'
                        }`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Highlighted Conversion Action */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setDrawerOpen(false);
                      onRequestClick();
                    }}
                    className="w-full py-4 px-6 rounded-[12px] bg-[#fe1e34] hover:bg-[#e0192e] text-white font-display text-lg sm:text-xl font-extrabold uppercase tracking-tight flex items-center justify-between shadow-[0_0_30px_rgba(254,30,52,0.4)] transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Sparkles className="w-5 h-5" />
                      <span>07 // SUBMIT A 3D REQUEST</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Drawer Utility Footer */}
              <div className="pt-6 border-t border-[#262525] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-[#b5b2b2]">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 text-[#fcfcfc] hover:text-[#fe1e34] transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED: COMMISSIONS@3DREQUESTS.STUDIO</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#fe1e34]" />
                      <span>COMMISSIONS@3DREQUESTS.STUDIO</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-4 text-[10px] text-[#737373]">
                  <span>LONDON · ZURICH · GLOBAL</span>
                  <span>·</span>
                  <span className="text-[#fe1e34]">SLA &lt; 12H</span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
