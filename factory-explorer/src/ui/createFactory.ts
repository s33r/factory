import createTier6 from '../factoryTemplates/createTier6';

// function tier6() {
//     const factory : Factory = new Factory('Tier 6 Factory');

//     factory.add(recipeLibrary.getByName('Modular Engine'));
//     factory.add(recipeLibrary.getByName('Advanced Control Unit'));
//     factory.add(recipeLibrary.getByName('Beacon'));
//     factory.add(recipeLibrary.getByName('Nobelisk'));
//     factory.add(recipeLibrary.getByName('AI Limiter'));
//     factory.add(recipeLibrary.getByName('Crystal Oscillator'));
//     factory.add(recipeLibrary.getByName('Spiked Rebar'));
//     factory.add(recipeLibrary.getByName('Alternate: Polyester Fabric'));
//     factory.add(recipeLibrary.getByName('Modular Frame'));

//     factory.optimize();
//     factory.sort();

//     factory.complete('Concrete',              4);
//     factory.complete('Iron Ingot',            34);
//     factory.complete('Iron Plate',            34);
//     factory.complete('Iron Rod',              34);
//     factory.complete('Rotor',                 4);
//     factory.complete('Screw',                 16);
//     factory.complete('Reinforced Iron Plate', 6);
//     factory.complete('Modular Frame',         6);
//     factory.complete('Smart Plating',         2);

//     return factory;
// }

// function testCable() {
//     const factory : Factory = new Factory('Test Cable');

//     factory.add(recipeLibrary.getByName('Cable'));

//     factory.optimize();
//     factory.sort();

//     return factory;
// }



// function createExtractors() {
//     const factory : Factory = new Factory('Extractors');



//     factory.add(recipeLibrary.getByName('Caterium Ingot'), 10);
//     factory.add(recipeLibrary.getByName('Quickwire'     ), 12);


//     factory.add(recipeLibrary.getByName('Concrete'), 20);
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

//     return factory;
// }

export default function createFactory() {
    const factory = createTier6();




    return factory;
}