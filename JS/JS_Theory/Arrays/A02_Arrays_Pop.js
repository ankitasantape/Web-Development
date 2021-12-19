// pop removes 1 value from the end 
// pop returns the removed value

let arr = [10, 20, 30, 40, 50, 60];
displayArray(arr);

arr.pop();
displayArray(arr);

let returnedVal = arr.pop();
console.log("Returned value: " + returnedVal);
displayArray(arr);


function displayArray(arr){
    console.log(arr + " = " + arr.length); 
}