function changeText(){
    document.getElementById('demo').innerHTML = 'Hello JavaScript!';
}

function blub(){
    document.getElementById()
}

function saanchofbusicits(){
    this.width = 12;
    this.height = 22;
    this.color = "brown";
    this.taste  = "sugary";
}
var bis1 = new saanchofbusicits()
var bis2 = new saanchofbusicits()
var bis3 = new saanchofbusicits()

function circularButton(color){
    this.radius = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}

var redbtn =  new circularButton("red");
var greenbtn = new circularButton("green");

// jab aapke pass aise koi bhi mauka ho ke aapko jaise properties waale abhut saare elements banane hai us waqt aap constructor fnc use kar sakte ho

// What are constructor functions?
// A function which whenever invoked with "New Keyword" Returns An object, if We Use "This" Keyword inside that function, it Returns An objects with all of the properties and methods mentioned inside that function, Such Function is called Constructor functon.


// 
var ans = (function(){
    var privateval = 12;

    return{
        greater:function(){
            console.log(privateval);
        },
        setter :function(val){
            privateval= val;

        }
    }
})()

// iife == immediately invoked function expression
// life hai function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye.

// what is a prototype: prototype contains many helper properties and mthods we can use to complete our task, let's say we can use to complete our task, let's say we create an array and we want to know length of it, what do we do, we use .length on that array, no! but it still contains .length, the question is how?
//  the anser is, many properties and methods are already available to use built by Javascript creators inside prototype of every object.

// Protype inheritence
// BUT, what about prototype inheritence?

// that's exactly what we're going to talk about now, inheritance is basically passing parent's features or properties to their childrens, to do the same thing in javascript with the help of prototype (one extra property always given by Javascript to every object) is called prototypal inhertience.

// how perform

var human = {
    canfly: false,
    cantalk: true,
    canWalk: true,
    haveEmotions: true,
    hasFourLegs: false
}

var sheryiansStudent = {
    canMakeAmazingWebsite: true,
    (property) canMakeWorldClassAwardWebsites : Boolean
    canMakeWorldClassAwardWebsites : true
}

sheryiansStudent.__proto__ = human;

// jab bhi koi cheej {} brackets ke ander nahi hoti to hum use global scope kahte hai
console.log(this);
// global scope me this ki value window hoti hai
// function me this ki vlaue window hoti hai
// method scope
// eak function jo obejct ke ander ho, use method kahte hai
var obj = {
    name: "Ashish",
    baatkaro: function(){
        console.log(this);
    }
}

obj.baatkaro(obj);

// method me this ki value object hoti hai

// event listeners
var button = document.querySelector("button");
button.addEventListener("click", function(){
    this.style.color = "red";
});

// call apply bind => agar mere pass koi function hai and koi object hai and muje func chalana hai aur by default jo this ki value window hai use window naa rakh point kaewana hai kisi object ki taraf

function abcd(){
    console.log(this.age);
}
var obj = {age:24}

abcd.call(obj)

// apply and bind
// ager isme hme koi parameters lene hote to
function abcd(val, val2, val3){
    console.log(this,val, val2, val3);
}

var obj = {age:24}

abcd.call(obj,1,2,3)

abcd.apply(obj, [1,2,3])

// apply says choose two parameters
// bind kabhi chalata nahi hai eak binded function de deta hai

//Pure and impure function
// pure function is any function which has these 2 features
// 1) it should always return same output  for same input
// 2) it will never change/update the value of a global variable.

function calc(val){
    return val+2;

}

// always same anser if you pass same value for 'val' argument, hence this function is pure function