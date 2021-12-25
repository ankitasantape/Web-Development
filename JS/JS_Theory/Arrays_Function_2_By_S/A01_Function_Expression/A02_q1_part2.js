//  fun();  // jb ye line chalegi tb fun() function declare nhi hua hoga to jab ye line chalegi hume error milega ki fun is not a function


// Function Expression   
// jb tak niche ki line chalegi nhi tb tak fun() function declare nhi hoga 
var fun = function(){
    gun(); // this gun() will throw error -> gun is not a function -> becoz at this line gun() is not declared and we are calling it before it's declaration
}

fun(); // gun is not a function

// Function Expression    
var gun = function (){
    console.log("I am inside gun");
}


/*
Output: gun is not a function
*/ 