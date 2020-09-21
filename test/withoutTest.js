const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should remove all entries when given array with multiple of the searched value", () => {
    assert.deepEqual(without([1, 2, 1, 2, 3], [1]), [2, 2, 3]);
  });
  it("should return empty array when provided empty array and try to remove element from it", () => {
    assert.deepEqual(without([], [1]), []);
  });
  it("should return empty array when provided empty array and try to remove nothing from it", () => {
    assert.deepEqual(without([], []), []);
  });
  it("should not remove elements when provided array with none of the searched value", () => {
    assert.deepEqual(without(["1", "2", "3"], [3, "3"]), ["1", "2"]);
  });
});