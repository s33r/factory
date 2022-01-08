import { SimpleMaker, makerBuildings } from '../simpleTypes';
import { i1o1, i1o2, i2o1, i2o2 } from '../builders';
import KnownTags from '../../model/KnownTags';

export default function refinery() : SimpleMaker[] {
    const b = makerBuildings.refinery;

    return [
        i2o2(b,'Alumina Solution','Bauxite',120,'Water',180,'Alumina Solution',120,'Silica',50),
        i2o2(b,'Aluminum Scrap','Alumina Solution',240,'Coal',120,'Aluminum Scrap',360,'Water',120),
        i2o1(b,'Alternate: Coated Cable','Wire',37.5,'Heavy Oil Residue',15,'Cable',67.5),
        i2o1(b,'Alternate: Diluted Packaged Fuel','Heavy Oil Residue',30,'Packaged Water',60,'Packaged Fuel',60),
        i2o2(b,'Alternate: Electrode - Aluminum Scrap','Alumina Solution',180,'Petroleum Coke',60,'Aluminum Scrap',300,'Water',105),
        i1o2(b,'Alternate: Heavy Oil Residue','Crude Oil',30,'Heavy Oil Residue',40,'Polymer Resin',20),
        i2o1(b,'Alternate: Polyester Fabric','Polymer Resin',80,'Water',50,'Fabric',5),
        i1o2(b,'Alternate: Polymer Resin','Crude Oil',60,'Polymer Resin',130,'Heavy Oil Residue',20),
        i2o1(b,'Alternate: Pure Caterium Ingot','Caterium Ore',24,'Water',24,'Caterium Ingot',12),
        i2o1(b,'Alternate: Pure Copper Ingot','Copper Ore',15,'Water',10,'Copper Ingot',37.5),
        i2o1(b,'Alternate: Pure Iron Ingot','Iron Ore',35,'Water',20,'Iron Ingot',65),
        i2o1(b,'Alternate: Pure Quartz Crystal','Raw Quartz',67.5,'Water',37.5,'Quartz Crystal',52.5),
        i2o1(b,'Alternate: Recycled Plastic','Rubber',30,'Fuel',30,'Plastic',60),
        i2o1(b,'Alternate: Recycled Rubber','Plastic',30,'Fuel',30,'Rubber',60),
        i2o1(b,'Alternate: Sloppy Alumina','Bauxite',200,'Water',200,'Alumina Solution',240),
        i2o1(b,'Alternate: Steamed Copper Sheet','Copper Ingot',22.5,'Water',22.5,'Copper Sheet',22.5),
        i2o1(b,'Alternate: Turbo Heavy Fuel','Heavy Oil Residue',37.5,'Compacted Coal',30,'Turbofuel',30),
        i2o1(b,'Alternate: Turbofuel','Fuel',22.5,'Compacted Coal',15,'Turbofuel',18.8),
        i2o1(b,'Alternate: Wet Concrete','Limestone',120,'Water',100,'Concrete',80),
        i1o2(b,'Fuel','Crude Oil',60,'Fuel',40,'Polymer Resin',30),
        i1o2(b,'Liquid Biofuel','Solid Biofuel',90,'Water',45,'Liquid Biofuel',60, [ KnownTags.Finite ]),
        i1o1(b,'Petroleum Coke','Heavy Oil Residue',40,'Petroleum Coke',120),
        i1o2(b,'Plastic','Crude Oil',30,'Plastic',20,'Heavy Oil Residue',20),
        i1o1(b,'Residual Fuel','Heavy Oil Residue',60,'Fuel',40),
        i2o1(b,'Residual Plastic','Polymer Resin',60,'Water',20,'Plastic',20),
        i2o1(b,'Residual Rubber','Polymer Resin',40,'Water',40,'Rubber',20),
        i1o2(b,'Rubber','Crude Oil',30,'Rubber',20,'Heavy Oil Residue',20),
        i2o1(b,'Sulfuric Acid','Sulfur',50,'Water',50,'Sulfuric Acid',50),


    ];
}