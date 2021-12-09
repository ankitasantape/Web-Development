// **************** Function Expression ****************
//  Function Declaration :
//   function fact(n){
//       var ans = 1;
//       for(var i = 1; i <= n; ++i){
//           ans = ans * i;
//       }
//       return ans;
//   }
//   fact(3); //--> function declaration


/*
  Function Expression :
  * What do you mean by expression? 
  -> Expression means that you have a variable var a and u r assigning some value to it.
      var a = 10;
  * Function Expression:  In case of function expression, the value that you have will be assigning will be a function.
*/

// var factorial2 = function (n){
//     var ans = 1;
//     for(var i = 1; i <= n; i++){
//         ans = ans * i;
//     }
//     return ans;
// }
// console.log( factorial2 );
// console.log( factorial2(-1) );
// console.log( factorial2(5) );

// *********** Function Declaration vs Expression ***************
/*
This are two different ways to create a function:
  - Function Declaration 
  - Function Expression 
But, which one is better we need to clarify it.
*/ 
// Function Declaration:

console.log( fact(5) ); // This statement will work even though the function declaration is after that, the hoisting work
// becoz the javascript interpreter actually hoist to all the function declaration and variable declaration upward in the scope.
// So, this is a global scope all the functions declaration and variale declarations moved up.

function fact(n){
    var ans = 1;
    for(var i = 1; i <= n; ++i){
        ans = ans * i;
    }
    return ans;
}

// *******************************************************
// Function Expression:

// console.log( factorial(4) ); // TypeError: factorial is not a function
// It means that as a variable factorial is exists but the variable factorial doesn't holding the value of a function. Then, what value is holding factorial? It is holding undefined.  
console.log(factorial); // undefined
// Why it is holding undefined?
// Because of variable hoisting. 
var factorial = function (n){
    var ans = 1;
    for(var i = 1; i <= n; i++){
        ans = ans * i;
    }
    return ans;
}
console.log( factorial(4) ); // 24

// **************************************


// Function Expression
// Q.1 What is the output of following code?

var RectArea = function(width, height){
    return width*height;
}

console.log(RectArea(5, 4)); // 20
/*
Options:
   1. 20
   2. RectArea
   3. f(width, height) { return width * height; }
*/ 

// Nested Variable Function
// Q.2 What is the output of following code?

// function a(){
//     console.log("Inside a");

//     function b(){
//         console.log("Inside b");
//     }
// }
// a()b();

/* Options:
    1. Inside a
    2. Inside a Inside b
    3. f a() { console.log("Inside a"); function b() { console.log("Inside b"); } }
    4. ab
    5. Uncaught SyntaxError: Unexpected Identifier
*/ 

// Run Subtract
// Q.3  What is the output of following code?

var add = function(a,b){
    return a+b;
}

var subtract = function(a,b){
    return a-b;
}

var op = function(func){
    var x = 2;
    var y = 3;
    return func(x,y);
}
console.log( op(subtract) );

/*
Options:
  1. 5
  2. -1
  3. f (func){ var x = 2; var y = 3; return func(x, y); }
  4. f (a, b){ return a+b; }
Ans: 2. -1  
*/ 

// ********* Pass Function to Function **************
// Q.4  What is the output of following code?

var add = function(a,b){
    return a+b;
}

var subtract = function(a,b){
    return a-b;
}

var op = function(func){
    var x = 2;
    var y = 3;
    return func(x,y);
}
console.log( op(add) );

/*
Options:
  1. 5
  2. -1
  3. f (func){ var x = 2; var y = 3; return func(x, y); }
  4. f (a, b){ return a+b; }
Ans: 1. 5  
*/  
