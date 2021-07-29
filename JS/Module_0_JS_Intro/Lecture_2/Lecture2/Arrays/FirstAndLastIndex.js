/*
You are given a number n, representing the size of array a.
You are given n numbers, representing elements of array a.
Asssumption - Array is sorted. Array may have duplicate values.

Find first and last index of an element

Input Format

A number n n1 n2 .. n number of elements A number d

Constraints

1 <= n <= 1000 1 <= n1, n2, .. n elements <= 100 1 <= d <= 100

Output Format

A number representing first index A number representing last index

Sample Input 0

15
1
5
10
15
22
33
33
33
33
33
40
42
55
66
77
33
Sample Output 0

5
9
*/

function processData(input) {
    
    input = input.split("\n");
    
    let length = input.length;
    // console.log(length);
    // console.log(input[0]+" "+input[1]);
    let li = 0;
    for(let i = 1; i < length-1; i++){
        if(input[i] == input[length-1]){
            li = i;
            break;
        }
    }
    // console.log(li);
    let ri = 0;
    for(let i = li; i < length-1; i++){
        if(input[i] == input[length-1]){
            ri = i;
            
        } else {
            break;
        }
    }
    console.log(li-1);
    console.log(ri-1);
    
} 

processData("15\n1\n5\n10\n15\n22\n33\n33\n33\n33\n33\n40\n42\n55\n66\n77\n33");

function processData2(input) {
    input = input.split("\n");
    n = input[0];
    x = input[input.length - 1];
    
    let fi = 0, li = 0;
    for(let i = 1; i < n; i++){
        if(input[i] == x){
            fi = i;
            break;
        }
    }
    for(let i = n; i >= fi; i--){
        if(input[i] == x){
           li = i; 
            break;
        }
    }
    console.log(fi-1);
    console.log(li-1);
  } 