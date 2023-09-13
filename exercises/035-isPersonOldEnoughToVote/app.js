function isPersonOldEnoughToVote(person) {
  return person.age >= 18;
}

let obj = {
  age: 19
};
let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true
