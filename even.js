// function onlyEvenNumber(numbers) {
//   let evens = [];
//   for (number of numbers) {
//     if (number % 2 === 0) {
//       evens.push(number);

//     }
//   }
//   return evens;
// }

// const numb = [5, 54, 51, 25, 12, 6];
// const evens = onlyEvenNumber(numb);
// console.log("even number is: ", evens);

function sumOfnumbers(numbers) {
  let sum = 0;

  for (let number of numbers) {
    if (number % 2 === 0) {

      console.log(number);
      sum = sum + number;
    }
  }
  return sum;
}

const numb = [5, 54, 51, 25, 12, 6];
const sum = sumOfnumbers(numb);
console.log("Even number is: ", sum);
