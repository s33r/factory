import ExtractorLevel, { getBuilding } from "./ExtractorLevel";
import NodeQuality, { getTag } from "./NodeQuality";
import { SimpleMaker } from "./simpleTypes";
import KnownTags from '../model/KnownTags';

export default class RecipeLibrary {
    private _recipesByName: Map<string, SimpleMaker>;
    private _recipesByInputs: Map<string, string[]>
    private _recipesByOutputs: Map<string, string[]>
    private _recipesByBuilding: Map<string, string[]>
    private _recipesByTags: Map<string, string[]>

    private validateSimpleMaker(simpleMaker: SimpleMaker | null) : Error | null {
        if(!simpleMaker) {
            return new Error('')
        }

        if(this._recipesByName.has(simpleMaker.recipeName)) {
            return new Error(`Cannot add duplicate recipe: ${simpleMaker.recipeName}`);
        }

        return null;
    }

    public addRecipe(maker: SimpleMaker) : RecipeLibrary {
        const validationResult = this.validateSimpleMaker(maker);

        if(validationResult) {
            throw validationResult;
        }



        const makerActual = Object.assign({}, maker);

        this._recipesByName.set(maker.recipeName, makerActual);


        if(!this._recipesByBuilding.has(makerActual.buildingName)) {
            this._recipesByBuilding.set(makerActual.buildingName, []);
        }

        this._recipesByBuilding.get(makerActual.buildingName)!.push(makerActual.recipeName);

        makerActual.inputs.forEach(port => {
            if(!this._recipesByInputs.has(port.item)) {
                this._recipesByInputs.set(port.item, []);
            }

            this._recipesByInputs.get(port.item)!.push(makerActual.recipeName);
        });

        makerActual.outputs.forEach(port => {
            if(!this._recipesByOutputs.has(port.item)) {
                this._recipesByOutputs.set(port.item, []);
            }

            this._recipesByOutputs.get(port.item)!.push(makerActual.recipeName);
        });

        makerActual.tags.forEach(tag => {
            if(!this._recipesByTags.has(tag)) {
                this._recipesByTags.set(tag, []);
            }

            this._recipesByTags.get(tag)!.push(makerActual.recipeName);
        });

        return this;
    }

    public addRecipes(recipeList: SimpleMaker[]) {
        recipeList.forEach(recipe => this.addRecipe(recipe));
    }

    public hasName(name: string) : boolean {
        return this._recipesByName.has(name);
    }

    public getByName(name: string) : SimpleMaker {
        if(!this._recipesByName.has(name)) {
            throw new Error(`Recipe: ${name} does not exist!`);
        }

        const result = Object.assign({}, this._recipesByName.get(name))
        return result;
    }

    public getByTag(tag: string) : SimpleMaker[] {
        return this._recipesByTags.get(tag)?.map(name => this.getByName(name)) || [];
    }

    public getByInput(item: string) : SimpleMaker[] {
        return this._recipesByInputs.get(item)?.map(name => this.getByName(name)) || [];
    }

    public getByOutput(item: string) : SimpleMaker[] {
        return this._recipesByOutputs.get(item)?.map(name => this.getByName(name)) || [];
    }

    public getByBuilding(building: string) : SimpleMaker[] {
        return this._recipesByBuilding.get(building)?.map(name => this.getByName(name)) || [];
    }

    public getExtractor(item: string, level: ExtractorLevel = ExtractorLevel.Mark2, quality: NodeQuality = NodeQuality.Normal) : SimpleMaker {
        return this.getByOutput(item)
            .filter(r => getBuilding(level).buildingName === r.buildingName)
            .filter(r => r.tags.includes(getTag(quality)))[0];
    }

    public getAll() : SimpleMaker[] {
        return Array.from(this._recipesByName.values());
    }

    public toJson() {
        return JSON.stringify(this.getAll(), null, '\t');
    }

    constructor() {
        this._recipesByName = new Map<string, SimpleMaker>();
        this._recipesByInputs = new Map<string, string[]>();
        this._recipesByOutputs = new Map<string, string[]>();
        this._recipesByOutputs = new Map<string, string[]>();
        this._recipesByBuilding = new Map<string, string[]>();
        this._recipesByTags = new Map<string, string[]>();
    }
}
