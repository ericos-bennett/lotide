// FUNCTION IMPLEMENTATION

const middle = function(arr) {
  let middleArr = [];
  if (arr.length < 3) {
    return middleArr;
  } else if (arr.length % 2 === 1) {
    middleArr.push(arr[Math.floor(arr.length / 2)]);
    return middleArr;
  } else {
    middleArr.push(arr[arr.length / 2 - 1]);
    middleArr.push(arr[arr.length / 2]);
    return middleArr;
  }
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

assertArraysEqual(middle([1,2,4,5]), [2,4]);
assertArraysEqual(middle([4,'A2',10]), ['A2']);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
