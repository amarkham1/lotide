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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);