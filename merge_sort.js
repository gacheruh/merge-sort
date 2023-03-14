function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middleIndex = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middleIndex);
    const rightHalf = array.slice(middleIndex);
  
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);
  
    return merge(sortedLeftHalf, sortedRightHalf);
  }
  
  function merge(leftHalf, rightHalf) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
      if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
        sortedArray.push(leftHalf[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(rightHalf[rightIndex]);
        rightIndex++;
      }
    }
  
    return sortedArray.concat(leftHalf.slice(leftIndex)).concat(rightHalf.slice(rightIndex));
  }
  
  console.log(mergeSort([6, 1, 5, 2, 78, 7, 9, 0]))