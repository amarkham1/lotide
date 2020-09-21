const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should return true for [1, 2, [3, 4], 5, [6]] & [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return true for [[1], 2, [3, 4], 5, []] & [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(flatten([[1], 2, [3, 4], 5, []]), [1, 2, 3, 4, 5]);
  });
  it("should be equal for [1, 2, [3, 4], 5, [6]] & [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns be equal for [] & []", () => {
    assert.deepEqual(flatten([]), []);
  });
});