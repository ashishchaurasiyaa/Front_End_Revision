// var c = 300

let a = 300


// outside function is global scope and inside the function local scope

// if (true) {
//     let a = 10;
//     const b = 20;
//     console.log("INNER: ")
// }

// for (let i = 0; i < Array.length; i++) {
//     const element = array[i]
// }

// console.log(a)
// console.log(b)
// console.log(c)

// when go to browser then check scope 
// and to code through global scope in different and browser and code

// Nexted Scope

// function one() {
//     const username = "ashish"

//     function two() {
//         const website = "youtube"
//         // console.log(username);
//     }
//     // console.log(website)

//     two()
// }
// one()

// child function access parent function is called nexted function

if (true) {
    const username = "ashish"
    if (username === "ashish") {
        const website = "youtube"
            // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

// +++++++++++++++ interesting ++++++++++++++++++++

function addone(num) {
    return num + 1
}

addone(5)

const addTwo = function(num) {
    return num + 2
}
addTwo(5)