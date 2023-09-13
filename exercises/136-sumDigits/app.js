function sumDigits(num) {
    // Convert the number to a string to work with its digits
    let numStr = Math.abs(num).toString(); // Take the absolute value to handle negative numbers
  
    // Initialize the sum to 0
    let sum = 0;
  
    // Iterate through each character in the string
    for (let i = 0; i < numStr.length; i++) {
      // Convert the character back to a number and add it to the sum
      sum += parseInt(numStr[i]);
    }
  
    // If the original number was negative, make the sum negative
    if (num < 0) {
      sum = -sum;
    }
  
    return sum;
  }
  
  let output1 = sumDigits(316);
  console.log(output1); // --> 10
  
  let output2 = sumDigits(124);
  console.log(output2); // --> 7
  
  let output3 = sumDigits(-316);
  console.log(output3); // --> 4
  
  let output4 = sumDigits(-124);
  console.log(output4); // --> 3
  
  
  
  
  
