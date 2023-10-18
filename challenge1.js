// **Question 1**: Clean the room function: 
// given an input of `[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]`,
// make a function that organizes these into individual array that is ordered. 
// For example `answer(ArrayFromAbove)` should return: `[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]`. 
// Bonus: Make it so it organizes strings differently from number types. 
// i.e. `[1, "2", "3", 2]` should return `[[1,2], ["2", "3"]]`

let example = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let example2 = [1, 1, "2", "3", 2, "2"];

function cleanTheRoom(inputArray) {
  inputArray.sort((a, b) => a - b);

  const organizedArray = [[], []];
  let currentNum = inputArray[0];
  let currentCount = 1;
  let numbers = [];
  let strings = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === 'string') {
      strings.push(inputArray[i]);
    } else {
      numbers.push(inputArray[i]);
    }
  }

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === currentNum) {
      currentCount++;
    } else {
      if (currentCount === 1) {
        organizedArray[0].push(currentNum);
      } else {
        const repeatedNumbers = new Array(currentCount).fill(currentNum);
        organizedArray[0].push(repeatedNumbers);
      }
      currentNum = numbers[i];
      currentCount = 1;
    }
  }

  if (currentCount === 1) {
    organizedArray[0].push(currentNum);
  } else {
    const repeatedNumbers = new Array(currentCount).fill(currentNum);
    organizedArray[0].push(repeatedNumbers);
  }

  currentCount = 1;
  let currentString = strings[0];
  
  for (let i = 1; i < strings.length; i++) {
    if (strings[i] === currentString) {
      currentCount++;
    } else {
      if (currentCount === 1) {
        organizedArray[1].push(currentString);
      } else {
        const repeatedStrings = new Array(currentCount).fill(currentString);
        organizedArray[1].push(repeatedStrings);
      }
      currentString = strings[i];
      currentCount = 1;
    }
  }

  if (currentCount === 1) {
    organizedArray[1].push(currentString);
  } else {
    const repeatedStrings = new Array(currentCount).fill(currentString);
    organizedArray[1].push(repeatedStrings);
  }

  return organizedArray;
}


  
  
  

  