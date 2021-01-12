const assert = require('chai').assert;
const eqObjects = require('../src/eqObjects');

describe('#eqObjects', () => {

  it('returns false for eqObjects({a:1, b:2}, {a:2, b:2})', () => {
    assert.isFalse(eqObjects({a:1, b:2}, {a:2, b:2}));
  });

  it('returns true for eqObjects({a:4, b:2}, {a:4, b:2})', () => {
    assert.isTrue(eqObjects({a:4, b:2}, {a:4, b:2}));
  });

  it('returns false for eqObjects({a:4, b:2}, {b:2})', () => {
    assert.isFalse(eqObjects({a:4, b:2}, {b:2}));
  });

  it('returns true for eqObjects({c:"1", d:["2",3]}, {d:["2",3], c:"1"})', () => {
    assert.isTrue(eqObjects({c:"1", d:["2",3]}, {d:["2",3], c:"1"}));
  });

  it('returns false for eqObjects({c:"1", d:["2",3]}, {c:"1", d:["2",3,4]})', () => {
    assert.isFalse(eqObjects({c:"1", d:["2",3]}, {c:"1", d:["2",3,4]}));
  });


});


// TEST CODE
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual(eqObjects({a:1, b:2}, {a:2, b:2}), false);
// assertEqual(eqObjects({a:4, b:2}, {a:4, b:2}), true);
// assertEqual(eqObjects({a:4, b:2}, {b:2}), false);
// assertEqual(eqObjects({c:"1", d:["2",3]}, {d:["2",3], c:"1"}), true);
// assertEqual(eqObjects({c:"1", d:["2",3]}, {c:"1", d:["2",3,4]}), false);