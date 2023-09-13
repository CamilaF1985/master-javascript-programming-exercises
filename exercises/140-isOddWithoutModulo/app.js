function isOddWithoutModulo(num) {
    return (num & 1) === 1;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
