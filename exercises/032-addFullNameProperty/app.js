function addFullNameProperty(person) {
  // Create a new object with the existing properties
  const newPerson = {
    ...person,
    fullName: person.firstName + ' ' + person.lastName,
  };
  
  return newPerson;
}

// Example usage:
let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
let updatedPerson = addFullNameProperty(person);
console.log(updatedPerson.fullName); // --> 'Jade Smith'



