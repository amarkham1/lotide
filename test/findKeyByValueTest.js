const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValueTest", () => {
  it("should return key of an object when looking for a value with a match", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined when looking for a value not in object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("should return key of an object when looking for a value with a match", () => {
    assert.strictEqual(findKeyByValue({drama: "Handmaid's Tale"}, "Handmaid's Tale"), "drama");
  });
  it("should return undefined when searching an empty object", () => {
    assert.strictEqual(findKeyByValue({}, "anything"), undefined);
  });
  it("should return undefined when searching for an empty string in a non-empty object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
  });
});