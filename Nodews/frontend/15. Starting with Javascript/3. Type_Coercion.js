// ********************** Type Coercion - Some Unexpected Answers *********************
// Concatenation of string
var cat = "Hello " + "World";
console.log(cat); // Hello World

var str = "Hello " + 'World';
console.log(str); // Hello World

// If you concatenate string with number then it will return string
var str = "Hello" + 2;
console.log(str); // Hello2

console.log("1" + 1); // 11

// This is weird -> why? because javascript perform automatic type conversion here
// If one type is string and other type is number, then javascript is converting the string to a number and then performing the calculations and giving us the result which is a number now
// but in case of plus(+) this performs concatenation
console.log('1' - 1); // 0

// Same in case of multiplication / division / conditional 
console.log("2" * 7); // 14
console.log('4' * 7); // 28
console.log('14' / 7); // 2
console.log('4' > 7); // false

// Practice Questions
// ********** Evaluate Arithmatic Expression ***************
// 1. What will be output of the statement given below?
console.log(20 + 12 * 2 - 10 / 2); // 39
// options - 
// 1. 39
// 2. 27
// 3. -16
// 4. None of the above
// The order of execution of operators i.e. operator precedence is 'multiplication', 'division', 'addition' and then 'subtraction'.

// ********** Integer Plus Char *****************
// 1. What will be output of the statement given below?
console.log(1 + '1'); // '11' --> if '+' sign then it perform concatenation
// options - 
// 1. 98  
// 2. 11
// 3. 2
// 4. Show error - 'TypeMismatch'

// ********* Var Plus Char ******************
// 1. What will be output of the statement given below?
var a;
console.log(a + "b"); // undefinedb
// options - 
// 1. undefined  
// 2. ab
// 3. b
// 4. undefinedb

// ********* Number Minus Char ******************
// 1. What will be output of the statement given below?
console.log(1 - '1'); // 0
// options - 
// 1. 98
// 2. 1
// 3. 0
// 4. Show error - 'NaN'

// Revision: Type Coercion
// If one type is number and another type is string and there is '+' sign between them then javascript will perform concatenation
// 1 + '1' = '11'
// If one type is number and another type is string and there is '-' sign between them then javascript will perform subtraction
// 1 - '1' = 0
// If one type is number and another type is string and there is '*' sign between them then javascript will perform multiplication 
// 1 * '1' = 1

// **************************** == Vs === **********************************
// Type coercion perform there role in doubleEqualsTo(==) and tripleEqualsTo(===) comparison
console.log(1 == 1); // true
console.log(1 == '1'); // true --> here, type coercion take place, first string will be converted into number and then two number will compare 
console.log(1 != '1'); // false --> here, also type coercion take place string converted into number and now two values are number means both are equal now that's why return false 
console.log(1 === '1'); // false --> in triple equal to there is no type coercion take place
console.log(1 !== '1'); // true 



