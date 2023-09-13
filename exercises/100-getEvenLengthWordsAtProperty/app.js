function getEvenLengthWordsAtProperty(obj, key) {

  if (
    obj.hasOwnProperty(key) &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {

    return obj[key].filter(word => word.length % 2 === 0);
  }

  return [];
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

