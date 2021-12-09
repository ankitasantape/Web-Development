/* ******************* Variables ************************ */ 
// write keyword var specify variable name a and assign value to variable a is 10.
console.log(a); // undefined
var a = 10;
console.log(a);  // 10 
var b = 23.7
console.log(b)
a = "Hello"
console.log(a); // Hello 
a = true;    
console.log(a); // true

// In Java, C++, you need to specify datatype to the variable at the time of creating a variable but in javascript you don't need to do that.
// In JavaScript, we just use a general word var which is a variable which holds a numeric value.
// So, JavaScript is a dynamically typed or loosely typed that means you don't have to specify the type of a variable.
// So type is actually of the value and not of the variable so by that mean 'a' is holding a numeric value 10 and 'a' can hold a string value as well.
// So, a variable is not bound to a type but a value is bound to a type  


// There a 6 primitives and 1 object
// Primitive : Refers to both integral and decimal numbers
//   - number(it's a 64-bit precision number) 
//   - string
//   - boolean
//   - null
//   - undefined 
//   - symbol 

// Q.1 Which of the following are basic data types in JavaScript?
// => number, null, string, undefined, object

// Q.2 How can you declare an integer?
// => var a = 10; 
/*
   Q.3 Find out that if any of the lines below will produce an error on execution?
       A) var a = 10;   
       B) console.log(a)
       C) a = " 'Coding Ninjas' ";
       D) console.log(a);  
    => No error   
*/

/* ***************** Null vs Undefined ************************ */ 
// Varible Declaration : Declaring a variable not assigning a value to it
var a; // undefined
a = 10; // 10
console.log(a);
// Variable Definition : Creating a variable as well as assigning a value to it
var a = 10;
var address;
address = null; // null
console.log(address);
// means I have set the value of address but I don't know what the address of person is. null means the absence of value.

/* ***************** Type of  ************************ */ 
// Types of Operator:
// Infinity -> Infinity is a type that you can assign to the variable
var a = 1 / 0;  // --- any number divided by 0 is infinity  
console.log(a); // Infinity
a += 1;   // Infinity + 1 = Infinity
console.log(a); // Infinity 
a *= 1;   // Infinity * 1 = Infinity
console.log(a); // Infinity 
var c = 2;
c = c / a;  // 2 / Infinity = 0
console.log(c); // 0 --- any number divided by infinity is zero

// Infinity refers to value which are greater than the maximum value that can be stored in a number in javascript
var pow = Math.pow(10, 2);
console.log(pow); // 100
pow = Math.pow(10, 100);
console.log(pow); // 1e+100 => 100000000000000002e+100
pow = Math.pow(10, 1000);
console.log(pow); // Infinity 
var max = Number.MAX_VALUE;
console.log(max); // 1.7976931348623157e+308

/* *********************** NaN - Not a Number / Not a Valid Number / NaN is Infinity *******************/ 
// The square root of -1 doesn't exists so javascript will return NaN.
var n = Math.sqrt(-1);
console.log(n); // NaN 

// String will be converted into a number
var n = parseInt("100"); 
console.log(n); // 100

// If I pass a value which can't be converted into a integer then it will return NaN.
var n = parseInt("aaaaaaa");   
console.log(n); // NaN 

// Revision -
// Type is associated with the value and not associated with the variables.
// So, variable holds the value and that value has some type.

console.log(typeof "number"); // string
console.log(typeof true); // boolean
console.log(typeof 12); // number
console.log(typeof x);  // undefined
console.log(typeof 0/1); // NaN
console.log(typeof 1/0); // NaN

// Asked in Interview
console.log(typeof null); // "object" -> actually this is a bug which cannot rectify in javascript if they try to change then lot of code will break
console.log(typeof NaN); // "number"
console.log(typeof Infinity); // "number"

// Questions
// 1. What will be printed on the console from the following code -
var a;
console.log(a); // undefined
// options - 1. 0,  
//           2. undefined, 
//           3. null, 
//           4. Show error - 'a' is not defined

// 2. What will be printed on the console from the following code -
var a = "A";
console.log(65 - a); // NaN 
// options - 1. 0, 
//           2. undefined,  
//           3. null 
//           4. NaN 

// Type of Negative 
// 3. What will the below statement print on the console?
console.log( typeof("-1") ); // "string"
// options - 1. string
//           2. number
//           3. "string" 
//           4. "number"

// Type of Nothing
// 4. What will the below statement print on the console?
var a = null;
console.log( typeof(a) ); // "object"
// options - 1. "null"
//           2. "string"  
//           3. "undefined"
//           4. "object"
