let person = {
  firstName: "Jon",
  lastName: "Doe"
};

for (let key in person) console.log(key, person[key]);

let colors = ["red", "blue"];

for (let color of colors) console.log(color);
