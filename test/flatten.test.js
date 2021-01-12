const assert = require('chai').assert;
const flatten = require('../src/flatten');

describe('#flatten', () => {

  it('returns [4, 64, 2, 75, 3] for flatten([4, 64, [2, 75], 3, []])', () => {
    assert.deepEqual(flatten([4, 64, [2, 75], 3, []]), [4, 64, 2, 75, 3]);
  });

});


// assertArraysEqual(flatten([4, 64, [2, 75], 3, []]), [4, 64, 2, 75, 3]);