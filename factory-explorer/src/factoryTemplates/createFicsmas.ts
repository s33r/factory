import { recipeLibrary } from '../data';

import Factory from '../model/Factory';

export default function createFicsmas(name: string = 'FICSMAS Factory') {
    const factory : Factory = new Factory(name);

    factory.add(recipeLibrary.getByName('FICSMAS Gift'),            32);

    factory.add(recipeLibrary.getByName('Candy Cane'),              12);
    factory.add(recipeLibrary.getByName('Actual Snow'),             3);
    factory.add(recipeLibrary.getByName('FICSMAS Tree Branch'),     8);
    factory.add(recipeLibrary.getByName('FICSMAS Bow'),             3);
    factory.add(recipeLibrary.getByName('Blue FICSMAS Ornament'),   8);
    factory.add(recipeLibrary.getByName('Red FICSMAS Ornament'),    11);
    factory.add(recipeLibrary.getByName('Snowball'),                1);
    factory.add(recipeLibrary.getByName('Copper FICSMAS Ornament'), 5);
    factory.add(recipeLibrary.getByName('Iron FICSMAS Ornament'),   5);
    factory.add(recipeLibrary.getByName('FICSMAS Ornament Bundle'), 4);
    factory.add(recipeLibrary.getByName('FICSMAS Decoration'),      3);

    factory.add(recipeLibrary.getByName('FICSMAS Wonder Star'),     2);
    factory.add(recipeLibrary.getByName('Sparkly Fireworks'),       1);
    factory.add(recipeLibrary.getByName('Fancy Fireworks'),         1);
    factory.add(recipeLibrary.getByName('Sweet Fireworks'),         1);


    factory.complete('FICSMAS Gift',  32);
    factory.complete('Actual Snow',  3);
    factory.complete('Candy Cane',  12);
    factory.complete('FICSMAS Tree Branch',  8);
    factory.complete('FICSMAS Bow',  3);
    factory.complete('Blue FICSMAS Ornament',  8);
    factory.complete('Red FICSMAS Ornament',  11);
    factory.complete('Copper FICSMAS Ornament',  5);
    factory.complete('Iron FICSMAS Ornament',  5);

    return factory;
}