'use strict';

const sum = (...args) => {
  if (args.length < 1) return 0;

  let sumVal = 0;
  let i = 0;
  do { 
    sumVal += args[i];
  } while (++i < args.length);
  return sumVal;
};

module.exports = { sum };
