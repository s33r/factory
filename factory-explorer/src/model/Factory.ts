import IForge from './IForge';
import Port from './Port';
import Maker from './Maker';

import ForgeList from './ForgeList';
import { SimpleMaker } from '../data/simpleTypes';
import { simpleOptimizer } from '../optimizer';
import SupplyTable from './SupplyTable';



type CompletedMap = {
    [key: string]: number,
}

/**
 * A factory combines Extractors, Generators and Makers to represent an end-to-end supply chain
 */
export default class Factory implements IForge {
    public name: string;
    public instances: number;
    public readonly efficiency = 1;
    public readonly tags: string[];

    private _list : ForgeList;
    private _completed: CompletedMap;

    public get sortCode() {
        return this.name;
    }

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

        return this;
    }

    public add(maker: SimpleMaker | Maker, instances: number = 1) {
        let template: SimpleMaker;

        if(maker instanceof Maker) {
            const m: Maker = maker;
            template = m.simplify();
        } else {
            template = maker;
        }

        const newMaker = Maker.fromSimpleMaker(template);
        newMaker.instances = instances;

        this._list.entries.push(newMaker);

        return this;
    }

    public complete(name: string, instances: number = 1) {
        if(!this._completed[name]) {
            this._completed[name] = instances;
        } else {
            this._completed[name] += instances;
        }
    }

    public getTotalCompleted(name: string) {
        if(!this._completed[name]) {
            return 0;
        } else {
            return this._completed[name];
        }
    }

    public getOutputByItem(item: string) {
        return this._list.getOutputByItem(item);
    }

    public optimize() {
        this.condense();

        const results = simpleOptimizer(this._list.entries);

        this._list = new ForgeList(`${this.name} -> Makers`);

        results.forEach(result => this._list.entries.push(result));

        this.condense();

        return this;
    }

    public sort() {
        this._list.sort();
    }

    public getSupplyTable() : SupplyTable {
        const result = new SupplyTable();

        result.addForge(this);

        return result;
    }

    constructor(name: string, instances: number = 1, tags: string[] = []) {
        this.name = name;
        this.instances = instances;
        this.tags = tags;

        this._list = new ForgeList(`${this.name} -> Makers`);
        this._completed = {};
    }

}