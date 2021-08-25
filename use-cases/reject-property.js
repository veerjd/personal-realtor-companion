const { makeProperty } = require('../entities')

module.exports = function buildRejectProperty({ propertyDb }) {
  return async function rejectProperty(propertyInfo) {
    const property = makeProperty(propertyInfo)
    const exists = propertyDb.findOne({ where: { id: property.id } })
    if (!exists)
      throw new Error('You\'re trying to reject a property that doesn\'t exist.')

    property.markRejected()
    return property
  }
}