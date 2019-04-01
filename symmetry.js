function symHelper(listOne, listTwo) {
  let uniqueValues = [];
  let lengthOfListOne = listOne.length;
  let lenghtOfListTwo = listTwo.length;
  let thereIsThatWord = false;
  
  for (let i = 0; i < listOne.length; i++) {

    for (let j = 0; j < listTwo.length; j++) {

      console.log(`${listOne[i]} == ${listTwo[j]}`);

      // if number is found on the other list, break
      if(listOne[i] == listTwo[j]) {
        thereIsThatWord = true;
        break;
      } 

    }

    // If that number isn't found, add to new list
    if(!thereIsThatWord) {
      uniqueValues.push(listOne[i]);
    }

    thereIsThatWord = false; 

  }

  return uniqueValues;
}

function sym(listOne, listTwo) {
  xList = symHelper(listOne, listTwo);
  yList = symHelper(listTwo, listOne);

  
}

let results = sym([1, 2, 3], [5, 2, 1, 4]);
