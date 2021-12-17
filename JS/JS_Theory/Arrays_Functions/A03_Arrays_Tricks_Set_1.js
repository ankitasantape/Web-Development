

let arr = [20, 30, 40, 50, 60];
displayArray(arr);

let rv = arr.pop();
displayArray(arr);
console.log(rv); 

arr[50] = 100;
displayArray(arr);

arr["kuchbhi"] = 100;
console.log(arr["kuchbhi"]);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}