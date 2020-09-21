const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;