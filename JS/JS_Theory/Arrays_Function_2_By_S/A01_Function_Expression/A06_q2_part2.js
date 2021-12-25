// function definition -> 
/*
In Hoisting ->
For function definition,
  fun variable and fun() function both will be hoisted.
For function expression,
  only, gun variable will e hoisted

  var fun = function fun(){
    gun();
} 

*/ 

function fun(){
    gun();
}

fun();

// function expression -> 
var gun = function(){
    console.log("I am inside gun");
}