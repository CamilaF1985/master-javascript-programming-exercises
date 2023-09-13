function removeProperty(object, key) {
  delete object[key];
}

let obj = {
  name: 'Sam',
  age: 20
};
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
