import ExtractorLevel, { getBuilding } from "./ExtractorLevel";
import NodeQuality, { getTag } from "./NodeQuality";
import { SimpleMaker } from "./simpleTypes";
// import KnownTags from '../model/KnownTags';

class LookupTable<T> {
    private _entries : {[key: string]: T[]};
    private _allowDuplicates;


    public has(key: string) {
        return !!this._entries[key];
    }

    public get(key: string) : T[] {
        return this._entries[key]?.map(name => name) || [];
    }

    public first(key: string): T {
        if(!this._entries[key]) {
            throw new Error(`LookupTable key: ${key} does not exist!`);
        }

        return this._entries[key][0];
    }

    public keys() {
        return Object.keys(this._entries);
    }

    public filter(text: string, caseSensitive: boolean) : T[] {
        const regex = new RegExp(`(${text}).*`, `g${caseSensitive ? '' : 'i'}`);

        return Object.keys(this._entries)
            .filter(key => !!key.match(regex))
            .flatMap(key => this.get(key));
    }

    public add(key: string, item: T) {
        if(!this._entries[key]) {
            this._entries[key] = [];
        }

        if(this._entries[key].length >= 1 && !this._allowDuplicates) {
            throw new Error(`Cannot add duplicate item: ${key}`);
        }

        this._entries[key].push(Object.assign({}, item));
    }

    constructor(allowDuplicates: boolean = true) {
        this._entries = {};
        this._allowDuplicates = allowDuplicates;
    }

}

export default class RecipeLibrary {
    private _recipesByName: LookupTable<SimpleMaker>;
    private _recipesByInputs: LookupTable<string>;
    private _recipesByOutputs: LookupTable<string>;
    private _recipesByBuilding: LookupTable<string>;
    private _recipesByTags: LookupTable<string>;

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

        this._recipesByName.add(makerActual.recipeName, makerActual);
        this._recipesByBuilding.add(makerActual.buildingName, makerActual.recipeName);

        makerActual.inputs.forEach(port => this._recipesByInputs.add(port.item, makerActual.recipeName));
        makerActual.outputs.forEach(port => this._recipesByOutputs.add(port.item, makerActual.recipeName));
        makerActual.tags.forEach(tag => this._recipesByTags.add(tag, makerActual.recipeName));

        return this;
    }

    public addRecipes(recipeList: SimpleMaker[]) {
        recipeList.forEach(recipe => this.addRecipe(recipe));
    }

    public hasName(name: string) : boolean {
        return this._recipesByName.has(name);
    }

    public getByName(name: string) : SimpleMaker {
        if(!this.hasName(name)) {
            throw new Error(`Recipe: ${name} does not exist!`);
        }

        return this._recipesByName.first(name);
    }

    public filterByName(name: string, caseSensitive: boolean = false) : SimpleMaker[] {
        return this._recipesByName.filter(name, caseSensitive);
    }

    public getByTag(tag: string) : SimpleMaker[] {
        return this._recipesByTags.get(tag).map(name => this.getByName(name));
    }

    public filterByTag(tag: string, caseSensitive: boolean = false) : SimpleMaker[] {
        return this._recipesByTags.filter(tag, caseSensitive).map(r => this.getByName(r));
    }


    public getByInput(item: string) : SimpleMaker[] {
        return this._recipesByInputs.get(item).map(name => this.getByName(name));
    }

    public filterByInput(item: string, caseSensitive: boolean = false) : SimpleMaker[] {
        return this._recipesByInputs.filter(item, caseSensitive).map(r => this.getByName(r));
    }


    public getByOutput(item: string) : SimpleMaker[] {
        return this._recipesByOutputs.get(item).map(name => this.getByName(name));
    }

    public filterByOutput(item: string, caseSensitive: boolean = false) : SimpleMaker[] {
        return this._recipesByOutputs.filter(item, caseSensitive).map(r => this.getByName(r));
    }


    public getByBuilding(building: string) : SimpleMaker[] {
        return this._recipesByBuilding.get(building).map(name => this.getByName(name));
    }

    public filterByBuilding(building: string, caseSensitive: boolean = false) : SimpleMaker[] {
        return this._recipesByBuilding.filter(building, caseSensitive).map(r => this.getByName(r));
    }


    public getExtractor(item: string, level: ExtractorLevel = ExtractorLevel.Mark2, quality: NodeQuality = NodeQuality.Normal) : SimpleMaker {
        return this.getByOutput(item)
            .filter(r => getBuilding(level).buildingName === r.buildingName)
            .filter(r => r.tags.includes(getTag(quality)))[0];
    }

    public getAll() : SimpleMaker[] {
        return this.getNames().map(key => this.getByName(key));
    }

    public toJson() {
        return JSON.stringify(this.getAll(), null, '\t');
    }

    public getNames() :string[] {
        return this._recipesByName.keys();
    }

    public get length() {
        return this.getNames().length;
    }





    constructor() {
        this._recipesByName = new LookupTable<SimpleMaker>(false);
        this._recipesByInputs =  new LookupTable<string>();
        this._recipesByOutputs =  new LookupTable<string>();
        this._recipesByOutputs =  new LookupTable<string>();
        this._recipesByBuilding =  new LookupTable<string>();
        this._recipesByTags =  new LookupTable<string>();
    }
}
