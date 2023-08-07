// Rest & Spread Operator
// both are used in array and obejct
// ES6
// Rest : Jo bhi element pass kar rahe hai vo combine ho jaate hai
console.log("Hello World");
function addNumbers(a,b,c){
    return a+b+c
}
const res=addNumbers(2,4,5)
console.log(res)

function multiply(a,b){
    return a*b
}
const res1 = multiply(5,6)
console.log(res1)

function addMaxNumber(a,b,c,...other){
    console.log(other)
return a+b+c
}
const res2=addMaxNumber(1,2,3,4,5,5,6,6,8)
console.log(res2)

// Spread : Jo combine honge usko hmm todenge as a zero index me receive kar rahe hai

var names = ["Ashish","Aman","Yadvendra","Atul","Ajay","Vikas"];
function getNames(name1,name2,name3){
    console.log(name1,name2,name3)
}
getNames(names[0],names[1],names[2])
// this is not good
getNames(...names) //best
getNames(names)

// how to work obejct Rest
// How to override value
var students={
    name:"Ajay",
    age:"28",
    hobbies:["Chess","Hollywood Movies"]
}
// const age=students.age;
// const {age,name} = students;
console.log(name)
const{age,...rest} = students;
console.log(rest)


// Spread Object

var newStudent={
    ...students,
    age:"29"
}

console.log(newStudents)