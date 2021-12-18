import IForge from './IForge';
import  SupplyTableEntry  from './SupplyTableEntry';

type SupplyTableMap = {
    [key: string]: SupplyTableEntry
}

export default class SupplyTable {
    private _map: SupplyTableMap;

    public get entries() : ReadonlyArray<SupplyTableEntry> {
        return Object.values(this._map);
    }

    public add(itemName: string, supply: number = 0, demand: number = 0) {
        if(!this._map[itemName]) {
            this._map[itemName] = new SupplyTableEntry(itemName, supply, demand);
        } else {
            this._map[itemName].supply += supply;
            this._map[itemName].demand += demand;
        }

        return this;
    }

    public addForge(forge: IForge) {
        forge.inputs.forEach(port => this.add(port.itemName, 0, port.rate));
        forge.outputs.forEach(port => this.add(port.itemName, port.rate));
    }

    constructor() {
        this._map = {};
    }
}