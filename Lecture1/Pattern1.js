/*
Take as input a number n, the number of rows  
Print the following pattern
use space for indentation
*  
*	*  
*	*	*  
*	*	*	*  
*	*	*	*	*  
for n = 5.
Input Format

Integer

Constraints

n <= 10 ^ 9

Output Format

Pattern for n = 5.
*
* *
* * *
* * * *
* * * * *

*/ 

function processData(input) {
    
    for(let i = 1; i <= input; i++){
        let ans = "";
        for(let j = 1; j <= i; j++ ){
            ans += "* ";
        }
        console.log(ans);
    }
}
processData(5);