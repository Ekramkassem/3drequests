import test from 'node:test';
import assert from 'node:assert/strict';

// Test pricing calculation algorithm
function calculateEstimate(basePrice: number, outcomeMult: number, inputMult: number, rushFee: number) {
  const rawPrice = Math.round(basePrice * outcomeMult * inputMult + rushFee);
  return Math.ceil(rawPrice / 10) * 10;
}

test('Configurator calculates valid flat tiers for Maker Sprint', () => {
  const price = calculateEstimate(100, 1.0, 1.0, 0);
  assert.equal(price, 100);
});

test('Configurator applies rush fee accurately for priority delivery', () => {
  const price = calculateEstimate(100, 1.0, 1.0, 120);
  assert.equal(price, 220);
});

test('Configurator calculates CAD tool production tier with CNC multipliers', () => {
  // Base 280, outcome 1.35, input 1.0
  const price = calculateEstimate(280, 1.35, 1.0, 0);
  assert.ok(price >= 370 && price <= 400);
});
