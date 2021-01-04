// FUNCTION IMPLEMENTATION
const head = function(arr) {
  return arr[0];
};


// TEST CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([1, 2, 4]), 1);
assertEqual(head(['boo', 55]), 'boo');
assertEqual(head([true]), true);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);