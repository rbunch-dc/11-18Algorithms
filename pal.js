// const fs = require('fs');
// fs.readFile('names.txt', 'utf-8',(data)=>{
//     findPal(data)
// });
// // console.log(names)

// function findPal(names){
//     // \n is computer speak for "new line"
//     let namesArray = names.split('\n');
//     // console.log(namesArray)
//     namesArray.forEach((data)=>{
//         let reverse = data.split('').reverse().join('');
//         // let nameAsArray = data.split('')
//         // console.log(nameAsArray)
//         // let reverseStringAsArray = nameAsArray.reverse();
//         // console.log(reverseStringAsArray)
//         // let reverseAsStringAgain = reverseStringAsArray.join('')
//         // console.log(reverseAsStringAgain);
//         if(data === reverse){
//             console.log(data)
//         }
//     });
// }


const fs = require("fs");

let names = fs.readFileSync("names.txt", "utf8");
let namesArray = names.split("\n");

for(let i = 0; i < namesArray.length; i++){
    // namesArray[i] = "judge"
   let stringArr = namesArray[i].split("");
    // stringArr = ['j','u','d','g','e']
   let revStringArr = namesArray[i].split("").reverse();
   let count = 0;

   stringArr =    ['r','a','c','e','c','a','r']
   revStringArr = ['r','a','c','e','c','a','r']

   for(let j = 0; j < stringArr.length; j++){
       if(stringArr[j] == revStringArr[j]){
           count++;
           if(count == stringArr.length){
               console.log(namesArray[i]);
           }
       }
   }
}


