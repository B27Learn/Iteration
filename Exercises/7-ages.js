'use strict';

const ages = persons => {
  const res = {};
  for (const persName in persons) {
    const { born, died }= persons[persName];
    res[persName] = died - born;
  }
  return res;
};

module.exports = { ages };
