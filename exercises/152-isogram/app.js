function isIsogram(text) {
  text = text.toLowerCase();

  const charMap = {};
  
  for (let char of text) {
    if (charMap[char]) {
      return false;
    }

    charMap[char] = true;
  }
  
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false

