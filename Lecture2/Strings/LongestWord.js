/*
Print the Longest Word in a String

Input Format

string

Constraints

''

Output Format

String

Sample Input 0

The quick brown fox jumped over the lazy dog
Sample Output 0

jumped
*/ 

function processData(input) {
    let arrStr = input.split(" ");
// console.log(arrStr);
    let max = 0;
    let ans = "";
      for (let i = 0; i < arrStr.length; i++){
          if(arrStr[i].length > max){
              max = arrStr[i].length;
              ans = arrStr[i];
          }
      }
    
    console.log(ans);
} 
processData("The quick brown fox jumped over the lazy dog");