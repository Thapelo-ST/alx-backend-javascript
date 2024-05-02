function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case "SUM":
      return roundedA + roundedB;
    case "SUBTRACT":
      subtract = roundedA - roundedB;
      return subtract;
    case "DIVIDE":
      if (roundedB === 0) return "Error";
      divide = roundedA / roundedB;
      return divide;
    default:
      throw new Error("Invalid type. Type must be SUM, SUBTRACT, or DIVIDE.");
  }
}

module.exports = calculateNumber;
