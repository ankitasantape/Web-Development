
let arr = [1,2,3,4,5];
// definition
function smaller(x){
    return x * x;
}

function cuber(a){
    return a * a * a;
}

// function can be passed as an argument
// implementation map js -> pre-exist -> arr map
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

