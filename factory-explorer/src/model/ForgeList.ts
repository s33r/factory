import IForge from './IForge';
import Port from './Port';

type PortMap = {
    [key: string]: number
}

export default class ForgeList implements IForge {
    public readonly entries : IForge[];
    public name: string;
    public instances: number;
    public readonly tags: string[];

    public readonly efficiency = 1;

    public get power() {
        return this.entries
            .map(entry => entry.power)
            .reduce((p, c) => p + c, 0);
    }

    public get basePower() {
        return this.entries
            .map(entry => entry.basePower)
            .reduce((p, c) => p + c, 0);
    }

    public get totalSupply() {
        return this.entries.reduce((total, current)  => total += current.totalSupply, 0);
    }

    public get totalDemand() {
        return this.entries.reduce((total, current)  => total += current.totalDemand, 0);
    }

    public get buildingName() {
        return this.name;
    }

    public get sortCode() {
        return this.name;
    }

    public get inputs() : ReadonlyArray<Port> {
        const ports: PortMap = {};

        this.entries.forEach(entry => {
            entry.inputs.forEach(port => {
                if(!ports[port.itemName]) {
                    ports[port.itemName] = 0;
                }

                ports[port.itemName] += port.rate;
            });
        });

        const result = []
        for(let key in ports) {
            result.push(new Port(this, key, ports[key]));
        }

        return result;
    }

    public get outputs() : ReadonlyArray<Port> {
        const ports: PortMap = {};

        this.entries.forEach(entry => {
            entry.outputs.forEach(port => {
                if(!ports[port.itemName]) {
                    ports[port.itemName] = 0;
                }

                ports[port.itemName] += port.rate;
            });
        });

        const result = []
        for(let key in ports) {
            result.push(new Port(this, key, ports[key]));
        }

        return result;
    }

    public condense() {
        type ForgeMap = {
            [key: string]: IForge,
        }

        const map : ForgeMap = {}

        this.entries.forEach(entry => {
            if(!map[entry.name]) {
                map[entry.name] = entry;
            } else {
                map[entry.name].instances = map[entry.name].instances + entry.instances;
            }
        });

        this.entries.length = 0;
        Object.keys(map).forEach(entry => this.entries.push(map[entry]));
    }

    public getOutputByItem(item: string) {
        const results = this.outputs.filter(output => output.itemName === item);

        if(results.length > 0){
            return results[0];
        } else {
            return null;
        }
    }

    public sort() {
        this.entries.sort((alpha, beta) => alpha.sortCode.localeCompare(beta.sortCode));
    }

    constructor(name: string, instances: number = 1,tags: string[] = []) {
        this.entries = [];
        this.name = name;
        this.instances = instances;
        this.tags = tags;
    }

}