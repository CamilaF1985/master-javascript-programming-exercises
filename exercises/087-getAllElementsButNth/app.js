function getAllElementsButNth(array, n) {
    return array.slice(0, n).concat(array.slice(n + 1));
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
