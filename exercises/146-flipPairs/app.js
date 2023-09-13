function flipPairs(input) {
    let result = '';
    for (let i = 0; i < input.length; i += 2) {
      const pair = input.slice(i, i + 2);
  
      result += pair.split('').reverse().join('');
    }
  
    return result;
  }

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
