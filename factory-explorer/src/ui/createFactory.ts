import { recipeLibrary } from '../data';
import ExtractorLevel from '../data/ExtractorLevel';
import NodeQuality from '../data/NodeQuality';
import Factory from '../model/Factory';






function tier6() {
    const factory : Factory = new Factory('Tier 6 Factory');

    factory.add(recipeLibrary.getByName('Modular Engine'));
    factory.add(recipeLibrary.getByName('Advanced Control Unit'));
    factory.add(recipeLibrary.getByName('Beacon'));
    factory.add(recipeLibrary.getByName('Nobelisk'));
    factory.add(recipeLibrary.getByName('AI Limiter'));
    factory.add(recipeLibrary.getByName('Quickwire'));
    factory.add(recipeLibrary.getByName('Concrete'));
    factory.add(recipeLibrary.getByName('Crystal Oscillator'));

    factory.optimize();
    factory.sort();

    return factory;
}

function testCable() {
    const factory : Factory = new Factory('Test Cable');

    factory.add(recipeLibrary.getByName('Cable'));

    factory.optimize();
    factory.sort();

    return factory;
}



function createExtractors() {
    const factory : Factory = new Factory('Extractors');



    factory.add(recipeLibrary.getByName('Caterium Ingot'), 10);
    factory.add(recipeLibrary.getByName('Quickwire'     ), 12);


    factory.add(recipeLibrary.getByName('Concrete'), 20);
    factory.add(recipeLibrary.getExtractor('Caterium Ore', ExtractorLevel.Mark2, NodeQuality.Normal), 2, 2);
    factory.add(recipeLibrary.getExtractor('Limestone',    ExtractorLevel.Mark2, NodeQuality.Pure  ), 2, 2);
    factory.add(recipeLibrary.getExtractor('Iron Ore',     ExtractorLevel.Mark2, NodeQuality.Pure  ), 4, 2);
    factory.add(recipeLibrary.getExtractor('Copper Ore',   ExtractorLevel.Mark2, NodeQuality.Pure  ), 2, 2);
    factory.add(recipeLibrary.getExtractor('Caterium Ore', ExtractorLevel.Mark2, NodeQuality.Normal), 2, 2);
    factory.add(recipeLibrary.getExtractor('Coal',         ExtractorLevel.Mark2, NodeQuality.Pure  ), 1, 2);
    factory.add(recipeLibrary.getExtractor('Coal',         ExtractorLevel.Mark2, NodeQuality.Normal), 4, 2.5);
    factory.add(recipeLibrary.getExtractor('Raw Quartz',   ExtractorLevel.Mark2, NodeQuality.Pure  ), 2, 2);
    factory.add(recipeLibrary.getExtractor('Sulfur',       ExtractorLevel.Mark2, NodeQuality.Normal), 1, 2.5);
    factory.add(recipeLibrary.getExtractor('Sulfur',       ExtractorLevel.Mark2, NodeQuality.Impure), 1, 2.5);

    return factory;
}

export default function createFactory() {
    const factory = testCable();




    return factory;
}