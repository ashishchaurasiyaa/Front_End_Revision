console.log("CallBacks, Promises, async & wait")

const datas=[
    {name:"Ashish",Profession:"Software Engineer"},
    {name:"Ajay",Profession:"Software Engineer"}
];

function getDatas(){
    setTimeout(() => {
        let output="";
        datas.forEach((data,index)=>{
            output+= `<li>${data.name}</li>`;
            
        })
        document.body.innerHTML =output
    },1000);
}

function createdata(newdata,callback){
    setTimeout(()=> {
        datas.push(newdata)
        callback();
    },2000)
}
createdata({name:"Atul",Profession:"Software Engineer"},getDatas)
// getDatas();


// CallBacks is used A callback is a function passed as an argument to another function.


