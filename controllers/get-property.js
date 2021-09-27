module.exports = function makeGetProperty({ listOneProperty }) {
  return async function getProperty(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const property = await listOneProperty({
        propertyId: httpRequest.params.id
      })
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