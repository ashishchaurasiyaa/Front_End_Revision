// Array MAP Filter Foreach
// objects -> access loop
// freeze
// this call apply bind
// how build logic
//sync vs async
//Synchronous code executes line by line and if first line is not resolved the code execution will not move to the next line
//Asynchronous code waits till synchronous code is not finished and when the synchrounous code finishes executing, then the async code starts it's execution,  as the async code  means it probably can have delay, it also takes something called callback.



var a = [1,2,'3',4];
// foreach is a loop which works on array
// foreach ka use karke eak array se saare members ke aage hello print karo
a.forEach(function(val){
    console.log("Hello," + val);
    if(val<=2){
        console.log(val);
    }
})

// HOF higher order function Higer order function ke under function ata hai

//saare element jo array me hai uska sum karna hai
var sum = 0;
a.forEach(function (val){
    sum = sum +val;
    console.log(sum);
})
var a = [1,2,'3',4];
var sum = 0;
//saare bande add karo ager umne se koi bhi string nikal to phir use skip karo
a.forEach(function(val){
    if(typeof val === "number"){
        sum = sum + val;
    }
})
console.log(sum);

var arr = [];

for(let i =0; i<10; i++){
    arr.push(function (){
        setTimeout(function (){
            console.log(i);
        },1000)
    })
}

for (var i=0; i<10; i++){
    arr[i]();
}

