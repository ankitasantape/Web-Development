// shift removes 1 value from the front 
// shift returns the removed value

let arr = [10, 20, 30, 40, 50];
displayArray(arr);

let rv = arr.shift();
console.log(rv);
displayArray(arr);


function displayArray(arr){
    console.log(arr + " = " + arr.length);
}