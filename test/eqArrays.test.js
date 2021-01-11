const assert = require('chai').assert;
const eqArrays = require('../src/eqArrays');

describe('#eqArrays', () => {

  it('returns true for eqArrays([1,2,3],[1,2,3])', () => {
    assert.isTrue(eqArrays([1,2,3], [1,2,3]));
  });

  it('returns true for eqArrays(["1", "2", "3"], ["1", "2", "3"])', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('returns false for eqArrays(["1", "2", "3"], ["1", "2", 3])', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

});
