function getAllKeys(obj) {
  const keys = [];
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  
  return keys;
}

// Example:
let output = getAllKeys({ name: "Sam", age: 25, hasPets: true });
console.log(output); // --> [ 'name', 'age', 'hasPets' ]

