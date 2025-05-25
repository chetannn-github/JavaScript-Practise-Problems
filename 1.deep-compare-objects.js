
let deepCompareObjects = (obj1, obj2) => {
    // kya dono primitive hain like string, number, boolean
    if (obj1 === obj2) return true;
    console.log(obj1,obj2)
    if( typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    if(Array.isArray(obj1) !== Array.isArray(obj2)) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) {
        return false;
    }

    return keys1.every((key)=>( deepCompareObjects(obj1[key], obj2[key])));

}

console.log(deepCompareObjects([1.21,1,2,1,12212,1,[1,12.23,1,2,3,3,21,,2]],[1.21,1,2,1,12212,1,[1,12.23,1,2,3,3,21,,2]]));