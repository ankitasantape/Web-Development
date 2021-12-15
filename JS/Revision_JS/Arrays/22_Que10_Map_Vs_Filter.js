// Question : Give me cubes of numbers whose cubes are less than 10000

let arr = [5, 83, 24, 67, 71, 12, 24, 7];

// Squares = [ 25, 576, 144, 576, 49 ]
// Cubes = [ 125, 13824, 1728, 13824, 343 ]
// Approach - 1
// map me jitane gaye utane hi aaye to arr ki length me kuch change nhi aayi
let booleancubesarr = arr.map(v => v * v * v ).filter(v => v <= 1000 );
console.log(booleancubesarr);
// [ 125, 1728, 343 ]

// Approach - 2 => sare gaye aur kuch bahar aaye, length reduce ho gayi
// .filter().map() is superior
let cubesarr = arr.filter(v => v * v * v <= 10000 ).map(v => v * v * v );
console.log(cubesarr);
// [ 125, 1728, 343 ]

// Question: What is this returning ?
let ans = arr.map(val => val * val).filter(v2 => v2 <= 1000).map(v2lessthan1000 => v2lessthan1000 *  v2lessthan1000 *  v2lessthan1000 );
console.log(ans);
// [ 25, 576, 144, 576, 49 ]