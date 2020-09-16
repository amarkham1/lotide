const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertArraysEqual = function(array1, array2) {
  let arraysEqual = eqArrays(array1, array2);
  if (arraysEqual) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  let isEqual = true;
  if (array1.length !== array2.length) {
    isEqual = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isEqual = false;
    }
  }
  
  return isEqual;
};

const middle = function(array) {
  let middleArray = [];
  if (array.length > 2 && array.length % 2 === 1) {
    middleArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 2 && array.length % 2 === 0) {
    middleArray.push(array[Math.floor(array.length / 2) - 1]);
    middleArray.push(array[Math.floor(array.length / 2)]);
  }
  return middleArray;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);