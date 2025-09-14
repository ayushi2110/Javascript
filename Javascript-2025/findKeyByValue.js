let objectValues = {
  a: "apple",
  b: "banana",
  c: "cherry",
  d: "date",
  e: "apple",
  f: "banana",
};

function findKeyByValue(obj, value) {
  return Object.keys(obj).filter((key) => obj[key] === value);
}

console.log(findKeyByValue(objectValues, "apple")); //['a', 'e' ]
findKeyByValue(objectValues, "banana"); //['b', 'f' ]
