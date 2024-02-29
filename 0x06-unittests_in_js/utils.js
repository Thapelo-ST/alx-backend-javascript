const Utils = {
    calculateNumber: function (type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        switch (type) {
            case 'SUM':
            return roundedA + roundedB;
            case 'SUBTRACT':
            return roundedA - roundedB;
            case 'DIVIDE':
            if (roundedB === 0) {
                return 'Error';
            }
            const ans = roundedA / roundedB;
            const res = Math.round(ans);
            return res;
            default:
            throw new Error('Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.');
        }
    },
};

module.exports = Utils;
