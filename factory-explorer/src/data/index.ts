import RecipeLibrary from './RecipeLibrary';

import setup from './setup';

const recipes = new RecipeLibrary();

setup.forEach(entry => recipes.addRecipe(entry));

export const recipeLibrary = recipes;