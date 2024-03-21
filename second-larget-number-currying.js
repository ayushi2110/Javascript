//Find the second larget number by using curryinh

const numbers = [23, 14, 2, 6, 89, 45, 62, 34, 8, 3, 94, 76, 42, 90, 1, 63];

const sortedNumber = (arr) => () => arr.sort((a, b) => b - a);

const secondLargetNumber = (sortFn) => () => sortFn()[1];

const sortedNumbersFn = sortedNumber(numbers);
const findSecondLargest = secondLargetNumber(sortedNumbersFn);

console.log(findSecondLargest());

//================================================traditional function syntax==================

function sortNumberTd(arr) {
  return function () {
    return arr.sort(function (a, b) {
      return b - a;
    });
  };
}

function getSecondLargetValue(sortFun) {
  return function () {
    return sortFun()[1];
  };
}

var sortedNum = sortedNumber(numbers);
var find2ndLargest = secondLargetNumber(sortedNumbersFn);

console.log(find2ndLargest());
