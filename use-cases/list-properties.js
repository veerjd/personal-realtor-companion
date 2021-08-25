module.exports = function makeListProperties({ propertyDb }) {
  return async function listProperties() {
    const properties = await propertyDb.findAll()

    return properties
  }
}