// Fundamentals of NodeJS 

// import statement JS me work krti hai but NodeJS me nhi krti
// becoz JavaScript browser pe run krti hai code ko aur browser pe updated version me hoti hai chije aur nodeJS me lower version me hoti hai chije
// import {x} from './app'
// So, instead of using import we used require("filename")
// const app = require('./app');
// console.log(app); // { x: 10, y: 20 }
// console.log(app.x); // 10
// console.log(app.y); // 20
// console.log(app.z); // [Function: z]

// var x = 20;
// let y = 30;
// const z = 40;
// console.log(x+y+z);
// z = 100;   // TypeError: Assignment to constant variable.
// console.log(z); 

// Interview Question
// If Statement
// var a = 20;
// if( a === 20 ) { // type of a is int and 20 is also an int value 
//     console.log("matched"); // matched
// }

// a = "20";
// if( a === 20 ) { // triple === to checks type of object so it will not print anything becoz string("20") != int(20)
//     console.log("matched");
// }

//  for loop 
// for(let i = 0; i < 10; i++){
//     console.log(i+1); // 1 2 3 4 5 6 7 8 9 10
// }

// Arrays
// const arr = [10, 20, 30, 40, 50];
// console.log(arr);  // [ 10, 20, 30, 40, 50 ]
// console.log(arr[0]); // 10

// Interview 

// Make a Server
const http = require('http');
http.createServer((req, res) => {
     res.writeHead(200, {'Content-Type': 'application\json'});
     res.write(JSON.stringify({name:'Ankita Santape', email: 'ankitasantape99@gmail.com'}));
     res.end();
}).listen(5000); 
