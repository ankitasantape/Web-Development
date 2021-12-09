/*
Functions : In Javascript, functions start with name function and then actual functionName with parenthesis and opening and closing curly brackets.
            In Javascript, you can pass arguments to the function but you need not to specify argument type as javascript is loosely binding language.
*/ 

// Wrong : js shows error if u have specify the data type to argument in function declaration
// function showAlert(var msg){
//     alert("Hey!!!");
// }

// function showAlert(msg){
    // alert("Hey!!!");
    // alert(msg);
// }

// showAlert();
// showAlert("Hello!!!");

// Now, this function is printing the value of sum, if you don't want to print value and you want to return value then
function sum(a, b){
    // console.log(a + b);
    return a + b; // you can return this value and use it somewhere else you want.
}

// sum(2,3);
var result = sum(4,6);
console.log(result); // 10