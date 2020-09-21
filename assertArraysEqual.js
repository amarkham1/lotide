const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (eqArrays(array1, array2)) {
    console.log(`${String.fromCodePoint(0x2705)}${String.fromCodePoint(0x2705)}${String.fromCodePoint(0x2705)} Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)}${String.fromCodePoint(0x274C)}${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
  }
};

module.exports = assertArraysEqual;