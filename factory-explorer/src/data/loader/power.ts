import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i1o0, i2o0, i2o1 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function xconstructor() : SimpleMaker[] {
    return [
        i2o0(makerBuildings.generatorCoal, 'Power - Coal', 'Coal', 15, 'Water', 45, [KnownTags.Generator]),
        i2o0(makerBuildings.generatorCoal, 'Power - Petroleum Coke', 'Petroleum Coke', 25, 'Water', 45, [KnownTags.Generator]),
        i1o0(makerBuildings.generatorFuel, 'Power - Fuel', 'Fuel', 12, [KnownTags.Generator]),
        i1o0(makerBuildings.generatorFuel, 'Power - Turbofuel', 'Turbofuel', 4.5, [KnownTags.Generator]),
        i2o1(makerBuildings.generatorNuclear, 'Power - Plutonium', 'Plutonium Fuel Rod', .1, 'Water', 300, 'Plutonium Waste', 1, [KnownTags.Generator]),
        i2o1(makerBuildings.generatorNuclear, 'Power - Uranium', 'Uranium Fuel Rod', .2, 'Water', 300, 'Uranium Waste', 10, [KnownTags.Generator]),
    ];
}