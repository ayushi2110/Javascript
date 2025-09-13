// Array trasversing and accessing

let arrayTraversing = [9, 10, 2, 78, 5, 40, 66, 3, 4, 1];
for (i = 0; i < arrayTraversing.length; i++) {
  console.log(`Posistion of array ${i} of ${arrayTraversing[i]}`);
}

//Insert Element in Array;

let arr = [10, 20, 40, 50, 60];
let insertElement = 30;
let position = 2;
for (i = arr.length - 1; i >= 2; i--) {
  arr[i + 1] = arr[i];
  if (i == position) {
    arr[i] = insertElement;
  }
}
console.log(arr);

//Remove Element in Array

let arrVal = [10, 20, 30, 40, 40, 50, 60];
let positions = 3;
for (i = positions; i < arrVal.length - 1; i++) {
  arrVal[i] = arrVal[i + 1];
}
arrVal.length = arrVal.length - 1;
console.log(arrVal);

//Element is exist of not while search

let arrElement = [10, 20, 30, 40, 70, 50, 60];
let positionExist = 100;
let value = " ";
for (i = 0; i < arrElement.length; i++) {
  if (positionExist == arrElement[i]) {
    value += positionExist + " is exist";
    break;
  }
  console.log(value);
}
value == " " ? console.log("not") : console.log("Exist");

//finding element by using pre-defined function @includes

let arrs = [10, 20, 30, 40, 70, 50, 60];
let searchElement = 20;
let getBoolean = arrs.includes(searchElement);
console.log(getBoolean);

//Array merge by using spread
let arr1 = [40, 80, 60, 70, 50, 30];
let arr2 = [90, 5, 1, 6, 10, 11, 12];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

//With concat function
let arrConcat = arr1.concat(arr2);
console.log(arrConcat);

//2nd Example without using any pre-function

let arrBlank = [];
for (i = 0; i < arr1.length; i++) {
  arrBlank[i] = arr1[i];
}
for (i = 0; i < arr2.length; i++) {
  arrBlank[arr1.length + i] = arr2[i];
}
console.log(arrBlank);

//Sorting arr without using pre-define function

let arrVal = [1, 5, 6, 4];
let blank;
for (i = 0; i < arrVal.length; i++) {
  for (j = 0; j < arrVal.length; j++) {
    if (arrVal[i] > arrVal[j]) {
      blank = arrVal[i];
      arrVal[i] = arrVal[j];
      arrVal[j] = blank;
    }
  }
}

console.log(arrVal);

//Sorting array with sort function

let arrVal = [1, 5, 6, 4];
let sorted = arrVal.sort((a, b) => b - a);
console.log(sorted);

//Remove Duplicate element in array
let arrVal = [1, 5, 7, 2, 1, 5];
let main = arrVal.filter((item, index, arr) => {
  if (arr.indexOf(item) == index) {
    return item;
  }
}, 0);
console.log(main);

// possibilities of Combination
let arrCom = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let val = 110;
let findCom = [];
for (i = 0; i < arrCom.length; i++) {
  for (j = i + 1; j < arrCom.length; j++) {
    if (arrCom[i] + arrCom[j] == val) {
      findCom.push([arrCom[i], arrCom[j]]);
    }
  }
}
console.log(findCom);
