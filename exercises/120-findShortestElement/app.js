function findShortestElement(arr) {
    if (arr.length === 0) {
        return '';
      }
    
      let shortestElement = arr[0];
    
      for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement.length < shortestElement.length) {
          shortestElement = currentElement;
        }
      }
    
      return shortestElement;
    }

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'