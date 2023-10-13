// Iteration

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best number")
    }
    console.log(element)

}

for (let i = 0; i < 10; i++) {
    console.log(`Outer Loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log(i + '*' + j + ' = ' + i * j)

    }
}



let myArray = ["Iron Man", "Captain America", "Ant Man"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)

}

// Keywords
// break and continue

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log("Dedicated 5")
        break
    }
    console.log(`Value of i is ${index}`)
        // const element = index;

}

for (let a = 0; a < 20; a++) {
    if (a == 5) {
        console.log("Dedicate 5")
        continue

    }
    console.log(`Value if a is ${a}`)

}

//