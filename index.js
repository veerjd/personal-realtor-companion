require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const {
  getProperty,
  getProperties,
  notFound,
  postProperty,
  patchProperty
} = require('./controllers')
const makeCallback = require('./express-callback')

// const apiRoot = process.env.DM_BASE_URL
const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.post('/property', makeCallback(postProperty))
app.patch('/property/:id', makeCallback(patchProperty))
app.get('/properties', makeCallback(getProperties))
app.get('/property/:id', makeCallback(getProperty))
app.use(makeCallback(notFound))


// listen for requests
app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3001')
})