function addProperty(object, key) {
  object[key] = true;
  return object;
}

let myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
