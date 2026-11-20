export interface HeroSplitMetrics {
  splitProgress: number;
  blackOverlayOpacity: number;
  getObjectTransform: (side: 'left' | 'right', depthFactor: number, baseRotate: number) => {
    translateX: number;
    translateY: number;
    rotateDeg: number;
    scale: number;
  };
}

export function clamp01(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

/**
 * Computes the Hero -> Manifesto outward 3D object parting parallax and background darkening
 * matching 00:12 - 00:15 of the Emblematica reference video.
 */
export function computeHeroParallaxSplit(
  scrollY: number,
  viewportHeight: number
): HeroSplitMetrics {
  const safeVh = Math.max(viewportHeight, 1);
  const rawProgress = scrollY / (safeVh * 0.95);
  const splitProgress = clamp01(rawProgress);

  // Background fades from warm stone/hover color to pure black between 5% and 55% of hero scroll
  const blackOverlayOpacity = clamp01((splitProgress - 0.05) / 0.48);

  const getObjectTransform = (
    side: 'left' | 'right',
    depthFactor: number,
    baseRotate: number
  ) => {
    const direction = side === 'left' ? -1 : 1;
    // Objects split outward horizontally up to 340px-520px while drifting upward
    const outwardPx = splitProgress * (320 + depthFactor * 190) * direction;
    const upwardPx = -splitProgress * (140 + depthFactor * 160);
    const rotateDeg = baseRotate + direction * splitProgress * (12 + depthFactor * 8);
    const scale = Math.max(0.78, 1 - splitProgress * 0.14);

    return {
      translateX: Math.round(outwardPx * 10) / 10 === 0 ? 0 : Math.round(outwardPx * 10) / 10,
      translateY: Math.round(upwardPx * 10) / 10 === 0 ? 0 : Math.round(upwardPx * 10) / 10,
      rotateDeg: Math.round(rotateDeg * 10) / 10,
      scale: Math.round(scale * 1000) / 1000,
    };
  };

  return {
    splitProgress,
    blackOverlayOpacity,
    getObjectTransform,
  };
}

/**
 * Computes scroll-scrubbed word-by-word illumination progress [0..1]
 * for Manifesto (00:13-00:16) and Creative Method (00:23-00:26).
 */
export function computeWordIllumination(
  sectionTop: number,
  sectionHeight: number,
  viewportHeight: number,
  wordIndex: number,
  totalWords: number
): number {
  const safeVh = Math.max(viewportHeight, 1);
  const safeTotal = Math.max(totalWords, 1);

  // Start lighting up when top of text block is at 78% of viewport height,
  // finish lighting the last word when section has scrolled through 62% of its height
  const startThreshold = safeVh * 0.78;
  const totalTravel = Math.max(sectionHeight * 0.68 + safeVh * 0.35, 1);
  const scrolled = startThreshold - sectionTop;
  const overallProgress = clamp01(scrolled / totalTravel);

  const wordStart = (wordIndex / safeTotal) * 0.88;
  const wordWindow = Math.max(0.12, 1.8 / safeTotal);
  return clamp01((overallProgress - wordStart) / wordWindow);
}

export interface StackedCardTransform {
  index: number;
  translateXvw: number;
  translateYpx: number;
  rotateDeg: number;
  scale: number;
  opacity: number;
  isActive: boolean;
}

const CARD_TARGET_TILTS = [0, -2.4, 2.3, -2.0, 1.6];

/**
 * Computes the pinned overlapping horizontal-to-stack card choreography
 * seen in "WHAT WE DO BEST" (00:18 - 00:23 of the reference video).
 * Card 0 starts centered; Cards 1..4 sequentially glide in from the right (+110vw)
 * with tilted 3D rotations and stack directly over the preceding cards.
 */
export function computeWhatWeDoBestStack(
  sectionTop: number,
  sectionHeight: number,
  viewportHeight: number,
  cardCount = 5
): {
  overallProgress: number;
  activeCardIndex: number;
  cards: StackedCardTransform[];
} {
  const safeVh = Math.max(viewportHeight, 1);
  const scrollableDistance = Math.max(sectionHeight - safeVh, 1);
  const overallProgress = clamp01(-sectionTop / scrollableDistance);

  // Card 0 is present immediately and enters slightly from bottom on approach;
  // Remaining (cardCount - 1) cards divide the [0.04 .. 0.94] pinned scroll range
  const transitionsCount = Math.max(cardCount - 1, 1);
  const activeCardIndex = Math.min(
    cardCount - 1,
    Math.floor(overallProgress * cardCount)
  );

  const cards: StackedCardTransform[] = Array.from({ length: cardCount }, (_, idx) => {
    const targetTilt = CARD_TARGET_TILTS[idx] ?? 0;

    if (idx === 0) {
      // Base card (Brand Creation - Lime) stays anchored in the center and subtly compresses as cards stack on top
      const coveredAmount = clamp01(overallProgress * 1.4);
      const scale = Math.round((1 - coveredAmount * 0.035) * 1000) / 1000;
      return {
        index: 0,
        translateXvw: 0,
        translateYpx: 0,
        rotateDeg: targetTilt,
        scale,
        opacity: 1,
        isActive: activeCardIndex === 0,
      };
    }

    // Segment for card `idx` (1..4)
    const segStart = 0.04 + ((idx - 1) / transitionsCount) * 0.86;
    const segDuration = 0.86 / transitionsCount;
    const localProgress = clamp01((overallProgress - segStart) / segDuration);

    // Smooth cubic ease-out for tactile card glide
    const eased = 1 - Math.pow(1 - localProgress, 2.6);

    // Card glides from +112vw on the right to 0vw center
    const rawXvw = (1 - eased) * 112;
    const translateXvw = Math.round(rawXvw * 100) / 100 === 0 ? 0 : Math.round(rawXvw * 100) / 100;

    // Slight vertical arc during slide-in
    const rawYpx = (1 - eased) * 28;
    const translateYpx = Math.round(rawYpx * 10) / 10 === 0 ? 0 : Math.round(rawYpx * 10) / 10;

    // Rotation starts steeper (+9deg or -9deg) while flying in and settles at targetTilt
    const entrySpin = idx % 2 === 1 ? -8 : 8;
    const rotateDeg =
      Math.round((targetTilt + (1 - eased) * entrySpin) * 100) / 100;

    // Subtle depth scale down when subsequent cards cover this card
    const nextSegStart = segStart + segDuration;
    const coveredByLater = clamp01((overallProgress - nextSegStart) / (1 - nextSegStart + 0.001));
    const scale = Math.round((1 - coveredByLater * 0.025) * 1000) / 1000;

    return {
      index: idx,
      translateXvw,
      translateYpx,
      rotateDeg,
      scale,
      opacity: localProgress > 0.001 ? 1 : 0,
      isActive: activeCardIndex === idx,
    };
  });

  return {
    overallProgress,
    activeCardIndex,
    cards,
  };
}
