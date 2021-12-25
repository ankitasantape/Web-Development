fun(); // jb ye line chalegi tb fun() function declare nhi hua hoga to jab ye line chalegi hume error milega ki fun is not a function

// Function Expression 
// jb tak niche ki line chalegi nhi tb tak fun() function declare nhi hoga 
var fun = function(){
    gun();
}

// Function Expression 
var gun = function (){
    console.log("I am inside gun");
}



/*

Output: fun is not a function 

*/ 