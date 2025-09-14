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
