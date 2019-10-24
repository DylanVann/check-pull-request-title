
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pull-request-title-check.cjs.production.min.js')
} else {
  module.exports = require('./pull-request-title-check.cjs.development.js')
}
