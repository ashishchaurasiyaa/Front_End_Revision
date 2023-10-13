// For of 

// ["","",""]

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num)

// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     if (greet === " ") {
//         console.log(`Space dedicated ${greet}`)
//         break
//     }
//     console.log(`Each char is ${greet}`)
// }

// Maps is using for unique values

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value)
// }

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spider Man'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut id for ${myObject[key]}`);
// }

// // will have worked for in loop in array

// const programming = ["js", "rb", "py", "java"]
// for (const key in programming) {
//     console.log(programming[key])
// }

// const maps = new Map()
// maps.set('IN', "India")
// maps.set('USA', "United State of America")
// maps.set('Fr', "France")

// for (const key in maps) {
//     console.log(maps[key])
// }

// if some loop not iterable then it can't be

// ForEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(item) {
    console.log(item)
})

function printMe(item) {
    console.log(item)
}

coding.forEach(printMe)
coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

const myCoding = [{
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})