export default class SupplyTableEntry {
    public demand: number;
    public supply: number;
    public itemName: string;

    public get ratio() {
        return this.supply / this.demand;
    }

    public get delta() {
         return this.supply - this.demand;
    }

    constructor(itemName: string, supply = 0, demand = 0) {
        this.itemName = itemName;
        this.supply = supply;
        this.demand = demand;
    }
}