let fs = require("fs");
let path = require("path");

let inputArr = process.argv.splice(2);
let filesArr = [];
let cmdArr = [];
let filecontent = "";


// for(let i = 0; i < inputArr.length; i++){
//     let ans = fs.existsSync(inputArr[i]);
//     if(ans == false ){
//         console.log("File doesn't exist");
//         return;
//     } else {
//         console.log("Exist!!!")
//     }
// }


// Task 1:  wcat filepath -> displays contents of the file in the terminal
// Task 2:  wcat filepath1, filepath2, filepath3... -> displays the content of all the files in the terminal in the given order
for(let i = 0; i < inputArr.length; i++){
    let cmd = inputArr[i];
    let file = cmd;
    // console.log(file);
    let char = cmd.charAt(0);
    if(char == '-'){
        cmdArr.push(cmd);  
    
    }else if(fs.existsSync(file)){
         filesArr.push(file);
    } 
}
// console.log("Command : "+ cmdArr);
// console.log("Files : "+ filesArr);

// Task 3: wcat -s filepath -> convert big line breaks into a singular line break
for(let i = 0; i < filesArr.length; i++){
       filecontent += fs.readFileSync(filesArr[i]) + "\r\n";
      
}
filecontent = filecontent.split("\r\n");
let contentArr = filecontent;
// console.log(contentArr);

// -s check
let isSPresent = cmdArr.includes("-s");
if(isSPresent){
    for(let i = 1; i < filecontent.length; i++){
        if(filecontent[i] == "" && filecontent[i-1] == ""){
            filecontent[i] = null;
        } else if (filecontent[i] == "" && filecontent[i-1] == null){
            filecontent[i] = null;
        }
    }
    let tempArr = [];
    for(let i = 0; i < filecontent.length; i++){
        if(filecontent[i] != null){
            tempArr.push(filecontent[i]);
        }
    }
    filecontent = tempArr;
    console.log(filecontent.join("\n"));
}
/*
node wcat.js -s "C:\Users\Admin\OneDrive\Desktop\Dev\Module_1_FS\FS_Organizer\activity2\files\abc.txt" "C:\Users\Admin\OneDrive\Desktop\Dev\Module_1_FS\FS_Organizer\activity2\files\xyz.txt"
This is ABC file.

Here is another content.

This is XYZ file.

Here is another content.

*/ 

// Task 4: wcat -n filepath -> give numbering to all the files
let isNPresent = cmdArr.includes("-n");
if(isNPresent){
    for(let i = 0; i < contentArr.length-1; i++){
         console.log(`${i+1}  ${contentArr[i]} ` );
    }
}
/*
node wcat.js -n  "C:\Users\Admin\OneDrive\Desktop\Dev\Module_1_FS\FS_Organizer\activity2\files\abc.txt" "C:\Users\Admin\OneDrive\Desktop\Dev\Module_1_FS\FS_Organizer\activity2\files\xyz.txt"
1  This is ABC file. 
2
3
4
5
6
7
8   
9
10
11
12
13
14  Here is another content.
15
16  This is XYZ file.
17
18
19
20
21
22
23
24
25
26
27  Here is another content.
*/ 

// Task 5: wcat -b filepath give numbering to non-empty lines
let isBPresent = cmdArr.includes("-b");
if(isBPresent){
    for(let i = 0; i < contentArr.length; i++){
        let data = `${contentArr[i]}`;
        if(data !== ""){
            console.log(`${i+1}` , data);
        } else {
            console.log(data);
         }
    }
}
/*
node wcat.js -b "C:\Users\Admin\OneDrive\Desktop\Dev\Module_1_FS\FS_Organizer\activity2\files\abc.txt" "C:\Users\Admin\OneDrive\Desktop\Dev\Module_1_FS\FS_Organizer\activity2\files\xyz.txt"
1 This is ABC file.












14 Here is another content.

16 This is XYZ file.










27 Here is another content.
*/ 











