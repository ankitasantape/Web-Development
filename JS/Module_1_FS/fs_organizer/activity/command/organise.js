#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");

let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", '7z', 'rar', 'tar', 'gz', 'ar', 'iso'],
    documents: ['docx', 'doc', "pdf", 'xlsx', 'xls', 'odt'],
    app: ["exe", 'dmg', 'pkg', 'deb'] 
}

function organizeFn(dirPath) {
   let destPath;
   if(dirPath == undefined){
    //    console.log("Kindly enter the path");
       destPath = process.cwd();
       return ;
   }  else {
       let doesExist = fs.existsSync(dirPath);
       if(doesExist){
        //    2. create -> organized _files -> directory
           destPath = path.join(dirPath, "organised_files");
           if(fs.existsSync(destPath) == false){
               fs.mkdirSync(destPath);
           }
           
       } else {
           console.log("Kindly enter the correct path");
           return;
       }
   }
   organizeFnHelper(dirPath, destPath);
}

function organizeFnHelper(src, dest){
       let childName = fs.readdirSync(src);
    //    console.log(childName);
       for( let i = 0; i < childName.length; i++){
           let childAddres = path.join(src, childName[i]);
           let isFile = fs.lstatSync(childAddres).isFile();
           if(isFile){
            //    console.log(childName[i]);
               let category = getCategory(childName[i]);
               console.log(childName[i],"belongs to --> ", category);

               sendFiles(childAddres,dest,category);
           }
       }
}

function sendFiles(srcFilePath, dest, category){

    let categorypath = path.join(dest, category);
    if (fs.existsSync(categorypath) == false){
        fs.mkdirSync(categorypath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categorypath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // fs.unlinkSync(srcFilePath);
    console.log(fileName, "copies to ", category);
} 

function getCategory(name){
   let ext = path.extname(name);
   ext = ext.slice(1);
   console.log(ext);
   for(let type in types){
       let cTypeArray = types[type];
    //    console.log(cTypeArray);
       for (let i = 0; i < cTypeArray.length; i++){
           if (ext === cTypeArray[i]){
               return type;
           }
       }    
   }
   return "others";
}

//  code export
module.exports = {
         organize : organizeFn
}