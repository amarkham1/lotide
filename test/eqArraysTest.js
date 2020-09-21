const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true for [1, 2, 3] & [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for [] & [[]]", () => {
    assert.strictEqual(eqArrays([], [[]]), false);
  });
  it("should be equal for ['1', '2', '3'] & ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns be equal for a 3D array", () => {
    assert.strictEqual(eqArrays([[1, 2], [[3, 4], 6]], [[1, 2], [[3, 4], 6]]), true);
  });
});