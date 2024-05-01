function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  const ans = roundedA + roundedB;
  return Math.round(ans);
}

module.exports = calculateNumber;
