/*
Given an array first=[1,2,3,4,5]. Write a JavaScript program that fill second array in reverse order of first narr=[5,4,3,2,1] without using extra space

Input Format

Array

Constraints

0<=arr.length< 10^4

Output Format

Array

Sample Input 0

[1,2,3,4,5]
Sample Output 0

[ 5, 4, 3, 2, 1 ]

*/ 

function processData(input) {
    input = JSON.parse(input);
    let left = 0;
    let right = input.length-1;
    while(left < right){
       let temp = input[left];
       input[left] = input[right];
       input[right] = temp;
       left++;
       right--;
    }
    console.log(input);
} 
processData("[1,2,3,4,5]");