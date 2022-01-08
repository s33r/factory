import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i1o1 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function xconstructor() : SimpleMaker[] {
    const b = makerBuildings.xconstructor;

    return [
        i1o1(b, 'Actual Snow',              'FICSMAS Gift',      25,   'Actual Snow',         10,   [KnownTags.Ficsmas]),
        i1o1(b, 'Aluminum Casing',          'Aluminum Ingot',    90,   'Aluminum Casing',     60),
        i1o1(b, 'Alternate: Biocoal',       'Biomass',           37.5, 'Coal',                45,   [KnownTags.Finite]),
        i1o1(b, 'Alternate: Cast Screw',    'Iron Ingot',        12.5, 'Screw',               50,   [KnownTags.Preferred]),
        i1o1(b, 'Alternate: Caterium Wire', 'Caterium Ingot',    15,   'Wire',                120),
        i1o1(b, 'Alternate: Charcoal',      'Wood',              15,   'Coal',                150,  [KnownTags.Finite]),
        i1o1(b, 'Alternate: Iron Wire',     'Iron Ingot',        12.5, 'Wire',                22.5),
        i1o1(b, 'Alternate: Steel Rod',     'Steel Ingot',       15,   'Iron Rod',            48),
        i1o1(b, 'Alternate: Steel Screw',   'Steel Beam',        5,    'Screw',               260,  [KnownTags.Preferred]),
        i1o1(b, 'Biomass (Alien Carapace)', 'Alien Carapace',    15,   'Biomass',             1500, [KnownTags.Finite]),
        i1o1(b, 'Biomass (Alien Organs)',   'Alien Organs',      7.5,  'Biomass',             1500, [KnownTags.Finite]),
        i1o1(b, 'Biomass (Leaves)',         'Leaves',            120,  'Biomass',             60,   [KnownTags.Finite]),
        i1o1(b, 'Biomass (Wood)',           'Wood',              60,   'Biomass',             300,  [KnownTags.Finite]),
        i1o1(b, 'Biomass (Mycelia)',        'Mycelia',           150,  'Biomass',             150,  [KnownTags.Finite]),
        i1o1(b, 'Cable',                    'Wire',              60,   'Cable',               30),
        i1o1(b, 'Candy Cane',               'FICSMAS Gift',      15,   'Candy Cane',          5,    [KnownTags.Ficsmas]),
        i1o1(b, 'Color Cartridge',          'Flower Petals',     37.5, 'Color Cartridge',     75,   [KnownTags.Finite]),
        i1o1(b, 'Concrete',                 'Limestone',         45,   'Concrete',            15),
        i1o1(b, 'Copper Powder',            'Copper Ingot',      300,  'Copper Powder',       50),
        i1o1(b, 'Copper Sheet',             'Copper Ingot',      20,   'Copper Sheet',        10),
        i1o1(b, 'Empty Canister',           'Plastic',           30,   'Empty Canister',      60),
        i1o1(b, 'Empty Fluid Tank',         'Aluminum Ingot',    60,   'Empty Fluid Tank',    60),
        i1o1(b, 'FICSMAS Bow',              'FICSMAS Gift',      10,   'FICSMAS Bow',         5,    [KnownTags.Ficsmas]),
        i1o1(b, 'FICSMAS Tree Branch',      'FICSMAS Gift',      10,   'FICSMAS Tree Branch', 10,   [KnownTags.Ficsmas]),
        i1o1(b, 'Iron Plate',               'Iron Ingot',        30,   'Iron Plate',          20),
        i1o1(b, 'Iron Rod',                 'Iron Ingot',        15,   'Iron Rod',            15),
        i1o1(b, 'Power Shard (1)',          'Blue Power Slug',   7.5,  'Power Shard',         7.5,  [KnownTags.Finite]),
        i1o1(b, 'Power Shard (2)',          'Yellow Power Slug', 5,    'Power Shard',         10,   [KnownTags.Finite]),
        i1o1(b, 'Power Shard (5)',          'Purple Power Slug', 2.5,  'Power Shard',         12.5, [KnownTags.Finite]),
        i1o1(b, 'Quartz Crystal',           'Raw Quartz',        37.5, 'Quartz Crystal',      22.5),
        i1o1(b, 'Quickwire',                'Caterium Ingot',    12,   'Quickwire',           60),
        i1o1(b, 'Screw',                    'Iron Rod',          10,   'Screw',               40),
        i1o1(b, 'Silica',                   'Raw Quartz',        22.5, 'Silica',              37.5),
        i1o1(b, 'Snowball',                 'Actual Snow',       15,   'Snowball',            5,    [KnownTags.Ficsmas]),
        i1o1(b, 'Solid Biofuel',            'Biomass',           120,  'Solid Biofuel',       60),
        i1o1(b, 'Spiked Rebar',             'Iron Rod',          15,   'Spiked Rebar',        15),
        i1o1(b, 'Steel Beam',               'Steel Ingot',       60,   'Steel Beam',          15),
        i1o1(b, 'Steel Pipe',               'Steel Ingot',       30,   'Steel Pipe',          20),
        i1o1(b, 'Wire',                     'Copper Ingot',      15,   'Wire',                30),
    ];
}