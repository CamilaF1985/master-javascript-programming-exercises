function average(arr) {
  if (arr.length === 0) {
    return 0; // 
  }
  
  const totalSum = sum(arr);
  return totalSum / arr.length;
}

function sum(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

console.log(average([1, 2])); // --> 1.5

