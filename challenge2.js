// **Question 2**: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: `answer([1,2,3], 4)` should return `[1,3]`

let ex = [2,2,3,7,9,0,5];

function answer(numArray, target) {
    const findNums = [];
  
    for (let i = 0; i < numArray.length; i++) {
      for (let j = i + 1; j < numArray.length; j++) {
        if (numArray[i] + numArray[j] === target) {
          findNums.push([numArray[i], numArray[j]]);
        }
      }
    }
  
    console.log(findNums);
    return findNums;
  }

answer(ex,5);