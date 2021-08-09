// npm i request
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
// request('https://www.google.com', cb);
// npm i request
// https://www.npmjs.com/package/cheerio
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
request(url , cb);
function cb(error, response, html){
    // console.error('error: ', error);
    // console.log('body ', html);

    if (error){
        console.log(error);

    } else if (response.statusCode === 404){
        console.log("Page Not Found")
    } else {
        // console.log(html);
        // console.log("html: ", );
        dataExtracter(html);
    }
}

function dataExtracter(html){
    // search tool
    let searchTool = cheerio.load(html);
    // css selector -> elem
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text");
    // text - last bowler commentry
    let lbc = searchTool(elemRepArr[0]).text();
    console.log("lbc ", lbc);
}
console.log("After");