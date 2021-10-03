const request = require('request');
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require('pdfkit');
function getIssuesPageHtml(url, topic, repoName){
       request(url, cb);
       function cb(err, res, html){
           if(err){
               console.log(err);
           } else if(res.statusCode == 404){
               console.log("Page Not Found!");
           } else {
               getIssuesLink(html);
           }
       }

       function getIssuesLink(html){
            let $ = cheerio.load(html);
            let issueElemArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
            console.log(topic);
            let arr = [];
            for(let i = 0; i < issueElemArr.length; i++){
                let href = $(issueElemArr[i]).attr("href");
                let link = `https://github.com${href}`;
                // console.log(link);
                arr.push(link);
            }
            
            let folderpath = path.join(__dirname, topic);
            dirCreater(folderpath);
            let filepath = path.join(folderpath, repoName + ".pdf");
            // console.log(filepath);

    //********** How to create pdf document in nodejs using pdfkit?

            // Convert arr[link] into string
            let text = JSON.stringify(arr);
            // pdfDoc - this instance is a readable stream,
            // we will be piping that stream into a writable stream to save the file
            let pdfDoc = new pdfkit();
            // we are using the pipe() to save the resulting .pdf files into our root directory
            pdfDoc.pipe(fs.createWriteStream(filepath));
            // also, we can add content via text() into it.
            pdfDoc.text(text);
            // to end the stream 
            pdfDoc.end(); 
       }
} 

module.exports = getIssuesPageHtml; 

function dirCreater(dirpath){
    if(fs.existsSync(dirpath) == false){
        fs.mkdirSync(dirpath);
    }
}