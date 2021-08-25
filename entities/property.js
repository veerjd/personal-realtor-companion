module.exports = function buildMakeProperty() {
  return function makeProperty({
    id,
    mlsId,
    city,
    postalCode,
    url,
    landSize = 0,
    bedrooms,
    isSold = false,
    isRejected = false,
    createdAt = Date.now(),
    modifiedAt = Date.now(),
  } = {}) {
    if (!mlsId) {
      throw new Error('Property must have an MLS id.')
    }
    if (!postalCode) {
      throw new Error('Property must have a postal code.')
    }
    if (!Number.isInteger(landSize)) { // TODO add steps validation from Steps injection
      throw new Error('Land size must be a number.')
    }

    return Object.freeze({
      getId: () => id,
      getMlsId: () => mlsId,
      getCity: () => city,
      getPostalCode: () => postalCode,
      getUrl: () => url,
      getLandSize: () => landSize,
      getBedrooms: () => bedrooms,
      getCreatedAt: () => createdAt,
      getModifiedAt: () => modifiedAt,
      isSold: () => isSold,
      markSold: () => isSold = true,
      isRejected: () => isRejected,
      markRejected: () => isRejected = true,
    })
  }
}