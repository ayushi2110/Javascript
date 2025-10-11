// console value after given time interval ==========================================
/* console.log(1); // wait for 10 seconds
console.log(3); // wait for 1 second
console.log(90); // wait for 2 seconds
*/

function executeInOrder(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

executeInOrder(1, 10000); // 10 seconds
executeInOrder(3, 1000); // 1 second
executeInOrder(90, 2000); // 2 seconds

function excuteSequence() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

async function runInSequence() {
  console.log(await excuteSequence(1, 10000)); // 10 seconds
  console.log(await excuteSequence(3, 1000)); // 1 second
  console.log(await excuteSequence(90, 2000)); // 2 seconds
}

// Run a function 5 times with 1 second interval ==========================================
// Example: Hello (after 1 second) Hello (after 1 second) Hello (after 1 second) Hello (after 1 second) Hello (after 1 second)
function runFiveTimesAfterInterval(message, interval) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, interval);
  });
}

async function runInFiveTimes() {
  for (let i = 1; i <= 5; i++) {
    await runFiveTimesAfterInterval("Hello", 1000);
  }
}

runInFiveTimes();

const one = new Promise(() => console.log("hello1"));
const two = new Promise(() => console.log("hello2"));
const three = new Promise(() => console.log("hello3"));

Promise.all([one, three, two]);
