#!/usr/bin/env node
let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organise");
// main input
//  input -> node main.js tree "path"
// Print->tree command executed with path ""
//  input -> node main.js organize "path"
// Print ->organize command executed with path ""
//  input -> node main.js help 
    // Print -> list of all the commands
            // 1. node main.js tree "path"
            // 2. node main.js organize "path"
            // 3. node main.js help 

let inputArr = process.argv.splice(2);
let command = inputArr[0];
switch(command){
    case "tree":
             treeObj.tree(inputArr[1])     
             break;
    case "organise": 
             organizeObj.organize(inputArr[1])
             break;
    case "help":
                helpObj.help(inputArr[1]); 
                break; 
    default:
           console.log("Kindly enter the correct cmd");
           break;                    
}





// let fileName = inputArr[0];
// let path = inputArr[1];
// if(dir == "tree"){
//     console.log(treeObj.tree); 
// } else if(dir == "help"){
//     console.log(helpObj.help);
// } else {
//     console.log(organizeObj.organize);
// }
           

/*
To make global :
cmd > npm init -y
{
  "name": "activity",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bin": {
    "ketty": "main.js"
  }
}
C:\Users\Admin\OneDrive\Desktop\Dev\Module_1_FS\FS_Organizer\activity>npm link
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN activity@1.0.0 No description
npm WARN activity@1.0.0 No repository field.

up to date in 1.031s
found 0 vulnerabilities
*/ 