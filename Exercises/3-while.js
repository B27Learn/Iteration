'use strict';

const sum = (...args) => {
  let sumVal = 0;
  let i = 0;
  while (i < args.length) {
    sumVal += args[i++];
  }
  return sumVal;
};

module.exports = { sum };
