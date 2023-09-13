function findMaxLengthOfThreeWords(word1, word2, word3) {
    const length1 = word1.length;
    const length2 = word2.length;
    const length3 = word3.length;
  
    return Math.max(length1, length2, length3);
  }
  
  let output = findMaxLengthOfThreeWords('a', 'be', 'see');
  console.log(output); // --> 3
  