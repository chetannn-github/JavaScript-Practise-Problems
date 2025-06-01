

Array.prototype.myMap = function (callBackFn, thisArg) {
    if(typeof callBackFn !== 'function') {
        return new TypeError("call back fn is not a function ");
    }

    let idx = 0;
    let result = new Array(this.length);

    while (idx < this.length) {
        if(this[idx]) {
            let newVal = callBackFn.call(thisArg,this[idx],idx, this);
            result[idx] = newVal;
        }
        idx++;
    }

    return result;
}


// let callBackFn = (val, idx, arr) => {
//     return val * val;
// }



// // console.log([1,2,4,2,4, undefined, ].myMap(callBackFn,this));

// console.log(Array.prototype.myMap.call({length : 13, 0: 12, 12: 11} , callBackFn));
// console.log(Array.prototype.map.call({length : 13, 0: 12, 12: 11} , callBackFn));