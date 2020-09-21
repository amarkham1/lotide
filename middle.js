const middle = function(array) {
  let middleArray = [];
  if (array.length > 2 && array.length % 2 === 1) {
    middleArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 2 && array.length % 2 === 0) {
    middleArray.push(array[Math.floor(array.length / 2) - 1]);
    middleArray.push(array[Math.floor(array.length / 2)]);
  }
  return middleArray;
};

module.exports = middle;