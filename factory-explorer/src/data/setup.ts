import ExtractorLevel from './ExtractorLevel';
import NodeQuality from './NodeQuality';
import { Building, SimpleMaker, makerBuildings, forge } from './simpleTypes';



const buildings = makerBuildings;

const manufacturer : SimpleMaker[] = [
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Computer',
        inputs: [
            { item: 'Circuit Board', rate: 25},
            { item: 'Cable', rate: 22.5},
            { item: 'Plastic', rate: 45},
            { item: 'Screw', rate: 130},
        ],
        outputs: [
            {item: 'Computer', rate: 2.5}
        ],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Heavy Modular Frame',
        inputs: [
            { item: 'Modular Frame', rate: 10},
            { item: 'Steel Pipe', rate: 30},
            { item: 'Encased Industrial Beam', rate: 10},
            { item: 'Screw', rate: 200},
        ],
        outputs: [
            {item: 'Heavy Modular Frame', rate: 2}
        ],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Crystal Oscillator',
        inputs: [
            { item: 'Quartz Crystal', rate: 18},
            { item: 'Cable', rate: 14},
            { item: 'Reinforced Iron Plate', rate: 2.5},
        ],
        outputs: [
            {item: 'Crystal Oscillator', rate: 1}
        ],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Modular Engine',
        inputs: [
            { item: 'Motor', rate: 2},
            { item: 'Rubber', rate: 15},
            { item: 'Smart Plating', rate: 1},
        ],
        outputs: [
            {item: 'Modular Engine', rate: 1}
        ],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Advanced Control Unit',
        inputs: [
            { item: 'Automated Wiring', rate: 7.5},
            { item: 'Circuit Board', rate: 5},
            { item: 'Heavy Modular Frame', rate: 1},
            { item: 'Computer', rate: 1},
        ],
        outputs: [
            {item: 'Advanced Control Unit', rate: 1}
        ],
    },
];

const refinery: SimpleMaker[] = [
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Plastic',
        inputs: [
            { item: 'Crude Oil', rate: 30},
        ],
        outputs: [
            {item: 'Plastic', rate: 20},
            {item: 'Heavy Oil Residue', rate: 10},
        ],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Rubber',
        inputs: [
            { item: 'Crude Oil', rate: 30},
        ],
        outputs: [
            {item: 'Rubber', rate: 20},
            {item: 'Heavy Oil Residue', rate: 20},
        ],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Residual Plastic',
        inputs: [
            { item: 'Polymer Resin', rate: 60},
            { item: 'Water', rate: 40},
        ],
        outputs: [
            {item: 'Plastic', rate: 20},
        ],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Residual Rubber',
        inputs: [
            { item: 'Polymer Resin', rate: 60},
            { item: 'Water', rate: 20},
        ],
        outputs: [
            {item: 'Rubber', rate: 20},
        ],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Petroleum Coke',
        inputs: [
            { item: 'Heavy Oil Residue', rate: 40},
        ],
        outputs: [
            { item: 'Petroleum Coke', rate: 120},
        ],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Fuel',
        inputs: [
            { item: 'Crude Oil', rate: 60},
        ],
        outputs: [
            { item: 'Fuel', rate: 40},
            { item: 'Polymer Resin', rate: 30},
        ],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Residual Fuel',
        inputs: [
            { item: 'Heavy Oil Residue', rate: 60},
        ],
        outputs: [
            { item: 'Fuel', rate: 40},
        ],
    },

];

const power: SimpleMaker[] = [
    {
        ...forge,
        ...buildings.coalGenerator,
        recipeName: 'Power - Coal',
        inputs: [
            { item: 'Coal', rate: 15},
            { item: 'Water', rate: 45},
        ],
        outputs: [],
    },
    {
        ...forge,
        ...buildings.coalGenerator,
        recipeName: 'Power - Petroleum Coke',
        inputs: [
            { item: 'Petroleum Coke', rate: 25},
            { item: 'Water', rate: 45},
        ],
        outputs: [],
    },
    {
        ...forge,
        ...buildings.fuelGenerator,
        recipeName: 'Power - Fuel',
        inputs: [
            { item: 'Fuel', rate: 12},
        ],
        outputs: [],
    },
    {
        ...forge,
        ...buildings.fuelGenerator,
        recipeName: 'Power - Turbofuel',
        inputs: [
            { item: 'Turbofuel', rate: 4.5},
        ],
        outputs: [],
    },
];


function single(
    building: Building,
    recipe: string,
    inputItem: string,
    inputRate: number,
    outputItem: string,
    outputRate: number
    ) : SimpleMaker {
        return {
            ...forge,
            ...building,
            recipeName: recipe,
            inputs: [
                { item: inputItem, rate: inputRate},
            ],
            outputs: [
                {item: outputItem, rate: outputRate}
            ],
        };
}

