const chai = import('chai').expect;

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('when type is SUM', () => {
    it('it should round the first agument', () => {
      chai.expect(calculateNumber('SUM', 1.0, 0)).toequal(1);
      chai.expect(calculateNumber('SUM', 1.3, 0)).toequal(1);
      chai.expect(calculateNumber('SUM', 1.7, 0)).toequal(2);
    });
    it('it should round the second agument', () => {
      chai.expect(calculateNumber('SUM', 0, 1.0)).toequal(1);
      chai.expect(calculateNumber('SUM', 0, 1.3)).toequal(1);
      chai.expect(calculateNumber('SUM', 0, 1.7)).toequal(2);
    });
    it('it should return the right number', () => {
      chai.expect(calculateNumber('SUM', 1.3, 0)).toequal(1);
      chai.expect(calculateNumber('SUM', 0, 1.2)).toequal(1);
      chai.expect(calculateNumber('SUM', 1.3, 1.3)).toequal(2);
      chai.expect(calculateNumber('SUM', 1.7, 1.2)).toequal(3);
      chai.expect(calculateNumber('SUM', 1.3, 1.8)).toequal(3);
      chai.expect(calculateNumber('SUM', 1.6, 1.8)).toequal(4);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('it should round the first agument', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.0, 0)).toequal(1);
      chai.expect(calculateNumber('SUBTRACT', 1.3, 0)).toequal(1);
      chai.expect(calculateNumber('SUBTRACT', 1.7, 0)).toequal(2);
    });
    it('it should round the second agument', () => {
      chai.expect(calculateNumber('SUBTRACT', 0, 1.0)).toequal(-1);
      chai.expect(calculateNumber('SUBTRACT', 0, 1.3)).toequal(-1);
      chai.expect(calculateNumber('SUBTRACT', 0, 1.7)).toequal(-2);
    });
    it('it should return the right number', () => {
      chai.expect(calculateNumber('SUBTRACT', 1.3, 0)).toequal(1);
      chai.expect(calculateNumber('SUBTRACT', 0, 1.2)).toequal(-1);
      chai.expect(calculateNumber('SUBTRACT', 1.3, 1.3)).toequal(0);
      chai.expect(calculateNumber('SUBTRACT', 1.7, 1.2)).toequal(1);
      chai.expect(calculateNumber('SUBTRACT', 1.3, 1.8)).toequal(-1);
      chai.expect(calculateNumber('SUBTRACT', 1.6, 1.8)).toequal(0);
    });
  });

  describe('when type is DIVIDE', () => {
    it('it should round the first agument', () => {
      chai.expect(calculateNumber('DIVIDE', 10.0, 2)).toequal(5);
      chai.expect(calculateNumber('DIVIDE', 10.3, 2)).toequal(5);
      chai.expect(calculateNumber('DIVIDE', 10.7, 2)).toequal(5.5);
    });
    it('it should round the second agument', () => {
      chai.expect(calculateNumber('DIVIDE', 10, 1.0)).toequal(10);
      chai.expect(calculateNumber('DIVIDE', 10, 1.3)).toequal(10);
      chai.expect(calculateNumber('DIVIDE', 10, 1.7)).toequal(5);
    });
    it('it should return the right number', () => {
      chai.expect(calculateNumber('DIVIDE', 10.3, 2)).toequal(5);
      chai.expect(calculateNumber('DIVIDE', 10, 1.2)).toequal(10);
      chai.expect(calculateNumber('DIVIDE', 10.3, 1.3)).toequal(10);
      chai.expect(calculateNumber('DIVIDE', 10.7, 1.2)).toequal(11);
      chai.expect(calculateNumber('DIVIDE', 10.3, 1.8)).toequal(5);
      chai.expect(calculateNumber('DIVIDE', 10.6, 1.8)).toequal(5.5);
    });

    it('it should return Error if b is strictEqual to 0', () => {
      chai.expect(calculateNumber('DIVIDE', 10.3, 0).toLowerCase()).toequal('error');
      chai.expect(calculateNumber('DIVIDE', 10, 0).toLowerCase()).toequal('error');
      chai.expect(calculateNumber('DIVIDE', 10.3, 0).toLowerCase())
      chai.expect(calculateNumber('DIVIDE', 10.7, 0).toLowerCase()).toequal('error');
    });
  });
});
