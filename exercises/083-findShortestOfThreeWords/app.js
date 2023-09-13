function findShortestOfThreeWords(word1, word2, word3) {
    const words = [word1, word2, word3];
    let shortest = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < shortest.length) {
        shortest = words[i];
      }
    }
  
    return shortest;
  }
  
  let output = findShortestOfThreeWords('a', 'two', 'three');
  console.log(output); // --> 'a'
  
