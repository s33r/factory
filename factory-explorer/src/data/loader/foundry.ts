import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i2o1 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function foundry() : SimpleMaker[] {
    const b = makerBuildings.foundry;

    return [
        i2o1(b, 'Aluminum Ingot',                   'Aluminum Scrap',        90,   'Silica',         75,    'Aluminum Ingot',          60),
        i2o1(b, 'Alternate: Coke Steel Ingot',      'Iron Ore',              75,   'Petroleum Coke', 75,    'Steel Ingot',             100),
        i2o1(b, 'Alternate: Compacted Steel Ingot', 'Iron Ore',              22.5, 'Compacted Coal', 11.25, 'Steel Ingot',             37.5),
        i2o1(b, 'Alternate: Copper Alloy Ingot',    'Copper Ore',            50,   'Iron Ore',       25,    'Copper Ingot',            100),
        i2o1(b, 'Alternate: Iron Alloy Ingot',      'Iron Ore',              20,   'Copper Ore',     20,    'Iron Ingot',              50),
        i2o1(b, 'Alternate: Solid Steel Ingot',     'Iron Ingot',            40,   'Coal',           40,    'Steel Ingot',             60),
        i2o1(b, 'Copper FICSMAS Ornament',          'Red FICSMAS Ornament',  10,   'Copper Ingot',   10,    'Copper FICSMAS Ornament', 5, [KnownTags.Ficsmas]),
        i2o1(b, 'Iron FICSMAS Ornament',            'Blue FICSMAS Ornament', 15,   'Iron Ingot',     15,    'Iron FICSMAS Ornament',   5, [KnownTags.Ficsmas]),
        i2o1(b, 'Steel Ingot',                      'Iron Ore',              45,   'Coal',           45,    'Steel Ingot',             45),
    ];
}