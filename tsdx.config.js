const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const builtinModules = require('builtin-modules');

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  target: 'node',
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    // We want to bundle everything except built in modules.
    config.external = builtinModules;
    // This plugin isn't added by tsdx except in UMD mode, we need it though.
    // https://github.com/jaredpalmer/tsdx/blob/0a7a4692f70ccb2bfccb52460d2aad6aebe093a9/src/createRollupConfig.ts#L105
    config.plugins.push(
      commonjs({
        include: /\/node_modules\//,
      })
    );
    return config; // always return a config.
  },
};
