const { makeProperty } = require('../entities')

module.exports = function buildCreateProperty({ propertyDb }) {
  return async function createProperty(propertyInfo) {
    try {
      const property = makeProperty(propertyInfo)
      const exists = await propertyDb.findById({ id: property.getId() })
      if (exists)
        throw new Error('You\'re trying to create a property with the same id as an existant one.')

      await propertyDb.insert(property)

      return property
    } catch (error) {
      throw error
    }
  }
}