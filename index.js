export { myDeepCompareObjects } from './src/deep-compare-objects.js';
export { myDeepCloneObject } from './src/deep-clone-objects.js';
export { myCurrySum } from './src/currying-problems.js';
export  {myNew} from './src/new-keyword-polyfill.js';
export {myAbstractEquality} from "./src/abstract-equality-polyfill.js"
export {myDebounce} from "./src/debounce.js"
export {mySetTimeout,myClearTimeout} from "./src/setTimeout-polyfill.js"

export {myThrottleBasicUsingDate, myThrottleBasicUsingTimer} from "./src/throttle-basic.js"
export {myThrottleAdvance} from "./src/throttle-advance.js"
export {myClearInterval,mySetInterval } from "./src/setInterval-polyfill.js"

export  { myJSONStringify } from './src/json-stringify.js';
// array polyfills
import './src/map-polyfill.js';
import './src/filter-polyfill.js';
import './src/reduce-polyfill.js';
import './src/slice-polyfill.js';
import './src/flat-polyfill.js';

// function polyfills
import './src/call-polyfill.js'
import './src/apply-polyfill.js'
import './src/bind-polyfill.js'

// object polyfills
import './src/object.create-pollyfill.js';




console.log("Polyfills for myCall, myBind, myApply have been added to Function prototype");
console.log("Polyfills for myMap, myFilter, myReduce, mySlice ,myFlat have been added to Array prototype");
console.log("Polyfills for myCreate has  been added to Object prototype");

console.log("myJSONStringify,myDeepCloneObject,myCurrySum, myDeepCompareObjectsmyAbstractEquality, myDebounce, myThrottleBasicUsingDate, myThrottleBasicUsingTimer ,myThrottleAdvance, myNew, mySetTimeout myClearTimeout, mySetInterval, myClearInterval fns  have been named export.");


