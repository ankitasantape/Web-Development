let arr = [11, 16, 18, 17, 23, 42, 11, 37];

let booleanValues = arr.map(v => v % 2 == 1);
let integerValues = arr.filter(v => v % 2 == 1);

console.log(booleanValues); // [ true, false, false, true, true, false, true, true ]
console.log(integerValues); // [ 11, 17, 23, 11, 37 ]