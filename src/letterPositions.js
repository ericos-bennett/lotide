const letterPositions = function(str) {
  const results = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (!results[str[i]]) {
        results[str[i]] = [];
      }
      results[str[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;
