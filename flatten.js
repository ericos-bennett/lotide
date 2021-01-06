// FUNCTION IMPLEMENTATION

const flatten = function(array) {
  let flatArray = [];
  for (let el of array) {
    if (!Array.isArray(el)) {
      flatArray.push(el);
    } else {
      for (let item of el) {
        flatArray.push(item);
      }
    }
  }
  return flatArray;
};

// TEST CODE

const assertArraysEqual = function(arr1, arr2) {
  let msg = '✅✅✅ These arrays are identical!';
  
  if (arr1.length !== arr2.length) {
    msg = '🛑🛑🛑 These arrays are not identical.';
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      msg = '🛑🛑🛑 These arrays are not identical.';
    }
  }
  console.log(msg);
};

assertArraysEqual(flatten([4, 64, [2, 75], 3, []]), [4, 64, 2, 75, 3]);