const countLetters = function(str) {
  let lowerNoSpaces = str.split(' ').join('').toLowerCase();
  let result = {};
  for (let char of lowerNoSpaces) {
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
