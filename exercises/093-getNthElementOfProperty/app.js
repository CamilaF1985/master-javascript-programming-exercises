function getNthElementOfProperty(obj, key, n) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      if (n >= 0 && n < obj[key].length) {
        return obj[key][n]; 
      }
    }
    return undefined; 
  }
  
  let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2
  
