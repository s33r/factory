import IForge from '../model/IForge';
import ForgeNode from './ForgeNode';





export const simpleOptimizer = function(forges: IForge[]): IForge[] {
    const results: IForge[] = [];

    forges.map(forge => new ForgeNode(forge))
        .map(node => node.simpleBuild(false, false))
        .forEach(node => node.flatten(results));

    return results;
}