// const user = {
//     username: "Ashish",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function() {
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this)

//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails())
// console.log(this)


// Constructor Function
// new is a constructor function
// allow the make muliple instance of single object
// const promiseOne = new Promise()
// const date = new Date()

// function User(username, loginCount, isLoggedIn) {
//     this.username = username
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     this.greeting = function() {
//         console.log(`Welcome ${this.username}`)
//     }

//     return this
// }

// const userOne = new User("Ashish", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)
//     // console.log(userOne)
//     // console.log(userTwo)

// console.log(userOne.constructor)

const newHero = ["hulk", "spiderman"]
console.log(newHero)

// Protypel inheritence

function multiplyBy5(num) {
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}


createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`)
}
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()