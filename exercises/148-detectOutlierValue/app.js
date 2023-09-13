function detectOutlierValue(numbers) {
    const numArray = numbers.split(' ').map(Number);
  
    let evenCount = 0;
    let oddCount = 0;
    let evenIndex = 0;
    let oddIndex = 0;
  
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] % 2 === 0) {
        evenCount++;
        evenIndex = i + 1;
      } else {
        oddCount++;
        oddIndex = i + 1;
      }
    }
    if (evenCount === 1) {
      return evenIndex;
    } else {
      return oddIndex;
    }
  }
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

console.log(detectOutlierValue("1 10 1 1"))  // --> 2
