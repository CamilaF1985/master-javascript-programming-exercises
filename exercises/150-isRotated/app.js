function isRotated(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const concatenatedStr = str1 + str1;

  if (concatenatedStr.includes(str2)) {
    return true;
  }

  return false;
}
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
