function findSmallestNumberAmongMixedElements(arr) {
  let smallestNumber = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }

  if (smallestNumber === Infinity) {
    return 0; 
  }

  return smallestNumber;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
