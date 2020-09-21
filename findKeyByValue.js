const findKeyByValue = function(objectToSearch, searchValue) {
  for (const key of Object.keys(objectToSearch)) {
    if (objectToSearch[key] === searchValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;