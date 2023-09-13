function getLargestNumberAmongMixedElements(arr) {
    let largestNumber = 0; 

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && arr[i] > largestNumber) {
        largestNumber = arr[i];
      }
    }
  
    return largestNumber;
  }

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
