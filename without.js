// FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  let output = [];
  for (let el of source) {
    if (itemsToRemove.indexOf(el) === -1) {
      output.push(el);
    }
  }
  return output;
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
assertArraysEqual(without([1,2,3],[4]), [1,2,3]);
assertArraysEqual(without([1,2,3],[2]), [1,3]);
assertArraysEqual(without([1,2,3],[2,5,3]), [1]);
assertArraysEqual(without([1,'2',3,'b',true],[2,'a',true]), [1,'2',3,'b']);