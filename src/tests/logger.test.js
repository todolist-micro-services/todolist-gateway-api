const chai = require('chai')
const { describe, beforeEach, afterEach, it } = require('mocha')
const assert = chai.assert
const sinon = require('sinon')
const logger = require('../logger')

describe('logger', () => {
    let clock
    let consoleLogSpy

    beforeEach(() => {
        clock = sinon.useFakeTimers(new Date())
        consoleLogSpy = sinon.spy(console, 'log')
    })

    afterEach(() => {
        clock.restore()
        consoleLogSpy.restore()
    })

    it('should log correctly for status code < 400', () => {
        const req = {}
        const res = {
            on: sinon.stub().callsArg(1),
            statusCode: 200,
        }
        const next = sinon.stub()

        logger(req, res, next)

        assert.isTrue(consoleLogSpy.calledOnce)
        assert.include(
            consoleLogSpy.args[0][0],
            '\u001b[32m[undefined]: undefined - 200 - 0ms'
        )
        assert.include(consoleLogSpy.args[0][0], '\x1b[32m')
    })

    it('should log correctly for status code >= 400', () => {
        const req = {}
        const res = {
            on: sinon.stub().callsArg(1),
            statusCode: 404,
            statusMessage: 'Not Found',
        }
        const next = sinon.stub()

        logger(req, res, next)

        assert.isTrue(consoleLogSpy.calledOnce)
        assert.include(
            consoleLogSpy.args[0][0],
            '\u001b[33m[undefined]: undefined - 404 - 0ms - Not Found'
        )
        assert.include(consoleLogSpy.args[0][0], '\x1b[33m')
    })
})
