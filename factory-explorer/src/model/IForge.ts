import Port from './Port';

/**
 * Defines a "forge" that is an object that takes in zero or more inputs and returns zero or more outputs.
 */
export default interface IForge {
    get inputs(): ReadonlyArray<Port>;
    get outputs(): ReadonlyArray<Port>;

    get power(): number;
    get basePower(): number;

    get name(): string;
    get buildingName(): string;

    get totalDemand(): number;
    get totalSupply(): number;

    get efficiency(): number;
    set efficiency(value: number);

    get instances(): number;
    set instances(value: number);

    get tags() : string[];

    getOutputByItem(item: string): Port | null;

    condense() : void;
}