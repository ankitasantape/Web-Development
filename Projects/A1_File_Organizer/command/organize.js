let fs = require('fs');
let path = require('path');

let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", '7z', 'rar', 'tar', 'gz', 'ar', 'iso'],
    documents: ['docx', 'doc', "pdf", 'xlsx', 'xls', 'odt', 'txt','r'],
    app: ["exe", 'dmg', 'pkg', 'deb'] 
}

function organizefn(srcpath){
    let destdir;
    if(srcpath == undefined){
       srcpath = process.cwd();
       return;
    } else {
        if (fs.existsSync(srcpath) == false) {
            console.log("Directory can't be found ");
            return;
        } else {
           destdir = path.join(srcpath, 'organized_files');
           if(fs.existsSync(destdir) == false) {
              fs.mkdirSync(destdir);
           }      
        }
    } 
    makeChildDirectory(srcpath, destdir);
}

function makeChildDirectory(srcdir, destpath) {
    let childName = fs.readdirSync(srcdir);
    for(let i = 0; i < childName.length; i++) {
        let childFilePath = path.join(srcdir, childName[i]);

        let isFile = fs.statSync(childFilePath).isFile();
        if(isFile) {
            let category = getCategory(childFilePath);
            console.log(childFilePath, " belongs to ---> ", category)
            sendFile(childFilePath, destpath, category)
        } 
    }
}

function getCategory(child) {
    let ext = path.extname(child);
    ext = ext.slice(1);
    for(let key in types ){
        // console.log( types[key].length, types[key][0])
         for(let i = 0; i < types[key].length; i++){
             if(ext === types[key][i]){
                 return key;
             }
         }
    }
    return 'other';
}

function sendFile(srcPath, destPath, category){
    let newDestPath = path.join(destPath, category);
    if(!fs.existsSync(newDestPath)){
        fs.mkdirSync(newDestPath);
    }
    let basefileName = path.basename(srcPath);
    newDestPath = path.join(newDestPath, basefileName);
    fs.copyFileSync(srcPath, newDestPath);
    console.log(basefileName, "copies to ", category);
}

module.exports = {
     organize : organizefn
}