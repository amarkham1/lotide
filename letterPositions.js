const letterPositions = function(sentence) {
  const result = {};
  let i = 0;
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (!result[letter]) {
        result[letter] = [];
      }
      result[letter].push(i);
    }
    i++;
  }
  return result;
};

module.exports = letterPositions;