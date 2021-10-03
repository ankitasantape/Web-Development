const request = require('request');
const cheerio = require("cheerio");
const getIssuesPageHtml = require("./getIssues");

function getReposPageHtml(url, topic){
       request(url, cb);
       function cb(err, res, html){
           if(err){
               console.log(err);
           } else if(res.statusCode == 404){
               console.log("Page Not Found!");
           } else{
               getReposLink(html);
           }
       }

       function getReposLink(html){
           let $ = cheerio.load(html);
           let headingsArrElem = $(".f3.color-text-secondary.text-normal.lh-condensed"); 
        //    console.log(topic);
           for(let i = 0; i < 8; i++){
               let twoAnchorElem = $(headingsArrElem[i]).find("a");
               let href = $(twoAnchorElem[1]).attr("href");
               let link = `https://github.com${href}`;
               let repoName = link.split("/").pop();
               let fullLink = `https://github.com${href}/issues`;
            //    console.log(fullLink);
               getIssuesPageHtml(fullLink, topic, repoName);
           }
       }
}


module.exports = getReposPageHtml;
