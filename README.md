# Check Pull Request Title

![Version](https://img.shields.io/github/v/release/dylanvann/check-pull-request-title?style=flat-square)

A GitHub action that checks that a PR title matches a regex patter.

Could be used for:

- Enforcing any commit convention.
- Enforcing including a Jira ticket reference in the title.
- Enforcing using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

This is intended to be used with the [Autosquash](https://github.com/tibdex/autosquash) action so that squashed commit messages follow a convention.

# Example Workflow

```yml
name: 'Jira Check'
on:
  pull_request:
    types:
      # Check title when opened.
      - opened
      # Check title when new commits are pushed.
      # Required to use as a status check.
      - synchronize

jobs:
  publish:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v1
      - uses: dylanvann/check-pull-request-title@v1
        with:
          # Match pull request titles in the form UI-1234 - Message.
          pattern: '^UI-\d* - '
```
