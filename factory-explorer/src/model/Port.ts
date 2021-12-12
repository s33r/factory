import { SimplePort } from '../data/simpleTypes';
import IForge from './IForge';

export default class Port {
    itemName: string;
    baseRate: number;
    readonly parent: IForge;

    get rate() : number {
        return this.parent.instances * this.baseRate * this.parent.efficiency;
    }

    constructor(parent: IForge, itemName: string, baseRate: number) {
        this.parent = parent;

        this.itemName = itemName;
        this.baseRate = baseRate;
    }

    public simplify() : SimplePort {
        return {
            item: this.itemName,
            rate: this.baseRate,
        }
    }

    public static fromSimplePort(parent: IForge, simplePort: SimplePort) {
        return new Port(parent, simplePort.item, simplePort.rate);
    }

    public toString() {
        return `${this.itemName}@${this.rate}`;
    }
}