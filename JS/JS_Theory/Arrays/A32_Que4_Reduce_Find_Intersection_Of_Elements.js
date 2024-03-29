let a1 = [10, 30, 50, 70, 90];
let a2 = [63, 34, 50, 90, 80, 10, 60];
// 10, 50, 90
// Find intersection of elements in arrays
console.log(a2.includes(80)); // true
console.log(a2.includes(88)); // false

let inter1 = a1.filter(v => a2.includes(v));
console.log(inter1); // [ 10, 50, 90 ]

let arr2d = [
    [10, 50, 70, 80, 90, 100, 30, 60],
    [11, 50, 75, 85, 90, 100, 34, 60], // 50, 90, 100, 60
    [10, 51, 70, 80, 90, 100, 30, 60], // 90, 100, 60
    [11, 50, 75, 85, 92, 100, 34, 60], // 100, 60
    [10, 50, 70, 80, 90, 100, 30, 60], // 100
];

let inter2 = arr2d.reduce(function(pv, cv, ci, oarr){
    console.log(pv + "####" + cv);
    let inter = pv.filter(v => cv.includes(v));
    return inter;
});

console.log(inter2);
// 10,50,70,80,90,100,30,60####11,50,75,85,90,100,34,60
// 50,90,100,60####10,51,70,80,90,100,30,60
// 90,100,60####11,50,75,85,92,100,34,60
// 100,60####10,50,70,80,90,100,30,60

// [ 100, 60 ]