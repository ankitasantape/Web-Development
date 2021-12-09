
// ******************** Function Hoisting ***********************

// What will this code return?
console.log(j); // undefined

// The call to the hoist function is actually done before the hoist function itself.
// So, Javascript interpreter moves all the functions declarations and all the variable declarations to the top of the code.
// so, this is what hoisting is.
hoistDemo();

function hoistDemo(){
// ******************* Variable Hoisting *****************
    console.log(i); // undefined -> why it is printing "undefined" becoz variable is hoisted.
    // if I write i here, then, guess the output?
    var i = 10; 
}

// hoistDemo();
//output: ReferenceError: i is not defined

var j = 10;


// ******** Function Hoisting ********
/*
  Q.1 In JavaScript function _ _ _ _ are hoisted.
    Options:
       1. Initializations
       2. Declarations
    Ans: 2. Declarations

  Q.2 What will be the output of following code?
      x = 5;
      console.log(x); 
      var x;
    Options:
       1. Uncaught ReferenceError: x is not defined
       2. 5
       3. NaN
       4. 0
    Ans: 2. 5

   Q.3 What is the output of following code?
       hoisted();
       
       function hoisted(){
           console.log("Hoisted");
       }
    Options: 
       1. "Hoisted"
       2. Uncaught ReferenceError: hoisted is not defined
       3. ""
       4. f hoisted(){ console.log("Hoisted") }
    Ans: "Hoisted"   

    ******* Variable Hoisting ********
    Q.4 What will be the output of following code?
      function demo(){ 
          console.log(x); 
          var x = 10;
      }
      demo();
      Options:
         1. NaN 
         2. 10 
         3. undefined
         4. 0
      Ans: 3. undefined   
*/ 