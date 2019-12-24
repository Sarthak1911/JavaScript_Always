let numbers = [1, 2, 3];

//Ascending
console.log(numbers.sort());

//Descending
console.log(numbers.reverse());

let objects = [
  { id: 1, course: "Node" },
  { id: 2, course: "JavaScript" }
];

//Sorting based on course property
console.log(
  objects.sort((object1, object2) => {
    if (object1.course.toLowerCase() < object2.course.toLowerCase()) return -1;
    if (object1.course.toLowerCase() > object2.course.toLowerCase()) return 1;
    return 0;
  })
);
