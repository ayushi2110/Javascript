/**
 * fn → wo async function jo run karna hai
 * retries → kitni baar dobara try karna hai (default 3 times)
 * delay → har failed attempt ke baad kitna wait karna hai (default 500ms)
 */

async function retry(fn, retries = 3, delay = 500) {
  // Ye loop har attempt ke liye chalega
  for (let i = 1; i <= retries; i++) {
    try {
      return await fn(); // Function ko run karo
    } catch (error) {
      if (i === retries) throw error; // Last attempt fail ho gaya toh error throw karo
      await new Promise((r) => setTimeout(r, delay)); // Fail hua toh thoda ruk ke dobara try karo
    }
  }
}

// --------------------- Usage Examples ---------------------

let attemptCount = 0;
async function unstableOperation() {
  attemptCount++;
  // Pehle do attempt fail karenge, teesre pe success milegi
  if (attemptCount < 3) throw new Error("First attempt failed");
  return "Success on attempt " + attemptCount;
}

// Scenario 1: Retry function ka use, agar success nahi hua toh reject status dikhao
retry(unstableOperation, 2, 1000)
  .then((result) => console.log("Scenario 1 Success:", result))
  .catch((err) => console.error("Scenario 1 Failed:", err.message));

// Scenario 2: without delay, default retries
async function retrymac(func, retry) {
  for (let i = 1; i <= retry; i++) {
    try {
      console.log("Attempt:", i); // Kaunse attempt pe ho, print karo
      return await func();
    } catch (err) {
      if (i === retry) throw err; // Last retry pe bhi fail hua toh error throw karo
      console.log("Failed on attempt", i, "-", err.message); // Fail hone pe message dikhao
    }
  }
}

let count = 0;
async function func() {
  count++;
  // 70% chance fail hone ka, baaki success
  if (Math.random() < 0.7) throw new Error("Fail hua");
  return "Success on attempt " + count;
}

retrymac(func, 7)
  .then((result) => console.log("Scenario 3 Success:", result))
  .catch((err) => console.log("Error:", err.message));
