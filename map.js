const map = (array, callback) => {
  if (!callback) {
    return undefined;
  }
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
};

module.exports = map;