const flattenDeep = function(multiLevelArray) {
  const singleLevelArray = [];

  for (let i = 0; i < multiLevelArray.length; i++) {
    if (!Array.isArray(multiLevelArray[i])) {
      singleLevelArray.push(multiLevelArray[i]);
    } else {
      flattenDeep(multiLevelArray[i]);
    }
  }
  return singleLevelArray;
};

module.exports = flattenDeep;