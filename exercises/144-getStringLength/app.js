function getStringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
      length++;
    }
    return length;
  }
  
  // Example:
  let output = getStringLength('hello');
  console.log(output); // --> 5
  
