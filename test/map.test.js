const assert = require('chai').assert;
const map = require('../src/map');

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,4,56,12];
const bools = [true,true,false];

describe('#map', () => {

  it("returns [ 'g', 'c', 't', 'm', 't' ] for map(words, word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns [2,8,112,24] for map(nums, num => num * 2)", () => {
    assert.deepEqual(map(nums, num => num * 2), [2,8,112,24]);
  });

  it("returns [false, false, true] for map(bools, bool => !bool)", () => {
    assert.deepEqual(map(bools, bool => !bool), [false, false, true]);
  });

});


// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(map(nums, num => num * 2), [2,8,112,24]);
// assertArraysEqual(map(bools, bool => !bool), [false, false, true]);