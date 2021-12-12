// Pop removes 1 value from the end
// Pop returns the removed value

let arr = [20, 30, 40, 50, 60];
displayArray(arr);

let rv = arr.pop();
displayArray(arr);
console.log(rv);


arr[50] = 100;
displayArray(arr);

arr["kuchhi"] = 1000;
console.log(arr["kuchhi"]);
displayArray(arr);


function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
