let fs = require('fs');
// paralley
let files = ["F1.txt","F2.txt","F3.txt","F4.txt","F5.txt"];
// paralley read using ans async function
// start the work
// also give a cb function from which we can intimate you after the work is completed
console.log("before");
for(let i = 0; i < files.length; i++){
    // call
    fs.readFile(files[i], cb);
}

function cb(err, data){
    
    console.log("Data byteLength: "+ data.byteLength);
    console.log("Content: " + data);
}
console.log("after");
/*
Async-parallel execute files ramdomly.
Output: 
before
after
Data byteLength: 6
Content: I m F1
Data byteLength: 8
Content: I m F2

Data byteLength: 8
Content: I m F3

Data byteLength: 44
Content: I m F4 I m F4 I m F4 I m F4 I m F4 I m F4       

Data byteLength: 8
Content: I m F5


Output:
before
after
Data byteLength: 8
Content: I m F3

Data byteLength: 6
Content: I m F1
Data byteLength: 8
Content: I m F2

Data byteLength: 44
Content: I m F4 I m F4 I m F4 I m F4 I m F4 I m F4       

Data byteLength: 8
Content: I m F5

*/ 