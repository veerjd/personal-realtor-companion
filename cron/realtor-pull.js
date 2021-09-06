/* eslint-disable no-console */

const realtor = require('realtorca');
const { sortBy, postalCodesArray } = require('./util')

const nord = {
  ZoomLevel: 9,
  LatitudeMax: 46.14939,
  LongitudeMax: -73.27967,
  LatitudeMin: 45.38302,
  LongitudeMin: -75.87336,
  Sort: '1-D',
  PropertyTypeGroupID: 1,
  PropertySearchTypeId: 1,
  TransactionTypeId: 2,
  PriceMax: 400000,
  BedRange: '4-0',
  BathRange: '1-0',
  Currency: 'CAD',
  CultureId: 1,
  CurrentPage: 1,
  RecordsPerPage: 200,
}

module.exports = function makeRealtorPull() {
  return async function realtorPull() {
    try {
      let entriesPerPage = 200
      const propertyResults = []

      for (let i = 1; entriesPerPage === nord.RecordsPerPage; i++) {
        const { Results } = await realtor.post({ ...nord, CurrentPage: i })
        propertyResults.push(...Results)
        entriesPerPage = Results.length
      }

      const propertyArray = []

      for (const element of propertyResults) {
        element.fsa = element.PostalCode ? element.PostalCode.substring(0, 3) : 'J7J';
      }

      const validPropertyResults = propertyResults.filter(prop => postalCodesArray.some(fsa => fsa === prop.fsa))

      validPropertyResults.forEach(result => {
        let price = result.Property ? result.Property.Price.replace('$', '') : '0'
        price = price.replaceAll(',', '')

        let landSize = result.Land ? parseInt(result.Land.SizeTotal) : 0
        let unit = []
        if (landSize)
          unit = result.Land.SizeTotal.split(' ')

        if (unit[1] === 'sqft')
          landSize = Math.floor(landSize / 10.764)

        const newProperty = {
          mlsId: result.MlsNumber,
          url: 'https://www.realtor.ca' + result.RelativeURLFr,
          price: parseInt(price),
          landSize: landSize,
          postalCode: result.PostalCode,
          bedrooms: parseInt(result.Building.Bedrooms)
        }

        // id,
        //   mlsId,
        //   city,
        //   postalCode,
        //   url,
        //   landSize = 0,
        //   bedrooms,
        //   isSold = false,
        //   isRejected = false,
        //   createdAt = Date.now(),
        //   modifiedAt = Date.now(),

        propertyArray.push(newProperty)
      })

      // const type = 'ID'
      // const type = 'price'
      const type = 'landSize'

      const sortedPropertyArray = sortBy({
        type: type,
        array: propertyArray,
        ascending: false,
      })

      return [...sortedPropertyArray, `#${sortedPropertyArray.length}`]
    } catch (err) {
      console.log(err)
    }
  }
}