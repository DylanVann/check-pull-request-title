
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./jira-check.cjs.production.min.js')
} else {
  module.exports = require('./jira-check.cjs.development.js')
}
