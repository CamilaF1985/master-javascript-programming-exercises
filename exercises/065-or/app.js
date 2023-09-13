function or(expression1, expression2) {
  return (!expression1 && !expression2) ? false : true;
}

let output = or(true, false);
console.log(output); // --> true;
