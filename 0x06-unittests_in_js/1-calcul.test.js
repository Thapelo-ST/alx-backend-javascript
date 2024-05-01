const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the correct sum', () => {
    assert.strictEqual(calculateNumber('SUM', 4, 5), 9);
    assert.strictEqual(calculateNumber('SUM', -4, 5), 1);
    assert.strictEqual(calculateNumber('SUM', 4.5, 5.5), 11);
  });

  it('should return the correct subtraction', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 10, 5), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 10), -5);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 2.5), 2);
  });

  it('should return the correct division', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 10, 3), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
  });

  it('should throw an error for invalid type', () => {
    assert.throws(() => calculateNumber('INVALID', 4, 5), Error);
  });
});