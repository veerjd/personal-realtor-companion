module.exports = function makeGetProperties({ listProperties }) {
  return async function getProperties(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const property = await listProperties()
      return {
        headers,
        statusCode: 200,
        body: property
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}