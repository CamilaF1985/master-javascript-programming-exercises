function computeSummationToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let output = computeSummationToN(6);
console.log(output); // --> 21


