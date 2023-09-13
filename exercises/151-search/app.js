function search(array, value) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

let arr = [1, 3, 16, 22, 31, 33, 34];
console.log(search(arr, 31)); // --> 4

