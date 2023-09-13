function getLongestElement(arr) {
    if (arr.length === 0) {
        return '';
      }
    
      let longestElement = arr[0];
    
      for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement.length > longestElement.length) {
          longestElement = currentElement;
        }
      }
    
      return longestElement;
    }

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
