let arr = [5, 83, 24, 67, 71, 12, 24, 7];

// return cubes of values whose square <= 1000
// [5, 24, 12, 24, 7]
let ans1 = arr.filter(v => v * v <= 1000).filter(v => v * v * v);
console.log(ans1); // [ 5, 24, 12, 24, 7 ]

let ans2 = arr.map(v => v * v <= 1000).filter(v => v * v * v);
console.log(ans2); // [ true, true, true, true, true ]

let ans3 = arr.filter(v => v * v <= 1000).map(v => v * v * v);
console.log(ans3); // [ 125, 13824, 1728, 13824, 343 ]
