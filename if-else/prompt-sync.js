 

const prompt = require('prompt-sync') // return a function
const scanf= prompt();// then call it

const number1 = Number(scanf('Enter your Number1: '));
const number2 = Number(scanf('Enter your Number2: '));
console.log('number1', number1)
console.log('number2', number2)