import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeHeroParallaxSplit,
  computeWordIllumination,
  computeWhatWeDoBestStack,
} from './emblematicaScrollMath';

test('computeHeroParallaxSplit splits left and right objects outward as scroll increases', () => {
  const initial = computeHeroParallaxSplit(0, 900);
  assert.equal(initial.splitProgress, 0);
  assert.equal(initial.blackOverlayOpacity, 0);
  assert.equal(initial.getObjectTransform('left', 0.5, -4).translateX, 0);
  assert.equal(initial.getObjectTransform('right', 0.5, 6).translateX, 0);

  const mid = computeHeroParallaxSplit(450, 900);
  assert.ok(mid.splitProgress > 0.45 && mid.splitProgress < 0.6);
  assert.ok(mid.blackOverlayOpacity > 0.8);
  const leftObj = mid.getObjectTransform('left', 0.8, 0);
  const rightObj = mid.getObjectTransform('right', 0.8, 0);
  assert.ok(leftObj.translateX < -180, 'Left object should move left (negative X)');
  assert.ok(rightObj.translateX > 180, 'Right object should move right (positive X)');
  assert.ok(leftObj.translateY < -100, 'Objects should parallax upward');
});

test('computeWordIllumination lights words sequentially from start to end of scroll range', () => {
  const vh = 900;
  const sectionHeight = 1200;
  const totalWords = 40;

  // Before entering viewport
  assert.equal(computeWordIllumination(850, sectionHeight, vh, 0, totalWords), 0);

  // Mid scroll: first word is fully illuminated, last word is still dim
  const firstWordMid = computeWordIllumination(250, sectionHeight, vh, 0, totalWords);
  const lastWordMid = computeWordIllumination(250, sectionHeight, vh, 39, totalWords);
  assert.equal(firstWordMid, 1);
  assert.equal(lastWordMid, 0);

  // Deep scroll: all words are fully illuminated
  const lastWordEnd = computeWordIllumination(-500, sectionHeight, vh, 39, totalWords);
  assert.equal(lastWordEnd, 1);
});

test('computeWhatWeDoBestStack slides and stacks all 5 cards before releasing scroll', () => {
  const vh = 900;
  const sectionHeight = 4500;

  // At top of pinned section (progress = 0): Card 0 is centered, Cards 1..4 are offscreen right
  const atStart = computeWhatWeDoBestStack(0, sectionHeight, vh, 5);
  assert.equal(atStart.overallProgress, 0);
  assert.equal(atStart.cards[0].translateXvw, 0);
  assert.equal(atStart.cards[1].translateXvw, 112);
  assert.equal(atStart.cards[4].translateXvw, 112);

  // At end of pinned section (progress = 1): all 5 cards have glided to 0vw with their distinct tilts
  const atEnd = computeWhatWeDoBestStack(-3600, sectionHeight, vh, 5);
  assert.equal(atEnd.overallProgress, 1);
  for (const card of atEnd.cards) {
    assert.equal(card.translateXvw, 0);
    assert.equal(card.opacity, 1);
  }
  assert.equal(atEnd.cards[0].rotateDeg, 0);
  assert.equal(atEnd.cards[1].rotateDeg, -2.4);
  assert.equal(atEnd.cards[2].rotateDeg, 2.3);
  assert.equal(atEnd.cards[3].rotateDeg, -2);
  assert.equal(atEnd.cards[4].rotateDeg, 1.6);
});
