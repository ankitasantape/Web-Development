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


let array = [20, 30, 12, 71, 9, 18, 43, 64, 11, 47];
let odd = [];
let even = [];

let i = 0;
while ( array.length > 0 ) {
    let val = array.shift();
    if(val % 2 == 0){
        even.push(val);
    } else {
        odd.push(val);
    }
}
array = even.concat(odd);
console.log("Even: ");
displayArray(even);
console.log("Odd: ");
displayArray(odd);
console.log("EvenAndOdd: ");  
displayArray(array);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}