function double(
    building: Building,
    recipe: string,
    inputItem1: string,
    inputRate1: number,
    inputItem2: string,
    inputRate2: number,
    outputItem: string,
    outputRate: number
    ): SimpleMaker {
        return {
            ...forge,
            ...building,
            recipeName: recipe,
            inputs: [
                { item: inputItem1, rate: inputRate1},
                { item: inputItem2, rate: inputRate2},
            ],
            outputs: [
                {item: outputItem, rate: outputRate}
            ],
        };
}





function miners(item: string): SimpleMaker[] {
    function miner(item: string, level: ExtractorLevel, quality: NodeQuality) : SimpleMaker {
        let buildingKey;

        switch (level) {
            case ExtractorLevel.Mark1 : buildingKey = 'minerMk1'; break;
            case ExtractorLevel.Mark2 : buildingKey = 'minerMk2'; break;
            case ExtractorLevel.Mark3 : buildingKey = 'minerMk3'; break;
        }

        switch(quality) {
            case NodeQuality.Impure: buildingKey = `${buildingKey}Impure`; break;
            case NodeQuality.Normal: buildingKey = `${buildingKey}Normal`; break;
            case NodeQuality.Pure: buildingKey = `${buildingKey}Pure`; break;
        }

        const rate = ((2**level) * ((2**quality) * 30));
        const building = buildings[buildingKey];

        const result = {
            ...forge,
            ...building,
            recipeName: `${item} -> ${building.buildingName}`,
            inputs: [],
            outputs: [{item, rate}],
        };


        return result;
    }

    return [
        miner(item, ExtractorLevel.Mark1, NodeQuality.Impure),
        miner(item, ExtractorLevel.Mark2, NodeQuality.Impure),
        miner(item, ExtractorLevel.Mark3, NodeQuality.Impure),
        miner(item, ExtractorLevel.Mark1, NodeQuality.Normal),
        miner(item, ExtractorLevel.Mark2, NodeQuality.Normal),
        miner(item, ExtractorLevel.Mark3, NodeQuality.Normal),
        miner(item, ExtractorLevel.Mark1, NodeQuality.Pure),
        miner(item, ExtractorLevel.Mark2, NodeQuality.Pure),
        miner(item, ExtractorLevel.Mark3, NodeQuality.Pure),
    ];
}

