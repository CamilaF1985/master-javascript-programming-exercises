function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
      return 0; 
    }
  
    let maxLength = arr[0].length; 
  
    for (let i = 1; i < arr.length; i++) {
      const currentLength = arr[i].length;
      if (currentLength > maxLength) {
        maxLength = currentLength; 
      }
    }
  
    return maxLength;
  }
  
  let output = getLengthOfLongestElement(['one', 'two', 'three']);
  console.log(output); // --> 5
  
