// Find Leap year

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
const year = 2024;
if (isLeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// Output: 2024 is a leap year.

// year is divisible by 4 and not divisible by 100
// or year is divisible by 400

