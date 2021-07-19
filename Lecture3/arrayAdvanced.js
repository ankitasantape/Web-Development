// declare 
// array is a collection of anything

function fn(){
    let rVal = fn1();
    console.log(rVal);
    console.log("I am a function");
    return "Hello";
}

function fn1(){
   console.log("I am fn1");
   return 10;
}


let tempArr = [1,2,3,4,5];
let temp1Arr = tempArr;
// let arr = [
//     1,true,1.1,"string",null,[1,2,3,4,5],
//     function fun(){
//         console.log("I am a function");
//         return "Hello";
//     }
// ];
let arr = [
    1,true,1.1,"string",null,[1,2,3,4,5],
    fn
];

// console.log("call last element", fn());
console.log("call the last element", arr[arr.length - 1]());