const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it ("should return 2 when given ('LHL')['L']", () => {
    assert.strictEqual(countLetters('LHL')["L"], 2);
  });
  it ("should return 1 when given ('LHL')['H']", () => {
    assert.strictEqual(countLetters('LHL')["H"], 1);
  });
  it ("should return 1 when given ('HELLO WORLD')[' ']", () => {
    assert.strictEqual(countLetters('HELLO WORLD')[" "], 1);
  });
});