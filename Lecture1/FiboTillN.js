/*
Take as input a number n.
Print all terms of Fibonacci sequence smaller than equal to n where
0th Fibonacci is 0 and 1st Fibonacci is 1. Here is a sample
0 1 1 2 3 5 8 13 21 34 55
Input Format

Integer

Constraints

n <= 10 ^ 9

Output Format

Space separated integers

Sample Input 0

56
Sample Output 0

0 1 1 2 3 5 8 13 21 34 55
*/ 

function processData(input) {
    let ans = "";
    let a = 0, b = 1;
    for(let i = 2; a <= input; i++){
        ans += a +" ";
        let c = a + b;
         a = b;
         b = c;
    }
    console.log(ans);
}
processData(56);