import RecipeLibrary from './RecipeLibrary';

import setup from './setup';

const recipes = new RecipeLibrary();

setup.forEach(entry => recipes.addRecipe(entry));

console.log(recipes.filterByInput('slug').map(r => r.recipeName));

export const recipeLibrary = recipes;