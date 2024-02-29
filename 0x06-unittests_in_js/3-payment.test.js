const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with the correct arguments', () => {
        // Arrange
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Act
        sendPaymentRequestToApi(100, 20);

        // Assert
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

        // Cleanup
        calculateNumberSpy.restore(); // Restore the original function
    });

    it('should log the correct message to the console', () => {
        // Arrange
        const consoleLogSpy = sinon.spy(console, 'log');

        // Act
        sendPaymentRequestToApi(100, 20);

        // Assert
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;

        // Cleanup
        consoleLogSpy.restore(); // Restore the original console.log function
    });
});