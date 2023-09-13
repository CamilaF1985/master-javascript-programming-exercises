function fromListToObject(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const key = array[i][0];
    const value = array[i][1];
    obj[key] = value;
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
