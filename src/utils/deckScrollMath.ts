export interface DeckScrollInput {
  sectionTop: number;
  sectionHeight: number;
  viewportHeight: number;
  trackScrollWidth: number;
  trackClientWidth: number;
  cardCount: number;
}

export interface DeckScrollMetrics {
  progress: number;
  maxTranslatePx: number;
  translateX: number;
  activeCardIndex: number;
}

/**
 * Pure deterministic scroll-to-horizontal-translation math for the Pinned Disciplines Deck.
 * Ensures Card 01 starts flush in view at progress=0 and the final Card 08 finishes
 * completely in view at progress=1 right before the section unpins.
 */
export function computeDeckScrollMetrics(input: DeckScrollInput): DeckScrollMetrics {
  const {
    sectionTop,
    sectionHeight,
    viewportHeight,
    trackScrollWidth,
    trackClientWidth,
    cardCount,
  } = input;

  const scrollableDistance = Math.max(sectionHeight - viewportHeight, 1);
  const rawProgress = -sectionTop / scrollableDistance;
  const progress = Math.min(Math.max(rawProgress, 0), 1);

  const maxTranslatePx = Math.max(0, trackScrollWidth - trackClientWidth);
  const roundedOffset = Math.round(progress * maxTranslatePx);
  const translateX = roundedOffset === 0 ? 0 : -roundedOffset;

  const safeCount = Math.max(1, cardCount);
  const activeCardIndex = Math.min(
    Math.floor(progress * safeCount + 0.0001),
    safeCount - 1
  );

  return {
    progress,
    maxTranslatePx,
    translateX,
    activeCardIndex,
  };
}
