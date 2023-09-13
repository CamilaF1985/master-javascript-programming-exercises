function areBothOdd(number1, number2) {
    return number1 % 2 !== 0 && number2 % 2 !== 0;
  }
  
  let output = areBothOdd(1, 3);
  console.log(output); // --> true
  