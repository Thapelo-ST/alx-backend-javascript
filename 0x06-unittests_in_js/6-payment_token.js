// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
    if (success) {
        return new Promise((resolve) => {
        resolve({ data: 'Successful response from the API' });
    });
    } else {
        return Promise.resolve();
    }
}

module.exports = getPaymentTokenFromAPI;
