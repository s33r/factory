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
import packager from './packager';

export default function loader() : SimpleMaker[] {
     return [
         ...smelter(),
         ...xconstructor(),
         ...foundry(),
         ...miners(),
         ...assembler(),
         ...manufacturer(),
         ...refinery(),
         ...packager(),
         ...blender(),
         ...accelerator(),
         ...power(),
     ];
}