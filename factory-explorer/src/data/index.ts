import Maker from '../model/Maker';
import RecipeLibrary from './RecipeLibrary';

import setup from './setup';

const recipes = new RecipeLibrary();

setup.forEach(entry => recipes.addRecipe(entry.recipeName,  (() => Maker.fromSimpleMaker(entry))))

export const getMaker = function getRecipe(name: string) : Maker {
    const result = recipes.create(name);

    return result;
}