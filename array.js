function numberOfElement(numbers){
    sum = 0;
    for(let number of numbers){
        console.log(number)
        sum = sum + number;
    }
    return sum;
}
numberOfElement([41, 524, 522 ,545 ,240]);
console.log('sum is: ', sum)