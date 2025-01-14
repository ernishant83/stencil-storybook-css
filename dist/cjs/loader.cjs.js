'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9cc129fb.js');
const patch = require('./patch-d6ea6fe9.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["my-button.cjs",[[1,"my-button",{"label":[1],"size":[1],"variant":[1],"disabled":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
