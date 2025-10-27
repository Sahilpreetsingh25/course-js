const sumOfNumbers=(a, b, c) => {
    return a + b + c;
} 

const output = sumOfNumbers(2, 3, 4);
console.log('Sum is:', output);



const greet = (name, age) => {
   return `Hi ${name},${age ? ` you are ${age} years old.` : ''}`
}
const output2 = greet('John');
console.log(output2);


const nothing = () => {
  return `This function does not take any parameters.`;
}
const output3 = nothing();
const output4 = nothing();
const output5 = nothing();
const output6 = nothing();
console.log(output3);
console.log(output4);
console.log(output5);
console.log(output6);