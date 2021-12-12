export type SimplePort = {
    item: string,
    rate: number,
};

export type Building = {
    buildingName: string,
    basePower: number,
};

export type BaseForge = {
    efficiency: number,
    instances: number,

};

export type BaseMaker = {
    recipeName: string,
    inputs : SimplePort[],
    outputs: SimplePort[],
    tags: string[],
};


export type SimpleMaker = Building & BaseForge & BaseMaker;

export const makerBuildings : {[key: string]: Building} = {
    manufacturer: { buildingName: 'Manufacturer', basePower: -55},
    xconstructor: { buildingName: 'Constructor', basePower: -4},
    assembler: { buildingName: 'Assembler', basePower: -15},
    foundry: { buildingName: 'Foundry', basePower: -16},
    smelter: { buildingName: 'Smelter', basePower: -4},
    refinery: {buildingName: 'Refinery', basePower: -30},
    generatorCoal: {buildingName: 'Coal Generator', basePower: 75},
    generatorFuel: {buildingName: 'Fuel Generator', basePower: 125},


    minerMk1: {buildingName: 'Miner Mk.1', basePower: -5},
    minerMk2: {buildingName: 'Miner Mk.2', basePower: -12},
    minerMk3: {buildingName: 'Miner Mk.3', basePower: -30},

    waterExtractor: {buildingName: 'Water Extractor', basePower: -20},
    oilExtractor: {buildingName: 'Oil Extractor', basePower: -40},


    giftTree: {buildingName: 'FICSMAS Gift Tree', basePower: 0},

};

export const forge : BaseForge = {
    efficiency: 1,
    instances: 1,
}

export type ForgeFlags = {
    finite: boolean,
    generator: boolean,
    extractor: boolean,
}
