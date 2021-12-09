/*

Polyfill : Polyfill is sort of a browser fallback, so what if your browser doesn't have a bind support
and so you need to write your own bind() function. 
So, interviewer expects to write your own bind() function

*/ 
// Task: Implement your own bind() function
let name = {
    firstName: "Ankita",
    lastName: "Santape"
};

let printName = function (hometown, state, country) {
    console.log( this.firstName + " " + this.lastName + " , " + hometown + " , " + state + " , " + country);
}

// passing the reference of name variable inside the printName() method
// Pre defined bind() method
let printMyName = printName.bind(name);
// printMyName();

// user defined bind() method
// First of all carefully observed the predefined bind() method
// Every function in javascript has access to this bind() method
// like, printMyName() has access to bind() method
// So, similarly, every method should have access to mybind() method
// So, how to do that, first of all put this method mybind() inside function.prototype.mybind() 
// function.prototype : IF you keep any method in function.prototype then each n every method what we write has access to those methods. 

// Next Challenge : implement printName.bind(name)
// When we write printName function with bind method ( printName.bind(name) ) then printMyName gets a function which can be later invoked printMyName().
// So, we want the similar behaviour with our mybind()
// whenever, we call printName.bind(name) it returns a function so similarly mybind() method also should return a function to us 
// if we calls printMyName2() method then it should return a method printName(). 
// How we will get this printName() function inside return function() { }, we can get this by the 'this' variable, 
// inside this mybind() function this 'this' variable is pointing to function printName(), this => printName
// when we called mybind() function over printName() method, so inside this mybind() function this 'this' variable is pointing to this printName() method
// So, 'this' is pointing to the printName method, so store this 'this' method inside object, let obj = this  
// So, how we call this ? we need to call this with reference to name =>( obj.call(name); ) that means we need to some how access this name variable and
//  we need to pass this name variable over call(name) method and also we need to pass args array inside function


// Function.prototype.mybind = function(...args) {
//     // this => printName
//     let obj = this;
//     params = args.slice(1);
//     return function(){
//         obj.call(args[0]);
//     }
// }


Function.prototype.mybind = function(...args) {
    // this -> printName
    let obj = this;
    params = args.slice(1); // this params again receives as an array of args
    return function(...args2) {
    //    obj.call(args[0]); // this params is also an array we need to pass an argument of arr so we will use apply() method instead
       obj.apply(args[0], [...params, ...args2]);
       // printName();
    }
}

let printMyName2 = printName.mybind(name);
// printMyName2();  // Ankita Santape

// Still there is some issue with this code because it is just the basic implementation of bind() method 
// Let's see the difference
let printMyAddress = printName.bind(name, "Nagpur");
// printMyAddress(); // Ankita Santape , Nagpur

let printMyAddress2 = printName.mybind(name, "Nagpur");
// printMyAddress2(); // Ankita Santape , undefined -> without slice

// we need to handle this argument in mybind() method, o/w it will give undefined 
// So, when we extracted args[0] it gave us the reference of this 'name' object
// we want the other arguments too, to also we pass inside this obj.call()
// So, what we will do, we will just extract the params by args.slice(1) method, 
// so this method will referencing to the elements other than the first element.

let printState = printName.bind(name, "Nagpur");
// printState("Maharashtra"); // Ankita Santape , Nagpur , Maharashtra

let printState2 = printName.mybind(name, "Nagpur");
// printState2("Maharashtra"); // Ankita Santape , Nagpur , undefined -> we need to remove call method and should use apply() method 

// this "Maharashtra" will received in return function("Maharashtra") {  } ==> so we need to pass args in the return function(...args2){ } 
// and somehow we need to pass arg inside obj.apply() method -> obj.apply(arg[0], params) but over here we have params already 
// what will we do now? we will concatenate this both arrays(params and arg2) and pass them as arguments,
//  for that we will use es6 syntax : [...params, ...args] this will create a large array, concatenate them and pass into the apply method, so this is how we combine both the array

let printCountry = printName.bind(name, "Nagpur");
printCountry("Maharashtra", "India"); // Ankita Santape , Nagpur , Maharashtra , India

let printCountry2 = printName.mybind(name, "Nagpur");
printCountry2("Maharashtra", "India"); // Ankita Santape , Nagpur , Maharashtra , India