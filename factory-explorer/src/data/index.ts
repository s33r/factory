import RecipeLibrary from './RecipeLibrary';

import setup from './setup';

const recipes = new RecipeLibrary();

setup.forEach(entry => recipes.addRecipe(entry));

recipes.tagTerminals();

export const recipeLibrary = recipes;