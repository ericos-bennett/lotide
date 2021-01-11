const assertArraysEqual = function(arr1, arr2) {
  let msg = `✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`;
  
  if (arr1.length !== arr2.length) {
    msg = `🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      msg = `🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`;
    }
  }
  console.log(msg);
};

module.exports = assertArraysEqual;