let arr = [];
console.log(arr);
// loops
arr = [1,2,3,4,5];
console.log(arr.length);
for(let i = 0; i < arr.length;i++){
    // typecasting - plus sign typecast into string
    console.log(i +" : "+ arr[i]);
    // no typecasting - comma does not typecast into string
    console.log(i ," : ", arr[i])
}

// push - add last
arr.push(23); 
console.log("After pushing element 23 at last ", arr);
// pop - remove last
arr.pop();
console.log("After poping element 23 at last ", arr);
// unshift - add first
arr.unshift(43);
console.log("After adding/unshifting element 43 at first ", arr);
// shift - remove first
arr.shift(43);
console.log("After removing/shifting element 43 at first ", arr);

// slice - gives a copy of a subarray
// slice(startIndex, endIndex - 1);
let slicedArr = arr.slice(1,4);
console.log("Sliced Array: ", slicedArr);
slicedArr = arr.slice(1);
console.log("Sliced Array: ", slicedArr);
console.log("Original Arr ", arr);

// splice - deletes any number of elements from an index
console.log("Original arr ", arr);

let removedElements = arr.splice(2,3);
console.log("Removed Elements",removedElements);
console.log("After spliced arr ", arr);

// indexOf - index for an element in an array
// else -1
let idx = arr.indexOf(11);
console.log("Element 11 at index ", idx);
idx = arr.indexOf(1);
console.log("Element 1 at index ", idx);

console.log("Original arr ", arr);
// includes -> it check whether the element is present in the array or not
console.log("Does arr contains element 5? ",arr.includes(5));
console.log("Does arr contains element 1? ",arr.includes(1));

/*

[]
5
0 : 1
0  :  1
1 : 2
1  :  2
2 : 3
2  :  3
3 : 4
3  :  4
4 : 5
4  :  5
After pushing element 23 at last  [ 1, 2, 3, 4, 5, 23 ]
After poping element 23 at last  [ 1, 2, 3, 4, 5 ]
After adding/unshifting element 43 at first  [ 43, 1, 2, 3, 4, 5 ]
After removing/shifting element 43 at first  [ 1, 2, 3, 4, 5 ]
Sliced Array:  [ 2, 3, 4 ]
Sliced Array:  [ 2, 3, 4, 5 ]
Original Arr  [ 1, 2, 3, 4, 5 ]
Original arr  [ 1, 2, 3, 4, 5 ]
Removed Elements [ 3, 4, 5 ]
After spliced arr  [ 1, 2 ]
Element 11 at index  -1
Element 1 at index  0
Original arr  [ 1, 2 ]
Does arr contains element 5?  false
Does arr contains element 1?  true

*/ 