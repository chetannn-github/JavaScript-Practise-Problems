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
import './src/13.bind-polyfill.js'



console.log('Polyfills for map, filter, reduce, slice, object.create, call, apply ,bind and flat have been loaded.');


// console.log([2,1,2].myReduce((acc, val) => acc + val, 0)); // 5

// 

// let obj = {
//     name : "chetan singh ",
//     age : 22
// }

// function fn (greet, ...args) {
//     console.log(args);
//     console.log(this);
//     console.log(`${greet} from ${this?.name} and my age is ${this?.age}`  );
// }

// let newFn = fn.myBind(obj, "hii");
// newFn("ese hii ", 23);

