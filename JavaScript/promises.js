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
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            datas.push(newdata);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("Something is wrong")
            }
        getDatas},2000);
    })
}
// createdata({name:"Atul",Profession:"Software Engineer"}).then(getDatas).catch(err=> console.log(err))

async function start(){
    await createdata({name:"Atul",Profession:"Software Developer"})
    getDatas();
}
start();