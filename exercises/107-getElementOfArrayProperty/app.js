function getElementOfArrayProperty(obj, key, index) {
    if (
      obj.hasOwnProperty(key) &&
      Array.isArray(obj[key]) &&
      index >= 0 &&
      index < obj[key].length
    ) {
      return obj[key][index];
    }
    return undefined;
  }
  
let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
