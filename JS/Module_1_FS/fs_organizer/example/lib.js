// function 
// variable
let a = 10;
function fn() {
    console.log("Hello I am Fn");
    return "Hello";
}
function notToBeExported(){
    console.log("I don't want to be exported");
}

//  ocde export
module.exports = {
    varName : a,
    fxn : fn
}