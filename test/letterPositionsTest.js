const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return 1 position when given string with only 1 of the searched char in it", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')["l"], [0]);
  });
  it("should return 2 positions in array when given string with multiples of the searched char in it", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')["i"], [1, 11]);
  });
  it("should return 2 positions in array when given string with multiples of the searched char in it", () => {
    assert.deepEqual(letterPositions('lighthouse in the house')["h"], [3, 5, 15, 18]);
  });
  it("should return undefined when no search char in the string", () => {
    assert.strictEqual(letterPositions('lighthouse in the house')["f"], undefined);
  });
});
