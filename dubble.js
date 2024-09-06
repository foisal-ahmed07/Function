function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result
  }
   else {
    const result = number * 3;
    return result
  }
  
}

console.log(doubleOrTriple(10, true))
console.log(doubleOrTriple(10, false))
