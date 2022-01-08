
import { SimpleMaker, Building, forge } from './simpleTypes';
import ExtractorLevel, { getBuilding } from './ExtractorLevel';
import NodeQuality, { getTag } from './NodeQuality';
import KnownTags from '../model/KnownTags';

export function i1o0(
    building: Building,
    recipe: string,
    inputItem: string,
    inputRate: number,
    tags: string[] = []
    ) : SimpleMaker {
        return {
            ...forge,
            ...building,
            recipeName: recipe,
            inputs: [
                { item: inputItem, rate: inputRate},
            ],
            outputs: [],
            tags,
        };
}

export function i1o1(
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

export function i2o0(
    building: Building,
    recipe: string,
    inputItem1: string,
    inputRate1: number,
    inputItem2: string,
    inputRate2: number,
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
            outputs: [],
            tags,
        };
}

export function i2o1(
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

export function i3o1(
    building: Building,
    recipe: string,
    inputItem1: string,
    inputRate1: number,
    inputItem2: string,
    inputRate2: number,
    inputItem3: string,
    inputRate3: number,
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
                { item: inputItem3, rate: inputRate3},
            ],
            outputs: [
                {item: outputItem, rate: outputRate}
            ],
            tags,
        };
}

export function i4o1(
    building: Building,
    recipe: string,
    inputItem1: string,
    inputRate1: number,
    inputItem2: string,
    inputRate2: number,
    inputItem3: string,
    inputRate3: number,
    inputItem4: string,
    inputRate4: number,
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
                { item: inputItem3, rate: inputRate3},
                { item: inputItem4, rate: inputRate4},
            ],
            outputs: [
                {item: outputItem, rate: outputRate}
            ],
            tags,
        };
}

export function i1o2(
    building: Building,
    recipe: string,
    inputItem: string,
    inputRate: number,
    outputItem1: string,
    outputRate1: number,
    outputItem2: string,
    outputRate2: number,
    tags: string[] = []
    ): SimpleMaker {
        return {
            ...forge,
            ...building,
            recipeName: recipe,
            inputs: [
                { item: inputItem, rate: inputRate},

            ],
            outputs: [
                {item: outputItem1, rate: outputRate1},
                {item: outputItem2, rate: outputRate2},
            ],
            tags,
        };
}

export function i2o2(
    building: Building,
    recipe: string,
    inputItem1: string,
    inputRate1: number,
    inputItem2: string,
    inputRate2: number,
    outputItem1: string,
    outputRate1: number,
    outputItem2: string,
    outputRate2: number,
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
                {item: outputItem1, rate: outputRate1},
                {item: outputItem2, rate: outputRate2},
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

export function miner(item: string, level: ExtractorLevel, quality: NodeQuality) : SimpleMaker {
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