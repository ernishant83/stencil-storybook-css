'use strict';

const index = require('./index-9cc129fb.js');
const patch = require('./patch-d6ea6fe9.js');

patch.patchBrowser().then(options => {
  return index.bootstrapLazy([["my-button.cjs",[[1,"my-button",{"label":[1],"size":[1],"variant":[1],"disabled":[4]}]]]], options);
});
