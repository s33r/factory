
import {SimpleMaker, SimplePort, } from './simpleTypes';
import KnownTags from '../model/KnownTags';

import loader from './loader';

type ItemRecords = {[key: string]: boolean}

function cleanData(data: SimpleMaker[]) : SimpleMaker[] {
    return data.map(simpleMaker => {
        const cleaned :SimpleMaker = simpleMaker;

        cleaned.recipeName = cleaned.recipeName.trim();

        cleaned.inputs = cleaned.inputs.map(input => ({
            item: input.item.trim(),
            rate: input.rate,
        }));

        cleaned.outputs = cleaned.outputs.map(output => ({
            item: output.item.trim(),
            rate: output.rate,
        }));

        return cleaned;
    });
}

function hasRecord(records: ItemRecords, ports: SimplePort[]) {
    for(const port of ports) {
        if(records[port.item]) {
            return true;
        }
    }

    return false;
}

function tagTerminals(makers : SimpleMaker[]) {
    const foundOutputs: ItemRecords = {};
    const foundInputs: ItemRecords = {};

    makers.forEach(recipe => {
        recipe.inputs.forEach(input => foundInputs[input.item] = true);
        recipe.outputs.forEach(input => foundOutputs[input.item] = true);
    });

    const inputTerminals: ItemRecords = Object.keys(foundInputs)
        .filter(key => !foundOutputs[key])
        .reduce((sum: ItemRecords, current) => { sum[current] = true; return sum;}, {});

    const outputTerminals: ItemRecords = Object.keys(foundOutputs)
        .filter(key => !foundInputs[key])
        .reduce((sum: ItemRecords, current) => { sum[current] = true; return sum;}, {});

    makers.forEach(maker => {
        if(hasRecord(inputTerminals, maker.inputs)) {
            maker.tags.push(KnownTags.Original);
        }
    });

    makers.forEach(maker => {
        if(hasRecord(outputTerminals, maker.outputs)) {
            maker.tags.push(KnownTags.Terminal);
        }
    });
}


const result: SimpleMaker[] = cleanData(loader());

tagTerminals(result);


export default result;
