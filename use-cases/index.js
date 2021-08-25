const buildCreateProperty = require('./create-property')
const buildRejectProperty = require('./reject-property')
const buildSellProperty = require('./sell-property')
const buildListProperties = require('./list-properties')
const buildListOneProperty = require('./list-property')

const { propertyDb } = require('../database')

const createProperty = buildCreateProperty({ propertyDb })
const rejectProperty = buildRejectProperty({ propertyDb })
const sellProperty = buildSellProperty({ propertyDb })
const listProperties = buildListProperties({ propertyDb })
const listOneProperty = buildListOneProperty({ propertyDb })

module.exports = Object.freeze({
  createProperty,
  rejectProperty,
  sellProperty,
  listProperties,
  listOneProperty,
})