'use strict';

var core = require('@actions/core');
var github = require('@actions/github');

function run() {
  // const myToken = core.getInput('repo-token');
  // const octokit = new github.GitHub(myToken);
  var context = github.context;
  core.info(JSON.stringify(context, null, 2));
  core.setFailed('It did not work.');
}

run();
//# sourceMappingURL=jira-check.cjs.development.js.map
