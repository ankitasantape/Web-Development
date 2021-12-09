/*
Function Within Function:
   Everything within this outer() function will have the scope of all functions and variables will be within the scope of the outer function.
   Everything within this inner() function will have the scope within this inner function 

*/ 
var name = "global";
function outer(){
    var name = "outer";
    var outerVar = 10;
    function inner(){
        var innerVar = 100;
        var name = "inner";// if you comment this name then it will fine name var in it's parents scope and it will print "outer" 
        console.log(name);
        // console.log(outerVar);
    } 
    inner();
    console.log(name);
}
// If you try to access inner() funtion then it will show error 
// becoz the scope of the inner() function is only within the scope of the outer function
// inner();  // ReferenceError: inner is not defined
outer();
console.log(name);
/*
Execution context of outer() function:
The information outer() will have all the details about variables and functions and it will have the reference to the outer scope or outer context is the global scope 
Now, within this outer function we have called inner() function and next execution context is getting created for function inner() will have all the variables and functions that have created
and reference to the outer context. So, outer context for this inner() is this outer() function. 
*/ 

/*
Q.1 What is the expected output of following code?

function a() {
    console.log("Inside a");

    function b() {
        console.log("Inside b");
    }
}
a();

Options: 
   1. Inside a
   2. Inside b
   3. f a(){ console.log("Inside a"); function b() { console.log("Inside b"); } }
   4. a
Ans: 1. Inside a

Q.2 What is the expected output of following code?

function a() {
    console.log("Inside a");

    function b() {
        console.log("Inside b");
    }
    b();
}
a();

Options: 
   1. Inside a
   2. Inside a Inside b
   3. f a(){ console.log("Inside a"); function b() { console.log("Inside b"); } }
   4. a
   5. Uncaught ReferenceError: b is not defined 
*/ 