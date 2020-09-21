const without = function(source, itemsToRemove) {
  let removedArray = [];

  for (let i = 0; i < source.length; i++) {
    let keepItemFlag = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        keepItemFlag = false;
      }
    }
    if (keepItemFlag) {
      removedArray.push(source[i]);
    }
  }

  return removedArray;
};

module.exports = without;