/*
You've to count the number of digits in a number.
Take as input "n", the number for which the digits has to be counted.
Print the digits in that number.
Input Format

"n" where n is any integer.

Constraints

1 <= n < 10^9

Output Format

"d" where d is the number of digits in the number "n"

Sample Input 0

65784383
Sample Output 0

8
*/ 
function processData(input) {
    let count = 0;
    while(input != 0){
        input = Math.floor (input/10);
        count++;
    }
    console.log(count);
} 
processData(8);