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

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,'2',3], [1,2,3]);
assertArraysEqual([1,2], [1,2,3,4]);