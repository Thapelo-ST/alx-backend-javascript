const request = require('supertest');
const { expect } = require('chai');
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

    describe('GET /cart/:id', () => {
        it('correct status code when :id is a number', async () => {
            const response = await request(app).get('/cart/123');
            expect(response.statusCode).to.equal(200);
        });

        it('correct result when :id is a number', async () => {
            const response = await request(app).get('/cart/456');
            expect(response.text).to.equal('Payment methods for cart 456');
        });

        it('correct status code when :id is NOT a number (=> 404)', async () => {
            const response = await request(app).get('/cart/abc');
            expect(response.statusCode).to.equal(404);
        });

        it('correct result when :id is NOT a number (=> 404)', async () => {
            const response = await request(app).get('/cart/abc');
            expect(response.text).to.equal('Not Found');
        });
    });

    describe('GET /available_payments', () => {
        it('correct status code', async () => {
        const response = await request(app).get('/available_payments');
        expect(response.statusCode).to.equal(200);
        });

        it('correct result', async () => {
        const response = await request(app).get('/available_payments');
        const expectedResponse = {
            payment_methods: {
            credit_cards: true,
            paypal: false
            }
        };
        expect(response.body).to.deep.equal(expectedResponse);
        });
    });

    describe('POST /login', () => {
        it('correct status code', async () => {
        const response = await request(app)
            .post('/login')
            .send({ userName: 'Alice' })
            .set('Content-Type', 'application/json');
        expect(response.statusCode).to.equal(200);
        });

        it('correct result', async () => {
        const response = await request(app)
            .post('/login')
            .send({ userName: 'Bob' })
            .set('Content-Type', 'application/json');
        expect(response.text).to.equal('Welcome Bob');
        });
    });
});
