# JavaScript_Always

## JavaScript Beginners

Placing JavaScript Files in HTML

- Try and place .js files after the body section of an HTML page.
  - As html page loads faster as it does not have to load .js files first.
  - Very often one has to refer HTML page elements usign .js files, so loading .js files before HTML content can lead to errors.

Naming Convention for JavaScript variables

JavaScript variables

- cannot be a reserved key word
- should be meaningful
- cannot start with number
- cannot contain name or hyphen
- are case sensitive
- use Camel notation
- should be declared on seperate lines

Variables and Constant types in JavaScript

- In JS, varibales and constants are of two types i.e.
  1.  Primitive Type / Value Types
      - string
      - boolean
      - number
      - undefined
      - null
  2.  Refrence Type
      - object
      - array
      - function
- By default value of variable in JavaScript is undefined.

typeof

- typeof undefined variable is undefined
- typeof null variable is an object

Objects in JavaScript

```
let person = {
  firstName: "Jon",
  lastName: "Doe"
};
```

Accessing object properties in Javascript

- Dot Notation

```
let dotNotation = person.firstName;
```

- Pros

1. It's very concise.
2. Makes the code look clean.

- Cons

1. Cannot be used to dynamically select object properties at run time. (refer Dynamic property assignment at runtime)

- Bracket Notation

```
let bracketNotation = person["firstName"];
```

- Pros
  1. Can be used to dynamically assign properties at run time (refer Dynamic property assignment at runtime)
- Cons
  1. Not very concise and clean.

Dynamic property assignment at runtime

```
let person = {
  firstName: "Jon",
  lastName: "Doe"
};

let runtimeVariable = "firstName";

let bracketNotation = person[runtimeVariable];//Jon

runtimeVariable = "lastName";

bracketNotation = person[runtimeVariable];//Doe
```

Arrays

Declaring array in JavaScript

```
let selectedColors = ["White", "Red"];
```

Functions

Functions in JavaScript either performs a task or calculates and returns a value.

```
//Performing task i.e. displaying name
function displayName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

displayName("Jon", "Doe");//Jon Doe
displayName("Rambo");//Rambo undefined

//Calulating and returning value
function square(number) {
  return number * number;
}

console.log(square(2));
console.log(square(4));

```

Equality Operators

1. Strict Equality operator checks for both type and value of the operands.

```
let x = 1;
let y = 2;

console.log(x === y);//false
console.log(x !== y);//true
```

2. Lose equality operator checks only for the value, and will convert the operand on the right to match the type on the left.

```
let x = 1;
let y = "1";

console.log(x == y);//true
```

3. It's recommended to use Strict Operator.

Ternary Operators

```
/* Customers with points greater than 100 are gold else silver*/

let points = 110;

let type = points > 100 ? 'Gold' : 'Silver';

console.log(type);
```

Read the above expression like this:
Return Gold if the expression is true, return 'Silver' if the expression is false.
