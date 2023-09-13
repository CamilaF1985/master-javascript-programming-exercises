function transformEmployeeData(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const employee = {};

    for (let j = 0; j < array[i].length; j++) {
      const key = array[i][j][0];
      const value = array[i][j][1];
      employee[key] = value;
    }

    result.push(employee);
  }

  return result;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]
