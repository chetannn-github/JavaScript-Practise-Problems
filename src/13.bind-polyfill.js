

Function.prototype.myBind = function (thisArg , ...args1) {
    thisArg = thisArg || globalThis;
    const fn = this;

    return function (...args2) {
        const key = Symbol();
        thisArg[key] = fn;

        const result = thisArg[key](...args1,...args2);
        delete thisArg[key];
        return result;
    }
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

// let newFn = fn.myBind(obj, "hii");
// newFn("ese hii ", 23);
