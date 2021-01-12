const flatten = function(arr) {
  let flatArray = [];
  for (let el of arr) {
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

module.exports = flatten;
