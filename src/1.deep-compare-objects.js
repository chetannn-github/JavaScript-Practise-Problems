export let deepCompareObjects = (obj1, obj2) => {
    // kya dono primitive hain like string, number, boolean
    console.log(obj1,obj2)
    if (obj1 === obj2) return true;
    
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

console.log(deepCompareObjects([1,undefined,3],[1,undefined,3]));