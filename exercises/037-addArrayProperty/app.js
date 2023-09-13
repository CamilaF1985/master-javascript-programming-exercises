function addArrayProperty(obj, key, array) {
  obj[key] = array;
  return obj;
}

let myObj = {};
let myArray = [1, 3];
console.log(myObj); // --> {}
let result = addArrayProperty(myObj, 'myProperty', myArray);
console.log(result); // --> { myProperty: [1, 3] }



