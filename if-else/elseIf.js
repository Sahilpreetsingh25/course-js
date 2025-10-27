// if(marks>=90){
//     console.log("A")
// }
// if(marks>=80 && marks<90){
//  console.log("B")
// }
// if(marks>=70 && marks<80){
// console.log("C")
// }
// if(marks>=60 && marks<70){
// console.log("D")
// }
// if(marks<60){
//     console.log("E")
// }
let marks=78
switch(true){
    case marks>=90:
        console.log("A grade")
        break;
    case marks>=80:
        console.log("B grade")
        break;
    case marks>=70:
        console.log("C grade")
        break;
    case marks>=60:
        console.log("D grade")
        break;
    default:
        console.log("E grade")
}

// if(condition){
// true block
// } else if(condition2){
 // true block for condition2
// }else if(condition3){
  // true block for condition3
// }else if(){
 // false block for all conditions
// }