/*
Take as input a number n, the number of rows  
Print the following pattern 
space is to be used for indentation
*** ***  
**   **  
*     *  
**   **  
*** ***  
for n = 5.  
Input Format

Integer

Constraints

n <= 10 ^ 9 and is odd

Output Format

Pattern for n = 5.
*** ***  
**   **  
*     *  
**   **  
*** ***  
Sample Input 0

5
Sample Output 0

*** ***
**   **
*     *
**   **
*** ***

*/ 
function processData(input) {
    let sp = 1;
    let st = input / 2 + 1;
    
    for(let i = 1; i <= input; i++){
        let ans = "";
        for(let j = 1; j <= st; j++){
            ans += "*";
        }
        for(let j = 1; j <= sp; j++){
            ans += " ";
        }
        for(let j = 1; j <= st; j++){
            ans += "*";
        }
        console.log(ans);
        if(i <= Math.floor (input/2)){
            st--;
            sp += 2;
        } else {
            st++;
            sp -= 2;
        }
    }
} 
processData(5);