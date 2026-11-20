import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HERO_SCULPTURE_IMAGE,
  SYNTHESIZER_IMAGE,
  CHARACTER_BUST_IMAGE,
  LIQUID_CHROME_IMAGE,
  LATTICE_IMAGE,
  CHRONO_ORB_IMAGE,
} from '../data/studioData.ts';

interface StudioSplashScreenProps {
  onComplete: () => void;
  is3dReady?: boolean;
}

const REEL_ITEMS = [
  { img: SYNTHESIZER_IMAGE, pass: '01 // NURBS CAD & CMF', label: 'AURA-1 SYNTHESIZER' },
  { img: CHARACTER_BUST_IMAGE, pass: '02 // SUB-D QUAD TOPOLOGY', label: 'ETHEREA SCULPTURE' },
  { img: LIQUID_CHROME_IMAGE, pass: '03 // FLIP FLUID SHADER', label: 'LIQUID CHROME STUDY' },
  { img: LATTICE_IMAGE, pass: '04 // MANIFOLD SLA VOLUME', label: 'BIOMORPHIC LATTICE' },
  { img: CHRONO_ORB_IMAGE, pass: '05 // KINEMATIC HERO RIG', label: 'CHRONO-CORE RELIC' },
  { img: HERO_SCULPTURE_IMAGE, pass: '06 // FINAL SPECTRAL BEAUTY', label: 'STUDIO MONOLITH' },
];

export const StudioSplashScreen: React.FC<StudioSplashScreenProps> = ({
  onComplete,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [reelIndex, setReelIndex] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>('INITIALIZING GEOMETRIC CORE...');
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 2200; // Crisp 2.2s optical calibration reel

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const rawProgress = Math.min(Math.round((elapsed / duration) * 100), 100);

      setReelIndex(Math.min(Math.floor((rawProgress / 100) * REEL_ITEMS.length), REEL_ITEMS.length - 1));

      setProgress((prev) => {
        const next = Math.max(prev, rawProgress);
        if (next < 25) {
          setStatusMessage('CALIBRATING OPTICAL STAGE // WIREFRAME PASS');
        } else if (next < 55) {
          setStatusMessage('COMPILING SUB-D SURFACE TOPOLOGIES // CLAY AO');
        } else if (next < 85) {
          setStatusMessage('SYNCHRONIZING PBR CAUSTICS & SHADER ENGINE');
        } else {
          setStatusMessage('OPTICAL STAGE READY // UNMASKING');
        }
        return next;
      });

      if (rawProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          document.body.style.overflow = '';
          setTimeout(onComplete, 840);
        }, 140);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    document.body.style.overflow = '';
    setTimeout(onComplete, 420);
  };

  const activeItem = REEL_ITEMS[reelIndex] || REEL_ITEMS[0];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="splash-screen"
          initial={{ y: '0%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-105%' }}
          transition={{ duration: 0.86, ease: [0.18, 0.82, 0.22, 1] }}
          style={{ zIndex: 9999 }}
          className="fixed inset-0 bg-[#080808] flex flex-col justify-between p-6 sm:p-12 select-none cursor-pointer"
          onClick={handleSkip}
          role="status"
          aria-live="polite"
          aria-label="Loading 3D Requests Studio"
        >
          {/* Ambient Radial Backlight */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_46%,rgba(254,30,52,0.12)_0%,transparent_62%)]" />

          {/* Corner Optical Coordinate Reticle Ticks */}
          <div className="pointer-events-none absolute inset-5 sm:inset-8 border border-white/[0.05]">
            <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#fe1e34]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#fe1e34]" />
            <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#fe1e34]" />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#fe1e34]" />
          </div>

          {/* Top Metadata Row */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#525252] tracking-[0.2em] uppercase">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe1e34] animate-pulse" />
              <span className="text-[#fcfcfc] font-semibold">3D REQUESTS™</span>
              <span aria-hidden="true" className="text-[#525252]">/</span>
              <span className="text-[#b5b2b2]">OPTICAL FOUNDRY</span>
            </div>
            <div className="hidden sm:block text-[#737373]">
              [CALIBRATING STAGE — {String(progress).padStart(3, '0')}%]
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSkip();
              }}
              className="px-3 py-1 rounded-full bg-[#171617] border border-[#262525] text-[#b5b2b2] hover:text-[#fcfcfc] hover:border-[#fe1e34] transition-colors text-[10px] uppercase tracking-[0.18em]"
            >
              Skip Intro ↗
            </button>
          </div>

          {/* Center Emblematica-Inspired Circular 3D Spotlight Reel */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-6">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-2 border border-white/15 bg-[#111011] shadow-[0_0_80px_rgba(254,30,52,0.18)] flex items-center justify-center overflow-hidden">
              {/* SVG Circular Progress Ring */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.75"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#fe1e34"
                  strokeWidth="1.2"
                  strokeDasharray="301.59"
                  strokeDashoffset={301.59 - (301.59 * progress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-75"
                />
              </svg>

              {/* Rapidly Cycling 3D Object Spotlight */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={activeItem.img}
                  alt={activeItem.label}
                  className={`w-full h-full object-cover transition-transform duration-150 scale-105 ${
                    reelIndex % 3 === 0
                      ? 'contrast-125 brightness-110'
                      : reelIndex % 3 === 1
                      ? 'grayscale contrast-150 brightness-95'
                      : ''
                  }`}
                />
                {/* Wireframe / Scanline Reticle Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,#080808_100%)]" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-[#fe1e34]/35" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-[#fe1e34]/35" />
              </div>
            </div>

            {/* Pass Readout & Brand Lockup */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171617] border border-[#262525] text-[10px] font-mono text-[#fe1e34] tracking-[0.2em] uppercase">
                <span>{activeItem.pass}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-[#fcfcfc]">
                3D REQUESTS<span className="text-[#fe1e34]">.</span>
              </h1>
              <p className="font-serif italic text-base sm:text-xl text-[#b5b2b2] tracking-tight">
                ideas, made impossible to ignore
              </p>
            </div>
          </div>

          {/* Bottom Technical Status & Progress */}
          <div className="relative z-10 max-w-md w-full mx-auto space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono text-[#b5b2b2]">
              <span className="truncate max-w-[280px] tracking-wider text-[10px]">{statusMessage}</span>
              <span className="text-[#fe1e34] tabular-nums font-bold tracking-wider text-xs">
                {String(progress).padStart(3, '0')}%
              </span>
            </div>

            <div className="w-full h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#fe1e34]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.04 }}
              />
            </div>

            <div className="flex items-center justify-between text-[9px] font-mono text-[#525252] pt-0.5 tracking-[0.18em]">
              <span>CAD / SUB-D / PBR / ADDITIVE</span>
              <span>CLICK ANYWHERE TO ENTER</span>
            </div>
          </div>

          {/* Bottom Convex SVG Unmasking Membrane Curve */}
          <svg
            className="absolute left-0 right-0 -bottom-16 w-full h-16 text-[#080808] fill-current pointer-events-none"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L1440,0 L1440,20 Q720,100 0,20 Z" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
