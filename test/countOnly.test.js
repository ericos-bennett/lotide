const assert = require('chai').assert;
const countOnly = require('../src/countOnly');

const testNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const testResults = countOnly(testNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  
  it('returns 1 for testResults["Jason"]', () => {
    assert.strictEqual(testResults["Jason"], 1);
  });

  it('returns undefined for testResults["Karima"]', () => {
    assert.strictEqual(testResults["Karima"], undefined);
  });

  it('returns 2 for testResults["Fang"]', () => {
    assert.strictEqual(testResults["Fang"], 2);
  });

  it('returns undefined for testResults["Agouhanna"]', () => {
    assert.strictEqual(testResults["Agouhanna"], undefined);
  });

});
