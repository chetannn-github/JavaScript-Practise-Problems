
// ! usage of call and apply method
// let obj = {
//     name : "chetan singh ",
//     age : 22
// }

// function fn (greet) {
//     // console.log(this);
//     console.log(`${greet} from ${this?.name} and my age is ${this?.age}`  );
// }


// // console.log(fn("namaste"));
// console.log(fn.call(obj,"namastee"));
// console.log(fn.apply(obj,["namastee"]));


Function.prototype.myApply = function (thisArg, args = []) {
    thisArg = thisArg || globalThis;
    let sym = Symbol();
    thisArg[sym] = this; 
    
    const result = thisArg[sym](...args);
    delete thisArg[sym]

    return result;
}


// let obj = {
//     name : "chetan singh ",
//     age : 22
// }

// function fn (greet, ...args) {
//     console.log(args);
//     console.log(this);
//     console.log(`${greet} from ${this?.name} and my age is ${this?.age}`  );
// }


// // // console.log(fn("namaste"));
// // fn.myApply(obj,["namastee", "WEe ", "wqw"]);
// // console.log(fn.apply(obj,["namastee"]));
