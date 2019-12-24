export const includes = (array, searchElement) => {
  for (let element of array) if (element === searchElement) return true;

  return false;
};
