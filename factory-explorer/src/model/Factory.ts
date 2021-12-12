import IForge from './IForge';
import Port from './Port';
import Maker from './Maker';

import ForgeList from './ForgeList';


/**
 * A factory combines Extractors, Generators and Makers to represent an end-to-end supply chain
 */
export default class Factory implements IForge {
    public name: string;
    public instances: number;
    public readonly efficiency = 1;

    private _makers : ForgeList<Maker>;

    public get power() : number {
        return this._makers.power;
    }

    public get totalDemand() {
        return this._makers.totalDemand ;
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

    constructor(name: string, instances: number = 1) {
        this.name = name;
        this.instances = instances;

        this._makers = new ForgeList(`${this.name} -> Makers`);
    }
}