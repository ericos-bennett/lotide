const takeUntil = function(arr, callback) {
  let output = [];
  for (let element of arr) {
    if (callback(element)) {
      break;
    }
    output.push(element);
  }
  return output;
};

module.exports = takeUntil;
