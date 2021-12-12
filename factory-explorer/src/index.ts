import {start} from './ui';

import {getMaker} from './data';

start();

const maker1 = getMaker('Computer');
const maker2 = getMaker('Computer');

maker2.instances = 5;

console.log(maker1.instances);
console.log(maker2.instances);