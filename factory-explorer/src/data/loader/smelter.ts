import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i1o1 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function smelter() : SimpleMaker[] {
    const b = makerBuildings.smelter;

    return [
        i1o1(b, 'Iron Ingot',            'Iron Ore',     30, 'Iron Ingot',            30),
        i1o1(b, 'Copper Ingot',          'Copper Ore',   30, 'Copper Ingot',          30),
        i1o1(b, 'Caterium Ingot',        'Caterium Ore', 45, 'Caterium Ingot',        15),
        i1o1(b, 'Blue FICSMAS Ornament', 'FICSMAS Gift', 5,  'Blue FICSMAS Ornament', 10,  [KnownTags.Ficsmas]),
        i1o1(b, 'Red FICSMAS Ornament',  'FICSMAS Gift', 5,  'Red FICSMAS Ornament',  5,   [KnownTags.Ficsmas]),
    ];
}