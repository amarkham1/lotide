const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(passed + passed + passed + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(failed + failed + failed + "Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual('hi', 'hi');
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1, 2);
