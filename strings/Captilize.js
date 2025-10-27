// Capitalize each word

// From "welcome to javascript learning", output:

// "Welcome To Javascript Learning".


const str= "welcome to javascript learning"

const words=str.split(" ")


const results = 
  words[0][0].toUpperCase() + words[0].slice(1) + " " +
  words[1][0].toUpperCase() + words[1].slice(1) + " " +
  words[2][0].toUpperCase() + words[2].slice(1) + " " +
  words[3][0].toUpperCase() + words[3].slice(1);


console.log('words', results)