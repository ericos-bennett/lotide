const assert = require('chai').assert;
const without = require('../src/without');

describe('#without', () => {

  it('returns [1,2,3] with without([1,2,3],[4])', () => {
    assert.deepEqual(without([1,2,3],[4]), [1,2,3]);
  });

  it('returns [1,3] with without([1,2,3],[2])', () => {
    assert.deepEqual(without([1,2,3],[2]), [1,3]);
  });

  it('returns [1] with without([1,2,3],[2,5,3]', () => {
    assert.deepEqual(without([1,2,3],[2,5,3]), [1]);
  });

  it("returns [1,'2',3,'b'] with without([1,'2',3,'b',true],[2,'a',true])", () => {
    assert.deepEqual(without([1,'2',3,'b',true],[2,'a',true]), [1,'2',3,'b']);
  });

});

// assertArraysEqual(without([1,2,3],[4]), [1,2,3]);
// assertArraysEqual(without([1,2,3],[2]), [1,3]);
// assertArraysEqual(without([1,2,3],[2,5,3]), [1]);
// assertArraysEqual(without([1,'2',3,'b',true],[2,'a',true]), [1,'2',3,'b']);
