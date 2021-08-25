require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const {
  deleteComment,
  getComments,
  notFound,
  postComment,
  patchComment
} = require('./controllers')
const makeCallback = require('./express-callback')

const apiRoot = process.env.DM_API_ROOT
const app = express()
app.use(bodyParser.json())
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.post(`${apiRoot}/comments`, makeCallback(postComment))
app.delete(`${apiRoot}/comments/:id`, makeCallback(deleteComment))
app.delete(`${apiRoot}/comments`, makeCallback(deleteComment))
app.patch(`${apiRoot}/comments/:id`, makeCallback(patchComment))
app.patch(`${apiRoot}/comments`, makeCallback(patchComment))
app.get(`${apiRoot}/comments`, makeCallback(getComments))
app.use(makeCallback(notFound))


// listen for requests
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000')
})


module.exports = app