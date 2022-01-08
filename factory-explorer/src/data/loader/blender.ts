import { SimpleMaker, makerBuildings, forge } from '../simpleTypes';
import { i4o1, i3o1, i2o1 } from '../builders';

export default function blender() : SimpleMaker[] {
    const b = makerBuildings.blender;

    const others =  [

        {
            recipeName: 'Battery',
            inputs: [
                { item: 'Sulfuric Acid', rate: 50},
                { item: 'Alumina Solution', rate: 40},
                { item: 'Aluminum Casing', rate: 20},
            ],
            outputs: [
                { item: 'Battery', rate: 20 },
                { item: 'Water', rate: 30 },
            ],
            tags:[],
        },
        {
            recipeName: 'Encased Uranium Cell',
            inputs: [
                { item: 'Uranium', rate: 50},
                { item: 'Concrete', rate: 15},
                { item: 'Sulfuric Acid', rate: 40},
            ],
            outputs: [
                { item: 'Encased Uranium Cell', rate: 25 },
                { item: 'Sulfuric Acid', rate: 10 },
            ],
            tags:[],
        },
        {
            recipeName: 'Alternate: Fertile Uranium',
            inputs: [
                { item: 'Uranium', rate: 25},
                { item: 'Uranium Waste', rate: 25},
                { item: 'Nitric Acid', rate: 15},
                { item: 'Sulfuric Acid', rate: 25},
            ],
            outputs: [
                { item: 'Non-fissile Uranium', rate: 100 },
                { item: 'Water', rate: 40 },
            ],
            tags:[],
        },
        {
            recipeName: 'Non-fissile Uranium',
            inputs: [
                { item: 'Uranium Waste', rate: 37.5},
                { item: 'Silica', rate: 25},
                { item: 'Nitric Acid', rate: 15},
                { item: 'Sulfuric Acid', rate: 15},
            ],
            outputs: [
                { item: 'Non-fissile Uranium', rate: 50 },
                { item: 'Water', rate: 15 },
            ],
            tags:[],
        },
        {
            recipeName: 'Alternate: Instant Scrap',
            inputs: [
                { item: 'Bauxite', rate: 150},
                { item: 'Coal', rate: 100},
                { item: 'Water', rate: 60},
                { item: 'Sulfuric Acid', rate: 50},
            ],
            outputs: [
                { item: 'Aluminum Scrap', rate: 300 },
                { item: 'Water', rate: 50 },
            ],
            tags:[],
        },
    ].map(item => ({
        ...forge,
        ...b,
        ...item,
    }));

    return [
        i4o1(b, 'Cooling System', 'Heat Sink', 12, 'Rubber', 12, 'Water', 30, 'Nitrogen Gas', 150, 'Cooling System', 6 ),
        i3o1(b, 'Alternate: Cooling Device', 'Heat Sink', 9.375, 'Motor', 1.875, 'Nitrogen Gas', 45, 'Cooling System', 3.8 ),
        i2o1(b, 'Alternate: Diluted Fuel', 'Heavy Oil Residue', 50, 'Water', 100, 'Fuel', 100),
        i3o1(b, 'Fused Modular Frame', 'Heavy Modular Frame', 1.5, 'Aluminum Casing', 75, 'Nitrogen Gas', 37.5, 'Fused Modular Frame', 1.5 ),
        i4o1(b, 'Alternate: Heat-Fused Frame', 'Heavy Modular Frame', 3, 'Aluminum Ingot', 150, 'Nitric Acid', 24, 'Fuel', 30, 'Fused Modular Frame', 3 ),
        i3o1(b, 'Nitric Acid', 'Nitrogen Gas', 120, 'Water', 30, 'Iron Plate', 10, 'Nitric Acid', 30),
        i4o1(b, 'Alternate: Turbo Blend Fuel', 'Fuel', 15, 'Heavy Oil Residue', 30, 'Sulfur', 22.5, 'Petroleum Coke', 22.5, 'Turbofuel', 45),

        ...others
    ];
}