// let fs = require("fs");
// console.log("before");
// let content = fs.readFileSync("cb.js");
// //  a js dev can't create an asynchronous function
// // environment will give it to you
// console.log("Content: ", content);
// console.log("after");


// Async 
// error first callacks -> by convertion err is first parameter
let fs = require("fs");
console.log("before");
fs.readFile("cb.js", cb);
function cb(err, data){
    if(err) {
        console.log("Error" + err);
    } else {
        console.log("content: "+ data);
    }
}
// All the work handle by nodejs just like executing callback function
 
console.log("after");


// In output - 
// first execute javascript 
/*
before
after
content:
let arr = [1,2,3,4,5];
// definition
function smaller(x){
    return x * x;
}

function cuber(a){
    return a * a * a;
}

// function can be passed as an argument     
// implementation map js -> pre-exist -> arr 
map
// it will apply the cb fn to all the elements of an array and return the new Arr
function bigger(arr, cb){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){     
        let sqVal = cb(arr[i]);
        newArr.push(sqVal);
    }
    return newArr;
}

let sqArr = bigger(arr, smaller);
console.log("arr", sqArr);


let cuArr = bigger(arr, cuber);
console.log("arr", cuArr);

*/ 