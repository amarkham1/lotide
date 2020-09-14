const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  let flag = true;
  if (Array.isArray(actual) || Array.isArray(expected)) {
    if (actual === undefined || expected === undefined) {
      flag = false;
    } else if (actual.length !== expected.length) {
      flag = false;
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        flag = false;
      }
    }
  } else {
    flag = (actual === expected);
  }
  
  if (flag) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};

assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail([5]), []);
assertEqual(tail([]), []);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);