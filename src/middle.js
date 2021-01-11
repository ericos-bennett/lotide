const middle = (arr) => {
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

module.exports = middle;