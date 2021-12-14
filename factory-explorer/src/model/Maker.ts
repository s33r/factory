
import Port from './Port';
import { SimpleMaker, SimplePort } from '../data/simpleTypes';
import IForge from './IForge';

/**
 * Represents a forge that typically has at least one input and one output
 */
export default class Maker implements IForge {
    public recipeName: string;
    public buildingName: string;
    public efficiency:number;
    public instances:number;
    public basePower:number;
    public readonly tags: string[];

    private _inputs: Port[];
    private _outputs: Port[];

    public get name() {
        return this.recipeName;
    }

    public get power() : number {
        //TODO: Figure out power equation vs efficiency
        //return this.instances * (this.basePower * ((this.efficiency / 100) ** 1.6));

        return this.basePower * this.efficiency * this.instances;
    }
    public get inputs() : ReadonlyArray<Port>{
        return this._inputs;
    }

    public get outputs() : ReadonlyArray<Port> {
        return this._outputs;
    }

    public get totalDemand() : number {
        return this.inputs.reduce((total, current) => total+= current.rate, 0);
    }

    public get totalSupply() : number {
        return this.outputs.reduce((total, current) => total+= current.rate, 0);
    }

    public addInputPort(itemName: string, baseRate: number) {
        this._inputs.push(new Port(this, itemName, baseRate));
    }

    public addOutputPort(itemName: string, baseRate: number) {
        this._outputs.push(new Port(this, itemName, baseRate));
    }

    /**
     * Deduplicate the ports based on itemName. Adds the port baseRates together if duplicate items are found.
     * @param ports the array of ports to condense
     * @returns An array of ports with no duplicate items.
     */
    private static condensePorts(ports : Port[]) {
        type PortMap = {
            [key: string]: Port,
        }

        const map : PortMap = {};

        ports.forEach(port => {
            if(!map[port.itemName]) {
                map[port.itemName] = port;
            } else {
                map[port.itemName].baseRate = map[port.itemName].baseRate + port.baseRate;
            }
        });

        const result : Port[] = [];
        Object.keys(map).forEach(entry => result.push(map[entry]));
        return result;
    }

    /**
     * Condenses the input and output ports so there are no duplicate items. Adds the port baseRates together if duplicate items are found.
     * @param completedList Not used
     */
    public condense() {
        this._inputs = Maker.condensePorts(this._inputs);
        this._outputs = Maker.condensePorts(this._outputs);
    }

    public getOutputByItem(item: string) {
        const results = this.outputs.filter(output => output.itemName === item);

        if(results.length > 0){
            return results[0];
        } else {
            return null;
        }
    }

    public simplify() : SimpleMaker {
        return {
            inputs: this.inputs.map(port => port.simplify()),
            outputs: this.outputs.map(port => port.simplify()),
            basePower: this.basePower,
            buildingName: this.buildingName,
            efficiency: this.efficiency,
            instances: this.instances,
            recipeName: this.recipeName,
            tags: this.tags.map(tag => tag),
        }
    }

    public static fromSimpleMaker(simpleMaker: SimpleMaker) {
        return new Maker(
            simpleMaker.buildingName,
            simpleMaker.recipeName,
            simpleMaker.instances,
            simpleMaker.basePower,
            simpleMaker.efficiency,
            simpleMaker.inputs,
            simpleMaker.outputs,
            simpleMaker.tags,
        );
    }

    /**
     *
     * @param buildingName the name of the building that makes things
     * @param recipeName the name of the recipe to make
     * @param basePower the amount of power it takes to complete the recipe in the building
     */
    constructor(
        buildingName: string = '',
        recipeName: string = '',
        instances: number = 1,
        basePower: number = 4,
        efficiency: number = 1,
        inputs : SimplePort[] = [],
        outputs: SimplePort[] = [],
        tags: string[] = []
        ) {

        this.buildingName = buildingName;
        this.recipeName = recipeName;
        this.basePower = basePower ;

        this.efficiency = efficiency;
        this.instances = instances;

        this.tags = tags.map(tag => tag); // copy array

        this._inputs = [];
        this._outputs = [];

        inputs.forEach(port => this.addInputPort(port.item, port.rate));
        outputs.forEach(port => this.addOutputPort(port.item, port.rate));
    }
}