let fs = require("fs");
let path = require("path");

let inputArr = process.argv.splice(2);
let filesArr = [];
let cmdArr = [];
let filecontent = "";

// Task 1:  wcat filepath -> displays contents of the file in the terminal
// Task 2:  wcat filepath1, filepath2, filepath3... -> displays the content of all the files in the terminal in the given order
for(let i = 0; i < inputArr.length; i++){
    let cmd = inputArr[i];
    // let file = path.basename(cmd);
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

// Task 4: wcat -n filepath -> give numbering to all the files
let isNPresent = cmdArr.includes("-n");
if(isNPresent){
    for(let i = 0; i < contentArr.length-1; i++){
         console.log(`${i+1}  ${contentArr[i]} ` );
    }
}

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












