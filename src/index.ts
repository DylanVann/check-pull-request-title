import * as core from '@actions/core';
import * as github from '@actions/github';

function run() {
  // const myToken = core.getInput('repo-token');
  // const octokit = new github.GitHub(myToken);
  const context = github.context;
  core.info(JSON.stringify(context, null, 2));
  core.setFailed('It did not work.');
}

run();
