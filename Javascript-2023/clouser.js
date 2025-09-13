//Clouser ======
function numberCount() {
  function checkNum() {
    console.log(value);
  }
  let value = 10;
  return checkNum;
}

var final = numberCount();
final();

let x = 10;
function foo() {
  let y = 20;
  function boo() {
    let z = 15;
    var output = x + y + z;
    return output;
  }

  return boo;
}

let main = foo();

console.log(main());
