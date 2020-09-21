const { findKey } = require(".");

const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objectToSearch, searchValue) {
  for (const key of Object.keys(objectToSearch)) {
    if (objectToSearch[key] === searchValue) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue({drama: "Handmaid's Tale"}, "Handmai'ds Tale"), "drama");
assertEqual(findKeyByValue({}, "anything"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);

module.exports = findKeyByValue;