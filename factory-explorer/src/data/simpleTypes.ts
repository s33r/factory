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


    minerMk1Pure: {buildingName: 'Miner Mk.1 -> Pure', basePower: -5},
    minerMk2Pure: {buildingName: 'Miner Mk.2 -> Pure', basePower: -12},
    minerMk3Pure: {buildingName: 'Miner Mk.3 -> Pure', basePower: -30},

    minerMk1Normal: {buildingName: 'Miner Mk.1 -> Normal', basePower: -5},
    minerMk2Normal: {buildingName: 'Miner Mk.2 -> Normal', basePower: -12},
    minerMk3Normal: {buildingName: 'Miner Mk.3 -> Normal', basePower: -30},

    minerMk1Impure: {buildingName: 'Miner Mk.1 -> Impure', basePower: -5},
    minerMk2Impure: {buildingName: 'Miner Mk.2 -> Impure', basePower: -12},
    minerMk3Impure: {buildingName: 'Miner Mk.3 -> Impure', basePower: -30},

    waterExtractor: {buildingName: 'Water Extractor', basePower: -20},

    oilExtractorPure: {buildingName: 'Oil Extractor -> Pure', basePower: -40},
    oilExtractorNormal: {buildingName: 'Oil Extractor -> Normal', basePower: -40},
    oilExtractorImpure: {buildingName: 'Oil Extractor -> Impure', basePower: -40},

    giftTree: {buildingName: 'FICSMAS Gift Tree', basePower: 0},

};

export const forge : BaseForge = {
    efficiency: 1,
    instances: 1
}

export type ForgeFlags = {
    finite: boolean,
    generator: boolean,
    extractor: boolean,
}
