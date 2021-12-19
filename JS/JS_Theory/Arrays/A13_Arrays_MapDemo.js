// Map is itself a fn
// Map takes as input a callback fn 
// The callback fn takes 3 parameter (v, i, oarr)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
// length of returned array is equal to original array


let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map((val, i, oarr) => {
    console.log(val + " @ " + i + " =[" + oarr + "]");
    return val * val;
});
console.log(sqarr);

/*
2 @ 0  = [2,5,9,8,15,11,6]
5 @ 1  = [2,5,9,8,15,11,6]
9 @ 2  = [2,5,9,8,15,11,6]
8 @ 3  = [2,5,9,8,15,11,6]
15 @ 4 = [2,5,9,8,15,11,6]
11 @ 5 = [2,5,9,8,15,11,6]
6 @ 6  = [2,5,9,8,15,11,6]
[ 4,  25, 81, 64, 225, 121, 36 ]

*/ 