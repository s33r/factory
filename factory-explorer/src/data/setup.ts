import ExtractorLevel, { getBuilding } from './ExtractorLevel';
import NodeQuality, { getTag } from './NodeQuality';
import { Building, SimpleMaker, makerBuildings, forge } from './simpleTypes';
import KnownTags from '../model/KnownTags';



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
        tags:[],
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
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Alternate: Heavy Flexible Frame',
        inputs: [
            { item: 'Modular Frame', rate: 18.75},
            { item: 'Encased Industrial Beam', rate: 11.25},
            { item: 'Rubber', rate: 75},
            { item: 'Screw', rate: 390},
        ],
        outputs: [
            {item: 'Heavy Modular Frame', rate: 3.75}
        ],
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Alternate: Heavy Encased Frame',
        inputs: [
            { item: 'Modular Frame', rate: 7.5},
            { item: 'Encased Industrial Beam', rate: 9.375},
            { item: 'Steel Pipe', rate: 33.75},
            { item: 'Concrete', rate: 20.625},
        ],
        outputs: [
            {item: 'Heavy Modular Frame', rate: 3.75}
        ],
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Supercomputer',
        inputs: [
            { item: 'Computer', rate: 3.75},
            { item: 'AI Limiter', rate: 3.75},
            { item: 'High-Speed Connector', rate: 5.625},
            { item: 'Plastic', rate: 52.5},
        ],
        outputs: [
            {item: 'Supercomputer', rate: 3.75}
        ],
        tags:[],
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
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Alternate: Insulated Crystal Oscillator',
        inputs: [
            { item: 'Quartz Crystal', rate: 18.75},
            { item: 'Rubber', rate: 13.125},
            { item: 'AI Limiter', rate: 1.875},
        ],
        outputs: [
            {item: 'Crystal Oscillator', rate: 1.875}
        ],
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Beacon',
        inputs: [
            { item: 'Iron Plate', rate: 22.5},
            { item: 'Iron Rod',   rate: 7.5},
            { item: 'Wire',       rate: 112.5},
            { item: 'Cable',      rate: 15},
        ],
        outputs: [
            {item: 'Beacon', rate: 7.5}
        ],
        tags:[],
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
        tags:[],
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
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Alternate: Automated Miner',
        inputs: [
            { item: 'Motor', rate: 1},
            { item: 'Steel Pipe', rate: 4},
            { item: 'Iron Rod', rate: 4},
            { item: 'Iron Plate', rate: 2},
        ],
        outputs: [
            {item: 'Automated Miner', rate: 2}
        ],
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Gas Filter',
        inputs: [
            { item: 'Coal', rate: 37.5},
            { item: 'Rubber', rate: 15},
            { item: 'Fabric', rate: 15},
        ],
        outputs: [
            {item: 'Gas Filter', rate: 7.5}
        ],
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Rifle Cartridge',
        inputs: [
            { item: 'Beacon', rate: 3},
            { item: 'Steel Pipe', rate: 30},
            { item: 'Black Powder', rate: 30},
            { item: 'Rubber', rate: 30},
        ],
        outputs: [
            {item: 'Rifle Cartridge', rate: 15}
        ],
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'Alternate: Rigour Motor',
        inputs: [
            { item: 'Rotor', rate: 3.75},
            { item: 'Stator', rate: 15},
            { item: 'Crystal Oscillator', rate: 1.25},
        ],
        outputs: [
            {item: 'Motor', rate: 7.5}
        ],
        tags:[],
    },
    {
        ...forge,
        ...buildings.manufacturer,
        recipeName: 'High-Speed Connector',
        inputs: [
            { item: 'Quickwire', rate: 210},
            { item: 'Cable', rate: 37.5},
            { item: 'Circuit Board', rate: 3.75},
        ],
        outputs: [
            {item: 'High-Speed Connector', rate: 3.75}
        ],
        tags:[],
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
        tags:[],
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
        tags:[],
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
        tags:[],
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
        tags:[],
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
        tags:[],
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
        tags:[],
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
        tags:[],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Liquid Biofuel',
        inputs: [
            { item: 'Solid Biofuel', rate: 90},
            { item: 'Water', rate: 45},
        ],
        outputs: [
            { item: 'Liquid Biofuel', rate: 60},
        ],
        tags:[KnownTags.Finite],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Alternate: Pure Quartz Crystal',
        inputs: [
            { item: 'Raw Quartz', rate: 67.5},
            { item: 'Water', rate: 37.5},
        ],
        outputs: [
            { item: 'Quartz Crystal', rate: 52.5},
        ],
        tags:[],
    },
    {
        ...forge,
        ...buildings.refinery,
        recipeName: 'Alternate: Polyester Fabric',
        inputs: [
            { item: 'Polymer Resin', rate: 80},
            { item: 'Water', rate: 50},
        ],
        outputs: [
            { item: 'Fabric', rate: 5},
        ],
        tags:[],
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
        tags: [
            KnownTags.Generator
        ],
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
        tags: [
            KnownTags.Generator
        ],
    },
    {
        ...forge,
        ...buildings.fuelGenerator,
        recipeName: 'Power - Fuel',
        inputs: [
            { item: 'Fuel', rate: 12},
        ],
        outputs: [],
        tags: [
            KnownTags.Generator
        ],
    },
    {
        ...forge,
        ...buildings.fuelGenerator,
        recipeName: 'Power - Turbofuel',
        inputs: [
            { item: 'Turbofuel', rate: 4.5},
        ],
        outputs: [],
        tags: [
            KnownTags.Generator
        ],
    },
];


