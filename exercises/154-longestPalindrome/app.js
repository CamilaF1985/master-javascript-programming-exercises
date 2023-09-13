function findLongestPalindrome(sentence) {
  const words = sentence.split(/\s+/); // Split by whitespace

  let longestPalindrome = '';
  let longestLength = 0;

  for (const word of words) {
    const cleanedWord = word.toLowerCase();

    if (isPalindrome(cleanedWord) && cleanedWord.length >= longestLength) {
      longestPalindrome = word;
      longestLength = cleanedWord.length;
    }
  }

  return longestPalindrome;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '');
  return cleanedWord === reverseString(cleanedWord);
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"

output = findLongestPalindrome("Madam, i'm adam");
console.log(output); // --> "Madam"












