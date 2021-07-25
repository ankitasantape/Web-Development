let path = require("path");
let fs = require("fs");

function treeFn(dirPath) {
    // let destPath;
   if(dirPath == undefined){
       console.log("Kindly enter the path");
       return ;
   }  else {
       let doesExist = fs.existsSync(dirPath);
       if(doesExist){
           treeHelper(dirPath, "");
           
       } else {
           console.log("Kindly enter the correct path");
           return;
       }
   }
}

function treeHelper(dirPath, indent){
    //   is file of folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent + "|-----" + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + " '------" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i = 0; i < childrens.length; i++){
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
    
}

//  ocde export
module.exports = {
    tree : treeFn
}


/*
Output:

'------randomFolder
         '------organised_files
                 '------app
                        |-----abc.exe
                        |-----ert.exe
                 '------archives
                        |-----abc.zip
                        |-----xyz.gz
                 '------documents
                        |-----abx.pdf
                        |-----Blank Certificate.pdf
                        |-----wsd.pdf
                 '------media
                        |-----abc.mp4
                        |-----qaz.mp4
                 '------others
                        |-----abc.txt
        |-----qaz.mp4
        |-----wsd.pdf
*/ 
