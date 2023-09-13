function getSquaredElementsAtProperty(obj, key) {

 if (
  obj.hasOwnProperty(key) &&
  Array.isArray(obj[key]) &&
  obj[key].length > 0
) {

  return obj[key].map(element => element * element);
}

return [];
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
