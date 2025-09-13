//print value after 5 seconds
function excuteAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executed after delay");
      resolve();
    }, 1000);
  });
}

async function excute() {
  for (let i = 0; i < 5; i++) {
    await excuteAfterDelay();
  }
}

excute();

// another way to do this 
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function executeWithDelay() {
  for (let i = 0; i < 5; i++) {
    await delay(1000);
    console.log("Executed after delay");
  }
}
executeWithDelay();
