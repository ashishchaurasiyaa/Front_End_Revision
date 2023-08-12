// High Order Function

//for each

//filter
//map
//sort
//reduce

const companies= [
    {name: "Google", category: "Product Based", start: 1981, end: 2004},
    {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
    {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
    {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
    {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
];
// console.log(companies);
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61,13, 15, 45, 25, 64, 32];

// for(let i=0; i<=companies.length; i++){
//     console.log(companies[i]);
// }
// foreach is HOF function
// companies.forEach(function(company,index){
//     console.log(company)
// });

// using arrow function
companies.forEach((company,index)=> (console.log(company.name)));
companies.forEach((company,index)=> (console.log(company.category)));

//using filter
// normal loop
// for(let i=0; i<=ages.length; i++){
//     if(ages[i] >= 20)
//     console.log(ages[i]);
// }

// const age = ages.filter(function(age){
//     if(age >= 20){
//         return true
//     }
// })
// console.log(age);


const finalAge = ages.filter((age,index)=> age>=30); 
const finalage = ages.filter(age=> age> 20);

console.log(finalAge,finalage);

const service= companies.filter(function(company){
    if(company.category ==='Service Based'){
        return true
    }
})

const comp = companies.filter((company => company.category === "Service Based"))
console.log(service,comp)

//map function
companies.map(function(company,index){
    console.log(company,index)
})

companies.map((company,index) => {
    console.log(company,index)
})

const dummy = companies.map((company,index) => {
    return `${company.name} ${company.category} ${company.start}`
})

console.log(dummy);

//sort HOF Function
const sorted= companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
})

console.log(sorted)

// one line

const sortedoneline= companies.sort((c1,c2)=> (c1.start < c2.start ? 1 :-1));

console.log(sortedoneline);

const sortedageoneline= ages.sort((a,b)=> (b -a));
console.log(sortedageoneline);

// Reduce
// I trying age of count
let total = 0;
for(let i=0;i<ages.length; i++){
    total +=ages[i];
}
console.log(total)

// using reduce HOF

const sumage= ages.reduce(function(total,age){
    return total+age
},0)
console.log(sumage)

// using arrow

const sumage2= ages.reduce((total,age)=> total+age,0);
console.log(sumage2);