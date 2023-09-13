function removeElement(array, discarder) {
    return array.filter(function (element) {
      return element !== discarder;
    });
  }
  
  let output = removeElement([1, 2, 3, 2, 1], 2);
  console.log(output); // --> [1, 3, 1]
  