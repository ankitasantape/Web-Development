let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
let narr = [21, 100, 10, 54, 12, 33, 98, 200, 76, 100, 11, 291, 34];

// sort and reverse
sarr.sort();  // does an alphabetical sort
console.log(sarr); // [ 'bello', 'bye', 'hello', 'nados', 'pep', 'there' ]

sarr.reverse();  
console.log(sarr); // [ 'there', 'pep', 'nados', 'hello', 'bye', 'bello' ]

narr.sort(); // does an lexical sort
console.log(narr); // [ 10, 100, 100, 11, 12, 200, 21, 291, 33, 34, 54, 76, 98 ]

narr.sort((a, b) => a - b); // numerical sort
console.log(narr); // [ 10, 11, 12, 21, 33, 34, 54, 76, 98, 100, 100, 200, 291 ]

narr.reverse();
console.log(narr); // [ 291, 200, 100, 100, 98, 76, 54, 34, 33, 21, 12, 11, 10 ]