//callback function definition
// A callback function is a function passed into another function as an argument, which is then invoked(called) inside the outer function to complete some kind of routine or action.

function one(callback){
    console.log("Function one called , now calling function two");
    callback(three);
}

function two(threeFun){
    console.log("Function two called , now calling function three");
    threeFun();
}
function three(){
    console.log("Function three called");

}



one(two);