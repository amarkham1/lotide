const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
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
    if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (!valueCheck(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (!object2[key] || (object1[key] !== object2[key])) {
        return false;
      }
    }
  }
  return true;
};


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 3 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);