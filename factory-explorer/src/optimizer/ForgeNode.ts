import { recipeLibrary } from "../data";
import { SimpleMaker } from "../data/simpleTypes";
import IForge from "../model/IForge";
import KnownTags from "../model/KnownTags";
import Maker from "../model/Maker";
import Port from "../model/Port";

export default class ForgeNode {

    public readonly children: ForgeNode[];
    public readonly forge: IForge;


    private static getMaker(port: Port, includeExtractors: boolean = true, includeGenerators: boolean = true) : Maker | null {
        let results: SimpleMaker[] = recipeLibrary
            .getByOutput(port.itemName)
            .filter(template => !template.tags.includes(KnownTags.Finite))
            .sort((a, b) => a.tags.includes(KnownTags.Preferred) ? -1 : 0);

        if(!includeExtractors) {
            results = results.filter(template => !template.tags.includes(KnownTags.Extractor));
        }

        if(!includeGenerators) {
            results = results.filter(template => !template.tags.includes(KnownTags.Generator));
        }

        if(results.length > 0){
            return Maker.fromSimpleMaker(results[0]);
        } else {
            return null;
        }
    }

    public simpleBuild(includeExtractors: boolean = true, includeGenerators: boolean = true) {
        this.forge.inputs
        .map(input => ForgeNode.getMaker(input, includeExtractors, includeGenerators))
        .filter(entry => !!entry)
        .forEach(entry => this.children.push(new ForgeNode(entry!)));

        this.forge.inputs.forEach(targetInput => {
            const output = this.children.find(child => child.forge.getOutputByItem(targetInput.itemName));

            if(output) {
                const multiplier = targetInput.rate / output!.forge.getOutputByItem(targetInput.itemName)!.baseRate;
                output.forge.instances = Math.ceil(multiplier);
            }
        });

        return this;
    }


    public flatten(list: IForge[] = []) : IForge[] {
        list.push(this.forge);

        this.children.forEach(child => child.flatten(list));

        return list;
    }

    constructor(forge: IForge, children: ForgeNode[] = []) {
        this.forge = forge;
        this.children = children;
    }
}