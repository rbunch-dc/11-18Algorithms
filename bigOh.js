// // console.log("Sanity Check");
// // guess a number
// // - loop through all

// let numberList = [1,2,3,4,5];
// let number = Math.floor(Math.random() * numberList.length);
// console.log(`Number chosen is ${number}`)
// // for(let i = 0; i < numberList.length; i++){
// //     if (numberList[i] === number){
// //         console.log("Found!",number)
// //         console.log(`It took ${i+1} guesses to get the answer`)
// //         break
// //     }
// // }

// // guess randomly (NOT a good option)
// let found = false;
// // let counter = 0
// // while (found === false){
// //     counter++
// //     let randIndex = Math.floor(Math.random() * numberList.length);
// //     if(numberList[randIndex] === number){
// //         found = true;
// //         console.log("Hooray! we finished! Number was",number)
// //         console.log(`It took ${counter} guesses`)
// //     }
// // }

// // Binary Search
// found = false;
// let index = (Math.floor(numberList.length/2));
// while(!found){
//     if(number === numberList[index]){
//         console.log(`Number was `,numberList[index]);
//         found = true;
//     }else if(number < numberList[index]){
//         // cut off teh top half by moving the index to the
//         // middle of the lower half
//         index = Math.floor(index/2);
//         console.log("Number is lower");
//     }else{
//         // we know it's higher
//         index = Math.floor((index+numberList.length)/2);
//         console.log("Number is higher");
//     }
// } 


function binarySearch(list, value){
    // we will set a range/bounds to check
    // This will get smaller as we guess
    // start bottom number at 0
    let bottomIndex = 0;
    // start the top number at the last element
    let topIndex = list.length - 1;
    let middleIndex = Math.floor((topIndex+bottomIndex)/2);
    // console.log(bottomIndex,middleIndex,topIndex);

    let counter = 0;

    // we need a while loop! We need to keep looking, until
    // we find the correct number
    // keep looping, while the middle is NOT the right number
    // and there isn't only 1 left
    let found = false;
    while(!found){
        counter++;
        if(value < list[middleIndex]){
            topIndex = middleIndex - 1;
        }else if(value > list[middleIndex]){
            bottomIndex = middleIndex + 1;
        }else{
            // we found it!
            found = true;
        }
        // recalculate the middle beacuse we changed top or bottom
        middleIndex = Math.floor((topIndex+bottomIndex)/2);
    }
    console.log(`It tooko ${counter} guesses`)
    return middleIndex;
}

let numbers = [];
for(let i = 0; i < 1000000000; i++){
    numbers.push(i);
}
const index = binarySearch(numbers,1);
console.log(index)






