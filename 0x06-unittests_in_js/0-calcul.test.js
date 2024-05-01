const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    assert.strictEqual(calculateNumber(1.6, 2.4), 4);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(-1.5, 2.2), 1);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should return the sum of two negative rounded numbers', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
    assert.strictEqual(calculateNumber(-1.6, -2.4), -4);
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should return the sum of a positive rounded number and a negative rounded number', function() {
    assert.strictEqual(calculateNumber(1.4, -2.6), -2);
    assert.strictEqual(calculateNumber(1.5, -2.5), 0);
    assert.strictEqual(calculateNumber(1.6, -2.4), 0);
  });

  it('should handle zero', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.5), 4);
  });
});
