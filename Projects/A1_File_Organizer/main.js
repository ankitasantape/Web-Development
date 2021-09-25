// Run file as : node main.js organize "C:\Users\Admin\OneDrive\Desktop\Dev\webdev\Web-Development\Projects\A1_File_Organizer\RandomFiles"

let treeObj = require('./command/tree');
let organizeObj = require('./command/organize');
let helpObj = require('./command/help');

let inputArr = process.argv.splice(2);
let command = inputArr[0];
let path = inputArr[1];

switch (command){
    case 'tree':
        treeObj.tree(path);
        break;
    case 'organize':
        organizeObj.organize(path);
        break;
    case 'help':
        helpObj.help();
        break;        
    default:
        console.log("Kindly enter the correct cmd");
        break;    
     
}