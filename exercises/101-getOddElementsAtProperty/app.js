function getOddElementsAtProperty(obj, key) {
  if (
    obj.hasOwnProperty(key) &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    return obj[key].filter(element => element % 2 !== 0);
  }
  return [];
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
