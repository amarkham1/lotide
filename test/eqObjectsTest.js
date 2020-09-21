const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abcdiff = { a: "1", b: "3", c: "2" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it('should return true when keys are in different order', () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it('should return false when keys have different array elements', () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it('should return false when object has additional key', () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it('should return false when both have same keys but different values', () => {
    assert.strictEqual(eqObjects(abc, abcdiff), false);
  });
  it('should return true when both have same keys and values', () => {
    assert.strictEqual(eqObjects(ab, { a: "1", b: "2"}), true);
  });
  it('should return true when both have same keys and values with arrays', () => {
    assert.strictEqual(eqObjects(cd2, { c: "1", d: ["2", 3, 4] }), true);
  });
});
  
  