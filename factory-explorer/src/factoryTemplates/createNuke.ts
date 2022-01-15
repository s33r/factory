import { recipeLibrary } from '../data';
import ExtractorLevel from '../data/ExtractorLevel';
import NodeQuality from '../data/NodeQuality';

import Factory from '../model/Factory';



function addNukeInstance600(factory: Factory) {
    factory.add(recipeLibrary.getByName('Water'), 203);

    factory.add(recipeLibrary.getByName('Alternate: Pure Iron Ingot'), 17);
    factory.add(recipeLibrary.getByName('Alternate: Pure Copper Ingot'), 51);
    factory.add(recipeLibrary.getByName('Alternate: Pure Caterium Ingot'), 57);
    factory.add(recipeLibrary.getByName('Alternate: Solid Steel Ingot'), 11);

    factory.add(recipeLibrary.getByName('Alternate: Fine Concrete'), 18);
    factory.add(recipeLibrary.getByName('Silica'), 28);
    factory.add(recipeLibrary.getByName('Quartz Crystal'), 12);

    factory.add(recipeLibrary.getByName('Alumina Solution'), 2);
    factory.add(recipeLibrary.getByName('Aluminum Scrap'), 1);
    factory.add(recipeLibrary.getByName('Aluminum Ingot'), 4);

    factory.add(recipeLibrary.getByName('Iron Rod'), 2);
    factory.add(recipeLibrary.getByName('Iron Plate'), 20);
    factory.add(recipeLibrary.getByName('Steel Beam'), 6);
    factory.add(recipeLibrary.getByName('Steel Pipe'), 9);
    factory.add(recipeLibrary.getByName('Alternate: Steel Screw'), 2);
    factory.add(recipeLibrary.getByName('Reinforced Iron Plate'), 8);
    factory.add(recipeLibrary.getByName('Alclad Aluminum Sheet'), 8);

    factory.add(recipeLibrary.getByName('Cable'), 9);
    factory.add(recipeLibrary.getByName('Wire'), 49);
    factory.add(recipeLibrary.getByName('Quickwire'), 57);
    factory.add(recipeLibrary.getByName('Copper Sheet'), 54);

    factory.add(recipeLibrary.getByName('AI Limiter'), 16);
    factory.add(recipeLibrary.getByName('Stator'), 12);

    factory.add(recipeLibrary.getByName('Beacon'), 4);
    factory.add(recipeLibrary.getByName('Electromagnetic Control Rod'), 19);
    factory.add(recipeLibrary.getByName('Crystal Oscillator'), 15);
    factory.add(recipeLibrary.getByName('Heat Sink'), 6);

    factory.add(recipeLibrary.getByName('Sulfuric Acid'), 5);
    factory.add(recipeLibrary.getByName('Nitric Acid'), 7);

    // Fuel Production
    factory.add(recipeLibrary.getByName('Alternate: Infused Uranium Cell'), 24);
    factory.add(recipeLibrary.getByName('Alternate: Uranium Fuel Unit'), 24);
    factory.add(recipeLibrary.getByName('Power - Uranium'), 72);

    // Waste Processing
    const scale = 7;
    factory.add(recipeLibrary.getByName('Non-fissile Uranium'), 2 * scale); // Waste Input: 100
    factory.add(recipeLibrary.getByName('Plutonium Pellet'), scale + 1); //25
    factory.add(recipeLibrary.getByName('Encased Plutonium Cell'), scale * 3 + 1); //25
    factory.add(recipeLibrary.getByName('Plutonium Fuel Rod'), scale * 2 + 3); //25
}

function addNukeInstance300(factory: Factory) {
    factory.add(recipeLibrary.getByName('Water'), 106);

    factory.add(recipeLibrary.getByName('Alternate: Pure Iron Ingot'), 17);
    factory.add(recipeLibrary.getByName('Alternate: Pure Copper Ingot'), 26);
    factory.add(recipeLibrary.getByName('Alternate: Pure Caterium Ingot'), 29);
    factory.add(recipeLibrary.getByName('Alternate: Solid Steel Ingot'), 7);

    factory.add(recipeLibrary.getByName('Alternate: Fine Concrete'), 8);
    factory.add(recipeLibrary.getByName('Silica'), 12);
    factory.add(recipeLibrary.getByName('Quartz Crystal'), 7);

    factory.add(recipeLibrary.getByName('Alumina Solution'), 2);
    factory.add(recipeLibrary.getByName('Aluminum Scrap'), 1);
    factory.add(recipeLibrary.getByName('Aluminum Ingot'), 2);

    factory.add(recipeLibrary.getByName('Iron Rod'), 1);
    factory.add(recipeLibrary.getByName('Iron Plate'), 12);
    factory.add(recipeLibrary.getByName('Steel Beam'), 4);
    factory.add(recipeLibrary.getByName('Steel Pipe'), 5);
    factory.add(recipeLibrary.getByName('Alternate: Steel Screw'), 1);
    factory.add(recipeLibrary.getByName('Reinforced Iron Plate'), 4);
    factory.add(recipeLibrary.getByName('Alclad Aluminum Sheet'), 4);

    factory.add(recipeLibrary.getByName('Cable'), 5);
    factory.add(recipeLibrary.getByName('Wire'), 26);
    factory.add(recipeLibrary.getByName('Quickwire'), 29);
    factory.add(recipeLibrary.getByName('Copper Sheet'), 27);

    factory.add(recipeLibrary.getByName('AI Limiter'), 8);
    factory.add(recipeLibrary.getByName('Stator'), 6);

    factory.add(recipeLibrary.getByName('Beacon'), 2);
    factory.add(recipeLibrary.getByName('Electromagnetic Control Rod'), 10);
    factory.add(recipeLibrary.getByName('Crystal Oscillator'), 8);
    factory.add(recipeLibrary.getByName('Heat Sink'), 3);

    factory.add(recipeLibrary.getByName('Sulfuric Acid'), 5);
    factory.add(recipeLibrary.getByName('Nitric Acid'), 7);



    // Fuel Production
    factory.add(recipeLibrary.getByName('Alternate: Infused Uranium Cell'), 12);
    factory.add(recipeLibrary.getByName('Alternate: Uranium Fuel Unit'), 12);
    factory.add(recipeLibrary.getByName('Power - Uranium'), 36);

    // Waste Processing
    const scale = 3;
    factory.add(recipeLibrary.getByName('Non-fissile Uranium'), 2 * scale); // Waste Input: 100
    factory.add(recipeLibrary.getByName('Plutonium Pellet'), scale + 1); //25
    factory.add(recipeLibrary.getByName('Encased Plutonium Cell'), scale * 3 + 1); //25
    factory.add(recipeLibrary.getByName('Plutonium Fuel Rod'), scale * 2 + 3); //25
}

export default function createNuke(name: string = 'Nuclear Fuel Cycle') {
    const factory : Factory = new Factory(name);




    factory.add(recipeLibrary.getExtractor('Uranium', ExtractorLevel.Mark3, NodeQuality.Impure), 1, 2.5);
    // factory.add(recipeLibrary.getExtractor('Uranium', ExtractorLevel.Mark3, NodeQuality.Impure), 1, 2.5);
    // factory.add(recipeLibrary.getExtractor('Sulfur', ExtractorLevel.Mark3, NodeQuality.Normal), 4, 2.5);


    // addNukeInstance600(factory);
    addNukeInstance300(factory);





    console.log(factory.power);

    return factory;
}