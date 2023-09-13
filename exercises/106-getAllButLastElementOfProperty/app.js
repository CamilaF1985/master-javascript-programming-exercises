function getAllButLastElementOfProperty(obj, key) {
  if (
    obj.hasOwnProperty(key) &&
    Array.isArray(obj[key]) &&
    obj[key].length > 1
  ) {
    return obj[key].slice(0, -1); // Return all but the last element
  }
  return [];
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
