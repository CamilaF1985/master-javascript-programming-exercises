function findShortestWordAmongMixedElements(arr) {
    let shortestWord = '';
    let shortestLength = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string' && arr[i].length < shortestLength) {
        shortestWord = arr[i];
        shortestLength = arr[i].length;
      }
    }
  
    return shortestWord;
  }

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
