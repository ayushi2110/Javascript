let firstname = "Ayushi";
let lastname = "Khurana";

var template = `My Name is ${firstname}`;

console.log(template.startsWith("My"));
console.log(template.endsWith("Ayushi"));
console.log(template.includes("bg"));

// what is the use of slie function

let str = "Apple, Banana, Kiwi";
let valueofSliceFunction = str.slice(7, 20);
console.log(valueofSliceFunction);
