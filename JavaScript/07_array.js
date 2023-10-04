// const myArray = [1, 2, 3, 4, 5, 6]
// console.log(myArray)

// const myHeroes = ["Iron Man", "Spider Man", "SuperMan"]

// const numbers = [1, 2, 3, 4]
// console.log(numbers)
// console.log(myArray[0])

// // Array Methods

// myArray.push(6) //add value
// console.log(myArray)

// // pop no argument pass last value element remove
// console.log(myArray.pop())

// myArray.unshift(9)
// console.log(myArray)

// // shift
// myArray.shift()
// console.log(myArray)

// console.log(myArray.includes(9))
// console.log(myArray)

// console.log(myArray.indexOf(9))

// // 

// const newArr = myArray.join()
// console.log(myArray)
// console.log(typeof newArr)

// // slice and splice

// // slice
// console.log("A ", myArray)

// const myn1 = newArr.slice(1, 3)
// console.log(myn1)

// console.log("B ", myArray)

// const myn2 = myArray.splice(1, 3)
// console.log("C ", myArray)

// console.log(myn2)

const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3])


// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)
//spread 
const all_new_heroe = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroe)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Ashish"))

console.log(Array.from("Ashish"))

console.log(Array.from({ name: "Ashish" })) //interesting

let score1 = 100
let scoré2 = 200
let score3 = 300
console.log(Array.of(score1, scoré2, score3))