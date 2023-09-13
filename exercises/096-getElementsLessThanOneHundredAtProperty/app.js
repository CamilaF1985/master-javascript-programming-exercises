function getElementsLessThan100AtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      return obj[key].filter(function(element) {
        return element < 100;
      });
    }
    return [];
  }
  
  let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);
  
