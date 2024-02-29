function calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    
    switch (type) {
        case 'SUM':
            return roundedA + roundedB;
        case 'SUBTRACT':
            return roundedA - roundedB;
        case 'DIVIDE':
            if (roundedB === 0){
                return 'Error';
            }
            ans = roundedA / roundedB;
            res = Math.round(ans);
            return res;
        default:
            throw new Error('Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.');
    }
}

module.exports = calculateNumber;
