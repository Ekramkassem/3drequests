import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { magneticCursor, MagneticCursorState } from '../../utils/magneticCursorState.ts';
import { ArrowUpRight, MoveHorizontal, Sparkles } from 'lucide-react';

export const MagneticCursor: React.FC = () => {
  const [cursorState, setCursorState] = useState<MagneticCursorState>(magneticCursor.get());
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const stateRef = useRef<MagneticCursorState>(cursorState);
  stateRef.current = cursorState;

  // Raw cursor motion values
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  // High-speed spring for micro center dot (instant precision tethering)
  const dotX = useSpring(pointerX, { stiffness: 950, damping: 48, mass: 0.15 });
  const dotY = useSpring(pointerY, { stiffness: 950, damping: 48, mass: 0.15 });

  // Gravitational follower target values (displaced toward card centers)
  const followerTargetX = useMotionValue(-100);
  const followerTargetY = useMotionValue(-100);

  // Fluid mass-rich spring for outer magnetic lens
  const followerX = useSpring(followerTargetX, { stiffness: 280, damping: 24, mass: 0.55 });
  const followerY = useSpring(followerTargetY, { stiffness: 280, damping: 24, mass: 0.55 });

  // Subscribe to magnetic cursor state updates
  useEffect(() => {
    // Touch detection
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isCoarse = window.matchMedia && window.matchMedia('(hover: none)').matches;
    if (hasTouch || isCoarse) {
      setIsTouchDevice(true);
      return;
    }

    const unsubscribe = magneticCursor.subscribe((newState) => {
      setCursorState(newState);
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      pointerX.set(mouseX);
      pointerY.set(mouseY);

      const activeState = stateRef.current;

      // Gravitational magnetic pull calculation
      if (activeState.active && activeState.targetPoint) {
        const dx = activeState.targetPoint.x - mouseX;
        const dy = activeState.targetPoint.y - mouseY;
        const dist = Math.hypot(dx, dy);

        const maxRadius = activeState.mode === 'project' ? 380 : 180;

        if (dist < maxRadius) {
          // Non-linear gravitational suction curve (stronger near center, soft falloff)
          const strength = activeState.magneticStrength ?? 0.32;
          const factor = Math.pow(1 - dist / maxRadius, 1.25) * strength;
          followerTargetX.set(mouseX + dx * factor);
          followerTargetY.set(mouseY + dy * factor);
        } else {
          followerTargetX.set(mouseX);
          followerTargetY.set(mouseY);
        }
      } else {
        followerTargetX.set(mouseX);
        followerTargetY.set(mouseY);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Global DOM delegate for HTML project cards and interactive buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest<HTMLElement>('[data-project-card], .project-card-interactive');
      if (projectCard) {
        const rect = projectCard.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        const title = projectCard.getAttribute('data-project-title') || '3D Project';
        const category = projectCard.getAttribute('data-project-category') || undefined;

        magneticCursor.hoverProject({
          title,
          category,
          targetPoint: center,
          magneticStrength: 0.35,
        });
        return;
      }

      // Buttons and links magnetic reactivity
      const interactiveBtn = target.closest<HTMLElement>('button, a[href], [data-magnetic="true"]');
      if (interactiveBtn && !stateRef.current.active) {
        const rect = interactiveBtn.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        magneticCursor.hoverButton(center);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest<HTMLElement>('[data-project-card], .project-card-interactive');
      const interactiveBtn = target.closest<HTMLElement>('button, a[href], [data-magnetic="true"]');

      if ((projectCard || interactiveBtn) && stateRef.current.mode !== 'drag') {
        magneticCursor.reset();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      unsubscribe();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isVisible, pointerX, pointerY, followerTargetX, followerTargetY]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  const isProjectHover = cursorState.active && cursorState.mode === 'project';
  const isDragging = cursorState.active && cursorState.mode === 'drag';
  const isButtonHover = cursorState.active && cursorState.mode === 'button';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none"
    >
      {/* 1. Precision Center Micro-Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isProjectHover ? 0 : isDragging ? 0.6 : 1,
          opacity: isProjectHover ? 0 : 1,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="w-2 h-2 rounded-full bg-[#fe1e34] shadow-[0_0_10px_rgba(254,30,52,0.8)] border border-white/40"
      />

      {/* 2. Magnetic Outer Follower Lens (Experiences Gravitational Pull Toward Cards) */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isProjectHover ? 136 : isDragging ? 84 : isButtonHover ? 48 : 34,
          height: isProjectHover ? 136 : isDragging ? 84 : isButtonHover ? 48 : 34,
          borderColor: isProjectHover
            ? 'rgba(254, 30, 52, 0.85)'
            : isDragging
            ? 'rgba(254, 30, 52, 0.95)'
            : isButtonHover
            ? 'rgba(254, 30, 52, 0.45)'
            : 'rgba(255, 255, 255, 0.22)',
          backgroundColor: isProjectHover
            ? 'rgba(14, 12, 13, 0.82)'
            : isDragging
            ? 'rgba(12, 11, 12, 0.92)'
            : isButtonHover
            ? 'rgba(254, 30, 52, 0.06)'
            : 'rgba(255, 255, 255, 0.02)',
          backdropFilter: isProjectHover ? 'blur(12px)' : 'blur(2px)',
          boxShadow: isProjectHover
            ? '0 0 35px rgba(254, 30, 52, 0.35), inset 0 0 20px rgba(254, 30, 52, 0.12)'
            : isDragging
            ? '0 0 25px rgba(254, 30, 52, 0.45)'
            : isButtonHover
            ? '0 0 15px rgba(254, 30, 52, 0.15)'
            : 'none',
        }}
        transition={{
          type: 'spring',
          stiffness: 340,
          damping: 28,
          mass: 0.5,
        }}
        className="rounded-full flex items-center justify-center border relative overflow-hidden"
      >
        {/* Ambient Subtle Radial Glow Inside Magnetic Lens */}
        {isProjectHover && (
          <div className="absolute inset-0 bg-gradient-to-tr from-[#fe1e34]/20 via-transparent to-transparent pointer-events-none animate-spin-slow" />
        )}

        <AnimatePresence mode="wait">
          {/* A. Hovering Project Card State */}
          {isProjectHover && (
            <motion.div
              key="project-hover"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.82 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative z-10 flex flex-col items-center justify-center text-center px-2 space-y-0.5"
            >
              <div className="flex items-center gap-1 text-[8.5px] font-mono tracking-[0.2em] text-[#fe1e34] uppercase font-bold">
                <Sparkles className="w-2.5 h-2.5" />
                <span>3D SPEC</span>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-display font-extrabold text-[#fcfcfc] uppercase tracking-wider">
                <span>INSPECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#fe1e34]" />
              </div>

              {cursorState.category && (
                <span className="text-[8px] font-mono text-[#b5b2b2] tracking-wider uppercase truncate max-w-[95px] block">
                  {cursorState.category}
                </span>
              )}
            </motion.div>
          )}

          {/* B. Active Dragging State */}
          {isDragging && (
            <motion.div
              key="dragging"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center text-center space-y-0.5 text-[#fcfcfc]"
            >
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-[#fe1e34] uppercase">
                <MoveHorizontal className="w-3.5 h-3.5" />
                <span>DRAG</span>
              </div>
              <span className="text-[7.5px] font-mono text-[#8e8d8d] uppercase tracking-wider">
                SPATIAL
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
