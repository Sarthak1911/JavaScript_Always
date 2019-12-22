let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//Performing swap without temporary variable
//Only works with number

let x = 5;
let y = 6;

x = x + y; //11
y = x - y; //5
x = x - y; //6
