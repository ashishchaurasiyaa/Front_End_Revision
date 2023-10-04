const name = "ashish"
const repoCount = 50
console.log(name + repoCount + " Value") //this is old method
console.log(`Hello my name is ${name} and my repo count is $(repoCount)`); //this is new method

// how to declare string
const gameName = new String('Ashidh')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt('4'))
console.log(gameName.indexOf('d'))

// string methods

console.log(gameName.substring(0, 4))

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newString = "   ashish   "
console.log(newString)
console.log(newString.trim())

const url = "https://ashish.com/ashish@20chaurasiya"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));