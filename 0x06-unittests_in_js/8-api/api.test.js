const request = require('supertest');
const expect = require('chai');
const app = require('./api');

describe('API Tests', () => {
  describe('GET /', () => {
    it('correct status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).to.equal(200);
    });

    it('correct result', async () => {
      const response = await request(app).get('/');
      expect(response.text).to.equal('Welcome to the payment system');
    });
  });
});
