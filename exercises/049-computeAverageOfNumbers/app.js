function computeAverageOfNumbers(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
  
  let input = [1, 2, 3, 4, 5];
  let output = computeAverageOfNumbers(input);
  console.log(output); // --> 3
  