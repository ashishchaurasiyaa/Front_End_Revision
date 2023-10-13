// if
// const isUserloggedIn = true
const temperture = 41

if (temperture === 41) {
    console.log("less then 50")

} else {
    console.log("tempeture is greater than 50")
}

console.log("Excute")

// Comprasion operator
// <, >, <=, >=, ==,!=, ===, !==
// = is called assignment operator
// == equality check
// === check type and value

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`)

// sort hand notation
const balance = 1000
    // if (balance > 500) console.log("test"),console.log("test2");
    // is this bad prectic do't do never

if (balance < 500) {
    console.log("less then")
} else if (balance < 750) {
    console.log("less than 750")
} else if (balance < 900) {
    console.log("less then 750")
} else {
    console.log("less than 1200")
}

const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFormEmail = true

if (UserloggedIn && debitCard) {
    console.log("Allow to buy course")
}

if (loggedInFromGoogle || loggedInFormEmail) {
    console.log("User logged in")
}

// Switch Case

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Check and input write value")

}

// when all code excute by default except default

const userEmail = "ashish@gmail.com"

// if (userEmail) {
//     console.log("Got the user email")
// } else {
//     console.log("Don't have user email")
// }

// Note
// truthy and falsy value
// falsy value: false, 0, -0, BigInt, 0n, null, "", undefined, NaN
// truthy value: "0", 'false'," ", ' ', [],{}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null defined

// let val1;
// // val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = null ?? 10 ?? 20

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")