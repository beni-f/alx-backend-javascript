const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe("calculateNumber", () => {
    it('should return 4 for 1 + 3', () => {
        assert.equal(calculateNumber(1, 3), 4)
    })
    it('should return 5 for 1 + 3.7', () => {
        assert.equal(calculateNumber(1, 3.7), 5)
    })
    it('should return 5 for 1.2 + 3.7', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5)
    })
    it('should return 6 for 1.5 + 3.7', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6)
    })

    it('rounding up a\'s floating point fractional numbers', () => {
        assert.strictEqual(calculateNumber(2.6, 2.0), 5);
      });
    
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });
})
