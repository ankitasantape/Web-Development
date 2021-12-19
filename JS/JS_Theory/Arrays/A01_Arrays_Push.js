// push appends 1 or more values at the end of array
// push returns the new length of array

let arr = [10, 20, 30, 40, 50, 60, 70];
displayArray(arr);

arr.push(80);
displayArray(arr);

arr.push(90, 100, 110);
displayArray(arr);

// What does arr.push() returns ? Ans: It returns length of an array. 
let returnValue = arr.push(120);
displayArray(arr);
console.log("Returned Value: " + returnValue);

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}