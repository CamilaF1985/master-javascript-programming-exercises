function listAllValues(obj) {
  const values = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }

  return values;
}

let output = listAllValues({ name: "Krysten", age: 33, hasPets: false });
console.log(output); // --> [ 'Krysten', 33, false ]

