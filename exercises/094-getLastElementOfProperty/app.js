function getLastElementOfProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      if (obj[key].length > 0) {
        return obj[key][obj[key].length - 1];
      }
    }
    return undefined;
  }
  
  let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output);
  
