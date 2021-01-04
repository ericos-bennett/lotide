// FUNCTION IMPLEMENTATION
const tail = function(arr) {
  return (arr && arr.length > 1) ? arr.slice(1) : [];
};


// TEST CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const testArr = ['bla', 'doo', 'okok'];

assertEqual(tail([1, 43, 2])[1], 2);
assertEqual(tail([1, 43, 2]).length, 2);
assertEqual(tail([]).length, 0);
assertEqual(tail().length, 0);
assertEqual(tail(['do', 're'])[0], 're');
assertEqual(tail(testArr)[0], 'doo');
assertEqual(testArr.length, 3);
assertEqual(tail([1]).length, 0);