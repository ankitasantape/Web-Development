let input = "2\n12345"; 
let inputArr = input.split("\n");
let k = Number(inputArr[0]);
let number = Number(inputArr[1]);
console.log("input\n",input);
console.log("inputArr ",inputArr);
console.log("k = ",k);
console.log("number = ",number);

// To convert input in the form of string into the form of array
// use -> JSON.parse(arr) 
input = "[1,2,3,4,5]";
console.log("inputStr",input);
input = JSON.parse(input);
console.log("inputArr",input);

// multiple arrays in a string
input = "[1,2,3,4,5]\n[6,7,8,9]";
input = input.split("\n");
console.log("inputArr ",input);
let a1 = JSON.parse(input[0]);
let a2 = JSON.parse(input[1]);
console.log("a1",a1);
console.log("a2",a2);


/*
Output : 
input
 2
12345
inputArr  [ '2', '12345' ]
k =  2
number =  12345
inputStr [1,2,3,4,5]
inputArr [ 1, 2, 3, 4, 5 ]
a1 [ 1, 2, 3, 4, 5 ]
a2 [ 6, 7, 8, 9 ]

*/ 