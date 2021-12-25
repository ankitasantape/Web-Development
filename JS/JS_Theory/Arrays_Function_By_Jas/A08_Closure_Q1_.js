// Question 1
// function outer(){
//     var arr = [];
//     for(var i = 0; i < 3; i++){
//         arr.push(function () {
//             console.log(i);
//         })
//     }
//     return arr;
// }

// console.log("Before calling outer");
// var arr = outer(); 
// arr[0]();
// arr[1]();
// arr[2]();
// console.log("After calling outer");


/*
Before calling outer
3
3
3
After calling outer

but, expected output should be

Before calling outer
1
2
3
After calling outer

*/ 

function outer(){
    var arr = [];
    for (var i = 0; i < 3; i++){
        function inner(){
           var j = i;
           return function () {
               console.log(i);
           }
        }
        arr.push(inner());
    }
    return arr;
}

console.log("Before calling outer");
var arr = outer(); 
arr[0]();
arr[1]();
arr[2]();
console.log("After calling outer");