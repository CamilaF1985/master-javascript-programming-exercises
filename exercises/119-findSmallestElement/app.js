function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
      }
    
      let smallestElement = arr[0];
    
      for (let i = 1; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement < smallestElement) {
          smallestElement = currentElement;
        }
      }
    
      return smallestElement;
    }

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1