//Singloton
//object Literals
const JsUser = {
    name: "Ashish",
    age: 26,
    location: "Kanpur",
    email: "chaurasiya1ashish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturaday"]
}

console.log(JsUser)
console.log(JsUser["email"])

const mySym = Symbol("key1")
    // when use Symbol then write in squre bracket
    // when access then try in squre brackets JsUsers[mySym]
const JsUsers = {
    name: "Ashish Chaurasiya",
    [mySym]: "mykey1",
    age: 26,
    location: "Noida",
    email: "chaurasiya1ashish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturaday"]
}

console.log(JsUsers[mySym])
console.log(JsUsers.age)

// value change
JsUsers.email = "ashish@gmail.com"

console.log(JsUsers)

// if whenever don't change the value then use freeze after that value is not changed 
// Object.freeze(JsUsers)
// JsUsers.email = "ash@gmail.com"

// console.log(JsUsers)

//
JsUser.greeting = function() {
    console.log("Hello JS user");
}


//reference name then ``
JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2())

// when value access then try . and [] dott and squre brackets

// how to singlton and constructor

// const tinderUser = new Object() //singlton object
const tinderUser = {} // non singlton object

tinderUser.id = "123abc"
tinderUser.name = "Abhishek"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "ashish@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ashish",
            lastname: "chaurasiya"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


//

const obj1 = {
    1: "as",
    2: "bc"
}
const obj2 = {
    3: "as",
    4: "bc"
}

// combine two objects

const obj3 = {
    obj1,
    obj2
}
const obj4 = Object.assign({}, obj1, obj2)
    // console.log(obj3)

// const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5)

//
const obj6 = {...obj1, ...obj2 }

console.log(obj6)

// when data coming in database

const users = [{
        id: 1,
        email: "abhi@gmai.com"
    },
    {
        id: 1,
        email: "abhi@gmai.com"
    },
    {
        id: 1,
        email: "abhi@gmai.com"
    }
]

console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))

console.log(Object.entries(tinderUser))
console.log(Object.values(tinderUser))
    // when loop through when value is not in database then try hasOwnProperty
console.log(tinderUser.hasOwnProperty('isLogged'))

// destructuing
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const { courseInstructor } = course

const { courseInstructor: instructor } = course


// console.log(courseInstructor)
console.log(instructor)

// APIs