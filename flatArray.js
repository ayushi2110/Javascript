let input = [
  [1],
  [
    [1, 4, [5, 3]],
    [1, 2, 3, [3, 4, [2, [22, [3, 4, 5, 6, 5, [2]]]]], 4],
  ],
];
let output = "";
function flarr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flarr(arr[i]);
      console.log(arr[i]);
    } else {
      output += arr[i];
    }
  }
  return output;
}
console.log(flarr(input));
