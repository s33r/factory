import { recipeLibrary } from '../data';
import ExtractorLevel from '../data/ExtractorLevel';
import NodeQuality from '../data/NodeQuality';

import Factory from '../model/Factory';

export default function createAluminum(name: string = 'Phase 5 Factory') {
    const factory : Factory = new Factory(name);

    factory.add(recipeLibrary.getByName('Alclad Aluminum Sheet'),         4);
    factory.add(recipeLibrary.getByName('Aluminum Ingot'),         2);
    factory.add(recipeLibrary.getByName('Aluminum Scrap'),         1, 1.5);
    factory.add(recipeLibrary.getByName('Alumina Solution'),         3);



    return factory;
}