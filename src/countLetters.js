// FUNCTION IMPLEMENTATION
const countLetters = function(str) {
  let lowerNoSpaces = str.split(' ').join('').toLowerCase();
  console.log(lowerNoSpaces);
  let result = {};
  for (let char of lowerNoSpaces) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  console.log(result);
  return result;
};

// TEST CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(countLetters('LH LAEDA    FM')['l'], 2);