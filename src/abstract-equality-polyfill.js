export const myAbstractEquality = function (a, b) {
    if(a === b) return true;

    if((a === null  && b === undefined) || (b === null  && a === undefined)) return true;

    if(typeof a === 'object') return abstractEquality(String(a) , b);
    if(typeof b === 'object') return abstractEquality(a , String(b));

    return Number(a) === Number(b);
}