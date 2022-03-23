const personObject = {
  firstName: "Mir",
  lastName: "Hussain",
  address: { country: "Uganda", capital: "Kampala" },
};

const cart = { abc: 1, def: 2, ghi: 1 };

const personArray = ["Mir", "Hussain"];

//* Object Dot Notation and Square Bracket notation

//Dot Notation
//? const firstName = personObject.firstName;

//Square Bracket Notation
//? const lastName = personObject["lastName"];

//* Simple Object Destructuring

// const { firstName } = personObject;

// const { lastName } = personObject;

// const { lastName, firstName } = personObject;

//* Array index

//? const firstName = personArray[0];

//* Array Destructuring

// const [firstName] = ["Mir", "Hussain"];

//const [firstName, lastName] = ["Mir", "Hussain"]

// const [, lastName] = ["Mir", "Hussain"];

//! Object Destructuring Pro tricks

//* Multi-level Destructuring

// const { address: { capital } } = personObject;

//* Default Value

// const { age = "Not Available" } = personObject;

//* re-assigning

// const { firstName: fatherFirstName } = personObject;
