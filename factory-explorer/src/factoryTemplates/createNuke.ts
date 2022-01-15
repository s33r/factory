import { recipeLibrary } from '../data';
import ExtractorLevel from '../data/ExtractorLevel';
import NodeQuality from '../data/NodeQuality';

import Factory from '../model/Factory';


function addNukeInstance600(factory: Factory) {






    factory.add(recipeLibrary.getByName('Alternate: Infused Uranium Cell'), 24);
    factory.add(recipeLibrary.getByName('Alternate: Uranium Fuel Unit'), 24);
    factory.add(recipeLibrary.getByName('Power - Uranium'), 1);


    factory.add(recipeLibrary.getByName('Non-fissile Uranium'), 1); // Waste Input: 37.5
    factory.add(recipeLibrary.getByName('Plutonium Pellet'), 1); //25
    factory.add(recipeLibrary.getByName('Encased Plutonium Cell'), 1); //25


}



export default function createNuke(name: string = 'Nuclear Fuel Cycle') {
    const factory : Factory = new Factory(name);




    factory.add(recipeLibrary.getExtractor('Uranium', ExtractorLevel.Mark3, NodeQuality.Normal), 1, 2.5);
    // factory.add(recipeLibrary.getExtractor('Uranium', ExtractorLevel.Mark3, NodeQuality.Impure), 1, 2.5);
    // factory.add(recipeLibrary.getExtractor('Sulfur', ExtractorLevel.Mark3, NodeQuality.Normal), 4, 2.5);


    addNukeInstance600(factory);


    // factory.add(recipeLibrary.getByName('Copper Ingot'), 102);
    // factory.add(recipeLibrary.getByName('Wire'), 89);
    // factory.add(recipeLibrary.getByName('Copper Sheet'), 85);



    // factory.add(recipeLibrary.getByName('Water'), 630);
    // factory.add(recipeLibrary.getByName('Silica'), 34);
    // factory.add(recipeLibrary.getByName('Quickwire'), 525);
    // factory.add(recipeLibrary.getByName('AI Limiter'), 34);
    // factory.add(recipeLibrary.getByName('Stator'), 26);
    // factory.add(recipeLibrary.getByName('Beacon'), 14);

    // factory.add(recipeLibrary.getByName('Electromagnetic Control Rod'), 42);
    // factory.add(recipeLibrary.getByName('Alternate: Infused Uranium Cell'), 84);
    // factory.add(recipeLibrary.getByName('Alternate: Uranium Fuel Unit'), 84);

    // factory.add(recipeLibrary.getByName('Power - Uranium'), 252);





    // factory.add(recipeLibrary.getByName('Alternate: Uranium Fuel Unit'), 84);


    // factory.add(recipeLibrary.getByName('Encased Uranium Cell'), 42);


    // factory.sort();

    console.log(factory.power);

    return factory;
}