let path = require("path");
let fs = require("fs");

let inputArr = process.argv.splice(2);
let maindir = inputArr[0];
let firstModule = inputArr[1];
let secondModule = inputArr[2];
let thirdModule = inputArr[3];


let cwd = process.cwd();
let maindirpath = path.join(cwd, maindir );
let firstModulepath = path.join(cwd,maindir, firstModule);
let secondModulepath = path.join(cwd,maindir, secondModule);
let thirdModulepath = path.join(cwd,maindir, thirdModule);

let isMainDirPresent = fs.existsSync(maindirpath);
if(isMainDirPresent){
    console.log("Directory is already created!!!");
    return;
} else {
    console.log(maindir, "created");
    fs.mkdirSync(maindirpath);
    let topicFromInput = inputArr.slice(1);
    for(let i = 0; i < topicFromInput.length; i++){
        let cTopicPath = path.join(maindirpath, topicFromInput[i]);
        fs.mkdirSync(cTopicPath);
        for(let j = 1; j <= 5; j++ ){
            let modulePath = path.join(cTopicPath, "Module" + j);
            fs.mkdirSync(modulePath);
            let filepath = path.join(modulePath, "content.md");
            fs.writeFileSync(filepath,"#Hello");
        }

    }
}