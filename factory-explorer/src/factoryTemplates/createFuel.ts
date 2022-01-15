import { recipeLibrary } from '../data';
import ExtractorLevel from '../data/ExtractorLevel';
import NodeQuality from '../data/NodeQuality';

import Factory from '../model/Factory';



function turboHeavyFuel(factory : Factory) {
    // 47,165 MW
    factory.add(recipeLibrary.getByName('Water'), 6);
    factory.add(recipeLibrary.getByName('Alternate: Heavy Oil Residue'), 60);
    factory.add(recipeLibrary.getByName('Alternate: Turbo Heavy Fuel'), 64);
    factory.add(recipeLibrary.getByName('Alternate: Compacted Coal'), 77);
    factory.add(recipeLibrary.getByName('Alternate: Polyester Fabric'), 1);
    factory.add(recipeLibrary.getByName('Residual Plastic'), 11);
    factory.add(recipeLibrary.getByName('Residual Rubber'), 11);
    factory.add(recipeLibrary.getByName('Power - Turbofuel'), 426);
}

function turbofuel(factory : Factory) {
    //95,405 MW

    const scale = 1;

    factory.add(recipeLibrary.getByName('Water'), 46);
    factory.add(recipeLibrary.getByName('Coal -> Miner Mk.3 (pure)'), 5, 1.5);
    factory.add(recipeLibrary.getByName('Sulfur -> Miner Mk.3 (pure)'), 5, 1.5);
    factory.add(recipeLibrary.getByName('Alternate: Heavy Oil Residue'), 60);
    factory.add(recipeLibrary.getByName('Alternate: Diluted Fuel'),      48);
    factory.add(recipeLibrary.getByName('Alternate: Turbofuel'), 213);
    factory.add(recipeLibrary.getByName('Alternate: Compacted Coal'), 128);
    factory.add(recipeLibrary.getByName('Alternate: Polyester Fabric'), 1);
    factory.add(recipeLibrary.getByName('Residual Plastic'), 11);
    factory.add(recipeLibrary.getByName('Residual Rubber'), 11);

    factory.add(recipeLibrary.getByName('Power - Turbofuel'), 889);
}

function turboBlendFuel(factory : Factory) {
    //50,860

    factory.add(recipeLibrary.getByName('Water'), 16);
    const scale = 10;
    factory.add(recipeLibrary.getByName('Alternate: Heavy Oil Residue'), 6 * scale);
    factory.add(recipeLibrary.getByName('Petroleum Coke'),               1 * scale);
    factory.add(recipeLibrary.getByName('Alternate: Diluted Fuel'),      1 * scale);
    factory.add(recipeLibrary.getByName('Alternate: Turbo Blend Fuel'),  4 * scale);
    factory.add(recipeLibrary.getByName('Petroleum Coke'),               1);
    factory.add(recipeLibrary.getByName('Alternate: Diluted Fuel'),      1);
    factory.add(recipeLibrary.getByName('Alternate: Turbo Blend Fuel'),  7);
    factory.add(recipeLibrary.getByName('Alternate: Polyester Fabric'), 1);
    factory.add(recipeLibrary.getByName('Residual Plastic'), 11);
    factory.add(recipeLibrary.getByName('Residual Rubber'), 11);


    //   Fuel - 15
    //    HOR - 30
    // Sulfur - 22.5
    //   Coke - 22.5



    factory.add(recipeLibrary.getByName('Power - Turbofuel'), 470);
}



export default function createFuel(name: string = 'Oil Fuel Cycle') {
    const factory : Factory = new Factory(name);

    factory.add(recipeLibrary.getByName('Crude Oil -> Pure'), 2, 2.5);
    factory.add(recipeLibrary.getByName('Crude Oil -> Normal'), 2, 2.5);

    // turboHeavyFuel(factory);
    // turboBlendFuel(factory);
    turbofuel(factory);

    console.log(factory.power);

    return factory;
}