const findKey = require('../findKey');
const assert = require('chai').assert;

let test1Obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let test1Callback = x => x.stars === 2;

let test2Obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let test2Callback = x => x === "Ora";

describe("#findKeyTest", () => {
  it ("should return key of an object when looking for a value with a match", () => {
    assert.strictEqual(findKey(test1Obj, test1Callback), "noma");
  });
  it ("should return key of an object when looking for a key with a match", () => {
    assert.strictEqual(findKey(test2Obj, test2Callback), "Ora");
  });
  it ("should return null when unable to find a match", () => {
    assert.strictEqual(findKey(test2Obj, x => x === "no match"), undefined);
  });
});