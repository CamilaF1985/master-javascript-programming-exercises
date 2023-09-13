function computeFactorialOfN(n) {
    if (n === 0 || n === 1) {
      return 1; 
    } else {
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  let output1 = computeFactorialOfN(3);
  console.log(output1); 
  
  let output2 = computeFactorialOfN(4);
  console.log(output2); 
  
