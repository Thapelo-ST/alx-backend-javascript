const assert = require("assert")
const calculateNumber = require("./2-calcul_chai.js")

describe("calculateNumber", function () {
  describe ('when type is SUM', () => {
    it('it should round the first agument', () => {
      assert.equal(calculateNumber('SUM', 1.0, 0), 1);
      assert.equal(calculateNumber('SUM', 1.3, 0), 1);
      assert.equal(calculateNumber("SUM", 1.7, 0), 2);
    });
  });
});