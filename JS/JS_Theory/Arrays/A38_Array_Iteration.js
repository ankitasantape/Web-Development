// Array Iteration: 8 methods

// forEach
[1, 2, 3].forEach((item, index) => {
    console.log(item, + " " + index);
})
/*
1 0
2 1
3 2
*/ 

// map
let arr = [1, 2, 3];
let sqarr = arr.map(v => v * 2 )
console.log(sqarr); // [ 2, 4, 6 ]

// filter
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24];
let evensarr = arr.filter(v => v % 2 === 0)
console.log(evensarr); // [ 2, 4, 6, 8, 10, 24 ]

// reduce
let sum = arr.reduce((pv, cv) => pv + cv )
console.log(sum); // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 24 = 79

let sum1 = arr.reduce((result, item) => result + item, 0)
console.log(sum1); // 79

// some 
// If any item in the entire array meet this condition then the result will be true 
let hasNegativeNumbers = [1, 2, 3, -2, 6].some(v => v < 0)
console.log(hasNegativeNumbers); // true

// every 
// If every item in the entire array meet this condition then the result will be true otherwise it return false
let allPositiveNumbers = [1, 2, 3, -2, 6].every(v => v > 0)
console.log(allPositiveNumbers); // false 

// find
let obj = [{ id: 'a'}, { id: 'b'}, { id: 'c'}];
let found = obj.find(v => v.id === 'b');
console.log(found); // { id: 'b' }

// find index
let obj2 = [{ id: 'a'}, { id: 'b'}, { id: 'c'}];
let foundIndex = obj2.findIndex(v => v.id === 'b');
console.log(foundIndex); // 1