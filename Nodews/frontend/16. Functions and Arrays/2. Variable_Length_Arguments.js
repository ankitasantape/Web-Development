

function sum(a, b){
    console.log(a, b); // a = 1, b = undefined if you pass value for only argument
    return a + b;
}

// if you pass single variable value in sum function it would give error in c++, java but in case of javascript it doesn't happen as javascript is giving,
var result = sum(1);

// How does this result contain NaN after passing single variable value only. 
// So, let's see, what value does 'a' and 'b' has? so, a = 1 and b = undefined  
// so, we can tell that if we didn't pass value for any argument then javascript will take consider that value as undefined.  
console.log(result); // NaN


// And, if you pass more than enough value into the function then what will happen.
// then javascript will simply ignore.
var res = sum(4, 2, 3);
console.log(res);

// *************** Purpose of Return *********************
/*
   Q. 1 What is the purpose of return statement in a function? [ Ans: d ]
   Options:
    a. Returns the value and continues executing rest of the statements. if any
    b. Returns the value and stops executing the statement.
    c. Returns the value and stops the program.
    d. Stops executing the function and returns the value.

*/   

// ************** Function Definition **********************
/*
   Q. 2 What is the correct way of defining a function in JavaScript? [ Ans: c ]
   Options: 
    a. Identifier and Parentheses 
    b. Return type and Identifier 
    c. Function keyword, Identifier and Parentheses 
    d. Identifier and Return type   
*/ 

// ************* More Arguments Passed *********************
/*
   Q. 3 What will the function 'test' return upon execution of these statements? [ Ans: 5 ]
   function test(a, b){
       console.log(a + b);
   }
   test(2, 3, 4);
   Options: 
    a. 5 
    b. Error (incorrect number of parameters)
    c. 9 
    d. 7
*/ 

// ************* Fewer Arguments *********************
/*
   Q. 4 What will the function 'test' return upon execution of these statements? [ Ans: NaN ]
   function test(a, b, c){
       console.log(a + b * c);
   }
   test(2, 3);
   Options: 
    a. 5 
    b. Error (incorrect number of parameters)
    c. NaN
    d. 0
*/ 