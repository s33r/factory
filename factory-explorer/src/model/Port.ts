import Decimal from 'decimal.js';
import { SimplePort } from '../data/simpleTypes';
import IForge from './IForge';

export default class Port {
    itemName: string;
    baseRate: number;
    readonly parent: IForge;

    get rate() : number {
        const instances = new Decimal(this.parent.instances);
        const baseRate = new Decimal(this.baseRate);
        const efficiency = new Decimal(this.parent.efficiency)

        return instances.mul(baseRate).mul(efficiency).toNumber();
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