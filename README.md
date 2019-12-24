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

Factory Function

1. Use Camel notation to declare factory functions.
2. In an object, if the key and value are the same, then in JavaScript we can use either one. Refer radius in the following example.
3. No need to use 'function' key word to declare function in an object. Refer draw() in the following example.

```
//Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Drawing radius");
    }
  };
}

const circleFactory = createCircle(10);

```

Constructor function

```
//Constructor function
function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log("Deawing radius");
  };

const circleConstructor = new Circle(10);

}
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

- Use .push() method to add elements at the end of an array.
- Use .pop() method to remove elements from the end of an array.
- Use .unshift() method to add elements at the start of an array.
- Use .shift() method to remove elements from the begining of an array
- Use .splice() method to add elements in the middle of an array.
- Use .find() method to find object in an array.
- Use .findIndex() method to get the first index of an object in an array.

Emptying an array

```
//Reassign - doesn't work with const
let array = [1, 2, 3];
array = [];
//Set length to 0
let array = [1, 2, 3];
array.length = 0;
//Use splice
let array = [1, 2, 3];
array.splice(0, array.length);
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

Using logical operators with non-booleans

In JavaScript values can be true | truthy | false | falsy

Falsy values in JavaScript are

- false
- ""
- undefined
- null
- NaN
- 0

All values which are not falsy are truthy

```
console.log(false || "red");//red
console.log(false || 1);//1
console.log(true || undefined);//true
console.log(false || undefined);//undefined
console.log(true && undefined);//undefined
console.log(false && undefined);//false
```

Following is an example of short circuiting i.e. JavaScript engine will start comparision from left to right and once it encounters a truthy it will stop and display the truthy value.

```
// With OR
console.log(false || 1 || 2);//1
```

With AND though it will evaluate till the last truthy value

```
//With AND
console.log(true && 1 && 2);//2
```

For-In loop in JavaScript

In order to iterate over properties of an object, it is recommended to use for in loop.

```
let person = {
  firstName: "Jon",
  lastName: "Doe"
};

for (let key in person) {
  console.log(key, person[key]);
}
```

It can also be used to iterate over an array.

```
let colors = ['red', 'green'];

for (let index in colors){
  console.log(colors[index]);
}
```

For-Of loop in JavaScript

It is same as of For-In syntax-wise, we replace in with of. It's the recommended way of iterating over array.

```
let colors = ["red", "blue"];

for (let color of colors) console.log(color);
```

As compared to For-In loop, in For-Of loop we don't have to access array elements using index. In this case the variable color holds the array element.

forEach loop
forEach loop is only used with arrays. If one needs to get an index of an array element, one should use forEach or for-In loop.

```
let colors = ["red", "blue"];
colors.forEach((color, index) => console.log(color, index););
```
