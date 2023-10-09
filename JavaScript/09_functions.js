// Functions
// function sayMyName() {
//     console.log("A")
//     console.log("S")
//     console.log("H")
//     console.log("I")
//     console.log("S")
//     console.log("H")
// }

// sayMyName()


// function addTwoNumbers(numbers1, numbers2) {
//     console.log(numbers1 + numbers2)
// }

// const result = addTwoNumbers(1, 2)

// console.log("Result: ", result)

// function addTwoNumbers(numbers1, numbers2) {
//     let result = numbers1 + numbers2
//     return result
// }
// const result = addTwoNumbers(1, 2)
// console.log("Result: ", result)
// function addTwoNumbers(numbers1, numbers2) {
//     return numbers1 + numbers2
// }
// const result = addTwoNumbers(1, 2)
// console.log("Result: ", result)

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Ashish"))
// when value is not passed then show undefined as like this


// console.log(loginUserMessage())

// second way

// function loginUserMessage(username) {
//     if (!username) {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())

// I'm passing by default

// function loginUserMessage(username = "Ashish") {
//     if (!username) {
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())

// function calculateCartPrice(num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500))
// ... is called rest opertor and spred operator depend on usecase
// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 600, 700))

// if access starting two value then pass parameter two variable as like this

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 600, 700))


// Just i'm trying to in objects

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is $(anyobject.username) and price is ${anyobject.price}`);
}

// handleObject(user)

// I can pass direct object as like this

handleObject({
    username: "Ashish",
    price: 499
})

// I can pass

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[0]
}

console.log(returnSecondValue(myNewArray))