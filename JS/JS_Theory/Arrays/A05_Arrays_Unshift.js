// unshift adds 1 or more values at the front of array
// unshift returns the new length of array

let arr = [10, 20, 30, 40, 50];

arr.unshift(5);
displayArray(arr);

arr.unshift(1000, 2000, 3000);
displayArray(arr);

let rv = arr.unshift(100, 200, 300);
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}