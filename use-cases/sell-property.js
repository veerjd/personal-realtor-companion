const { makeProperty } = require('../entities')

module.exports = function buildSellProperty({ propertyDb }) {
  return async function sellProperty(propertyInfo) {
    const property = makeProperty(propertyInfo)
    const exists = propertyDb.findOne({ where: { id: property.id } })
    if (!exists)
      throw new Error('You\'re trying to reject a property that doesn\'t exist.')

    property.markSold()
    return property
  }
}