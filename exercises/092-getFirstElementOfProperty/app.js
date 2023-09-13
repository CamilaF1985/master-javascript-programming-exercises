function getFirstElementOfProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0) {
      return obj[key][0]; 
    }
    return undefined; 
  }
  
  let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1
  
