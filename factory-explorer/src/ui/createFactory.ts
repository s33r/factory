import { recipeLibrary } from '../data';
import Factory from '../model/Factory';

export default function createFactory() {
    const factory : Factory = new Factory('Tier 6 Factory');

    factory.add(recipeLibrary.getByName('Modular Engine'));
    factory.add(recipeLibrary.getByName('Advanced Control Unit'));
    factory.add(recipeLibrary.getByName('Beacon'));
    factory.add(recipeLibrary.getByName('Nobelisk'));
    factory.add(recipeLibrary.getByName('AI Limiter'));
    factory.add(recipeLibrary.getByName('Quickwire'));
    factory.add(recipeLibrary.getByName('Concrete'));
    factory.add(recipeLibrary.getByName('Crystal Oscillator'));

    factory.optimize();
    factory.sort();

    return factory;
}