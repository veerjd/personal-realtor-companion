const makeRealtorPull = require('./realtor-pull')
const makeEmailService = require('./email-service')
// const { create } = require('../use-cases')

const emailService = makeEmailService()
const realtorPull = makeRealtorPull()

const cronFn = Object.freeze({
  emailService,
  realtorPull,
})

module.exports = cronFn