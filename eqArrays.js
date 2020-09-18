const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  return lengthCheck(array1, array2) && valueCheck(array1, array2) && valueCheck(array2, array1);
}

const valueCheck = (array1, array2) => {
  for (const key in array1) {
    if (Array.isArray(array1[key])) {
      if (!eqArrays(array1[key], array2[key])) {
        return false;
      }
    } else if (!array2[key] || array1[key] !== array2[key]) {
      return false;
    }
  }
  return true;
};

const lengthCheck = (object1, object2) => {
  return object1.length === object2.length;
};


assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([], [[]]), false);