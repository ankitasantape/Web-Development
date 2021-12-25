// reassign.
// function scope, redeclare, you can access a var variable before declaration

console.log(a);
var a;
a = 10;
var a;
// Temporal dead zone -> you can't access a let variable before declaration
// can't redeclare
// block scope 

console.log(a);
let a;
console.log(a);

