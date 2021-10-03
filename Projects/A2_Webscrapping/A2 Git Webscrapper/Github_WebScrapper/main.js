let url = "https://github.com/topics";
const request = require('request');
const cheerio = require("cheerio");
const getReposPageHtml = require("./getRepoLink");
request(url, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    } else if(response.statusCode == 404){
        console.log("Page Not Found!");
    } else {
        //    console.log(html);
        getTopicLink(html);
    }
}
// this function will give the link of first 3 topic on head of the github
function getTopicLink(html){
    // search tool
    let $ = cheerio.load(html);
    let anchorElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
    console.log(anchorElemArr.length);
    for(let i = 0; i < anchorElemArr.length; i++){
        let href = $(anchorElemArr[i]).attr("href");
        let topic = href.split("/").pop();
        let fullLink = `https://github.com${href}`;
        // console.log(topic + ": " +fullLink);
        getReposPageHtml(fullLink, topic);
    }
}