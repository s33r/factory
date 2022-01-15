import { recipeLibrary } from '../data';
import ExtractorLevel from '../data/ExtractorLevel';
import NodeQuality from '../data/NodeQuality';

import Factory from '../model/Factory';




export default function phase4(name: string = 'Phase 4 Factory') {
    const factory : Factory = new Factory(name);

    factory.add(recipeLibrary.getByName('Magnetic Field Generator'),           2);
    factory.add(recipeLibrary.getByName('Thermal Propulsion Rocket'),          2);
    factory.add(recipeLibrary.getByName('Assembly Director System'),           3);
    factory.add(recipeLibrary.getByName('Adaptive Control Unit'),              5);
    factory.add(recipeLibrary.getByName('Alternate: OC Supercomputer'),        1);
    factory.add(recipeLibrary.getByName('Alternate: Radio Connection Unit'),   4);
    factory.add(recipeLibrary.getByName('Cooling System'),                     5);
    factory.add(recipeLibrary.getByName('Alternate: Silicon Circuit Board'),   3);
    factory.add(recipeLibrary.getByName('Alternate: Heat Exchanger'),          12);
    factory.add(recipeLibrary.getByName('High-Speed Connector'),               11);
    factory.add(recipeLibrary.getByName('Alternate: Crystal Computer'),        2);
    factory.add(recipeLibrary.getByName('Alternate: Automated Speed Wiring'),  5);
    factory.add(recipeLibrary.getByName('Nuclear Pasta'),                      2);
    factory.add(recipeLibrary.getByName('Copper Powder'),                      4);
    factory.add(recipeLibrary.getByName('Alternate: Copper Alloy Ingot'),      34);
    factory.add(recipeLibrary.getByName('Alternate: Iron Alloy Ingot'),        46);
    factory.add(recipeLibrary.getByName('Caterium Ingot'),                     36);
    factory.add(recipeLibrary.getByName('Aluminum Ingot'),                     18);
    factory.add(recipeLibrary.getByName('Pressure Conversion Cube'),           2);
    factory.add(recipeLibrary.getByName('Fused Modular Frame'),                3);
    factory.add(recipeLibrary.getByName('Heavy Modular Frame'),                5);
    factory.add(recipeLibrary.getByName('Alternate: Steeled Frame'),           18);
    factory.add(recipeLibrary.getByName('Alternate: Radio Control System'),    2);
    factory.add(recipeLibrary.getByName('Alternate: Steel Screw'),             16);
    factory.add(recipeLibrary.getByName('Alternate: Alclad Casing'),           7);
    factory.add(recipeLibrary.getByName('Alternate: Encased Industrial Pipe'), 13);
    factory.add(recipeLibrary.getByName('Alternate: Silicon Circuit Board'),   6);
    factory.add(recipeLibrary.getByName('Crystal Oscillator'),                 9);
    factory.add(recipeLibrary.getByName('Alternate: Bolted Iron Plate'),       5);
    factory.add(recipeLibrary.getByName('Copper Sheet'),                       28);
    factory.add(recipeLibrary.getByName('Cable'),                              18);
    factory.add(recipeLibrary.getByName('Concrete'),                           18);
    factory.add(recipeLibrary.getByName('Silica'),                             44);
    factory.add(recipeLibrary.getByName('Quartz Crystal'),                     16);
    factory.add(recipeLibrary.getByName('Steel Pipe'),                         48);
    factory.add(recipeLibrary.getByName('Steel Beam'),                         8);
    factory.add(recipeLibrary.getByName('Iron Plate'),                         24);
    factory.add(recipeLibrary.getByName('Wire'),                               70);
    factory.add(recipeLibrary.getByName('Battery'),                            1);
    factory.add(recipeLibrary.getByName('Electromagnetic Control Rod'),        1);
    factory.add(recipeLibrary.getByName('Versatile Framework'),                1);
    factory.add(recipeLibrary.getByName('Stator'),                             1);
    factory.add(recipeLibrary.getByName('Modular Engine'),                     5);
    factory.add(recipeLibrary.getByName('Smart Plating'),                      5);
    factory.add(recipeLibrary.getByName('Turbo Motor'),                        2);
    factory.add(recipeLibrary.getByName('Motor'),                              5);
    factory.add(recipeLibrary.getByName('Quickwire'),                          42);
    factory.add(recipeLibrary.getByName('AI Limiter'),                         1);
    factory.add(recipeLibrary.getByName('Stator'),                             15);
    factory.add(recipeLibrary.getByName('Rotor'),                              15);
    factory.add(recipeLibrary.getByName('Iron Rod'),                           20);
    factory.add(recipeLibrary.getByName('Alternate: Solid Steel Ingot'),       32);
    factory.add(recipeLibrary.getByName('Aluminum Scrap'),                     6);
    factory.add(recipeLibrary.getByName('Alternate: Sloppy Alumina'),          7);


    factory.sort();

    console.log(factory.power);

    return factory;
}