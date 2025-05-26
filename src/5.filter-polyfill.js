Array.prototype.myFilter = function (callbackfn, thisArg) {
    if(typeof callbackfn !== 'function') {
        return new TypeError("callback fn is not a function");
    }

    const result = [];
    let idx = 0;

    while(idx < this.length) {
        if(this[idx]) {
            let val = this[idx];
            let toAdd = callbackfn.call(thisArg, val, idx, this);
            if(toAdd) {
                result.push(val);
            }
        }
        idx++;
    }

    return result;
}


let callBackFn = (val, idx, arr) => val % 2 !== 0;

console.log([1,2,4,2,4, undefined, ].myFilter(callBackFn,this));

console.log(Array.prototype.myFilter.call({length : 13, 0: 12, 12: 11} , callBackFn));
console.log(Array.prototype.filter.call({length : 13, 0: 12, 12: 11} , callBackFn));
