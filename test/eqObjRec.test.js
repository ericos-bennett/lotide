const eqObjRec = require('../eqObjRec');
const assert = require('chai').assert;

describe('#eqObjRec', () => {
  it('should return true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.isTrue(eqObjRec({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('should return false for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.isFalse(
      eqObjRec({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })
    );
  });
  it('should return false for { a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', () => {
    assert.isFalse(eqObjRec({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
  it('should return true for { a: [1,2,3], b: { c: 12, d: [4,5] } }, { a: [1,2,3], b: { c: 12, d: [4,5] } }', () => {
    assert.isTrue(
      eqObjRec(
        { a: [1, 2, 3], b: { c: 12, d: [4, 5] } },
        { a: [1, 2, 3], b: { c: 12, d: [4, 5] } }
      )
    );
  });
  it('should work for a simple array', () => {
    assert.isTrue(eqObjRec([1, 2, 3], [1, 2, 3]));
    assert.isFalse(eqObjRec([1, 2, 3], [4, 5, 6]));
  });
  it('should work for a primitive string', () => {
    assert.isTrue(eqObjRec('str', 'str'));
    assert.isFalse(eqObjRec('str', 'solo'));
  });
  it('should work for a primitive number', () => {
    assert.isTrue(eqObjRec(75, 75));
    assert.isFalse(eqObjRec(23, 213));
  });
});
