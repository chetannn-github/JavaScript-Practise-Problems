// function Superhero (name) {
//   this.name = name;
// console.log(typeof this)
// return null
// }


// console.log(batman); // Batman




export default function myNew (ConstructorFn,...args) {
    const obj = {};

    Object.setPrototypeOf(obj,ConstructorFn.prototype);

    let result =  ConstructorFn.apply(obj, args);
    
    return (typeof result === 'object' && result !== null ) ? result : obj;
}


// function Superhero (name) {
//     this.name = name;
//     // // console.log(typeof this)
//     // return { name: name+"@!12"}
// }

// Superhero.prototype.sayHello = function() {
//     // console.log('Hello, I am ' + this.name);
//     return ;
// }

// const batman = new Superhero('Batman');
// const batman = myNew(Superhero , 'Batman');
// console.log(batman); // Batman
// console.log(batman.prototype)
// // console.log(batman.sayHello()); // Hello, I am Batman@!12


//!! note  // if the constructor function returns an object, that object is returned instead of the newly created object
// tab constructor function ka prototype, returned object ka prototype dono same nhi honge
//!! note  // if the constructor function returns a primitive value, the newly created object is returned
