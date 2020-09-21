const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("should return array of the first letters of each string in an array", () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });
  it("should return array of the lengths of each array string", () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });
  it("should return undefined when given no callback function", () => {
    assert.deepEqual(map([]), undefined);
  });
});