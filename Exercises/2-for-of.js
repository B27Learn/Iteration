'use strict';

const sum = (...args) => {
  let sumVal = 0;
  for (const val of args) {
    sumVal += val;
  }
  return sumVal;
};

module.exports = { sum };
