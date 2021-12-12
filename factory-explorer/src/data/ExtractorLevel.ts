import { Building } from "./simpleTypes";

const enum ExtractorLevel {
    Mark1 = 0,
    Mark2 = 1,
    Mark3 = 2,
}

export default ExtractorLevel;

const buildingMap : {[key: string]: Building}=  {
    minerMk1: {buildingName: 'Miner Mk.1', basePower: -5},
    minerMk2: {buildingName: 'Miner Mk.2', basePower: -12},
    minerMk3: {buildingName: 'Miner Mk.3', basePower: -30},
}


export const getBuilding = function getBuilding(level: ExtractorLevel) {
    switch (level) {
        case ExtractorLevel.Mark1 : return Object.assign({}, buildingMap.minerMk1);
        case ExtractorLevel.Mark2 : return Object.assign({}, buildingMap.minerMk3);
        case ExtractorLevel.Mark3 : return Object.assign({}, buildingMap.minerMk2);
    }
}