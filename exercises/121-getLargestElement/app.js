function getLargestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let largestElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentElement = arr[i];
    if (currentElement > largestElement) {
      largestElement = currentElement;
    }
  }

  return largestElement;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;