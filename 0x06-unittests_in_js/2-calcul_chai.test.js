const chai = require('chai')
const calculateNumber = require('./1-calcul')

const expect = chai.expect

describe("calculateNumber", () => {
    it('Check if sum works', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6)
    })
    it('Check if subtraction works', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4)
    })
    it('Check if division works', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2)
    })
    it('Check if catches error while invalid division', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal("Error")
    })
})