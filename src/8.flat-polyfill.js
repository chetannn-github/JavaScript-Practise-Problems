
// agr saare elements numbers hain toh
// console.log([232.23,32,323,2,[22,[2324]]].toString().split(",").map(Number)); 

// polyfill 


Array.prototype.myFlat = function (depth = 1) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        let val = this[i];

        if(Array.isArray(val) && depth > 0){
            result.push(...val.myFlat(depth-1));
        }else { 
            result.push(val);
        }
        
    }
    return result;
}

console.log([1,3, [21, 12, [12,12,[1,[21]]]]].myFlat(4));