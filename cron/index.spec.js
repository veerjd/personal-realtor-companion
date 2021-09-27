const { emailService, realtorPull } = require('./index')
const { makeProperty } = require('../entities')



describe('cron index', () => {
  it('should get at least one result', async () => {
    try {
      const first = (await realtorPull(nord))[0]
      const firstProperty = makeProperty(first)
      console.log(firstProperty.getAll())
    } catch (error) {
      console.error
    }
  });
});