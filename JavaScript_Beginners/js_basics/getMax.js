let getMax = array => {
  return array.reduce((max, currentValue) =>
    currentValue > max ? currentValue : max
  );
};

let numbers = [6, 2, 3, 4, 5];
console.log(getMax(numbers));
