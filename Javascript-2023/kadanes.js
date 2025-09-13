/**
 * kadane's Algorithem
 * find maximum contiguous subarray
 *
 */

var a = [-2, -3, 4, -1, -2, 1, 5, -3];

//let take max = first element of array -2
// take sum = 0

function maxSubArraySum(num) {
  let sum = 0;
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

console.log(maxSubArraySum(a));
