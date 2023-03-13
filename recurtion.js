//ex 1
function filterStringArrayByFirstCharacter(array) {
    if (array.length === 0) {
      return [];
    }
    
    const firstElement = array[0];
    const restOfArray = array.slice(1);
    
    if (firstElement.charAt(0) === 'a') {
      return [firstElement].concat(filterStringArrayByFirstCharacter(restOfArray));
    } else {
      return filterStringArrayByFirstCharacter(restOfArray);
    }
  }
  
  //ex 2
  function onlyOdds(array)
  {
        if (array.length === 0) {
          return [];
    }
    const firstElement = array[0];
    const restOfArray = array.slice(1);
     if (firstElement % 2 === 0) {
      return [firstElement].concat(onlyOdds(restOfArray));
    } else {
      return onlyOdds(restOfArray);
    }
  }
  //ex 3
  function alSort(arr)
  {
      return arr.sort();
  }
  
  //ex 4
  function upperConvert(array)
  {
        if (array.length === 0) {
          return [];
    }
    const firstElement = array[0];
    const restOfArray = array.slice(1);
    return [firstElement.toUpperCase()].concat(upperConvert(restOfArray));
  }
