//Recursion Example
function recursion1(x) {
  if (x < 10) {
    recursion1(x + 1);
  }
  console.log(x);
}
recursion1(5);

// Factorial with recursion
function factorial(x) {
  if (x == 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(5));

// Sum of natural number by recursion
function naturalNumber(x) {
  if (x <= 1) return x;
  return x + naturalNumber(x - 1);
}
console.log(naturalNumber(2));

//Fibonacci series of 5
function fib(n) {
  if (n <= 2) return 1;
  else return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));
