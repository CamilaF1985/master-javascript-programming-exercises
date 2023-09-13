function keep(array, keeper) {
    return array.filter(function (element) {
      return element === keeper;
    });
  }
  
  let output = keep([1, 2, 3, 2, 1], 2);
  console.log(output); // --> [2, 2]
  