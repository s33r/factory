import IForge from './IForge';
import Port from './Port';
import Maker from './Maker';

import ForgeList from './ForgeList';
import { SimpleMaker } from '../data/simpleTypes';


/**
 * A factory combines Extractors, Generators and Makers to represent an end-to-end supply chain
 */
export default class Factory implements IForge {
    public name: string;
    public instances: number;
    public readonly efficiency = 1;
    public readonly tags: string[];

    private _list : ForgeList;

    public get entries() : IForge[] {
        return this._list.entries;
    }

    public get power() : number {
        return this._list.power;
    }

    public get totalDemand() {
        return this._list.totalDemand;
    }

    public get totalSupply() {
        return this._list.totalSupply;
    }

    public get buildingName() {
        return this.name;
    }

    public get basePower() {
        return this._list.basePower;
    }
    //TODO: These need to be calculated based on internal consumption optimizer
    get inputs() : ReadonlyArray<Port> {
        return this._list.inputs;
    }

    get outputs() : ReadonlyArray<Port> {
        return this._list.outputs;
    }

    public condense() {
        this._list.condense();
    }

    public add(maker: SimpleMaker | Maker) {
        let template: SimpleMaker;

        if(maker instanceof Maker) {
            const m: Maker = maker;
            template = m.simplify();
        } else {
            template = maker;
        }

        const newMaker = Maker.fromSimpleMaker(template);
        this._list.entries.push(newMaker);

        return this;
    }

    public getOutputByItem(item: string) {
        return this._list.getOutputByItem(item);
    }



    constructor(name: string, instances: number = 1, tags: string[] = []) {
        this.name = name;
        this.instances = instances;
        this.tags = tags;

        this._list = new ForgeList(`${this.name} -> Makers`);
    }

}