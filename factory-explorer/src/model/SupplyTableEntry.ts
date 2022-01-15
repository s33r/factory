import Decimal from 'decimal.js';

export default class SupplyTableEntry {
    public demand: Decimal;
    public supply: Decimal;
    public itemName: string;

    public get ratio() {
        return this.supply.div(this.demand).toNumber();
    }

    public get delta() {
         return this.supply.sub(this.demand).toNumber();
    }

    constructor(itemName: string, supply = 0, demand = 0) {
        this.itemName = itemName;
        this.supply = new Decimal(supply);
        this.demand = new Decimal(demand);
    }
}