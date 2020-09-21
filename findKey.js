const findKey = (object, callback) => {
  for (const [key, value] of Object.entries(object)) {
    if (callback(key) || callback(value)) {
      return key;
    }
  }
};

module.exports = findKey;