function oddEvenNumber(numbers) {

  if (numbers % 2 === 1) {
    const result = numbers * 2;
    return result
  } 
  else {
    const result = numbers / 2;
    return result;
  }


}
const number1 = 40;
const result1 = oddEvenNumber(number1);
console.log("number is:", result1)
const number2 = 21;
const result2 = oddEvenNumber(number2);
console.log("number is:", result2)
