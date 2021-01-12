const findKeyByValue = function(object, value) {
  for (let property in object) {
    if (object[property] === value) {
      return property;
    }
  }
};

module.exports = findKeyByValue;