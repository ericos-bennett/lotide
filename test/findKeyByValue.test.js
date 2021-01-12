const assert = require('chai').assert;
const findKeyByValue = require('../src/findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {

  it('returns "drama" for findKeyByValue(bestTVShowsByGenre, "The Wire")', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns undefined for findKeyByValue(bestTVShowsByGenre, "That \'70s Show")', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });

});
