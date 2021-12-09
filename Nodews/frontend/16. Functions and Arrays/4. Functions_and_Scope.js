/* Scope: Scope is the area of code where that variable is accessible, where you can use that variable  */ 

/* 'name' variable is created within a global scope.
    Global Scope: It means that the variables that you created within a global scope are available throughout the program.
                  From, the program if we use 'name' we will be able to use that.

    Functions Scope: It means that the function scope is basically refers to scope of variable in the function. 
                     Function scope is also called as lexical scope.
    Execution Context: EC is an environment, the environment where that code is run
                       Every code in javascript has an execution context associated with it.                               
*/ 
var name = "scope";
// console.log(name); // scope

function scopeDemo(){
// When you create a variable within function then the scope of that variable is only within that function.
    var i = 10;
    console.log(i);
}

// scopeDemo();
// if i try to access i outside the function it will show a ReferenceError becoz i is not available in this current global scope
// In global scope there is no element i, but in the local scope of function scopeDemo() there is element i present 
// The function scope is also called as lexical scope
// console.log(i); // ReferenceError: i is not defined


// *****************************

var scope = "global";
/*
The execution context of the variable global is : 
the global execution context, the overall execution context. What all there will be in the execution context?
So, this execution context will have information regarding all the variables, what all variables we have here.
And it will have 'this'.
*/ 

function scopeDemo2(){
    // var scope = "function"; // if u comment in this line the scope will point to the global scope variable 
    console.log(scope);
    /*
    Execution Context of scopeDemo2() contains:
       - variables and 'this' variable and it also have the reference to the outer environment(is the global environment).
    
    */ 
}

/* Execution context is created when that code is executed 
   The execution context for scopeDemo2() will created when you call this function
*/ 
scopeDemo2(); // funtion
console.log(scope); // global

/*
CallStack : 
In callstack, first global execution contextt will be executed.
then function a() will push inside callstack. then b() and then c().
after execution first function c() will poped out then b() and then a().
*/ 

function c(){
    console.log("Inside c");
}

function b(){
    c();
    console.log("Inside b");
}

function a(){
    b();
    console.log("Inside a");
}

a();

// ********** Multiplication ****************
/*
Q.1 What will the following code print on console?
    function multiply(a,b){
        return a*b;
    }; 
    console.log(multiply);
Options:
    1. multiply
    2. a*b     
    3. f multiply(a,b) { return a*b; }
    4. undefined
    5. None of the above
Ans: 3. f multiply(a,b) { return a*b; }

// ************ Global and Local Variable *************
Q.2 What is the output of following code?
    var a = 10;
    
    function test(){
        var a = 20;
    }

    test();
    console.log(a);
Options:
    1. 10
    2. 20
Ans: 1. 10 

// ************ Global Vs Local **************
Q.3 What is the output of following code 
    var a = 10;

    function test(){
        var a = 20;
        console.log(a);
    }

    test();
Options:
    1. 10
    2. 20
Ans: 2. 20  
  
*/ 