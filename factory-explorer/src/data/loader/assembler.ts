import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i2o1 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function assembler() : SimpleMaker[] {
    const b = makerBuildings.assembler;

    return [
        i2o1(b, 'Alternate: Adhered Iron Plate',             'Iron Plate',                  11.25, 'Rubber',                   3.75,  'Reinforced Iron Plate',       3.8),
        i2o1(b, 'Alternate: Alclad Casing',                  'Aluminum Ingot',              150,   'Copper Ingot',             75,    'Aluminum Casing',             112.5),
        i2o1(b, 'Alternate: Bolted Frame',                   'Reinforced Iron Plate',       3,     'Screw',                    56,    'Modular Frame',               2),
        i2o1(b, 'Alternate: Bolted Iron Plate',              'Iron Plate',                  90,    'Screw',                    250,   'Reinforced Iron Plate',       15),
        i2o1(b, 'Alternate: Caterium Circuit Board',         'Plastic',                     12.5,  'Quickwire',                37.5,  'Circuit Board',               8.8),
        i2o1(b, 'Alternate: Cheap Silica',                   'Raw Quartz',                  11.25, 'Limestone',                18.75, 'Silica',                      26.3),
        i2o1(b, 'Alternate: Coated Iron Canister',           'Iron Plate',                  30,    'Copper Sheet',             15,    'Empty Canister',              60),
        i2o1(b, 'Alternate: Coated Iron Plate',              'Iron Ingot',                  50,    'Plastic',                  10,    'Iron Plate',                  75),
        i2o1(b, 'Alternate: Compacted Coal',                 'Coal',                        25,    'Sulfur',                   25,    'Compacted Coal',              25),
        i2o1(b, 'Alternate: Copper Rotor',                   'Copper Sheet',                22.5,  'Screw',                    195,   'Rotor',                       11.3),
        i2o1(b, 'Alternate: Crystal Computer',               'Circuit Board',               7.5,   'Crystal Oscillator',       2.813, 'Computer',                    2.813),
        i2o1(b, 'Alternate: Electric Motor',                 'Electromagnetic Control Rod', 3.75,  'Rotor',                    7.5,   'Motor',                       7.5),
        i2o1(b, 'Alternate: Electrode Circuit Board',        'Rubber',                      30,    'Petroleum Coke',           45,    'Circuit Board',               5),
        i2o1(b, 'Alternate: Electromagnetic Connection Rod', 'Stator',                      8,     'High-Speed Connector',     4,     'Electromagnetic Control Rod', 8),
        i2o1(b, 'Alternate: Encased Industrial Pipe',        'Steel Pipe',                  28,    'Concrete',                 20,    'Encased Industrial Beam',     4, [KnownTags.Preferred]),
        i2o1(b, 'Alternate: Fine Black Powder',              'Sulfur',                      7.5,   'Compacted Coal',           3.75,  'Black Powder',                4),
        i2o1(b, 'Alternate: Fine Concrete',                  'Silica',                      7.5,   'Limestone',                30,    'Concrete',                    25),
        i2o1(b, 'Alternate: Fused Quickwire',                'Caterium Ingot',              7.5,   'Copper Ingot',             37.5,  'Quickwire',                   90),
        i2o1(b, 'Alternate: Fused Wire',                     'Copper Ingot',                12,    'Caterium Ingot',           3,     'Wire',                        90),
        i2o1(b, 'Alternate: Heat Exchanger',                 'Aluminum Casing',             30,    'Rubber',                   30,    'Heat Sink',                   10),
        i2o1(b, 'Alternate: Insulated Cable',                'Wire',                        45,    'Rubber',                   30,    'Cable',                       100),
        i2o1(b, 'Alternate: OC Supercomputer',               'Radio Control Unit',          9,     'Cooling System',           9,     'Supercomputer',               3),
        i2o1(b, 'Alternate: Plutonium Fuel Unit',            'Encased Plutonium Cell',      10,    'Pressure Conversion Cube', .5,    'Plutonium Fuel Rod',         .5),
        i2o1(b, 'Alternate: Rubber Concrete',                'Limestone',                   50,    'Rubber',                   10,    'Concrete',                    45),
        i2o1(b, 'Alternate: Quickwire Stator',               'Steel Pipe',                  16,    'Quickwire',                60,    'Stator',                      8),
        i2o1(b, 'Alternate: Quickwire Cable',                'Quickwire',                   7.5,   'Rubber',                   5,     'Cable',                       27.5),
        i2o1(b, 'Alternate: Silicon Circuit Board',          'Copper Sheet',                27.5,  'Silica',                   27.5,  'Circuit Board',               12.5),
        i2o1(b, 'Alternate: Steel Coated Plate',             'Steel Ingot',                 7.5,   'Plastic',                  5,     'Iron Plate',                  45),
        i2o1(b, 'Alternate: Steel Rotor',                    'Steel Pipe',                  10,    'Wire',                     30,    'Rotor',                       5),
        i2o1(b, 'Alternate: Steeled Frame',                  'Reinforced Iron Plate',       2,     'Steel Pipe',               10,    'Modular Frame',               3),
        i2o1(b, 'Alternate: Stitched Iron Plate',            'Iron Plate',                  10,    'Wire',                     20,    'Reinforced Iron Plate',       3),
        i2o1(b, 'AI Limiter',                                'Copper Sheet',                25,    'Quickwire',                100,   'AI Limiter',                  5),
        i2o1(b, 'Alclad Aluminum Sheet',                     'Aluminum Ingot',              30,    'Copper Ingot',             10,    'Alclad Aluminum Sheet',       30),
        i2o1(b, 'Assembly Director System',                  'Adaptive Control Unit',       1.5,   'Supercomputer',            .75,   'Assembly Director System',    .8, [KnownTags.Goal]),
        i2o1(b, 'Automated Wiring',                          'Stator',                      2.5,   'Cable',                    50,    'Automated Wiring',            2.5),
        i2o1(b, 'Black Powder',                              'Coal',                        7.5,   'Sulfur',                   15,    'Black Powder',                7.5),
        i2o1(b, 'Circuit Board',                             'Copper Sheet',                15,    'Plastic',                  30,    'Circuit Board',               7.5),
        i2o1(b, 'Electromagnetic Control Rod',               'Stator',                      3,     'AI Limiter',               4,     'Electromagnetic Control Rod', 4),
        i2o1(b, 'Encased Industrial Beam',                   'Steel Beam',                  24,    'Concrete',                 30,    'Encased Industrial Beam',     6),
        i2o1(b, 'Encased Plutonium Cell',                    'Plutonium Pellet',            10,    'Concrete',                 20,    'Encased Plutonium Cell',      6),
        i2o1(b, 'Fabric',                                    'Mycelia',                     15,    'Biomass',                  75,    'Fabric',                      15,  [KnownTags.Finite]),
        i2o1(b, 'Fancy Fireworks',                           'FICSMAS Tree Branch',         10,   'FICSMAS Bow',               7.5,   'Fancy Fireworks',             2.5, [KnownTags.Ficsmas]),
        i2o1(b, 'FICSMAS Decoration',                        'FICSMAS Tree Branch',         15,    'FICSMAS Ornament Bundle',  6,     'FICSMAS Decoration',          2,   [KnownTags.Ficsmas]),
        i2o1(b, 'FICSMAS Ornament Bundle',                   'Copper FICSMAS Ornament',     5,     'Iron FICSMAS Ornament',    5,     'FICSMAS Ornament Bundle',     5,   [KnownTags.Ficsmas]),
        i2o1(b, 'FICSMAS Wonder Star',                       'FICSMAS Decoration',          2.5,   'Candy Cane',               25,    'FICSMAS Wonder Star',         .5,  [KnownTags.Ficsmas]),
        i2o1(b, 'Heat Sink',                                 'Alclad Aluminum Sheet',       37.5,  'Copper Sheet',             22.5,  'Heat Sink',                   7.5),
        i2o1(b, 'Modular Frame',                             'Reinforced Iron Plate',       3,     'Iron Rod',                 12,    'Modular Frame',               2),
        i2o1(b, 'Motor',                                     'Rotor',                       10,    'Stator',                   10,    'Motor',                       5),
        i2o1(b, 'Nobelisk',                                  'Black Powder',                15,    'Steel Pipe',               30,    'Nobelisk',                    3),
        i2o1(b, 'Pressure Conversion Cube',                  'Fused Modular Frame',         1,    'Radio Control Unit',        2,     'Pressure Conversion Cube',    1),
        i2o1(b, 'Reinforced Iron Plate',                     'Iron Plate',                  30,    'Screw',                    60,    'Reinforced Iron Plate',       5),
        i2o1(b, 'Rotor',                                     'Iron Rod',                    20,    'Screw',                    100,   'Rotor',                       4),
        i2o1(b, 'Stator',                                    'Steel Pipe',                  15,    'Wire',                     40,    'Stator',                      5),
        i2o1(b, 'Smart Plating',                             'Reinforced Iron Plate',       2,     'Rotor',                    2,     'Smart Plating',               2, [KnownTags.Goal]),
        i2o1(b, 'Sparkly Fireworks',                         'FICSMAS Tree Branch',         7.5,  'Actual Snow',               5,     'Sparkly Fireworks',           2.5, [KnownTags.Ficsmas]),
        i2o1(b, 'Sweet Fireworks',                           'FICSMAS Tree Branch',         15,   'Candy Cane',                7.5,   'Sweet Fireworks',             2.5, [KnownTags.Ficsmas]),
        i2o1(b, 'Versatile Framework',                       'Modular Frame',               2.5,   'Steel Beam',               30,    'Versatile Framework',         5, [KnownTags.Goal]),
    ];
}