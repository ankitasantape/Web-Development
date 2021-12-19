

let arr = [20, 30, 40, 50, 60];
displayArray(arr);  // 20,30,40,50,60 = 5

let rv = arr.pop();
displayArray(arr); // 20,30,40,50 = 4
console.log(rv);  // 60

arr[50] = 100;
displayArray(arr); // 20,30,40,50,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,100 = 51

arr["kuchbhi"] = 100;
console.log(arr["kuchbhi"]); // 100
displayArray(arr); // 20,30,40,50,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,100 = 51

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}
