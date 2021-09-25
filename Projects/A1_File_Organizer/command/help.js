let fs = require('fs');
let path = require('path');

function helpfn(){
   // 1. node main.js tree "path"
     // 2. node main.js organize "path"
     // 3. node main.js help 
     console.log(`list of all the commands -   
       
     1. node main.js tree "directoryPath"

     2. node main.js organize "directoryPath"

     3. node main.js help ` );
}

module.exports = {
     help : helpfn
}