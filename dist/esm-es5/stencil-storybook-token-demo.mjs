import { b as bootstrapLazy } from './index-82e155b0.js';
import { p as patchBrowser } from './patch-075e5e5f.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["my-button", [[1, "my-button", { "label": [1], "size": [1], "variant": [1], "disabled": [4] }]]]], options);
});
