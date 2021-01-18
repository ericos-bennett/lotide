const eqObjRec = (item1, item2) => {
  if (typeof item1 !== 'object' && typeof item2 !== 'object')
    return item1 === item2;
  if (
    item1.length !== item2.length ||
    Object.keys(item1).length !== Object.keys(item2).length
  )
    return false;
  for (const e in item1) {
    if (typeof item1[e] !== 'object') {
      if (item1[e] !== item2[e]) return false;
    } else {
      return eqObjRec(item1[e], item2[e]);
    }
  }
  return true;
};

module.exports = eqObjRec;
