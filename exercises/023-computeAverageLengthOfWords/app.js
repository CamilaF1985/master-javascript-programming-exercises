function computeAverageLengthOfWords(word1, word2) {
    const length1 = word1.length;
    const length2 = word2.length;
  
    const averageLength = (length1 + length2) / 2;
  
    return averageLength;
  }
  
  let output = computeAverageLengthOfWords('code', 'programs');
  console.log(output); // --> 6
  