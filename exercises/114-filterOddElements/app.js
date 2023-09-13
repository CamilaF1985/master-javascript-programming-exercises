function filterOddElements(arr) {
  let oddArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArray.push(arr[i]);
    }
  }

  return oddArray;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
