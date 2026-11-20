import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 190;
const FRAME_PREFIX = '/assets/video_frames/frame_';

export const ScrollVideoBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const loadedFlagsRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));

  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const rafIdRef = useRef<number | null>(null);
  const isRenderingRef = useRef<boolean>(false);

  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);
  const [veilOpacity, setVeilOpacity] = useState<number>(0.10);

  // Helper to format frame number (1 -> "0001")
  const getFrameSrc = (index: number) => {
    const pad = String(index).padStart(4, '0');
    return `${FRAME_PREFIX}${pad}.webp`;
  };

  // Draw a frame onto the canvas with cover sizing and high-fidelity smoothing
  const renderFrame = useCallback((frameNumber: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Enable high-fidelity bilinear/bicubic filtering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Find requested image or closest loaded frame
    let img = imagesRef.current[frameNumber - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame so canvas never flickers
      let foundImg: HTMLImageElement | null = null;
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prevIdx = frameNumber - 1 - offset;
        const nextIdx = frameNumber - 1 + offset;
        if (prevIdx >= 0 && loadedFlagsRef.current[prevIdx]) {
          foundImg = imagesRef.current[prevIdx];
          break;
        }
        if (nextIdx < TOTAL_FRAMES && loadedFlagsRef.current[nextIdx]) {
          foundImg = imagesRef.current[nextIdx];
          break;
        }
      }
      if (!foundImg) return;
      img = foundImg;
    }

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1280;
    const ih = img.naturalHeight || 720;

    // Object-fit: cover math
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) / 2;
    const ny = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, nx, ny, nw, nh);
  }, []);

  // Resize canvas to full viewport with device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      renderFrame(Math.round(currentFrameRef.current));
    }
  }, [renderFrame]);

  // Compute exact frame equally divided from top (frame 1) to bottom (frame 190)
  const calculateFrameFromScroll = useCallback(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );

    // Exact normalized progress [0.0, 1.0]
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

    // Dynamic Dimming Veil: 0.10 while in Hero, smoothly transitioning to 0.20 as Hero is scrolled past
    const heroTransitionProgress = Math.min(Math.max(scrollY / 650, 0), 1);
    const nextVeilOpacity = 0.10 + heroTransitionProgress * 0.10; // 0.10 -> 0.20
    setVeilOpacity(nextVeilOpacity);

    // Exactly maps 0.0 -> Frame 1, 1.0 -> Frame 190, equally divided across entire range
    const exactFrame = Math.min(
      Math.max(Math.round(progress * (TOTAL_FRAMES - 1)) + 1, 1),
      TOTAL_FRAMES
    );

    targetFrameRef.current = exactFrame;

    // Immediately render on scroll event for zero latency
    if (!isRenderingRef.current) {
      renderFrame(exactFrame);
      currentFrameRef.current = exactFrame;
    }
  }, [renderFrame]);

  // Preload images progressively
  useEffect(() => {
    // 1. Prioritize Frame 1 immediately and draw on canvas with zero delay
    const firstImg = new Image();
    firstImg.src = getFrameSrc(1);
    imagesRef.current[0] = firstImg;
    firstImg.onload = () => {
      loadedFlagsRef.current[0] = true;
      setIsFirstFrameLoaded(true);
      resizeCanvas();
      renderFrame(1);
      calculateFrameFromScroll();
    };

    // If frame 1 is already cached in browser memory, draw immediately
    if (firstImg.complete && firstImg.naturalWidth > 0) {
      loadedFlagsRef.current[0] = true;
      setIsFirstFrameLoaded(true);
      resizeCanvas();
      renderFrame(1);
    }

    // 2. Preload remaining frames aggressively so scrolling anywhere immediately has frames
    const loadBatch = (startIndex: number, batchSize: number) => {
      if (startIndex >= TOTAL_FRAMES) return;

      const endIndex = Math.min(startIndex + batchSize, TOTAL_FRAMES);
      for (let i = startIndex; i < endIndex; i++) {
        if (!imagesRef.current[i]) {
          const img = new Image();
          img.src = getFrameSrc(i + 1);
          imagesRef.current[i] = img;
          img.onload = () => {
            loadedFlagsRef.current[i] = true;
          };
        }
      }

      // Schedule next batch swiftly
      if (endIndex < TOTAL_FRAMES) {
        setTimeout(() => loadBatch(endIndex, batchSize), 16);
      }
    };

    // Start fast background preloading for all 190 frames
    loadBatch(1, 40);
  }, [resizeCanvas, calculateFrameFromScroll]);

  // High-performance animation loop for ultra-smooth sub-frame gliding
  useEffect(() => {
    isRenderingRef.current = true;

    const loop = () => {
      const current = currentFrameRef.current;
      const target = targetFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.08) {
        // High responsive LERP factor (0.35) for instant, fluid tracking
        const next = current + diff * 0.35;
        currentFrameRef.current = next;
        renderFrame(Math.round(next));
      } else if (current !== target) {
        currentFrameRef.current = target;
        renderFrame(target);
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      isRenderingRef.current = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [renderFrame]);

  // Attach window event listeners
  useEffect(() => {
    resizeCanvas();
    calculateFrameFromScroll();

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', calculateFrameFromScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', calculateFrameFromScroll);
    };
  }, [resizeCanvas, calculateFrameFromScroll]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#080808]"
    >
      {/* High-Performance 60FPS Video Frame Canvas */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-300 will-change-transform ${
          isFirstFrameLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Atmospheric Caustic Red Light Glow Sweep */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(254,30,52,0.18) 0%, rgba(254,30,52,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Balanced Soft Obsidian Vignette (Subtle and Less Transparent as requested) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(8,8,8,0.10) 0%, rgba(8,8,8,0.38) 60%, rgba(8,8,8,0.72) 100%)',
        }}
      />

      {/* Top Header Feathering */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080808]/85 via-[#080808]/40 to-transparent pointer-events-none" />

      {/* Bottom Footer Feathering */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#080808]/85 via-[#080808]/40 to-transparent pointer-events-none" />

      {/* Dynamic Black Dimming Veil: 10% in hero, smoothly transitioning to 20% on scroll for optimal text contrast */}
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-150 ease-out"
        style={{ opacity: veilOpacity }}
      />
    </div>
  );
};
