const str="Hello World"

// Indexing -> 0 1 2 3 4  5  6 7 8 9 10
// Value ->    H e l l o     W o r l d
// length ->   1 2 3 4 5  6  7 8 9 10 11

// str is any string, [] square bracket is used to access the value of string, pass number inside the [] to access the value of string

const strValue=str[ str.length-2]
console.log('StrValue', strValue)



// const value=str[0]
// const newStr=str[ ]
// console.log(newStr)

const returnValue = str.at(10) // return always new string
// console.log(returnValue)

// chartAt
const returnValue2 = str.charAt(10) // return always new string
// console.log (returnValue2)


// length
const strLength=str.length
// console.log(strLength)

//uppercase and lowercase
const upperCase=str.toUpperCase()
const lowerCase=str.toLowerCase()
// console.log(upperCase)
// console.log(lowerCase)


