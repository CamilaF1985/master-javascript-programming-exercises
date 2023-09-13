function getSumOfAllElementsAtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      return obj[key].reduce((sum, element) => sum + element, 0);
    }
    return 0;
  }
  

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
