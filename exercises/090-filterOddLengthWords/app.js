function filterOddLengthWords(words) {
    return words.filter(function (word) {
        return word.length % 2 !== 0;
      });
    }

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
