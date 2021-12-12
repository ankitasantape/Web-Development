// Question - Rearrange array so that all even elements are at 
// front and all odd elements are at back 
// (push, pop, unshift, shift)

let arr = [];

for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
       arr.unshift(i);   
    } else {
        arr.push(i);
    }
}
console.log("My Answer -> " + arr);

let ar = [20, 30, 12, 71, 9, 18, 43, 64, 11, 47];
let odd = [];
let even = [];

let i = 0;
while(ar.length > 0){
    let val = ar.shift(); // get array value
    if(val % 2 == 0){ // check value
        even.push(val);
    } else {
        odd.push(val);
    }
}

arr = even.concat(odd); // complexity of concat -> O(n)
displayArray(arr);
displayArray(odd);
displayArray(even);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

let arr = [1,2,3,4,5,6]

// Without extra space
let evenCount = 0;
let oddCount = 0;
let i=0;
while(i+evenCount<arr.length-oddCount){
    
    if(arr[i]%2==0){
        evenCount+=1;
    }
    else{
        arr.push(arr.shift());
        oddCount++;
    }
}
console.log(arr);