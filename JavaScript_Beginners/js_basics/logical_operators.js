console.log(false || "red"); //red
console.log(false || 1); //1
console.log(true || undefined); //true
console.log(false || undefined); //undefined
console.log(true && undefined); //undefined
console.log(false && undefined); //false
console.log(false || 1 || 2); //1
console.log(true && 1 && 2 && "sf"); //2

let userColor = "red";
let defaultColor = "green";

console.log(userColor || defaultColor);
