module.exports.sortBy = function({ type, array, ascending = true }) {
  const newArray = [...array]
  newArray.sort((result1, result2) => {
    if (result1[type] < result2[type]) {
      if (ascending)
        return -1
      else
        return 1
    } if (result1[type] > result2[type]) {
      if (ascending)
        return 1
      else
        return -1
    } if (result1[type] === result2[type]) {
      return 0
    }
  })

  return newArray
}

module.exports.postalCodesArray = [
  'J0T',
  'J0R',
  'J5J',
  'J5K',
  'J5L',
  'J5M',
  'J5N',
  'J6A',
  'J6E',
  'J6V',
  'J6W',
  'J6X',
  'J6Y',
  'J6Z',
  'J7A',
  'J7B',
  'J7C',
  'J7E',
  'J7G',
  'J7H',
  'J7J',
  'J7K',
  'J7L',
  'J7M',
  'J7N',
  'J7P',
  'J7R',
  'J7Y',
  'J7Z',
  'J8A',
  'J8B',
  'J8C',
  'J8E',
  'J8G',
  'J8H',
]