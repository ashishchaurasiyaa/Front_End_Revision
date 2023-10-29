let myName = "Ashish         "

let mychannel = "chai     "

// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ashish = function() {
    console.log(`Ashih is present in all objects`)
}

Object.prototype.heyAshish = function() {
    console.log(`Ashish says Hello`)
}

// heroPower.ashish()
// myHeros.ashish()
// myHeros.heyAshish()
// heroPower.heyAshish()

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailabe: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User.name

// ES6 
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode       "

String.prototype.trueLength = function() {

    console.log(`${this}`)
        // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()

"Ashish".trueLength()
"Chaurasiya".trueLength()