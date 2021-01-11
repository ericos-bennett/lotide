/// FUNCTION IMPLEMENTATION

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.forEach((e, i) => {
    if (Array.isArray(e)) {
      return eqArrays(e, arr2[i]);
    } else if (e !== arr2[i]) {
      return false;
    }
  });
  
  return true;
};

/// TEST CODE

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);