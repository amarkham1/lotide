const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key in array1) {
    if (Array.isArray(array1[key]) && Array.isArray(array2[key])) {
      if (!eqArrays(array1[key], array2[key])) {
        return false;
      }
    } else if (array1[key] !== array2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;