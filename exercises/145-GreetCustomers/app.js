let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  if (customerData.hasOwnProperty(firstName)) {
    const visits = customerData[firstName].visits;
    if (visits === 1) {
      return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    } else {
      return `Welcome back, ${firstName}! So glad to see you again!`;
    }
  } else {
    return `Welcome! Is this your first time, ${firstName}?`;
  }
}

console.log(greetCustomer('Terrance')); // --> 'Welcome! Is this your first time, Terrance?'
console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
