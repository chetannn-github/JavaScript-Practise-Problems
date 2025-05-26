export { deepCompareObjects } from './src/1.deep-compare-objects.js';
export { deepClone } from './src/2.deep-clone-objects.js';
export { sum as currySum } from './src/3.currying-problems.js';
export  {myNew} from './src/9.new-keyword-polyfill.js';


import './src/4.map-polyfill.js';
import './src/5.filter-polyfill.js';
import './src/6.reduce-polyfill.js';
import './src/7.slice-polyfill.js';
import './src/8.flat-polyfill.js';
import './src/10.object.create-pollyfill.js';
import './src/11.call-polyfill.js'
import './src/12.apply-polyfill.js'



console.log('Polyfills for map, filter, reduce, slice, object.create, call, apply and flat have been loaded.');


// console.log([2,1,2].myReduce((acc, val) => acc + val, 0)); // 5

// 

