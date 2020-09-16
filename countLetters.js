const failed = String.fromCodePoint(0x274C);
const passed = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passed}${passed}${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed}${failed}${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

assertEqual(countLetters('LHL')["L"], 2);
assertEqual(countLetters('LHL')["H"], 1);
assertEqual(countLetters('HELLO WORLD')[" "], 1);
assertEqual(countLetters('LHLOL')["L"], 3);