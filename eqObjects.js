// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let property in object1) {
    if (object1[property] instanceof Array && object2[property] instanceof Array) {
      if (!eqArrays(object1[property], object2[property])) {
        return false;
      }
    } else if (object1[property] !== object2[property]) {
      return false;
    }
  }

  return true;
};


// TEST CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqObjects({a:1, b:2}, {a:2, b:2}), false);
assertEqual(eqObjects({a:4, b:2}, {a:4, b:2}), true);
assertEqual(eqObjects({a:4, b:2}, {b:2}), false);
assertEqual(eqObjects({c:"1", d:["2",3]}, {d:["2",3], c:"1"}), true);
assertEqual(eqObjects({c:"1", d:["2",3]}, {c:"1", d:["2",3,4]}), false);