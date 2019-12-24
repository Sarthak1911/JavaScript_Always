const move = (array, index, offset) => {
  if (index + offset > array.length || index + offset < 0) {
    console.error("Offset out of bounds");
    return undefined;
  }
  //Remove element form the index
  let element = array.splice(index, 1)[0];
  //Insert element at the given offset
  array.splice(index + offset, 0, element);
  return array;
};

console.log(move([1, 2, 3, 4, 5, 6], 3, -4));
