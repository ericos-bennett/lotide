const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,4,56,12];
const bools = [true,true,false];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(nums, num => num * 2), [2,8,112,24]);
assertArraysEqual(map(bools, bool => !bool), [false, false, true]);