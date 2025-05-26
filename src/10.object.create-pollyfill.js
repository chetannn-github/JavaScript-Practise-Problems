
//!!! usage of Object.create in JavaScript
// Object.create is used to create a new object with inherited properties.

// let obj  = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// let obj2 = Object.create(obj, {city : {value : "Jaipur"}}); // Create a new object with obj as its prototype
// obj2.name = 'Ravi'; // Overriding the name property in obj2
// console.log(obj2.name); // { city: 'Jaipur' }


Object.prototype.myCreate = function(obj, propertiesObject) {
    if (typeof obj !== 'object' && typeof obj !== 'function') {
        throw new TypeError('Object prototype may only be an Object or null');
    }
    
    let F = function() {};
    F.prototype = obj; // Set the prototype of F to obj
    let newObj = new F(); // Create a new object with F's prototype

    if (propertiesObject !== undefined) {
        Object.defineProperties(newObj, propertiesObject); // Define properties on the new object
    }
    
    return newObj;
}


// let obj  = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// let obj2 = Object.create(function jiii(){}, {city : {value : "Jaipur"}}); // Create a new object with obj as its prototype
// obj2.hii = 'Ravi'; 
// // obj2.name = "SKA" //!!! error kbhii bhii name overide nhii hoga kuki yhh function ka prototype hai wha name readable hota hain 

// console.log(obj2.name); // { city: 'Jaipur' }





// let obj2 = Object.myCreate(obj, {city : {value : "Jaipur"}}); // Create a new object with obj as its prototype
// obj2.name = 'Ravi'; 
// console.log(obj2.city); // { city: 'Jaipur' }