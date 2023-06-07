/**
 * In this example, we are using Node.js' built-in fs module to read a file named example.txt.
 * The readFile function is asynchronous, which means that it does not block the main thread
 * while the file is being read. Instead, it takes a callback function as its second parameter,
 *  which will be called once the file has been read.
 *
 */
const fs = require("fs");

// fs.readFileSync("example.txt");

// console.log("print before fs");

/**
 *
 * In this example we create a promise to show the node js is asynchronuse behaviour
//  */
// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// console.log("starting...");
// sleep(2000).then(() => console.log("after 2 second"));
// console.log("ending...");

console.log("starting");

const fsValue = fs.readFileSync("example.txt").toString("utf8");

console.log(fsValue);

console.log("ending");
