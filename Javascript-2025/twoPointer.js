// segregate 0 and 1 in an array
function segregateZeroAndOne(arr) {
  //two pointer approach
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === 0) {
      left++;
    } else if (arr[right] === 1) {
      right--;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
}

segregateZeroAndOne([0, 1, 0, 1, 1, 0, 0, 1]);
// Output: [0, 0, 0, 0, 1, 1, 1, 1]

// brute force approach
function segregateZeroAndOne(arr) {
  let countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero++;
    }
  }
  for (let i = 0; i < countZero; i++) {
    if (i < countZero) arr[i] = 0;
    else arr[i] = 1;
  }

  return arr;
}

//Two Sum Problem

var reverse = function (x) {
  let str = x.toString();
  let isNegative = str[0] === "-";
  if (isNegative) str = str.slice(1);

  let reversed = str.split("").reverse().join("");
  let num = parseInt(reversed);
  if (isNegative) num = -num;
  //2147483647 = 2^31 - 1
  if (num > 2147483647 || num < -2147483648) return 0;
  return num;
};
console.log(reverse(-121));

//two sum problem
