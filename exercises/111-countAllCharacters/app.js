function countAllCharacters(str) {
    let charCount = {};
  
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    return charCount;
  }
  
  let output = countAllCharacters('banana');
  console.log(output); // --> {b: 1, a: 3, n: 2}
  
