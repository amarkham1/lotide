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
// Loop through the source values of each array
   // Loop through items we want to remove and compare against source value
// if we get to end of the remove item loop and don't see a match, we can safely add the item

const without = function(source, itemsToRemove) {
  let removedArray = [];

  for(let i = 0; i < source.length; i++) {
    let keepItemFlag = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        keepItemFlag = false;
      }
    }
    if(keepItemFlag) {
      removedArray.push(source[i]);
    }
  }

  return removedArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 1, 2, 3], [1]), [2, 2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without([1, 2, 3], [3, 1, 2]), []);
assertArraysEqual(without(["1", "2", "3"], [3, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([], []), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);