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
  'J0R', //  Prévost
  'J5J', //  Sainte-Sophie
  'J5K', //  Saint-Colomban
  'J5L', //  Saint-Jérome-Ouest
  // 'J5N', //  Sainte-Anne-des-Plaines
  // 'J6A', //  Repentigny
  // 'J6E', //  Joliette
  'J6V', //  Terrebonne-Est
  'J6W', //  Terrebonne-Centre-Est
  'J6X', //  Terrebonne-Centre-Ouest
  'J6Y', //  Terrebonne-Ouest
  'J6Z', //  Lorraine-BDF
  'J7A', //  Rosemère-Sud
  'J7B', //  Rosemère-Nord
  'J7C', //  Blainville
  'J7E', //  Sainte-Thérèse
  'J7G', //  Boisbriand-Sud
  'J7H', //  Boisbriand-Nord
  'J7J', //  Saint-Janvier (Mirabel)
  'J7K', //  Mascouche-Est
  'J7L', //  Mascouche-Ouest
  'J7M', //  La Plaine
  'J7N', //  Saint-Augustin (Mirabel)
  'J7P', //  Saint-Eustache
  'J7R', //  Saint-Eustache + Deux-Montagnes
  'J7Y', //  Saint-Jérome-Centre
  'J7Z', //  Saint-Jérome-Est
]