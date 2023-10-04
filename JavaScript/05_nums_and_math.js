const score = 400

const balance = new Number(100)

// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(1))

const otherNumber = 123.8966
    // console.log(otherNumber.toPrecision(4));

const hundreds = 1000000

// console.log(hundreds.toLocaleString())

// console.log(hundreds.toLocaleString('en-IN'))

// +++++ Maths +++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.round(4.6))

console.log(Math.ceil(4.2))

console.log(Math.floor(4.9))

console.log(Math.min(4, 3, 6, 8))

console.log(Math.max(4, 3, 6, 8))

console.log(Math.random())
console.log(Math.random() * 10 + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

Math.random() * (max - min + 1)

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


const string1 = "A string primitive"
const srring2 = "Also a string primitive"
const string3 = `Yet another string primitive`

console.log("There are two ways to access an individual character in a string. The first is the charAt() method.")


const a = "a";
const b = "b";

if (a < b) {
    console.log(`${a} is less than ${b}`)

} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`)
}

// including === and  ==, compare strings case-sensitivity.

let text = "Hello world";

let letter = text.charAt(0)

function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase()
}

const areEqualInUpperCase = (str1, str2) =>
    str1.toUpperCase() === str2.toUpperCase()
const areEqualInLowerCase = (str1, str2) =>
    str1.toLowerCase() === str2.toLowerCase()

areEqualInUpperCase("ß", "ss")
areEqualInLowerCase("ı", "I")

// create string primitive
const s1 = "2 + 2";
const s2 = new String("2 + 2"); //create a string object

console.log(eval(s1)); //returns the number     
console.log(eval(s2)); //returns the string