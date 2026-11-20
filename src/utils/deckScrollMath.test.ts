import test from 'node:test';
import assert from 'node:assert/strict';
import { computeDeckScrollMetrics } from './deckScrollMath';

test('at section start (sectionTop = 0), progress is 0 and Card 01 is active', () => {
  const res = computeDeckScrollMetrics({
    sectionTop: 0,
    sectionHeight: 3200,
    viewportHeight: 900,
    trackScrollWidth: 5800,
    trackClientWidth: 1440,
    cardCount: 8,
  });

  assert.equal(res.progress, 0);
  assert.equal(res.translateX, 0);
  assert.equal(res.activeCardIndex, 0);
  assert.equal(res.maxTranslatePx, 4360);
});

test('at section midpoint, progress is 0.5 and translateX is half of maxTranslatePx', () => {
  const res = computeDeckScrollMetrics({
    sectionTop: -1150,
    sectionHeight: 3200,
    viewportHeight: 900,
    trackScrollWidth: 5800,
    trackClientWidth: 1440,
    cardCount: 8,
  });

  assert.equal(res.progress, 0.5);
  assert.equal(res.translateX, -2180);
  assert.equal(res.activeCardIndex, 4);
});

test('at section end (sectionTop = -(sectionHeight - viewportHeight)), progress is 1 and Card 08 is active', () => {
  const res = computeDeckScrollMetrics({
    sectionTop: -2300,
    sectionHeight: 3200,
    viewportHeight: 900,
    trackScrollWidth: 5800,
    trackClientWidth: 1440,
    cardCount: 8,
  });

  assert.equal(res.progress, 1);
  assert.equal(res.translateX, -4360);
  assert.equal(res.activeCardIndex, 7);
});
