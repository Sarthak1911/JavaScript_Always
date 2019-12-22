let person = {
  firstName: "Jon",
  lastName: "Doe"
};

//Dot notation
let dotNotation = person.firstName;

//Runtime assignment variable

let runtimeVariable = "firstName";
runtimeVariable = "lastName";

//Bracket notation
let bracketNotation = person[runtimeVariable];

console.log(`Dot Notation ${dotNotation}`);

console.log(`Bracket Notation ${bracketNotation}`);
