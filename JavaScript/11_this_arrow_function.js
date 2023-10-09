const user = {
    username: "ashish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()

user.username = "Aman"
user.welcomeMessage()

console.log(this) // when are we using in node environment then console.log(this) show empty {} and if when I'm in browser environment then show window functions.


// function chai() {
//     console.log(this)
// }

// chai()

// this in javascript ::>

function chai() {
    let username = "ashish"
    console.log(this.username)
}

// chai()

function chai() {
    const username = "ashish"
    console.log(this.username)
}

// chai()

// Arrow function

// const coffe = () => {
//         let username = "Shubham"
//         console.log(username)
//     }
//     // coffe()

const coffe = () => {
    let username = "Shubham"
    console.log(this)
}
coffe()

// arrow syntax () => {}

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4))

//  when use curly braces then complusory write the return if try implicit then will don't have write curly braces write in parenthis

// Implicit returns

const subTwo = (num1, num2) => num1 - num2

console.log(subTwo(7, 3))

const mulTwo = (num1, num2) => (num1 * num2)

console.log(mulTwo(4, 5))


// when represented in object then will have to wrap in curly braces as like this
const mapObject = (num1, num2) => ({ name: "Ashish" })

console.log(mapObject(3, 4))

const myArray = [2, 3, 4, 5, 6]
myArray.forEach()