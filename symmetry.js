function symHelper(listOne, listTwo) {
  let uniqueValues = [];
  let thereIsThatWord = false;
  
  for (let i = 0; i < listOne.length; i++) {

    for (let j = 0; j < listTwo.length; j++) {

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

  let xList = symHelper(listOne, listTwo);
  let yList = symHelper(listTwo, listOne);

  if(xList.length > yList.length) {

    yList.map(num => {
      xList.push(num);
    });

    xList.sort();
    return xList;

  } else {

    xList.map(num => {
      yList.push(num);
    });
    yList.sort();
    return yList;
  }
}

let results = sym([1, 2, 3], [5, 2, 1, 4]);
