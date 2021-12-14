import Factory from '../model/Factory';
import IForge from '../model/IForge';
import ForgeNode from './ForgeNode';





export const simpleOptimizer = function(factory: Factory) {
    const target = new ForgeNode(factory);

    target.forge.inputs.forEach(input => console.log(input));

    target.simpleBuild();
    const results = target.flatten();

    console.log(results);

    return results;
}