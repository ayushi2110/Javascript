//Implementing the deepFreeze Object method in JavaScript
const user = {
  name: "Ayushi",
  details: {
    age: 26,
    skills: ["JS", "Node.js"],
    address: { city: "Delhi", state: "India" },
  },
};

// Start of deepFreeze function

function deepFreeze(objectValue) {
  // First we freeze the current object
  Object.freeze(objectValue);
  // Then we iterate through all properties of the object
  Object.getOwnPropertyNames(objectValue).forEach((prop) => {
    // If the property is an object, we recursively call deepFreeze
    const propValue = objectValue[prop];
    if (
      propValue !== null &&
      typeof propValue === "object" &&
      !Object.isFrozen(propValue)
    ) {
      deepFreeze(propValue);
    }
  });
  return objectValue;
}

// End of deepFreeze function

deepFreeze(user);

user.details.age = 30; // This will not change the age property
user.details.address.city = "Mumbai"; // This will not change the city property

console.log("output:", user); // Output will show that the user object remains unchanged
