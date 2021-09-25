let fs = require('fs');
let path = require('path');

function treefn(dirpath) {
    if (dirpath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    } else {
        if (fs.existsSync(dirpath) == false) {
            console.log("Kindly enter valid dirpath");
            return;
        } else {
            treeHelper(dirpath, "");
        }
    }

}

function treeHelper(srcpath, indent) {

    let file = fs.lstatSync(srcpath).isFile();
    if (file) {
        let fileBasename = path.basename(srcpath);
        console.log(indent + " |----- " + fileBasename);
    } else {
        let dirBasename = path.basename(srcpath);
        console.log(indent + " >----- " + dirBasename);
        let childrens = fs.readdirSync(srcpath);
        for (let i = 0; i < childrens.length; i++) {
            let childpath = path.join(srcpath, childrens[i]);
            treeHelper(childpath, indent + "\t");
        }

    }

}

module.exports = {
    tree: treefn
}