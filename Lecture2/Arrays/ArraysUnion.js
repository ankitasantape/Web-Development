/*
Write a JavaScript program to compute the union of two arrays . Input array will only have unique elements in there respective array. Input arr1= [1, 2, 3] arr2= [100, 2, 1,10] Output: [1,2,3,100,10]

Input Format

arr1= [1, 2, 3] arr2= [100, 2, 1,10]

Constraints

0<=arr1.length < 10^4 0<=arr2.length < 10^4

Output Format

[1,2,3,100,10]

Sample Input 0

[1, 2, 3] 
[100, 2, 1,10]
Sample Output 0

[ 1, 2, 3, 100, 10 ]

*/

function processData(input) {
    // console.log(input);
    // console.log(typeof input);
     input = input.split("\n");
    // console.log(input);
    // input = JSON.parse(input[0]);
    
    
    let a1 = JSON.parse(input[0]);
    // console.log(a1 , " ", a1.length);
    let a2 = JSON.parse(input[1]);
    // console.log(ans);
    let ans = [];
    
    let i = 0;
    while(i < a1.length){
       ans.push(a1[i]);
       i++;
    }
    i = 0;
    l2 = a2.length;
    while(i < l2){
      if(!ans.includes(a2[i]))
        ans.push(a2[i]);
        i++; 
    }
    console.log(ans);
} 

processData("[1, 2, 3]\n[100, 2, 1,10]");