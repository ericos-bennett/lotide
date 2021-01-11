// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../src/tail');

describe('#tail', () => {

  it('returns [43,2] for tail([1, 43, 2])', () => {
    assert.deepEqual(tail([1, 43, 2]), [43, 2]);
  });

  it('returns [] for tail([])', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns [] for tail()', () => {
    assert.deepEqual(tail(), []);
  });

  it('returns ["re"] for tail(["do", "re"])', () => {
    assert.deepEqual(tail(['do', 're']), ['re']);
  });

  it('returns ["doo", "okok"] for tail(["bla", "doo", "okok"])', () => {
    assert.deepEqual(tail(['bla', 'doo', 'okok']), ["doo", "okok"]);
  });

  it('returns [] for tail([1])', () => {
    assert.deepEqual(tail([1]), []);
  });

});
