const flatten = (multiLevelArray) => {
  const singleLevelArray = [];
  for (let i = 0; i < multiLevelArray.length; i++) {
    if (!Array.isArray(multiLevelArray[i])) {
      singleLevelArray.push(multiLevelArray[i]);
    } else {
      for (let j = 0; j < multiLevelArray[i].length; j++) {
        singleLevelArray.push(multiLevelArray[i][j]);
      }
    }
  }
  return singleLevelArray;
};

module.exports = flatten;