const map = (array, callback) => {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (eqArrays(array1, array2)) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
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

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map([]), []);