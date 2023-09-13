function getSmallestElementAtProperty(obj, key) {
  // Check if the property exists
  if (!obj.hasOwnProperty(key)) {
    return [];
  }

  // Check if the property is an array and not empty
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    // Use Math.min() to find the smallest element in the array
    return Math.min(...obj[key]);
  }

  // Return an empty array for all other cases
  return [];
}

// Example usage:
let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

