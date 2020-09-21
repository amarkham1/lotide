const takeUntil = (array, callback) => {
  let results = [];
  let i = 0;
  while (i < array.length && !callback(array[i])) {
    results.push(array[i]);
    i++;
  }
  return results;
};

module.exports = takeUntil;