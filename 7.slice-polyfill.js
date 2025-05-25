Array.prototype.mySlice = function (start ,end) {
    let length = this.length;

    if(start === undefined ) {
        start = 0;
    }else if(start < 0) {
        let newIdx = this.length + start;
        start = newIdx < 0 ? 0 : newIdx;
    }else{
        start = start >= length ? length : start;
    }

    if(end === undefined) {
        end = length;
    } else if(end < 0) {
        let newIdx = this.length + end;
        end = newIdx < 0 ? 0 : newIdx;
    } else {
        end = end >= length ? length : end;
    }

    let result = [];
    for(let i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
}