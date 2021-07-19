/*
Title Case a Sentence. Input:I'm a little tea pot" Output: I'm A Little Tea Pot.

Input Format

String

Constraints

no as such

Output Format

String

Sample Input 0

I'm a little tea pot
Sample Output 0

I'm A Little Tea Pot
*/ 

function processData(input) {
    let arrStr = input.toLowerCase().split(' ');
  // console.log(arrStr);
  for(let i = 0; i < arrStr.length; i++){
       arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1);
  }
  console.log(arrStr.join(' '));
} 
processData("I'm a little tea pot");