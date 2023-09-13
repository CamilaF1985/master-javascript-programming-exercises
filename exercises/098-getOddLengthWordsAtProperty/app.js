function getOddLengthWordsAtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      return obj[key].filter(function(word) {
        return word.length % 2 !== 0;
      });
    }
    return [];
  }
  
  let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output);
  
