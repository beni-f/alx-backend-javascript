const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe("calculateNumber", () => {
    it('Check if sum works', () => {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6)
    })
    it('Check if subtraction works', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })
    it('Check if division works', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    })
    it('Check if catches error while invalid division', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), "Error")
    })
})