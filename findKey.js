// FUNCTION IMPLEMENTATION

const findKey = function(obj, callback) {
  for (let prop in obj) {
    if (callback(obj[prop])) {
      return prop;
    }
  }
};

// TEST CODE

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(testObj, x => x.stars === 2), 'noma');
assertEqual(findKey(testObj, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(testObj, x => x.stars === 4), undefined);