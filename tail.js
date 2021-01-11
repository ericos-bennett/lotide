const tail = function(arr) {
  return (arr && arr.length > 1) ? arr.slice(1) : [];
};

module.exports = tail;