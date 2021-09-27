/* eslint-disable no-undef */
const { recipeDb, ingredientDb, stepDb } = require('../database')
const buildCreateRecipe = require('./create-recipe')
const recipeInfo = {
  // id: 1,
  userId: '217385992837922819',
  author: '217385992837922819',
  source: '217385992837922819',
  description: 'A Goodfoodie recipe',
  ingredients: [],
  steps: [],
  // curated: false
}
test('Returns a created recipe', async () => {
  try {
    const createRecipe = buildCreateRecipe({ recipeDb, ingredientDb, stepDb })
    const recipe = await createRecipe(recipeInfo)
    console.log(recipe)
    expect(recipe).toBeTruthy()
  } catch (error) {
    expect(error).toMatch('error');
  }
})