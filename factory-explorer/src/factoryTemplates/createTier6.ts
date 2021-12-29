import { recipeLibrary } from '../data';
import ExtractorLevel from '../data/ExtractorLevel';
import NodeQuality from '../data/NodeQuality';

import Factory from '../model/Factory';

export default function createTier6(name: string = 'Tier6 Factory') {
    const factory : Factory = new Factory(name);



    // Goals

    factory.add(recipeLibrary.getByName('Modular Engine'),        1);
    factory.add(recipeLibrary.getByName('Advanced Control Unit'), 1);




    // Equipment


    factory.add(recipeLibrary.getByName('Rifle Cartridge'), 1);
    factory.add(recipeLibrary.getByName('Gas Filter'),      1);


    // Building Parts

    factory.add(recipeLibrary.getByName('Supercomputer'),         1);








    // Crystal Computer



    // Basics






    // Completed
    factory.add(recipeLibrary.getByName('Beacon'),          1);
    factory.add(recipeLibrary.getByName('Nobelisk'),        1);
    factory.add(recipeLibrary.getByName('Black Powder'),    8);
    factory.add(recipeLibrary.getByName('Automated Wiring'),      4);
    factory.add(recipeLibrary.getByName('Motor'),                 1);
    factory.add(recipeLibrary.getByName('Stator'),                5);

    factory.add(recipeLibrary.getByName('Alternate: Crystal Computer'),           3);
    factory.add(recipeLibrary.getByName('Crystal Oscillator'),                    10);
    factory.add(recipeLibrary.getByName('Smart Plating'),         1);
    factory.add(recipeLibrary.getByName('Alternate: Steel Screw'),  6);

    factory.add(recipeLibrary.getByName('Heavy Modular Frame'),   1);
    factory.add(recipeLibrary.getByName('Modular Frame'),         8);
    factory.add(recipeLibrary.getByName('Versatile Framework'),   1);


    factory.add(recipeLibrary.getByName('High-Speed Connector'),  2);
    factory.add(recipeLibrary.getByName('AI Limiter'),            1);
    factory.add(recipeLibrary.getByName('Alternate: Silicon Circuit Board'),      3);

    factory.add(recipeLibrary.getByName('Reinforced Iron Plate'), 12);
    factory.add(recipeLibrary.getByName('Rotor'),                 4);

    factory.add(recipeLibrary.getByName('Cable'),                   16);
    factory.add(recipeLibrary.getByName('Wire'),                    44);
    factory.add(recipeLibrary.getByName('Copper Sheet'),            6);
    factory.add(recipeLibrary.getByName('Iron Plate'),              20);
    factory.add(recipeLibrary.getByName('Iron Rod'),                14);

    factory.add(recipeLibrary.getByName('Alternate: Encased Industrial Pipe'),  4);
    factory.add(recipeLibrary.getByName('Steel Pipe'),      14);
    factory.add(recipeLibrary.getByName('Steel Beam'),      6);
    factory.add(recipeLibrary.getByName('Silica'),          4);
    factory.add(recipeLibrary.getByName('Quartz Crystal'),  10);
    factory.add(recipeLibrary.getByName('Quickwire'),               10);
    factory.add(recipeLibrary.getByName('Iron Ingot'),                   64); //4
    factory.add(recipeLibrary.getByName('Copper Ingot'),                 32); //2
    factory.add(recipeLibrary.getByName('Caterium Ingot'),               16); //1
    factory.add(recipeLibrary.getByName('Alternate: Solid Steel Ingot'), 16); //1

    // Extractors
    factory.add(recipeLibrary.getExtractor('Caterium Ore', ExtractorLevel.Mark2, NodeQuality.Normal), 2, 2);
    factory.add(recipeLibrary.getExtractor('Iron Ore',     ExtractorLevel.Mark2, NodeQuality.Pure  ), 4, 2);
    factory.add(recipeLibrary.getExtractor('Copper Ore',   ExtractorLevel.Mark2, NodeQuality.Pure  ), 2, 2);
    factory.add(recipeLibrary.getExtractor('Coal',         ExtractorLevel.Mark2, NodeQuality.Pure  ), 1, 2); // 1
    factory.add(recipeLibrary.getExtractor('Coal',         ExtractorLevel.Mark2, NodeQuality.Normal), 4, 1); // 1
    factory.add(recipeLibrary.getExtractor('Sulfur',       ExtractorLevel.Mark2, NodeQuality.Normal), 1, 1); // 1
    factory.add(recipeLibrary.getExtractor('Raw Quartz',   ExtractorLevel.Mark2, NodeQuality.Pure  ), 2, 2);

//     factory.add(recipeLibrary.getExtractor('Caterium Ore', ExtractorLevel.Mark2, NodeQuality.Normal), 2, 2);
//     factory.add(recipeLibrary.getExtractor('Limestone',    ExtractorLevel.Mark2, NodeQuality.Pure  ), 2, 2);
//     factory.add(recipeLibrary.getExtractor('Iron Ore',     ExtractorLevel.Mark2, NodeQuality.Pure  ), 4, 2);
//     factory.add(recipeLibrary.getExtractor('Copper Ore',   ExtractorLevel.Mark2, NodeQuality.Pure  ), 2, 2);
//     factory.add(recipeLibrary.getExtractor('Caterium Ore', ExtractorLevel.Mark2, NodeQuality.Normal), 2, 2);
//     factory.add(recipeLibrary.getExtractor('Coal',         ExtractorLevel.Mark2, NodeQuality.Pure  ), 1, 2);
//     factory.add(recipeLibrary.getExtractor('Coal',         ExtractorLevel.Mark2, NodeQuality.Normal), 4, 2.5);
//     factory.add(recipeLibrary.getExtractor('Raw Quartz',   ExtractorLevel.Mark2, NodeQuality.Pure  ), 2, 2);
//     factory.add(recipeLibrary.getExtractor('Sulfur',       ExtractorLevel.Mark2, NodeQuality.Normal), 1, 2.5);
//     factory.add(recipeLibrary.getExtractor('Sulfur',       ExtractorLevel.Mark2, NodeQuality.Impure), 1, 2.5);






    factory.complete('Beacon',  1);
    factory.complete('Nobelisk',  1);
    factory.complete('Black Powder',  8);
    factory.complete('Automated Wiring',  4);
    factory.complete('Motor',  1);
    factory.complete('Stator',  5);
    factory.complete('Heavy Modular Frame',  1);
    factory.complete('Modular Frame',  8);
    factory.complete('High-Speed Connector',  2);
    factory.complete('Alternate: Silicon Circuit Board',  3);
    factory.complete('AI Limiter',  1);
    factory.complete('Reinforced Iron Plate',  12);
    factory.complete('Rotor',  4);
    factory.complete('Steel Ingot',  24);
    factory.complete('Iron Ingot',   64);
    factory.complete('Copper Ingot', 32);
    factory.complete('Caterium Ingot', 17);
    factory.complete('Alternate: Solid Steel Ingot', 24);
    factory.complete('Silica', 16);
    factory.complete('Quartz Crystal', 16);
    factory.complete('Steel Beam', 8);
    factory.complete('Steel Pipe', 32);
    factory.complete('Quickwire', 22);
    factory.complete('Alternate: Encased Industrial Pipe', 4);
    factory.complete('Iron Rod', 14);
    factory.complete('Iron Plate', 20);
    factory.complete('Alternate: Steel Screw', 6);
    factory.complete('Smart Plating', 1);
    factory.complete('Versatile Framework', 1);
    factory.complete('Alternate: Crystal Computer', 3);
    factory.complete('Crystal Oscillator', 10);


    factory.complete('Copper Sheet', 6);
    factory.complete('Wire', 44);
    factory.complete('Cable', 16);



    return factory;
}