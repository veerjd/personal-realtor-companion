const {
  createProperty,
  rejectProperty,
  sellProperty,
  listProperties,
  listOneProperty,
} = require('../use-cases')
const makeGetProperties = require('./get-properties')
const makeGetProperty = require('./get-property')
const makePostProperty = require('./post-property')
const makePatchProperty = require('./patch-property')
const notFound = require('./not-found')

const getProperties = makeGetProperties({
  listProperties
})
const getProperty = makeGetProperty({
  listOneProperty
})
const postComment = makePostProperty({ createProperty })
const patchComment = makePatchProperty({ rejectProperty, sellProperty })

const propertyController = Object.freeze({
  getProperties,
  getProperty,
  notFound,
  postComment,
  patchComment
})

module.exports = propertyController