const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber function', () => {
    describe('SUM operation', () => {
        it('should return the sum of rounded numbers', () => {
        expect(calculateNumber('SUM', 1, 3), 4);
        expect(calculateNumber('SUM', 1, 3.7), 5);
        expect(calculateNumber('SUM', 1.2, 3.7), 5);
        expect(calculateNumber('SUM', 1.5, 3.7), 6);
        expect(calculateNumber('SUM', 1.4, 4.5), 6);

        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the difference of rounded numbers', () => {
        expect(calculateNumber('SUBTRACT', 5, 3), 2);
        expect(calculateNumber('SUBTRACT', 5, 3.7), 1);
        expect(calculateNumber('SUBTRACT', 7.2, 3.7), 3);
        expect(calculateNumber('SUBTRACT', 9.5, 3.7), 6);
        expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the result of rounded division', () => {
        expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
        expect(calculateNumber('DIVIDE', 10, 3)).to.be.closeTo(3.33, 0.01);
        expect(calculateNumber('DIVIDE', 15.5, 3.7)).to.be.closeTo(4.18, 0.01);
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when dividing by zero', () => {
        expect(calculateNumber('DIVIDE', 8, 0)).to.equal('Error');
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
