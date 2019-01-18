// numbers.txt has a bunch of random numbers and the goal of this 
// challenge is to sum all the digits of all the numbers to come 
// up with the final result.

const fs = require('fs');
const file = fs.readFileSync('numbers.txt','utf-8');
// break up all the lines into an array
// join all the elements into a single string
const numberString = file.split('\n').join('');
console.log(numberString);
// now split the one string into a bunch numbers
const numberArray = numberString.split('');
let count = 0;
for(let i = 0; i < numberArray.length; i++){
    count+=Number(numberArray[i])
}
console.log(count)