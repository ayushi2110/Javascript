/**
 * Shallow Copy vs Deep Copy (Simple Terms)
 *
 * - Shallow Copy: Only copies the top level. Nested objects/arrays are shared.
 * - Deep Copy: Copies everything, including nested objects/arrays. Fully independent.
 */

// ----------- Shallow Copy Example -----------
const original = {
  name: "Ayushi",
  details: {
    age: 26,
    skills: ["JS", "Node.js"],
  },
};

const shallowCopy = { ...original };
shallowCopy.name = "newName"; // Only changes shallowCopy
shallowCopy.details.age = 30; // Changes both shallowCopy and original

console.log("Shallow Copy:");
console.log("original.name:", original.name); // Ayushi
console.log("shallowCopy.name:", shallowCopy.name); // newName
console.log("original.details.age:", original.details.age); // 30
console.log("shallowCopy.details.age:", shallowCopy.details.age); // 30

// ----------- Deep Copy Example (JSON) -----------
const deepCopyJSON = JSON.parse(JSON.stringify(original));
deepCopyJSON.name = "anotherName";
deepCopyJSON.details.age = 35;

console.log("\nDeep Copy (JSON):");
console.log("original.name:", original.name); // Ayushi
console.log("deepCopyJSON.name:", deepCopyJSON.name); // anotherName
console.log("original.details.age:", original.details.age); // 30
console.log("deepCopyJSON.details.age:", deepCopyJSON.details.age); // 35

// ----------- Deep Copy Example (structuredClone) -----------
const structuredClonedValue = structuredClone(original);
structuredClonedValue.details.skills.push("React");

console.log("\nDeep Copy (structuredClone):");
console.log(
  "structuredClonedValue.details.skills:",
  structuredClonedValue.details.skills
); // ["JS", "Node.js", "React"]
console.log("original.details.skills:", original.details.skills); // ["JS", "Node.js"]

/**
 * Summary:
 * - Shallow copy: {...obj}, Object.assign(), slice(), concat() → only top level.
 * - Deep copy: JSON.parse(JSON.stringify(obj)), structuredClone(obj), or libraries like _.cloneDeep.
 * - JSON method can't copy functions, undefined, symbols, Dates, Maps, Sets, etc.
 * - structuredClone works for most types (Node.js 17+, modern browsers) but not all.
 */
