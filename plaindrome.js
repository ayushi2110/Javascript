let value = "mom";
let blank = "";
function plainDrome(val) {
  for (let i = val.length - 1; i >= 0; i--) {
    blank += val[i];
  }
  return blank == val ? "It is Plaindrome" : "It is not Plaindrome";
}
console.log(plainDrome(value));
