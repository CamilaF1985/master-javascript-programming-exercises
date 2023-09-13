function getElementsThatEqual10AtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      return obj[key].filter(function(element) {
        return element === 10;
      });
    }
    return [];
  }
  
  let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output);
  
