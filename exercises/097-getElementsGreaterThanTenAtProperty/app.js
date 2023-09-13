function getElementsGreaterThan10AtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      return obj[key].filter(function(element) {
        return element > 10;
      });
    }
    return [];
  }
  
  let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output);
  
