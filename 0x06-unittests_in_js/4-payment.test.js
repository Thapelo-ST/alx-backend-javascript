const sinon = require('sinon');

const expect = require('chai').expect;

const sendPaymentRequestToApi = require('./4-payment');

const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber to always return 10', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
