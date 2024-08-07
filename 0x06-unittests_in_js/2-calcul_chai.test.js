const chai = require('chai')
const calculateNumber = require('./1-calcul')

const expect = chai.expect

describe("calculateNumber", () => {
    describe("sum", () => {
        it('Check if sum works', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
        })
    })

    describe("subtract", () => {
        it('Check if subtraction works', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
        })
    })

    describe("divide", () => {
        it('Check if division works', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
        })

        it('Check if catches error while invalid division', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal("Error")
        })
    })
})
