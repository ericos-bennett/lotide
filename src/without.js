const without = function(source, itemsToRemove) {
  let output = [];
  for (let el of source) {
    if (itemsToRemove.indexOf(el) === -1) {
      output.push(el);
    }
  }
  return output;
};

module.exports = without;
