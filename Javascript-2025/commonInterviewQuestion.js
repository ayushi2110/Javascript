// Explain the difference between this keyword in arrow function and normal function
const obj = {
  name: "Ayushi",
  age: 26,
  normalFunction: function () {
    console.log("Normal Function:", this.name);
    // 'this' refers to the obj itself
  },
  arrowFunction: () => {
    console.log("Arrow Function:", this.name);
    // 'this' does not refer to the obj, it refers to the global object
    // (window in browsers, undefined in strict mode)
  },
};

obj.normalFunction(); // Output: Ayushi
obj.arrowFunction(); // Output: undefined (or error in strict mode)

//Reverse a string using recursion ==========================================
// Example: Input "Ayushi" Output "ihsuyA"

function reverseString(str) {
  let blankString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    blankString += str[i];
  }
  return blankString;
}
console.log(reverseString("Ayushi")); //ihsuyA

//using function reverse ==========================================
// 1st method using loop
// 2nd method using built in method
function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("Ayushi"));

// Find duplicate values in an array ==========================================
let arr = [20, 1, 21, 1, 20, 19];
let value = arr.filter((item, index, arr) => {
  if (arr.indexOf(item) !== index) {
    return item;
  }
}, []);
console.log(value);

// Remove duplicate values from an array ==========================================
let arr1 = [20, 1, 21, 1, 20, 19];
let uniqueValue = [...new Set(arr1)];
console.log(uniqueValue);

// Second way to remove duplicate values from an array ==========================================
let val = arr.filter((item, index, arr) => {
  if (arr.indexOf(item) === index) {
    return item;
  }
}, []);
console.log(val);


