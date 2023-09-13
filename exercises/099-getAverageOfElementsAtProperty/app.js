function getAverageOfElementsAtProperty(obj, key) {

  if (
    obj.hasOwnProperty(key) &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {

    const sum = obj[key].reduce((acc, num) => acc + num, 0);

    return sum / obj[key].length;
  }

  return 0;
}


let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
