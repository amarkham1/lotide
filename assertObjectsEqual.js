const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqObjects = function(object1, object2) {
  return lengthCheck(object1, object2) && valueCheck(object1, object2) && valueCheck(object2, object1);
};

const lengthCheck = function(object1, object2) {
  return Object.keys(object1).length === Object.keys(object2).length;
};

const valueCheck = function(object1, object2) {
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abcdiff = { a: "1", b: "3", c: "2" };
const abd = { a: "1", b: "2", d: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(abc, abcdiff);
assertObjectsEqual(abc, abd);

module.exports = assertObjectsEqual;