function single(
    building: Building,
    recipe: string,
    inputItem: string,
    inputRate: number,
    outputItem: string,
    outputRate: number,
    tags: string[] = []
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
            tags,
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
    outputRate: number,
    tags: string[] = []
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
            tags,
        };
}



function calculateMinerRate(level: ExtractorLevel, quality: NodeQuality) {
    const levelRate = 2**level;
    const qualityRate = 2**quality;
    const baseRate = 30;

    const rate = levelRate * qualityRate * baseRate;



    return rate;

}

function miners(item: string): SimpleMaker[] {
    function miner(item: string, level: ExtractorLevel, quality: NodeQuality) : SimpleMaker {
        const tag = getTag(quality);
        // const rate = ((2**level) * ((2**quality) * 30));
        const rate = calculateMinerRate(level, quality);
        const building = getBuilding(level);

        const result = {
            ...forge,
            ...building,
            recipeName: `${item} -> ${building.buildingName} (${tag}) `,
            inputs: [],
            outputs: [{item, rate}],
            tags: [
                KnownTags.Extractor,
                tag,
            ],
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
    ...miners('Limestone'),
    ...miners('Raw Quartz'),

    {
        ...forge,
        ...buildings.giftTree,
        recipeName: 'FICSMAS Gift',
        inputs: [],
        outputs: [
            {item: 'FICSMAS Gift', rate: 15},
        ],
        tags: [
            KnownTags.Generator,
            KnownTags.Ficsmas,
        ],

    },
    {
        ...forge,
        ...buildings.waterExtractor,
        recipeName: 'Water',
        inputs: [],
        outputs: [
            {item: 'Water', rate: 120},
        ],
        tags: [
            KnownTags.Extractor,
        ]

    },

    single(buildings.xconstructor, 'Iron Plate',                         'Iron Ingot',              30,    'Iron Plate',              20),
    single(buildings.xconstructor, 'Iron Rod',                           'Iron Ingot',              15,    'Iron Rod',                15),
    single(buildings.xconstructor, 'Alternate: Steel Rod',               'Steel Ingot',             15,    'Iron Rod',                48),
    single(buildings.xconstructor, 'Screw',                              'Iron Rod',                10,    'Screw',                   40),
    single(buildings.xconstructor, 'Alternate: Cast Screw',              'Iron Ingot',              12.5,  'Screw',                   50, [KnownTags.Preferred]),
    single(buildings.xconstructor, 'Alternate: Steel Screw',             'Steel Beam',              5,     'Screw',                   260, [KnownTags.Preferred]),
    single(buildings.xconstructor, 'Copper Sheet',                       'Copper Ingot',            20,    'Copper Sheet',            10),
    single(buildings.xconstructor, 'Steel Beam',                         'Steel Ingot',             60,    'Steel Beam',              15),
    single(buildings.xconstructor, 'Steel Pipe',                         'Steel Ingot',             30,    'Steel Pipe',              20),
    single(buildings.xconstructor, 'Wire',                               'Copper Ingot',            15,    'Wire',                    30),
    single(buildings.xconstructor, 'Alternate: Caterium Wire',           'Caterium Ingot',          15,    'Wire',                    120),
    single(buildings.xconstructor, 'Cable',                              'Wire',                    60,    'Cable',                   30),
    single(buildings.xconstructor, 'Quickwire',                          'Caterium Ingot',          12,    'Quickwire',               60),
    single(buildings.xconstructor, 'Concrete',                           'Limestone',               45,    'Concrete',                15),
    single(buildings.xconstructor, 'Quartz Crystal',                     'Raw Quartz',              37.5,  'Quartz Crystal',          22.5),
    single(buildings.xconstructor, 'Silica',                             'Raw Quartz',              22.5,  'Silica',                  37.5),
    single(buildings.xconstructor, 'Biomass (Leaves)',                   'Leaves',                  120,   'Biomass',                 60,  [KnownTags.Finite]),
    single(buildings.xconstructor, 'Biomass (Wood)',                     'Wood',                    60,    'Biomass',                 300, [KnownTags.Finite]),
    single(buildings.xconstructor, 'Biomass (Alien Carapace)',           'Alien Carapace',          15,    'Biomass',                 1500, [KnownTags.Finite]),
    single(buildings.xconstructor, 'Biomass (Alien Organs)',             'Alien Organs',            7.5,   'Biomass',                 1500, [KnownTags.Finite]),
    single(buildings.xconstructor, 'Solid Biofuel',                     'Biomass',                 120,   'Solid Biomass',           60),
    single(buildings.xconstructor, 'Alternate: Biocoal',                 'Biomass',                 37.5,  'Coal',                    45, [KnownTags.Finite]),
    single(buildings.xconstructor, 'Alternate: Charcoal',                'Wood',                    15,    'Coal',                    150, [KnownTags.Finite]),
    single(buildings.xconstructor, 'Spiked Rebar',                       'Iron Rod',                15,    'Spiked Rebar',            15),
    single(buildings.xconstructor, 'Color Cartridge',                    'Flower Petals',           37.5,  'Color Cartridge',         75, [KnownTags.Finite]),
    single(buildings.xconstructor, 'Candy Cane',                         'FICSMAS Gift',            15,    'Candy Cane',              5,  [KnownTags.Ficsmas]),
    single(buildings.xconstructor, 'Actual Snow',                        'FICSMAS Gift',            25,    'Actual Snow',             10, [KnownTags.Ficsmas]),
    single(buildings.xconstructor, 'FICSMAS Tree Branch',                'FICSMAS Gift',            10,    'FICSMAS Tree Branch',     10, [KnownTags.Ficsmas]),
    single(buildings.xconstructor, 'FICSMAS Bow',                        'FICSMAS Gift',            10,    'FICSMAS Bow',             5,  [KnownTags.Ficsmas]),
    single(buildings.xconstructor, 'Snowball',                           'Actual Snow',             15,    'Snowball',                5,  [KnownTags.Ficsmas]),
    single(buildings.xconstructor, 'Empty Canister',                     'Plastic',                 30,    'Empty Canister',          60, [KnownTags.Ficsmas]),

    single(buildings.smelter,      'Iron Ingot',                         'Iron Ore',                30,    'Iron Ingot',              30),
    single(buildings.smelter,      'Copper Ingot',                       'Copper Ore',              30,    'Copper Ingot',            30),
    single(buildings.smelter,      'Caterium Ingot',                     'Caterium Ore',            45,    'Caterium Ingot',          15),
    single(buildings.smelter,      'Blue FICSMAS Ornament',              'FICSMAS Gift',            5,     'Blue FICSMAS Ornament',   10,  [KnownTags.Ficsmas]),
    single(buildings.smelter,      'Red FICSMAS Ornament',               'FICSMAS Gift',            5,     'Red FICSMAS Ornament',    5,                                    [KnownTags.Ficsmas]),

    double(buildings.foundry,      'Steel Ingot',                        'Iron Ore',                45,    'Coal',                    45,    'Steel Ingot',             45),
    double(buildings.foundry,      'Alternate: Coke Steel Ingot',        'Iron Ore',                15,    'Petroleum Coke',          75,    'Steel Ingot',             100),
    double(buildings.foundry,      'Alternate: Solid Steel Ingot',       'Iron Ingot',              40,    'Coal',                    40,    'Steel Ingot',             60),
    double(buildings.foundry,      'Copper FICSMAS Ornament',            'Red FICSMAS Ornament',    10,    'Copper Ingot',            10,    'Copper FICSMAS Ornament', 5,   [KnownTags.Ficsmas]),
    double(buildings.foundry,      'Iron FICSMAS Ornament',              'Blue FICSMAS Ornament',   15,    'Iron Ingot',              15,    'Iron FICSMAS Ornament',   5,   [KnownTags.Ficsmas]),

    double(buildings.assembler,    'Reinforced Iron Plate',              'Iron Plate',              30,    'Screw',                   60,    'Reinforced Iron Plate',   5),
    double(buildings.assembler,    'Alternate: Adhered Iron Plate',      'Iron Plate',              11.25, 'Rubber',                  3.75,  'Reinforced Iron Plate',   5),
    double(buildings.assembler,    'Alternate: Stitched Iron Plate',     'Iron Plate',              10,    'Wire',                    20,    'Reinforced Iron Plate',     3),
    double(buildings.assembler,    'Modular Frame',                      'Reinforced Iron Plate',   3,     'Iron Rod',                12,    'Modular Frame',           2),
    double(buildings.assembler,    'Alternate: Bolted Frame',            'Reinforced Iron Plate',   3,     'Screw',                   56,    'Modular Frame',           2),
    double(buildings.assembler,    'Alternate: Steeled Frame',           'Reinforced Iron Plate',   2,     'Steel Pipe',              10,    'Modular Frame',           3),
    double(buildings.assembler,    'Encased Industrial Beam',            'Steel Beam',              24,    'Concrete',                30,    'Encased Industrial Beam', 6),
    double(buildings.assembler,    'Alternate: Encased Industrial Pipe', 'Steel Pipe',              28,    'Concrete',                20,    'Encased Industrial Beam', 4, [KnownTags.Preferred]),
    double(buildings.assembler,    'Rotor',                              'Iron Rod',                20,    'Screw',                   100,   'Rotor',                   4),
    double(buildings.assembler,    'Stator',                             'Steel Pipe',              15,    'Wire',                    40,    'Stator',                  5),
    double(buildings.assembler,    'Alternate: Quickwire Stator',        'Steel Pipe',              16,    'Quickwire',               60,    'Stator',                  8),
    double(buildings.assembler,    'Alternate: Insulated Cable',         'Wire',                    45,    'Rubber',                  30,    'Cable',                   100),
    double(buildings.assembler,    'Alternate: Quickwire Cable',         'Quickwire',               7.5,   'Rubber',                  5,     'Cable',                   27.5),
    double(buildings.assembler,    'Motor',                              'Rotor',                   10,    'Stator',                  10,    'Motor',                   5),
    double(buildings.assembler,    'Smart Plating',                      'Reinforced Iron Plate',   2,     'Rotor',                   2,     'Smart Plating',           2),
    double(buildings.assembler,    'Versatile Framework',                'Modular Frame',           2.5,   'Steel Beam',              30,    'Versatile Framework',     5),
    double(buildings.assembler,    'Automated Wiring',                   'Stator',                  2.5,   'Cable',                   50,    'Automated Wiring',        2.5),
    double(buildings.assembler,    'Alternate: Compacted Coal',          'Coal',                    25,    'Sulfur',                  25,    'Compacted Coal',          25),
    double(buildings.assembler,    'AI Limiter',                         'Copper Sheet',            25,    'Quickwire',               100,   'AI Limiter',              5),
    double(buildings.assembler,    'Black Powder',                       'Coal',                    7.5,   'Sulfur',                  15,    'Black Powder',            7.5),
    double(buildings.assembler,    'Nobelisk',                           'Black Powder',            15,    'Steel Pipe',              30,    'Nobelisk',                3),
    double(buildings.assembler,    'Circuit Board',                      'Copper Sheet',            15,    'Plastic',                 30,    'Circuit Board',           7.5),
    double(buildings.assembler,    'Alternate: Silicon Circuit Board',   'Copper Sheet',            27.5,  'Silica',                  27.5,  'Circuit Board',           12.5),
    double(buildings.assembler,    'Alternate: Crystal Computer',        'Circuit Board',           7.5,   'Crystal Oscillator',      2.813, 'Computer',                2.813),
    double(buildings.assembler,    'Fabric',                             'Mycelia',                 15,    'Biomass',                 75,    'Fabric',                  15, [KnownTags.Finite]),
    double(buildings.assembler,    'FICSMAS Ornament Bundle',            'Copper FICSMAS Ornament', 5,     'Iron FICSMAS Ornament',   5,     'FICSMAS Ornament Bundle', 5, [KnownTags.Ficsmas]),
    double(buildings.assembler,    'FICSMAS Decoration',                 'FICSMAS Tree Branch',     15,    'FICSMAS Ornament Bundle', 6,     'FICSMAS Decoration',      2, [KnownTags.Ficsmas]),
    double(buildings.assembler,    'FICSMAS Wonder Star',                'FICSMAS Decoration',      2.5,   'Candy Cane',              25,    'FICSMAS Wonder Star',     .5, [KnownTags.Ficsmas]),

];

export default result;
