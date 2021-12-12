export default class RecipeLibrary {
    private recipes: Map<string, Function>;

    public addRecipe(name: string, fn: Function) {
        if(this.recipes.has(name)) {
            throw new Error(`Cannot add duplicate recipe: ${name}`);
        }

        this.recipes.set(name, fn);
    }

    public create(name: string) : any {
        if(!this.recipes.has(name)) {
            throw new Error(`Cannot find recipe: ${name}`);
        }

        const fn = this.recipes.get(name);

        return fn!();
    }

    public addRecipes(recipeList: [string, Function][]) {
        recipeList.forEach(recipe => this.addRecipe(recipe[0], recipe[1]));
    }

    constructor() {
        this.recipes = new Map<string, Function>();
    }
}
