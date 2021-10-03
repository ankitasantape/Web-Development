// Basically, setTimeout is not the function of javascript, 
// node.js and Browser provides setTimeout function

// setTimeout is a function which takes function as a callback and executes that function when user wants to execute it 

function greet(){
    console.log("Hello!");
}
setTimeout(greet, 5000);
console.log("Byyeee");

/*
output :
Byyeee
Hello! (after 5sec Hello! will print)
*/ 
