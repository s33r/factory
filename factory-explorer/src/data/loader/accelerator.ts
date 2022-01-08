import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i2o1 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function accelerator() : SimpleMaker[] {
    const b = makerBuildings.accelerator;

    return [
        i2o1(b, 'Alternate: Instant Plutonium Cell', 'Non-fissile Uranium', 75, 'Aluminum Casing', 10, 'Encased Plutonium Cell', 10),
        i2o1(b, 'Nuclear Pasta', 'Copper Powder', 100, 'Pressure Conversion Cube', .5, 'Nuclear Pasta', .5, [KnownTags.Goal]),
        i2o1(b, 'Plutonium Pellet', 'Non-fissile Uranium', 100, 'Uranium Waste', 25, 'Plutonium Pellet', 30),
    ];
}