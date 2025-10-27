
// Nested If-Else Example: Finding the largest of three numbers
const number1 = 10;
const number2 = 20;
const number3 = 30;

if (number1 >= number2) { // if true then check number1 and number3
    if (number1 >= number3) {
        console.log("number1 is the largest");
    } else {
        console.log("number3 is the largest");
    }
} else {
    if (number2 >= number3) {
        console.log("number2 is the largest");
    } else {
        console.log("number3 is the largest");
    }
}