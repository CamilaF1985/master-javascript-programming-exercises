function isEitherEven(number1, number2) {
    return number1 % 2 === 0 || number2 % 2 === 0;
  }
  
  let output = isEitherEven(1, 4);
  console.log(output); // --> true
  