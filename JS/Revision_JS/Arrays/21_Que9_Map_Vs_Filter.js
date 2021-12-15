let arr = [5, 83, 24, 67, 71, 12, 24, 7];

// return cubes of values whose square <= 1000

let sqarr = arr.filter(v => v * v <= 1000 ).map(v => v = v * v * v);
console.log(sqarr);
// arr = [ 5, 24, 12, 24, 7 ]
// Squares = [ 25, 576, 144, 576, 49 ]
// Cubes = [ 125, 13824, 1728, 13824, 343 ]