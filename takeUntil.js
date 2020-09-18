// returns a slice of the array UNTIL the callback returns truthy

const takeUntil = (array, callback) => {
  let results = [];
  let i = 0;
  while (i < array.length && !callback(array[i])) {
    results.push(array[i]);
    i++;
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


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

assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);