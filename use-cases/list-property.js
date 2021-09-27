module.exports = function makeListOneProperty({ propertyDb }) {
  return async function listOneProperty({ propertyId }) {
    if (!propertyId) {
      throw new Error('You must supply a property id.')
    }
    const property = await propertyDb.findAll({
      where: {
        id: propertyId
      }
    })

    return property
  }
}