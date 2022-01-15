import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i2o1, i1o2 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function packager() : SimpleMaker[] {
    const b = makerBuildings.packager;

    return [
        i2o1(b, 'Packaged Water',  'Empty Canister', 60,  'Water', 60, 'Packaged Water', 60),
        i1o2(b, 'Unpackage Water', 'Packaged Water', 120, 'Water', 120, 'Empty Canister', 120),
    ];
}