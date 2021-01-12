const assertObjectsEqual = require('../src/assertObjectsEqual');

console.log('#AssertObjectsEqual Tests');
assertObjectsEqual({a:1, b:2}, {a:2, b:2});
assertObjectsEqual({a:4, b:2}, {a:4, b:2});
assertObjectsEqual({a:4, b:2}, {b:2});
assertObjectsEqual({c:"1", d:["2",3]}, {d:["2",3], c:"1"});
assertObjectsEqual({c:"1", d:["2",3]}, {c:"1", d:["2",3,4]});
console.log('');