// 19. Modules
const operations = require('./operations');
console.log(operations.add(6,7));
console.log(operations.multiply(6,7));

/*----------------------------------------*/ 
console.log('Hello World!')

function add(a,b){
    return a+b;
}
console.log(add);
console.log(add());
console.log(add(3,4));
/*
Output:
Hello World!
[Function: add]
NaN
7
*/ 
// process.argv is a global argument which looks over all the files that currently running in the system
console.log(process.argv);
/*
> node index.js 3 4
Hello World!
[Function: add]
NaN
7
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Admin\\Desktop\\nodews\\index.js',
  '3',
  '4'
]
*/ 
// We were slice the 4 argument into 2 parts['1','2'] then I need to convert string '3' into an integer and string '4' into an integer and pass it(3,4) to the add function
var args = process.argv.slice(2);
console.log("Adding the numbers: ", add(parseInt(args[0]),parseInt(args[1]) ))
/*
Hello World!
[Function: add]
NaN
7
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Admin\\Desktop\\nodews\\index.js',
  '3',
  '4'
]
Adding the numbers:  7
*/ 