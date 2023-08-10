let nameObj = {
    name :"Ashish"
}

let PrintName = {
    name: "steave",
    sayHi: function (age){
        console.log(this.name + " age is " + age);
    }

}
// write our own bind polyfill.
Object.prototype.MyBind = function (bindObj, ...args) {
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod(...args);
    }
}
let HiFun = PrintName.sayHi.bind(nameObj, 25);
HiFun();


let nameAsh = {
    name: "Abhishek"
}

let PrintAsh = {
    name:"Abhishek",
    sayHi:function (age) {
        console.log(this.name + " age is " + age);
    }
}

// write our own call polyfill:
Object.prototype.MyCall = function (bindObj, ...args){
    bindObj.myMethod = this;
    bindObj.myMethod(...args);
}

// PrintAsh.sayHi.call(nameAsh, 20);
PrintAsh.sayHi.MyCall(nameAsh, 20);

let nameAjay = {
    name: "Ajay"
}

let PrintAjay = {
    name: "Ajay",
    sayHi: function (...age) {
        console.log(this.name + " age is " + age);
    }
}
// write our final polyfill which is apply polyfill
// PrintAjay.sayHi.apply(nameAjay, [26]);
Object.prototype.MyApply = function (bindObj, args){
    bindObj.myMethod = this;

    bindObj.myMethod(...args);
}

PrintAjay.sayHi.MyApply(nameAjay, [27]);



// Problem Statement

let userDetails={
    name:"Ashish Chaurasiya",
    Age:24,
    Designation:"Software Developer",
}

let printDetails= function(state,country){
    console.log(this.name+" "+state+" "+country);
}

printDetails.call(userDetails,"Delhi","India");

let userDetails2 = {
    name:"Abhishek Chaurasiya",
    Age:20,
    Designation:"Software Engineer",
}

//function borrowing

printDetails.call(userDetails,"Delhi","Inidia");

// Apply

printDetails.apply(userDetails2,["Delhi","India"]);

// Bind

let newfun=printDetails.bind(userDetails,"Delhi","Inida");
newfun();