function getEvenElementsAtProperty(obj, key) {
  if (
    obj.hasOwnProperty(key) &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    return obj[key].filter(element => element % 2 === 0);
  }
  return [];
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
