/*
` A rotation (or circular shift) is an operation similar to shift except that the digits that fall off at one end are put back to the other end.

In left rotation, the digits that fall off at left end are put back at right end.

In right rotation, the digits that fall off at right end are put back at left end.

For Example, r=2 n=12345 result=45123

r=-2 n=12345 result=34512

Take as input 1. Number of rotation: r 2. A Number: n

Let us assume result is desired answer after all operation.

Print result in next line.

Input Format

Integer representing r
Integer representing n
Constraints

1 <= r <= 10 ^ 18
1 <= n <= 10000
Output Format

result
Sample Input 0

2
562984
Sample Output 0

845629
*/

function processData(input) {
    input = input.split("\n");
// console.log(input);
let k = Number(input[0]);
let number = Number(input[1]);
// console.log(typeof number);
let temp = number;
let count = 0;
while(number != 0){
 number = Math.floor (number/10);
 count++;
}
k = k % count;
if (k < 0){
 k = k + count;
}
let div = 1;
let multi = 1;
for (let i = 1; i <= count; i++){
 if (i <= k){
     div = div * 10;
 } else {
     multi *= 10;
 }
}
let q = Math.floor(temp / div);
let r = temp % div;
console.log(r * multi + q);
 
} 
processData("2\n562984");