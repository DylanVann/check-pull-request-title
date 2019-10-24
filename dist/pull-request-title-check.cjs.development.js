'use strict';

var core = require('@actions/core');
var github = require('@actions/github');

function run() {
  const pattern = core.getInput('pattern');
  const regex = new RegExp(pattern);
  const title = github.context.payload && github.context.payload.pull_request && github.context.payload.pull_request.title;
  core.info(title);
  const isValid = regex.test(title);

  if (!isValid) {
    core.setFailed(`Pull request title "${title}" does not match pattern ${pattern}.`);
  }
}

run();
//# sourceMappingURL=pull-request-title-check.cjs.development.js.map
