function getProperty(object, key) {
  return object[key];
}

let car = {
  model: 'Toyota'
};
let output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'
