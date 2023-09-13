function select(arr, obj) {
    const selectedObject = {};
  
    for (const key of arr) {
      if (obj.hasOwnProperty(key)) {
        selectedObject[key] = obj[key];
      }
    }
  
    return selectedObject;
  }

  let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }