const includes = (array, searchElement) => {
  for (let element of array) if (element === searchElement) return true;

  return false;
};

let except = (array, exclude) =>
  array.filter(element => !includes(exclude, element));

let numbers = [1, 2, 3, 4, 5, 5, 5, 6];

console.log(except(numbers, [2, 5, 1]));
