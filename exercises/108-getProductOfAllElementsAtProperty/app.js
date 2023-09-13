function getProductOfAllElementsAtProperty(obj, key) {
  if (
    obj.hasOwnProperty(key) &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    return obj[key].reduce((product, element) => product * element, 1);
  }
  return 0;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
