// GEC
// console.log("Before Declaration", a); // Before Declaration undefined
// var a;
// console.log("After Declaration", a); // After Declaration undefined
// a = 10;
// console.log("After Initialization", a); // After Initialization 10


// function fn(){
//     console.log("Before Declaration", a);   // Before Declaration undefined
//     var a;
//     console.log("After Declaration", a);   // After Declaration undefined
//     a = 20;
//     console.log("After Initialization", a);  // After Initialization 20
// }
// fn();


// Practice question
// var is a function scope
// var a = 10;
function fn() {
    // this 'a' cannot access outside value of var 'a' as var is a functional scope 
     console.log("Before Declaration", a); // Before Declaration undefined
     var a;
     console.log("Before Declaration", a); // Before Declaration undefined
     a = 20;
     if(true){
         console.log("Before Declaration", a); // Before Declaration undefined
         var a = 30;
         console.log("After Initialization", a); // After Initialization 30
     }
     console.log("After Initialization", a); // After Initialization 30
}
// a = 10;
// fn();


let a = 10;
function fn() {
     // this 'a' cannot access outside value of let 'a' as let is a block scope 
     var a;
     console.log("Before Declaration", a); // Before Declaration undefined
     a = 20;
     if(true){
        //  let is block scope so it can't access outside value of a which is outside block.
         let a = 30; 
         console.log("After Initialization", a); // After Initialization 30
     }
     console.log("After Initialization", a); // After Initialization 20
}
// a = 10;
fn();