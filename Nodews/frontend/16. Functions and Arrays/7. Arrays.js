// ************ Arrays ***************
var arr = [1,2,3,4,5];
var arr = new Array(1,2,3,4,5);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(arr[3]); // 4
console.log(arr[7]); // undefined

arr[3] = 45;
console.log(arr); // [ 1, 2, 3, 45, 5 ]
// arr[5] = 100; // [ 1, 2, 3, 45, 5, 100 ]
arr[6] = 100; // [ 1, 2, 3, 45, 5, <1 empty item>, 100 ]
console.log(arr + " length: " + arr.length); // 1,2,3,45,5,,100 length: 7
// if you try to access empty item
console.log(arr[5]); // undefined
// we can create empty array without size and with size also
var arr1 = new Array();
console.log(arr1 + " length: "+ arr1.length ); // []  length: 0
var arr2 = new Array(3); // if you pass single elem then it considered it as size of a array
console.log(arr2 + " length: "+ arr2.length); // ,, length: 3
var arr3 = new Array(2,3,4); // if you pass multiple elem then it considered it as elements of an array
console.log(arr3); // [ 2, 3, 4 ]


// ************* Functions on Arrays ****************
// * Arrays in javascript can be heterogeneous becoz javascript has dynamic binding.
var arr4 = ["abc", 10, true, 20];
console.log(arr4); // [ 'abc', 10, true, 20 ]
// If we write arr like this would specify size of the array
var arr5 = new Array(1000);
console.log(arr5.length); // 1000 -> becoz arr is empty so it is not creating memory of 1000 it is just setting the length of array
// * Length is not a function 

// 1. push() : push function add element at the end of the arr 
arr4.push(4);
console.log(arr4); // [ 'abc', 10, true, 20, 4 ]

// 2. pop() : As we can add element at the end of arr as well we can delete element from the end of the arr
console.log(arr4.pop()); // 4
console.log(arr4); // [ 'abc', 10, true, 20 ]

// 3. shift() : If you want to shift arr it will shift arr towards left so first elem will be removed and returned it
console.log(arr4.shift()); // abc
console.log(arr4); // [ 10, true, 20 ]

// 4. unshift() : If you want to unshift arr element it will add element add at first position 
console.log(arr4.unshift(8)); // size of arr will be : 4
console.log(arr4); // [ 8, 10, true, 20 ] 

// *********** Push in Array *************
// Q.1 What is the output of the following code?
var color = ["Orange","Blue","Green"];
color.push("Red");
console.log( color[0] + "" + color[color.lenght-1] ); // Orange Red
/*
  Options: 
    1. Orange Red
    2. Red Orange
    3. Orange Green
    4. Green Red
  Ans: 1. Orange Red  
*/ 

// *********** Shift Array ***************
// Q.2  What is the output of the following code?
var fruits = ["Red","Orange","Blue","Green"];
console.log(fruits.shift()); // Red
/*
  Options: 
    1. Red
    2. Orange
    3. Blue
    4. Green
  Ans: 1. Red  
*/ 

// ****************** Heterogeneous Array **************
// Q.3 Is the below given array allowed in Javascript?
var myArray = [45, "Ninja"];
/*
  Options:
    1. Yes
    2. No
  Ans: Yes   
*/ 


// ********************* Splice Function *****************

// Splice function is used to make changes in the array.
// This function is used to make an addition of an element or more than 2 elements to the arr or removing of an element
/*
     Splice --> Start Index - The index from which you want to make changes 
            --> Deletion Count - The number of element that you want to delete from the 
            --> Element to be inserted - the element that you actually wanted to insert the array
*/ 
var array = [2,3,4,5,6];
console.log(array.splice(1, 1)); // [ 3 ] // startIdx = 1, How many elements you have to delete? => 1 , and for now we don't want to insert anything (so this is optional)
console.log(array); // [ 2, 4, 5, 6 ]
// if I specify only one element starting from idx - 1 then it will delete all the elements from idx - 1
console.log(array.splice(1)); // [ 4, 5, 6 ]
console.log(array.splice(0, 1)); // [ 2 ] // startIdx = 1, How many elements you have to delete? => 3 , and for now we don't want to insert anything (so this is optional)
console.log(array); // [ ]

var array1 = [2,3,4,5,6];
// Now, I don't want to delete anything just want to insert something
// I want to insert 10 at idx = 2, so change will be began at idx = 2, and I don't want delete anything so add 0, then add element to be inserted, so I want to insert elem = 10
array1.splice(2, 0, 40); // 10 will be inserted at index 2
console.log(array1); // [ 2, 3, 40, 4, 5, 6 ]

// * If you want to insert more than one element at a time into array
array1.splice(2, 0, 10, 20 ,30);
console.log(array1); // [ 2, 3, 10, 20, 30, 40, 4,  5,  6 ]

// * We can do parallel insertion and deletion as well
// I have to delete element from idx = 2 and count of element to be deleted = 2 and two element will be added from idx - 2
array1.splice(2, 2, 40, 50);
console.log(array1); // [ 2, 3, 40, 50, 30, 40, 4,  5,  6 ]

// *********************** MCQ's ***************
// Q.1 What is the function of splice() in JavaScript?
// Options:
/*   1. copies a given part of an array and returns that copied part as a new array
     2. it removes duplicate elements from the given array
     3. it splits the string by separating it into two new array
     4. slices a given part of an array and returns that sliced part as a new array.

   Ans: 4. slices a given part of an array and returns that sliced part as a new array.
*/ 

// ************* Array Splice *******************
// What is the output of following code?
var fruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];
fruits.splice(4, 1, 'Banana'); 
console.log(fruits); 
/*
  Options:
    1. ["Banana", "Apple", "Orange", "Kiwi", "Strawberry"] 
    2. ["Apple", "Orange", "Kiwi", "Strawberry", "Banana"]
    3. ["Apple", "Banana", "Orange", "Kiwi", "Strawberry"]
    4. ["Apple", "Orange", "Kiwi", "Banana", "Strawberry"]
  Ans: 2. ["Apple", "Orange", "Kiwi", "Strawberry", "Banana"]
*/  


// ************************* Iterating over arrays *******************
var array2 = [2,3,4,5,6,7];
for(var i = 0; i <= array2.length; i++){
    // console.log(array2[i]);
    // print( array2[i] ); // here, we have to pass the element in print function
}

// you can pass the index and array itself this are optional argument
function print(element){
    console.log(element);  
}

// for-Each method
array2.forEach( print ); // here, we don't have to pass element in print function

// we can use one more method which is (for in) method but we will learn it later post object.