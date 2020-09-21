const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return [6, 7] when given [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("should return [] when given [5]", () => {
    assert.deepEqual(tail([5]), []);
  });
  it("should return [] when given []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should return ['Hello', 'Lighthouse', 'Labs'] when given ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});