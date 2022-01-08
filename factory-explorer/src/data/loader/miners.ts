import { SimpleMaker, makerBuildings, forge } from '../simpleTypes';
import { miner } from '../builders';
import KnownTags from '../../model/KnownTags';
import ExtractorLevel from '../ExtractorLevel';
import NodeQuality from '../NodeQuality';


function createMiners(item: string): SimpleMaker[] {


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

export default function miners() : SimpleMaker[] {
    return [
        ...createMiners('Iron Ore'),
        ...createMiners('Copper Ore'),
        ...createMiners('Caterium Ore'),
        ...createMiners('Sulfur'),
        ...createMiners('Coal'),
        ...createMiners('Limestone'),
        ...createMiners('Raw Quartz'),
        ...createMiners('Bauxite'),
        ...createMiners('Uranium'),

        {
            ...forge,
            ...makerBuildings.giftTree,
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
            ...makerBuildings.waterExtractor,
            recipeName: 'Water',
            inputs: [],
            outputs: [
                {item: 'Water', rate: 120},
            ],
            tags: [
                KnownTags.Extractor,
            ]
        },
        {
            ...forge,
            ...makerBuildings.oilExtractor,
            recipeName: 'Crude Oil -> Impure',
            inputs: [],
            outputs: [
                {item: 'Crude Oil', rate: 60},
            ],
            tags: [
                KnownTags.Extractor,
            ]
        },
        {
            ...forge,
            ...makerBuildings.oilExtractor,
            recipeName: 'Crude Oil -> Normal',
            inputs: [],
            outputs: [
                {item: 'Crude Oil', rate: 120},
            ],
            tags: [
                KnownTags.Extractor,
            ]
        },
        {
            ...forge,
            ...makerBuildings.oilExtractor,
            recipeName: 'Crude Oil -> Pure',
            inputs: [],
            outputs: [
                {item: 'Crude Oil', rate: 240},
            ],
            tags: [
                KnownTags.Extractor,
            ]
        },
    ];
}