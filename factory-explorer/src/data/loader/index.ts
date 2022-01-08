import { SimpleMaker } from '../simpleTypes';

import smelter from './smelter';
import xconstructor from './xconstructor';
import foundry from './foundry';
import miners from './miners';
import assembler from './assembler';
import manufacturer from './manufacturer';
import refinery from './refinery';
import blender from './blender';
import accelerator from './accelerator';
import power from './power';

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

export default function loader() : SimpleMaker[] {
     return cleanData([
         ...smelter(),
         ...xconstructor(),
         ...foundry(),
         ...miners(),
         ...assembler(),
         ...manufacturer(),
         ...refinery(),
         ...blender(),
         ...accelerator(),
         ...power(),
     ]);
}