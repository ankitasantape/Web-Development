let fs = require('fs');
let files = ["F1.txt","F2.txt","F3.txt","F4.txt","F5.txt"];

for(let i = 0; i < files.length; i++){
    // console.log("Data byteLength: "+ files[i].byteLength); 
    fs.readFile(files[i], cb);
}

function cb(err, data){
    // console.log("Data byteLength: "+ data.byteLength);
    if(data.byteLength > 9){
        console.log("Content: " + data);
    }
    
}