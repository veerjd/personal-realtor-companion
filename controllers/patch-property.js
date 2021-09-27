module.exports = function makePatchProperty({ editProperty }) {
  return async function patchProperty(httpRequest) {
    try {
      const { ...propertyInfo } = httpRequest.body

      const toEdit = {
        ...propertyInfo,
        id: httpRequest.params.id
      }
      const patched = await editProperty(toEdit)
      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(patched.modifiedOn).toUTCString()
        },
        statusCode: 200,
        body: { patched }
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      if (e.name === 'RangeError') {
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 404,
          body: {
            error: e.message
          }
        }
      }
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}