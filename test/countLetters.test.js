const assert = require('chai').assert;
const countLetters = require('../src/countLetters');

describe('#countLetters', () => {
  
  it('returns 2 for countLetters("LH LAEDA    FM")["l"]', () => {
    assert.strictEqual(countLetters('LH LAEDA    FM')['l'], 2);
  });

});
