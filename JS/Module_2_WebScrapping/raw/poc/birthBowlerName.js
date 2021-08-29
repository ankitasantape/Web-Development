// npm i request
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
console.log("Before");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
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

// insight -> you don't get all the data initially
function dataExtracter(html){
    // search tool
    let searchTool = cheerio.load(html);
    // global tool
    // page -> tables -> row get
    let bowlers = searchTool(".table.bowler tbody tr");
   
   for (let i = 0; i < bowlers.length; i++){
        // row -> col
        let cols = searchTool(bowlers[i]).find("td");
        // find the anchor tag which gives link
        let aElem = searchTool(cols[0]).find("a");
        let link = aElem.attr("href");
        // link 
        // new page -> link get -> complete -> request
        let fullLink = `https://www.espncricinfo.com${link}`;
        request(fullLink, newbc);
   }
   
}

function newbc(error, response, html){
    if (error) {
        console.log(error);
    } else if (response.statusCode == 404){
        console.log("Page Not Found");
    } else {
        // console.log(html); // Print the HTML 
        getBirthDay(html);
    } 
}

function getBirthDay(html){
    let searchTool = cheerio.load(html);
    let headingsArr = searchTool(".player-card-description");
    let age = searchTool(headingsArr[2]).text();
    let name = searchTool(headingsArr[0]).text();
    console.log(name, " ", age);
} 
console.log("After");

// Order doesn't matter - order always changing  

/*
Adam Zampa 29y 130d
Navdeep Amarjeet Saini 28y 258d
Rashid Khan Arman 22y 322d
Jason Omar Holder 29y 276d
Washington Sundar 21y 307d
Yuzvendra Singh Chahal 31y 16d
Shahbaz Nadeem 31y 361d
Sandeep Sharma 28y 82d
Thangarasu Natarajan 30y 73d
Shivam Dube 28y 43d
Mohammed Siraj 27y 148d
Moeen Munir Ali 34y 51d
*/ 

/*
Mohammed Siraj 27y 148d
Navdeep Amarjeet Saini 28y 258d
Rashid Khan Arman 22y 322d
Washington Sundar 21y 307d
Shahbaz Nadeem 31y 361d
Thangarasu Natarajan 30y 73d
Adam Zampa 29y 130d
Jason Omar Holder 29y 276d
Sandeep Sharma 28y 82d
Shivam Dube 28y 43d
Moeen Munir Ali 34y 51d
Yuzvendra Singh Chahal 31y 16d
*/ 