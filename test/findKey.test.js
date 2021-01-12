const assert = require('chai').assert;
const findKey = require('../src/findKey');

const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('#findKey', () => {
  
  it('returns "noma" for findKey(testObj, x => x.stars === 2)', () => {
    assert.strictEqual(findKey(testObj, x => x.stars === 2), "noma");
  });

  it('returns "Akaleri" for findKey(testObj, x => x.stars === 3)', () => {
    assert.strictEqual(findKey(testObj, x => x.stars === 3), "Akaleri");
  });

  it('returns undefined for findKey(testObj, x => x.stars === 4)', () => {
    assert.isUndefined(findKey(testObj, x => x.stars === 4));
  });

});
