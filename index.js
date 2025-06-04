export { deepCompareObjects } from './src/deep-compare-objects.js';
export { deepClone } from './src/deep-clone-objects.js';
export { sum as currySum } from './src/currying-problems.js';
export  {myNew} from './src/new-keyword-polyfill.js';
export {abstractEquality} from "./src/abstract-equality-polyfill.js"
export {debounce} from "./src/debounce.js"

export {throttleBasicUsingDate, throttleBasicUsingTimer} from "./src/throttle-basic.js"
export {throttleAdvance} from "./src/throttle-advance.js"

import './src/map-polyfill.js';
import './src/filter-polyfill.js';
import './src/reduce-polyfill.js';
import './src/slice-polyfill.js';
import './src/flat-polyfill.js';
import './src/object.create-pollyfill.js';
import './src/call-polyfill.js'
import './src/apply-polyfill.js'
import './src/bind-polyfill.js'



console.log('Polyfills for map, filter, reduce, slice,flat object.create, call, apply ,bind, debounce , throttle , advanced throttle fn  have been loaded.');


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

