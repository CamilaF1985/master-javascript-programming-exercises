function getLongestOfThreeWords(word1, word2, word3) {
    const words = [word1, word2, word3];
    let longest = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
  
    return longest;
  }
  
  let output = getLongestOfThreeWords('these', 'three', 'words');
  console.log(output); // --> 'these'
  
