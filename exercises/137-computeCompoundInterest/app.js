function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  const n = compoundingFrequency;
  const r = interestRate / n;
  const nt = n * timeInYears;
  const amount = principal * Math.pow(1 + r, nt);
  return amount - principal;
}

let output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.83682213410543


