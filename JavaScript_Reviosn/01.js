// Array - foreach map filter
// Foreach is a loop which works on array
// Foreach is a HOF higher order function

let a = [1, 2, '3', 4];
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

console.log("1");
console.log("2");
console.log("3");
setTimeout(function() {
    console.log("4");
}, 5000)
console.log("5");

// synchronous code executes line by line and if first line is not resolved the code execution will not move to the next line

// asynchronous code waits till synchronous code is not finished and when the synchronous code finishes executing, then the async code starts it's execution, as the async code means it probably can have some delay, it also takes something called callback

// callback

// jab facebook se photo aajaye to chal jaana - delay callback callback hota hai function jo ki chalta hai async code async code kuchh der baad chalta hai, kyuki wo code kuchh der baad chlta hai to humein nahi pata hota hai, ke kab chalega to jab bhi chale hum async code ko ek function dedete hai ke jab bhi chalna is function ko chala dena, wo jo function humne diya tha us function ko hum kahte hai callback

setTimeout(function() {

}, 1000)

// objects - access loop
// freeze, this call apply bind

// Write a JavaScript function to check whether an input is an array or not Test Data :
function checkArray(inp) {
    Array.isArray(inp);
}