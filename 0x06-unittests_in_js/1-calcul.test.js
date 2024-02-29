const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', () => {
    describe('SUM operation', () => {
        it('should return the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);

        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the difference of rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3.7), 1);
        assert.strictEqual(calculateNumber('SUBTRACT', 7.2, 3.7), 3);
        assert.strictEqual(calculateNumber('SUBTRACT', 9.5, 3.7), 6);
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the result of rounded division', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
        assert.strictEqual(calculateNumber('DIVIDE', 10, 3), 3.3333333333333335);
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing by zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 8, 0), 'Error');
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});
