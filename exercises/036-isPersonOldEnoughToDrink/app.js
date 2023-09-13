function isPersonOldEnoughToDrink(person) {
  return person.age >= 21;
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false
