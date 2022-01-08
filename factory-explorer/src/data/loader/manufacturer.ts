import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i3o1, i4o1 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function manufacturer() : SimpleMaker[] {
    const b = makerBuildings.manufacturer;

    return [

        i4o1(b, 'Adaptive Control Unit',                   'Automated Wiring',       7.5,    'Circuit Board',               5      ,'Heavy Modular Frame',          1,      'Computer',                 1,      'Adaptive Control Unit',    1, [KnownTags.Goal]),
        i4o1(b, 'Alternate: Automated Miner',              'Motor',                  1,      'Steel Pipe',                  4      ,'Iron Rod',                     4,      'Iron Plate',               2,      'Portable Miner',    1),
        i3o1(b, 'Alternate: Automated Speed Wiring',       'Stator',                 3.75,   'Wire',                        75     ,'High-Speed Connector',         1.875,  'Automated Wiring',         7.5, [KnownTags.Goal]),
        i3o1(b, 'Alternate: Caterium Computer',            'Circuit Board',          26.25,  'Quickwire',                   105    ,'Rubber',                       45,     'Computer',                 3.8),
        i4o1(b, 'Alternate: Classic Battery',              'Sulfur',                 45,     'Alclad Aluminum Sheet',       52.5   ,'Plastic',                      60,     'Wire',                     90,     'Battery',    30),
        i3o1(b, 'Alternate: Crystal Beacon',               'Steel Beam',             2,      'Steel Pipe',                  8      ,'Crystal Oscillator',           0.5,    'Beacon',                   10),
        i3o1(b, 'Alternate: Flexible Framework',           'Modular Frame',          3.75,   'Steel Beam',                  22.5   ,'Rubber',                       30,     'Versatile Framework',      7.5, [KnownTags.Goal]),
        i4o1(b, 'Alternate: Heavy Encased Frame',          'Modular Frame',          7.5,    'Encased Industrial Beam',     9.375  ,'Steel Pipe',                   33.75,  'Concrete',                 20.625, 'Heavy Modular Frame',    2.8),
        i4o1(b, 'Alternate: Heavy Flexible Frame',         'Modular Frame',          18.75,  'Encased Industrial Beam',     11.25  ,'Rubber',                       75,     'Screw',                    390,    'Heavy Modular Frame',    3.8),
        i4o1(b, 'Alternate: Infused Uranium Cell',         'Uranium',                25,     'Silica',                      15     ,'Sulfur',                       25,     'Quickwire',                75,     'Encased Uranium Cell',    20),
        i3o1(b, 'Alternate: Insulated Crystal Oscillator', 'Quartz Crystal',         18.75,  'Rubber',                      13.125 ,'AI Limiter',                   1.875,  'Crystal Oscillator',       1.9),
        i3o1(b, 'Alternate: Plastic Smart Plating  ',      'Reinforced Iron Plate',  2.5,    'Rotor',                       2.5    ,'Plastic',                      7.5,    'Smart Plating',            5),
        i3o1(b, 'Alternate: Radio Connection Unit',        'Heat Sink',              15,     'High-Speed Connector',        7.5    ,'Quartz Crystal',               45,     'Radio Control Unit',       3.8),
        i3o1(b, 'Alternate: Rigour Motor',                 'Rotor  ',                3.75,   'Stator',                      3.75   ,'Crystal Oscillator',           1.25,   'Motor',                    7.5),
        i3o1(b, 'Alternate: Seismic Nobelisk',             'Black Powder ',          12,     'Steel Pipe',                  12     ,'Crystal Oscillator',           1.5,    'Nobelisk',                 6),
        i3o1(b, 'Alternate: Silicon High-Speed Connector', 'Quickwire',              90,     'Silica',                      37.5   ,'Circuit Board',                3,      'High-Speed Connector',     3),
        i4o1(b, 'Alternate: Super-State Computer',         'Computer',               3.6,    'Electromagnetic Control Rod', 2.4    ,'Battery',                      24,     'Wire',                     54,     'Supercomputer',    2.4),
        i4o1(b, 'Alternate: Turbo Electric Motor',         'Motor',                  6.5625, 'Radio Control Unit',          8.4375 ,'Electromagnetic Control Rod ', 4.6875, 'Rotor',                    6.5625, 'Turbo Motor',    2.8),
        i4o1(b, 'Alternate: Turbo Pressure Motor',         'Motor',                  7.5,    'Pressure Conversion Cube',    1.875  ,'Packaged Nitrogen Gas',        45,     'Stator',                   15,     'Turbo Motor',    3.8),
        i4o1(b, 'Alternate: Uranium Fuel Unit',            'Encased Uranium Cell',   20,     'Electromagnetic Control Rod', 2      ,'Crystal Oscillator',           0.6,    'Beacon',                   1.2,    'Uranium Fuel Rod',    0.6),
        i4o1(b, 'Beacon',                                  'Iron Plate',             22.5,   'Iron Rod',                    7.5    ,'Wire',                         112.5,  'Cable',                    15,     'Beacon',    7.5),
        i4o1(b, 'Computer',                                'Circuit Board',          25,     'Cable',                       22.5   ,'Plastic',                      45,     'Screw',                    130,    'Computer',    2.5),
        i3o1(b, 'Crystal Oscillator',                      'Quartz Crystal',         18,     'Cable',                       14     ,'Reinforced Iron Plate',        2.5,    'Crystal Oscillator',       1),
        i3o1(b, 'Gas Filter',                              'Coal',                   37.5,   'Rubber',                      15     ,'Fabric',                       15,     'Gas Filter',               7.5),
        i4o1(b, 'Heavy Modular Frame',                     'Modular Frame',          10,     'Steel Pipe',                  30     ,'Encased Industrial Beam',      10,     'Screw',                    200,    'Heavy Modular Frame',    2),
        i3o1(b, 'High-Speed Connector',                    'Quickwire',              210,    'Cable',                       37.5   ,'Circuit Board',                3.75,   'High-Speed Connector',     3.8),
        i3o1(b, 'Iodine Infused Filter',                   'Gas Filter',             3.75,   'Quickwire',                   30     ,'Aluminum Casing',              3.75,   'Iodine Infused Filter',    3.8),
        i3o1(b, 'Magnetic Field Generator',                'Versatile Framework',    2.5,    'Electromagnetic Control Rod', 1      ,'Battery',                      5,      'Magnetic Field Generator', 1),
        i3o1(b, 'Modular Engine',                          'Motor',                  2,      'Rubber',                      15     ,'Smart Plating',                2,      'Modular Engine',           1, [KnownTags.Goal]),
        i4o1(b, 'Plutonium Fuel Rod',                      'Encased Plutonium Cell', 7.5,    'Steel Beam',                  4.5    ,'Electromagnetic Control Rod ', 1.5,    'Heat Sink',                2.5,    'Plutonium Fuel Rod',    0.3),
        i3o1(b, 'Radio Control Unit',                      'Aluminum Casing',        40,     'Crystal Oscillator',          1.25   ,'Computer',                     1.25,   'Radio Control Unit',       2.5),
        i4o1(b, 'Alternate: Radio Control System',         'Crystal Oscillator',     1.5,    'Circuit Board',               15     ,'Aluminum Casing',              90,     'Rubber',                   45,     'Radio Control Unit',    4.5),
        i4o1(b, 'Rifle Cartridge',                         'Beacon',                 3,      'Steel Pipe',                  30     ,'Black Powder',                 30,     'Rubber',                   30,     'Rifle Cartridge',    15),
        i4o1(b, 'Supercomputer',                           'Computer',               3.75,   'AI Limiter',                  3.75   ,'High-Speed Connector',         5.625,  'Plastic',                  52.5,   'Supercomputer',    1.9),
        i4o1(b, 'Thermal Propulsion Rocket',               'Modular Engine ',        2.5,    'Turbo Motor',                 1      ,'Cooling System',               3,      'Fused Modular Frame',      1,      'Thermal Propulsion Rocket',    1, [KnownTags.Goal]),
        i4o1(b, 'Turbo Motor',                             'Cooling System',         7.5,    'Radio Control Unit',          3.75   ,'Motor',                        7.5,    'Rubber',                   45,     'Turbo Motor',    1.9),
        i3o1(b, 'Uranium Fuel Rod',                        'Encased Uranium Cell',   20,     'Encased Industrial Beam',     1.2    ,'Electromagnetic Control Rod ', 2,      'Uranium Fuel Rod',         0.4),

    ];
}