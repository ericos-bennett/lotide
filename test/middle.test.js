const assert = require('chai').assert;
const middle = require('../src/middle');

describe('#middle', () => {

  it('returns [2,4] for middle[1,2,4,5]', () => {
    assert.deepEqual(middle([1,2,4,5]), [2,4]);
  });

  it('returns ["A2"] for middle([4,"A2",10])', () => {
    assert.deepEqual(middle([4,'A2',10]), ['A2']);
  });

  it('returns [] for middle([1])', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns [] for middle([])', () => {
    assert.deepEqual(middle([]), []);
  });

});
