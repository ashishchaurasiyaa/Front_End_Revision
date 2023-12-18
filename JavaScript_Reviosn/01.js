// Array - foreach map filter
// Foreach is a loop which works on array
// Foreach is a HOF higher order function

// let a = [1, 2, '3', 4];
// a.forEach(function(val) {
//     console.log(val + 2)
// })
// console.log(a)

// // use the foreach print the hello in all element in array in last


// // FOREACH KA USE KAR KE EK ARRAY KE SAARE
// // MEMBERS KE AAGE HELLO PRINT KARAO

// a.forEach(function(val) {
//     console.log("Hello," + val)
// })

// // ki array ke saare members print karo aur unhe chhod do jo ki 2 se bade ho

// a.forEach(function(val) {
//     if (val <= 2) {
//         console.log(val)
//     }
// })

// Saare elements jo ki array mein hai unka sum karo
// let b = 0
// a.forEach(function(vals) {
//     b = b + vals
// })
// console.log(b)

// saare bande add karo aur agar unme se koi bhi string nikal jaaye to fir use skip karo
// let sum = 0
// a.forEach(function(val) {
//     if (typeof val === "number") {
//         sum = sum + val;
//     }
// })
// console.log(sum)

// let arrs = [];
// for (let i = 0; i < 10; i++) { // Change 'const' to 'let'
//     arrs.push(function() {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000)
//     })
// }

// for (let i = 0; i < 10; i++) {
//     arrs[i]();
// }

// sync vs async

// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout(function() {
//     console.log("4");
// }, 5000)
// console.log("5");

// synchronous code executes line by line and if first line is not resolved the code execution will not move to the next line

// asynchronous code waits till synchronous code is not finished and when the synchronous code finishes executing, then the async code starts it's execution, as the async code means it probably can have some delay, it also takes something called callback

// callback

// jab facebook se photo aajaye to chal jaana - delay callback callback hota hai function jo ki chalta hai async code async code kuchh der baad chalta hai, kyuki wo code kuchh der baad chlta hai to humein nahi pata hota hai, ke kab chalega to jab bhi chale hum async code ko ek function dedete hai ke jab bhi chalna is function ko chala dena, wo jo function humne diya tha us function ko hum kahte hai callback

// setTimeout(function() {

// }, 1000)

// objects - access loop
// freeze, this call apply bind

// Write a JavaScript function to check whether an input is an array or not Test Data :
// function checkArray(inp) {
//     Array.isArray(inp);
// }

// console.log(checkArray(1));
// console.log(checkArray({}))
// console.log(checkArray([1, 2, 3]))

// Whenever we create an array it is always fiven a blueprint ot an instance which is Array

// function checkArray(inp) {
//     return inp instanceof Array;
// }

// console.log(checkArray([1, 2, 3, 4]));
// console.log(checkArray(1))
// console.log(checkArray("Ashih"))

// function cloning(inp) {

// }
// cloning([1, 2, 3, 4])

// function getter(inp, get = 1) {
//     let cloned = []
//     for (let i = 0; i < get; i++) {
//         cloned.push(inp[i])
//     }
//     return cloned
// }
// console.log(getter([1, 2, 3, 4, 5, 6, 7, 8]))

// Q4:
// Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White"
// "Black"];
// Expected Output :
// "Red, Green, White, Black"
// "Red+Green+White+Black"

function joiner(inp) {
    return inp.join("+");

}

console.log(joiner(["apple", "banana", "guava", "cat", "piplani"]))

// Q5 possible ways to create an object:

let a = {} // object literal
let ans = Object.create(null) //by using object create method
function abcd() {
    this.name = "Ashish";
}

let obj3 = new abcd();

class Abcd {
    constructor() {}
    a = 12;
}

let anss = new Abcd
console.log(anss)

// Q6 what is this call apply bind
// Q7 what is a hof

// Q8 difference between var let and const
// Q9 what is iife
// Q10 what is hoisting