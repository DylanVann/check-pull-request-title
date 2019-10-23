import { info, setFailed } from '@actions/core';
import { context } from '@actions/github';

function run() {
  // const myToken = core.getInput('repo-token');
  // const octokit = new github.GitHub(myToken);
  var context$1 = context;
  info(JSON.stringify(context$1, null, 2));
  setFailed('It did not work.');
}

run();
//# sourceMappingURL=jira-check.esm.js.map
