const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({
          data: 'Successful response from the API',
        });
        done();
      })
      .catch((error) => done(error));
  });

  it('should resolve with undefined when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        expect(result).to.be.undefined;
        done();
      })
      .catch((error) => done(error));
  });
});
