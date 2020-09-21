const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertArraysEqual = function(array1, array2) {
  let arraysEqual = eqArrays(array1, array2);
  console.log('test' + array1);
  if (arraysEqual) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ` + array1 + `===` + array2);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ` + array1 + `===` + array2);
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

const flattenDeep = function(multiLevelArray) {
  const singleLevelArray = [];

  for (let i = 0; i < multiLevelArray.length; i++) {
    if (!Array.isArray(multiLevelArray[i])) {
      singleLevelArray.push(multiLevelArray[i]);
    } else {
      flatten(multiLevelArray[i]);
    }
  }
  return singleLevelArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1], 2, [3, 4], 5, []]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([]), []);
console.log("doesn't handle more than a 2D-array");
assertArraysEqual(flatten([1, 2, [3, [4, 5]], 6, [7]]), [1, 2, 3, [4, 5], 6]);


module.exports = flattenDeep;