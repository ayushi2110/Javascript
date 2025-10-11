// Example to demonstrate the difference between call, apply, and bind in JavaScript.
// These methods help you control what 'this' refers to inside a function.

// Two objects with firstName and lastName
const personOne = {
  firstName: "firstPersonName",
  lastName: "firstPersonLastName",
};

const personTwo = {
  firstName: "secondPersonName",
  lastName: "secondPersonLastName",
};

// A function that uses 'this' to refer to whichever object we attach it to.
function greet(greeting, punctuation) {
  // 'this' will depend on how we call this function (direct, call, apply, bind)
  return `${greeting}, ${this.firstName} ${this.lastName}${punctuation}`;
}

/* ------------------------------------------------------------------
   1. CALL()
   ------------------------------------------------------------------
   -> Syntax: functionName.call(thisArg, arg1, arg2, ...)
   -> 'thisArg' = the object we want 'this' to point to.
   -> Arguments are passed individually, one by one.
   -> Function executes immediately.
   -> Useful when you want to borrow a method from one object and use it for another.
------------------------------------------------------------------- */
console.log(greet.call(personOne, "Hello", "!"));
// 'this' points to personOne
// greeting = "Hello", punctuation = "!"
// Output: "Hello, firstPersonName firstPersonLastName!"

console.log(greet.call(personTwo, "Hi", "."));
// 'this' points to personTwo
// greeting = "Hi", punctuation = "."
// Output: "Hi, secondPersonName secondPersonLastName."

/* ------------------------------------------------------------------
   2. APPLY()
   ------------------------------------------------------------------
   -> Syntax: functionName.apply(thisArg, [arg1, arg2, ...])
   -> Similar to call(), but arguments are passed as an array.
   -> Useful when you already have arguments in an array.
   -> Function executes immediately.
------------------------------------------------------------------- */
console.log(greet.apply(personOne, ["Hello", "!"]));
// Same as call, but arguments are in array form
// Output: "Hello, firstPersonName firstPersonLastName!"

console.log(greet.apply(personTwo, ["Hi", "."]));
// Output: "Hi, secondPersonName secondPersonLastName."

/* ------------------------------------------------------------------
   3. BIND()
   ------------------------------------------------------------------
   -> Syntax: const newFunc = functionName.bind(thisArg, arg1, arg2, ...)
   -> Does NOT execute immediately.
   -> Returns a new function with 'this' permanently bound to the given object.
   -> You can call that new function later with or without arguments.
   -> Very useful in event handlers (like button click) where you need 'this' context.
   -> You can also pre-set some arguments (partial application).
------------------------------------------------------------------- */
const greetPersonOne = greet.bind(personOne);
// Creates a new function where 'this' is permanently set to personOne

const greetPersonTwo = greet.bind(personTwo);
// Creates a new function where 'this' is permanently set to personTwo

console.log(greetPersonOne("Hello", "!"));
// Output: "Hello, firstPersonName firstPersonLastName!"

console.log(greetPersonTwo("Hi", "."));
// Output: "Hi, secondPersonName secondPersonLastName."

/* ------------------------------------------------------------------
   DEEP DIVE SUMMARY
-------------------------------------------------------------------
   - call: Immediately calls the function, lets you set 'this' and pass arguments one by one.
   - apply: Immediately calls the function, lets you set 'this' and pass arguments as an array.
   - bind: Returns a new function with 'this' set, does NOT call immediately, can be called later.
   - All three are useful for controlling function context, especially when borrowing methods or working with event handlers.
------------------------------------------------------------------- */
