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

    private _makers : ForgeList<Maker>;

    public get entries() : Maker[] {
        return this._makers.entries;
    }

    public get power() : number {
        return this._makers.power;
    }

    public get totalDemand() {
        return this._makers.totalDemand;
    }

    public get totalSupply() {
        return this._makers.totalSupply;
    }


    //TODO: These need to be calculated based on internal consumption optimizer
    get inputs() : ReadonlyArray<Port> {
        return this._makers.inputs;

    }

    get outputs() : ReadonlyArray<Port> {
        return this._makers.outputs;

    }

    public condense() {
        this._makers.condense();
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
        this._makers.entries.push(newMaker);

        return this;
    }

    constructor(name: string, instances: number = 1) {
        this.name = name;
        this.instances = instances;

        this._makers = new ForgeList(`${this.name} -> Makers`);
    }

}