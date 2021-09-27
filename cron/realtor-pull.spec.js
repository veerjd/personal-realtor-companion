/* eslint-disable no-console */
const makeRealtorPull = require('./realtor-pull');

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

// const type = 'ID'
// const type = 'price'
const type = 'landSize'

describe('pull realtor listings', () => {
  it('should pull sorted listings based on \'type\'', async () => {
    try {
      const realtorPull = makeRealtorPull()

      const results = await realtorPull(nord, type)
      console.log(results, results.length)
    } catch (error) {
      console.error
    }
  });
});
