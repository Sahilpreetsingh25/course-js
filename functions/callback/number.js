function square(x){
    return x * x
}

function double(x){
    return x + x
}



function processNumber(num,callback){
console.log(`User Enter Number: ${num}`)
const data=callback(num)
return data

}


const output1=processNumber(3,double)
console.log('output1', output1)
 const output2=processNumber(4,square)
 console.log(output2)