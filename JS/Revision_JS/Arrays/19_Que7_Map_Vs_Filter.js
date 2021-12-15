let arr = [11, 16, 18, 17, 23, 42, 11, 37];

let mres = arr.map(v => v % 2 == 1);
let fres = arr.filter(v => v % 2 == 1);

// read the copy of myMap and myFilter before proposing the answer
console.log(mres);  
// [
//     true,  false,
//     false, true,
//     true,  false,
//     true,  true
// ]
console.log(fres);  
// [ 11, 17, 23, 11, 37 ]
