function findPairForSum(array, number) {
  const seenNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    const complement = number - currentNumber;

    if (seenNumbers.has(complement)) {
      return [currentNumber, complement].sort();
    }

    seenNumbers.add(currentNumber);
  }

  return null; 
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]


