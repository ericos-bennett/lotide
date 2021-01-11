const assertArraysEqual = require('../src/assertArraysEqual');

console.log('#assertArraysEqual Tests');
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,'2',3], [1,2,3]);
assertArraysEqual([1,2], [1,2,3,4]);
console.log('');