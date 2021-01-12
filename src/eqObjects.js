const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let property in object1) {
    if (object1[property] instanceof Array && object2[property] instanceof Array) {
      if (!eqArrays(object1[property], object2[property])) {
        return false;
      }
    } else if (object1[property] !== object2[property]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;