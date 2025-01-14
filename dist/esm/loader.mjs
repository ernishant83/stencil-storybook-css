import { b as bootstrapLazy } from './index-82e155b0.js';
import { a as patchEsm } from './patch-075e5e5f.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-button",[[1,"my-button",{"label":[1],"size":[1],"variant":[1],"disabled":[4]}]]]], options);
  });
};

export { defineCustomElements };
