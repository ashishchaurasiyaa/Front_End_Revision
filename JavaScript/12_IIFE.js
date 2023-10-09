// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se problem hoti hai kai baar to us global scope ke variable ko hataane ke liye IFEE ka use kiya

// Problem arises due to pollution of global scope, many times I use IFEE to remove the variables of that global scope.

(function chai() {
    console.log(`DB CONNECTED`);
})();

(function aurCode() {
    //named IIFE
    console.log(`DB CONNECTED Two`)
})();

// write in arrow function
(() => {
    console.log(`DB CONNECTED Two`)
})();

((name) => {
    //Simple IIFE
    console.log(`DB CONNECTED Two ${name}`);
})('Ashish')