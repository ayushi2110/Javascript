//divide array into sub arrays of size k

function divideIntoSubArrays(arr, k) {
  let result = [];
  for (i = 0; i < arr.length; i += k) {
    result.push(arr.slice(i, i + k));
  }
  return result;
}

arr = [4, 1, 7, 3, 9, 2, 10];
console.log(divideIntoSubArrays(arr, 2));
