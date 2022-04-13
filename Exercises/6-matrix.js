'use strict';

const max = matrix => {
  let maxVal = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      const num = matrix[i][n];
      maxVal = num > maxVal ? num : maxVal;
    }
  }
  return maxVal;
};

module.exports = { max };
