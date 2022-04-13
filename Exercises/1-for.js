'use strict';

const sum = (...args) => {
  let sumVal = 0;
  for (let i = 0; i < args.length; i++) {
    sumVal += args[i];
  }
  return sumVal;
};

module.exports = { sum };