const result: SimpleMaker[] = [
    ...manufacturer,
    ...refinery,
    ...power,

    ...miners('Iron Ore'),
    ...miners('Copper Ore'),
    ...miners('Caterium Ore'),
    ...miners('Sulfur'),
    ...miners('Coal'),

    {
        ...forge,
        ...buildings.giftTree,
        recipeName: 'FICSMAS Gift',
        inputs: [],
        outputs: [
            {item: 'FICSMAS Gift', rate: 15},
        ]

    },
    {
        ...forge,
        ...buildings.waterExtractor,
        recipeName: 'Water',
        inputs: [],
        outputs: [
            {item: 'Water', rate: 120},
        ]

    },

    single(buildings.xconstructor, 'Iron Plate', 'Iron Ingot', 30, 'Iron Plate', 20),
    single(buildings.xconstructor, 'Iron Rod', 'Iron Ingot', 15, 'Iron Rod', 15),
    single(buildings.xconstructor, 'Screw', 'Iron Rod', 10, 'Screw', 40),
    single(buildings.xconstructor, 'Alternate: Cast Screw', 'Iron Ingot', 12.5, 'Screw', 50),
    single(buildings.xconstructor, 'Copper Sheet', 'Copper Ingot', 20, 'Copper Sheet', 10),
    single(buildings.xconstructor, 'Steel Beam', 'Steel Ingot', 60, 'Steel Beam', 15),
    single(buildings.xconstructor, 'Steel Pipe', 'Steel Ingot', 30, 'Steel Pipe', 20),
    single(buildings.xconstructor, 'Wire', 'Copper Ingot', 15, 'Wire', 30),
    single(buildings.xconstructor, 'Cable', 'Wire', 60, 'Cable', 30),
    single(buildings.xconstructor, 'Quickwire', 'Caterium Ingot', 12, 'Quickwire', 60),
    single(buildings.xconstructor, 'Concrete', 'Limestone', 45, 'Concrete', 15),
    single(buildings.xconstructor, 'Quartz Crystal', 'Raw Quartz', 37.5, 'Quartz Crystal', 22.5),
    single(buildings.xconstructor, 'Silica', 'Raw Quartz', 22.5, 'Silica', 37.5),
    single(buildings.xconstructor, 'Biomass (Leaves)', 'Leaves', 120, 'Biomass', 60),
    single(buildings.xconstructor, 'Biomass (Wood)', 'Wood', 60, 'Biomass', 300),
    single(buildings.xconstructor, 'Biomass (Alien Carapace)', 'Alien Carapace', 15, 'Biomass', 1500),
    single(buildings.xconstructor, 'Biomass (Alien Organs)', 'Alien Organs', 7.5, 'Biomass', 1500),
    single(buildings.xconstructor, 'Solid Biofueel', 'Biomass', 120, 'Solid Biomass', 60),
    single(buildings.xconstructor, 'Alternate: Biocoal', 'Biomass', 37.5, 'Coal', 45),
    single(buildings.xconstructor, 'Alternate: Charcoal', 'Wood', 15, 'Coal', 150),
    single(buildings.xconstructor, 'Spiked Rebar', 'Iron Rod', 15, 'Spiked Rebar', 15),
    single(buildings.xconstructor, 'Color Cartridge', 'Flower Petals', 37.5, 'Color Cartridge', 75),
    single(buildings.xconstructor, 'Candy Cane', 'FICSMAS Gift', 15, 'Candy Cane', 5),
    single(buildings.xconstructor, 'Actual Snow', 'FICSMAS Gift', 25, 'Actual Snow', 10),
    single(buildings.xconstructor, 'FICSMAS Tree Branch', 'FICSMAS Gift', 10, 'FICSMAS Tree Branch', 10),
    single(buildings.xconstructor, 'FICSMAS Bow', 'FICSMAS Gift', 10, 'FICSMAS Bow', 5),
    single(buildings.xconstructor, 'Snowball', 'Actual Snow', 15, 'Snowball', 5),
    single(buildings.smelter, 'Iron Ingot', 'Iron Ore', 30, 'Iron Ingot', 30),
    single(buildings.smelter, 'Copper Ingot', 'Copper Ore', 30, 'Copper Ingot', 30),
    single(buildings.smelter, 'Caterium Ingot', 'Caterium Ore', 45, 'Caterium Ingot', 15),
    single(buildings.smelter, 'Blue FICSMAS Ornament', 'FICSMAS Gift', 5, 'Blue FICSMAS Ornament', 10),
    single(buildings.smelter, 'Red FICSMAS Ornament', 'FICSMAS Gift', 5, 'Red FICSMAS Ornament', 5),
    double(buildings.foundry, 'Steel Ingot', 'Iron Ore', 45, 'Coal', 45, 'Steel Ingot', 45),
    double(buildings.foundry, 'Copper FICSMAS Ornament', 'Red FICSMAS Ornament', 10, 'Copper Ingot', 10, 'Copper FICSMAS Ornament', 5),
    double(buildings.foundry, 'Iron FICSMAS Ornament', 'Blue FICSMAS Ornament', 15, 'Iron Ingot', 15, 'Iron FICSMAS Ornament', 5),
    double(buildings.assembler, 'Reinforced Iron Plate', 'Iron Plate', 30, 'Screw', 60, 'Reinforced Iron Plate', 5),
    double(buildings.assembler, 'Modular Frame', 'Reinforced Iron Plate', 3, 'Iron Rod', 12, 'Modular Frame', 2),
    double(buildings.assembler, 'Encased Industrial Beam', 'Steel Beam', 24, 'Concrete', 30, 'Encased Industrial Beam', 6),
    double(buildings.assembler, 'Rotor', 'Iron Rod', 20, 'Screw', 100, 'Rotor', 4),
    double(buildings.assembler, 'Stator', 'Steel Pipe', 15, 'Wire', 40, 'Stator', 5),
    double(buildings.assembler, 'Motor', 'Rotor', 10, 'Stator', 10, 'Motor', 5),
    double(buildings.assembler, 'Smart Plating', 'Reinforced Iron Plate', 2, 'Rotor', 2, 'Smart Plating', 2),
    double(buildings.assembler, 'Versatile Framework', 'Modular Frame', 2.5, 'Steel Beam', 30, 'Versatile Framework', 5),
    double(buildings.assembler, 'Automated Wiring', 'Stator', 2.5, 'Cable', 50, 'Automated Wiring', 2.5),
    double(buildings.assembler, 'Alternate: Compacted Coal', 'Coal', 25, 'Sulfur', 25, 'Compacted Coal', 25),
    double(buildings.assembler, 'AI Limiter', 'Copper Sheet', 25, 'Quickwire', 100, 'AI Limiter', 5),
    double(buildings.assembler, 'Black Powder', 'Coal', 7.5, 'Sulfur', 15, 'Black Powder', 7.5),
    double(buildings.assembler, 'Nobelisk', 'Black Powder', 15, 'Steel Pipe', 30, 'Nobelisk', 3),
    double(buildings.assembler, 'Circuit Board', 'Copper Sheet', 15, 'Plastic', 30, 'Circuit Board', 7.5),
    double(buildings.assembler, 'FICSMAS Ornament Bundle', 'Copper FICSMAS Ornament', 5, 'Iron FICSMAS Ornament', 5, 'FICSMAS Ornament Bundle', 5),
    double(buildings.assembler, 'FICSMAS Decoration', 'FICSMAS Tree Branch', 15, 'FICSMAS Ornament Bundle', 6, 'FICSMAS Decoration', 2),
    double(buildings.assembler, 'FICSMAS Wonder Star', 'FICSMAS Decoration', 2.5, 'Candy Cane', 25, 'FICSMAS Wonder Star', .5),

];

export default result;
