// Write a JavaScript program to get the integers in range (x, y).
function range(x, y) {
  let blank = [];
  for (i = x + 1; i < y; i++) {
    blank.push(i);
  }
  return blank;
}
console.log(range(2, 9));

// ``````````````````````````````````````````````OR```````````````````````````````````````````````````

function range(x, y) {
  if (x < y) {
    return range(x, y + 1);
  }
}
console.log(range(2, 9));

// Write a program in JavaScript to check if two strings are anagrams of each other or not
function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return "Is not an anagram";
  }
  count = {};
  for (letter of string1) {
    count[letter] = (count[letter] || 0) + 1;
  }
  for (item of string2) {
    if (!count[item]) {
      return false;
    }
    count[item] -= 1;
  }
  return true;
}
const check = isAnagram("hello", "lleoh");
console.log(check);

// ``````````````````````````````````````````````OR```````````````````````````````````````````````````

function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return;
  }
  let str1 = a.split("").sort().join("");
  let str2 = b.split("").sort().join("");
  if (str1 === str2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
checkStringsAnagram("indian", "ndiani");

//Letter Reverse=============
function mirrorName(name) {
  let a = name.split("").reverse().join("");
  let b = a.split(" ").reverse().join(" ");
  return b;
}
console.log(mirrorName("Ayushi Khurana"));

//Reverse String===============
let stringL = "Ayushi";
let blank = [];
for (i = stringL.length - 1; i >= 0; i--) {
  blank.push(stringL[i]);
}
console.log(blank.join(""));

// ```````=============OR=============`
let stringR = "Ayushi";
let blankS = "";
for (i = stringR.length - 1; i >= 0; i--) {
  blankS += stringR[i];
}
console.log(blankS);

//Reverse Array==================
let rArray = ["Ayushi", "Khurana", "Diksha", "Negi"];
let blankL = [];
for (i = rArray.length - 1; i >= 0; i--) {
  blankL.push(rArray[i]);
}
console.log(blankL.join(" "));

//Curring Function
function sum(num) {
  return function (num2) {
    return num + num2;
  };
}
console.log(sum(2)(3));

//Count the reaped value
let repeatedValue = "These These These Those Those This";
let countTheValue = repeatedValue.split(" ").reduce((pre, next) => {
  !pre[next] ? (pre[next] = 1) : (pre[next] += 1);
  return pre;
}, {});

console.log(countTheValue);

//find second largest number of array;

let arrVal = [1, -5, -6, -4, -2, -3];
let blanknum;
for (i = 0; i < arrVal.length; i++) {
  for (j = 0; j < arrVal.length; j++) {
    if (arrVal[i] > arrVal[j]) {
      blanknum = arrVal[i];
      arrVal[i] = arrVal[j];
      arrVal[j] = blanknum;
    }
  }
}

console.log(arrVal[1]);
