function divideIntoSubArrays(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length; i += k) {
    result.push(arr.slice(i, i + k));
  }
  return result;
}

arr = [4, 1, 7, 3, 9, 2, 10];
console.log(divideIntoSubArrays(arr, 2));

// Output: [[4, 1], [7, 3], [9, 2], [10]]
// Explanation: The array is divided into sub-arrays of size 2. The last sub-array contains the remaining element.
