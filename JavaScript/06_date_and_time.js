// Dates

let myDate = new Date()

console.log(myDate)

console.log(myDate.toString())

console.log(myDate.toISOString())

console.log(myDate.toJSON())

console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleTimeString())

// date is object

// specific date declare

// let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate.toDateString())
//Mon Jan 23 2023 output

// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-04-2023")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())



// console.log(Date.now() / 1000)
// console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()

// console.log(newDate)

console.log(newDate.getDate())

console.log(newDate.getDay())

console.log(newDate.getFullYear())

console.log(newDate.getMonth())

newDate.toLocaleString('default', {
    weekday: "long",

})