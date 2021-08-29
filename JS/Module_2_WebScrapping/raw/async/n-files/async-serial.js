let fs = require('fs');
// paralley
let files = ["F1.txt","F2.txt","F3.txt","F4.txt","F5.txt"];
// paralley read using ans async function
// start the work
// also give a cb function from which we can intimate you after the work is completed
// output
// first read file -> cb call
// this loop runs infinite time becoz we're incrementing i inside fs.readFile function
// and this fs.readFile() function is stuck and bcoz of this cb also stuck 
// i can only increment when fs.readFile() executes but didn't that's y deadlock occurred
// #Deadlock_occurred
// for(let i = 0; i < files.length;){
//     console.log("i", i);
//     fs.readFile(files[i], function cb(err, data){
//           console.log("data" + data);
//           i++;
//     });
// }

// To make above code parallel increment i outside the fs function
// for(let i = 0; i < files.length;){
//     // console.log("i before ", i);
//     fs.readFile(files[i], function cb(err, data){
//           console.log("data " + data);
//         //   it gives output paralley
//           i++;
//           console.log("i inside2 ", i);
//           i++;
          
//     });
//     // console.log("i after ", i);
//     i++;
// }

console.log("before");
function serialReader(i){
    if (i == files.length){
        return;
    }
    fs.readFile(files[i], function cb(err, data){
          console.log("data" + data);
          serialReader(i + 1);
    });
}
serialReader(0);
console.log("after");
/*
before
after
dataI m F1
dataI m F2

dataI m F3

dataI m F4 I m F4 I m F4 I m F4 I m F4 I m F4

dataI m F5
*/ 

/*
i before  0
i after  0
i before  1
i after  1
i before  2
i after  2
i before  3
i after  3
i before  4
i after  4
data I m F1
i inside2  2
data I m F2

i inside2  3
data I m F3

i inside2  4
data I m F5

i inside2  6
data I m F4 I m F4 I m F4 I m F4 I m F4 I m F4

i inside2  5

*/ 