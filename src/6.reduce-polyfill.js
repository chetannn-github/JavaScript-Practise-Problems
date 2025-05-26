Array.prototype.myReduce = function (callBackFn, intial) {
    if(typeof callBackFn !== 'function') {
        return new TypeError("call back fn is not a function ");
    }

    if(!this.length && !intial) {
        return new TypeError("reduce for empty array with no intial value");
    }

    let acc = intial != undefined ? intial : this[0];
    const startIdx = intial != undefined ? 0 : 1;
    
    for(let i = startIdx ; i< this.length; i++) {
        acc = callBackFn (acc, this[i], i, this);
    }

    return acc;
}