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

const letterPositions = function(sentence) {
  const result = {};
  let i = 0;
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (!result[letter]) {
        result[letter] = [];
      }
      result[letter].push(i);
    }
    i++;
  }
  return result;
}

assertArraysEqual(letterPositions('lighthouse in the house')["l"], [0]);
assertArraysEqual(letterPositions('lighthouse in the house')["i"], [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house')["g"], [2]);
assertArraysEqual(letterPositions('lighthouse in the house')["h"], [3, 5, 15, 18]);
assertArraysEqual(letterPositions('lighthouse in the house')["t"], [4, 14]);