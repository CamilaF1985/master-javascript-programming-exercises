function multiply(num1, num2) {
    let product = 0;
    const isNegative = (num1 < 0) !== (num2 < 0);
  
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
  
    for (let i = 0; i < num2; i++) {
      product += num1;
    }
  
    return isNegative ? -product : product;
  }
  
  let output = multiply(4, 7);
  console.log(output); // --> 28
  
  
  
