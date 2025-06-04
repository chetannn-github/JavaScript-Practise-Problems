// A => fixed length args
// let sum = (a) => (b) => a+b;



// B => infinte single args 
// let sum = (a) => {
//     return (b) => {
//         if(b == undefined) {
//             return a;
//         }else {
//             return sum (a+b);
//         }
//     }
// }

// console.log(sum(1)(1)(1)(2)(1)());



// C => infinte kisi me kitne bhii args 
export let myCurrySum = (...a) => {
    return (...b) => {
        if(b.length == 0) {
            return a.reduce((acc, curr)=>(acc + curr), 0);
        }else {
            let totalSum =a.reduce((acc, curr)=>(acc + curr), 0) + b.reduce((acc, curr)=>(acc + curr), 0);
            return sum(totalSum);
        }
    }
}

// console.log(sum(1,10,2)());



