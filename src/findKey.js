const findKey = function(object, callback) {
  for (let prop in object) {
    if (callback(object[prop])) {
      return prop;
    }
  }
};

module.exports = findKey;
