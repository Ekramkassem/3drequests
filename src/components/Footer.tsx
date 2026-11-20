import React from 'react';
import { PageType } from '../types.ts';
import { ArrowUpRight, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onRequestClick: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestClick,
  onReplayIntro,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full border-t border-white/[0.08] bg-[#0a0a0c]/22 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-[#b5b2b2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 space-y-16">
        {/* Top Tier: Wordmark & Direct Actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNav('home');
              }}
              className="font-display text-2xl font-extrabold tracking-[-0.04em] text-[#fcfcfc] hover:text-[#d4d2d2] transition-colors inline-block"
            >
              3D REQUESTS<span className="text-[#fe1e34]">.</span>
            </a>
            <p className="text-xs text-[#b5b2b2] max-w-sm font-light leading-relaxed">
              Premium 3D design, visualization, and sculptural visual production for ideas worth bringing to life.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onRequestClick}
              className="group glass-button inline-flex items-center gap-2.5 px-6 py-3 text-[11px] font-mono uppercase tracking-[0.18em] text-[#fcfcfc] rounded-[10px] transition-all duration-300"
            >
              <span>Submit a Design Request</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d4d2d2] group-hover:text-[#fe1e34] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Discipline Links & Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-light">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 font-mono uppercase tracking-[0.2em] text-[10px] text-[#fcfcfc] font-semibold">
              <span className="w-1 h-1 rounded-full bg-[#fe1e34]" />
              <span>Studio Navigation</span>
            </div>
            <ul className="space-y-2">
              <li>
                <button type="button" onClick={() => handleNav('home')} className="hover:text-[#fcfcfc] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-[#fcfcfc] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('portfolio')} className="hover:text-[#fcfcfc] transition-colors">
                  Selected Work
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('about')} className="hover:text-[#fcfcfc] transition-colors">
                  About the Studio
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('contact')} className="hover:text-[#fcfcfc] transition-colors">
                  Contact & Briefing
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-1.5 font-mono uppercase tracking-[0.2em] text-[10px] text-[#fcfcfc] font-semibold">
              <span className="w-1 h-1 rounded-full bg-[#fe1e34]" />
              <span>3D Disciplines</span>
            </div>
            <ul className="space-y-2">
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-[#fcfcfc] transition-colors">
                  Product Design & CAD
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-[#fcfcfc] transition-colors">
                  Character Modeling & Sculpting
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-[#fcfcfc] transition-colors">
                  Additive & 3D Print Prototyping
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-[#fcfcfc] transition-colors">
                  Animation & Motion Design
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-[#fcfcfc] transition-colors">
                  Custom 3D Projects
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-1.5 font-mono uppercase tracking-[0.2em] text-[10px] text-[#fcfcfc] font-semibold">
              <span className="w-1 h-1 rounded-full bg-[#fe1e34]" />
              <span>Assurance Standards</span>
            </div>
            <ul className="space-y-2 text-[#b5b2b2]">
              <li className="flex items-center gap-1.5 text-[#d4d2d2]">
                <Shield className="w-3.5 h-3.5 text-[#fe1e34]" />
                <span>Mutual NDA Execution First</span>
              </li>
              <li>100% Watertight Manifold STL</li>
              <li>Sub-D Clean Quad Edge Loops</li>
              <li>NURBS STEP/IGES CAD Masters</li>
              <li>Full Commercial IP Assignment</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-1.5 font-mono uppercase tracking-[0.2em] text-[10px] text-[#fcfcfc] font-semibold">
              <span className="w-1 h-1 rounded-full bg-[#fe1e34]" />
              <span>Studio Coordinates</span>
            </div>
            <div className="space-y-2 text-[#b5b2b2]">
              <p>London · Zurich · Global Remote</p>
              <p className="font-mono text-[#525252] text-[11px]">commissions@3drequests.studio</p>
              <p className="text-[11px] text-[#525252]">Typical response within 12 business hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Quiet Studio Signature */}
        <div className="pt-8 border-t border-[#262525] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#525252] font-mono">
          <div className="flex items-center gap-3">
            <span>© {currentYear} 3D Requests Studio. All rights reserved.</span>
            {onReplayIntro && (
              <>
                <span aria-hidden="true" className="text-[#262525]">·</span>
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="hover:text-[#fe1e34] transition-colors underline underline-offset-4 decoration-[#262525] hover:decoration-[#fe1e34]"
                >
                  Replay Studio Intro
                </button>
              </>
            )}
          </div>
          <div className="flex items-center gap-4 text-[10px] tracking-[0.15em]">
            <span>EXCEPTIONAL 3D VISUAL QUALITY</span>
            <span aria-hidden="true" className="text-[#fe1e34]">·</span>
            <span>INTERNATIONAL COMMISSIONS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
