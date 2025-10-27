

// what is function
// A function is a reusable block of code that performs a specific task. It can take inputs, called parameters, and can return an output. Functions help organize code, make it more readable, and allow for code reuse.


// three parts of function

// 1. Function Declaration/Definition


//syntax 
// definition
// function functionName(parameters: optional) {
    // code to be executed
// }
// calling
// functionName(arguments: optional)

// let sahil = "Sahil"
// let simar = "Simar"
// console.log(`Hi ${sahil}`)
// console.log(`Hi ${simar}`)



function greet(name, age){ // function definition with parameter

  
   return `Hi ${name},${age ? ` you are ${age} years old.` : ''}`
}


// greet("Sahil", 23) // calling the function with argument
// greet("Simar",34) // calling the function with argument
// greet("Ram", 30 ) // calling the function with argument
// greet("Sam") // calling the function with argument


function helloWorld(){ // function definition
    console.log("Hello, World!")
}


// helloWorld() // calling the function


function printSquareStar(row){

for (let i = 1; i <= row; i++) {
    let star = ""
    for (let j = 1; j <=row; j++) {
        star += "* "
    }
    console.log(star)
}

}

printSquareStar(2)
printSquareStar(10)
printSquareStar(3)

// const prompt = require("prompt-sync")();

// for(let i=1;i<=3;i++){
//     let name = prompt("Enter your name: ")
//     greet(name);
// }
