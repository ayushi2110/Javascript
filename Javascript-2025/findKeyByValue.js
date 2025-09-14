let objectValues = {
  a: "apple",
  b: "banana",
  c: "cherry",
  d: "date",
  e: "apple",
  f: "banana",
};

// This code finds all keys in an object that have a specific value.
// The findKeyByValue function returns an array of keys where the value matches.
// Example: For value "apple", it returns ['a', 'e']

function findKeyByValue(obj, value) {
  return Object.keys(obj).filter((key) => obj[key] === value);
}

console.log(findKeyByValue(objectValues, "apple")); //['a', 'e' ]
findKeyByValue(objectValues, "banana"); //['b', 'f' ]
