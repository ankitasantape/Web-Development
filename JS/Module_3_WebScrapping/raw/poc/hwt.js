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
//    let bowlersTable = searchTool(".table.bowler");
//    let htmlData = "";
//    for (let i = 0; i < bowlersTable.length; i++){
//         //  html function
//         htmlData += searchTool(bowlersTable[i]).html(); 
//    }
//    fs.writeFileSync("table.html", htmlData);
//    loop
// name
// compare -> hwt find
let bowlers = searchTool(".table.bowler tbody tr");
let highWicket = 0, personName = "";
    // traversing bowler's name row-wise
   for (let i = 0; i < bowlers.length; i++){
    //    row -> col
     let cols = searchTool(bowlers[i]).find("td");
    // name of the player
     let name = searchTool(cols[0]).text();
    // wickets of the player
     let wickets = searchTool(cols[4]).text();
     console.log(name + "    " + wickets);
     if(wicket > highWicket){
        highWicket = wicket;
        personName = name;
     }
   }
   console.log("``````````````````````````````````");
   console.log("Highest wicket taker " + personName + " " + highWicket);
}
console.log("After");


/*

C:\Users\Admin\OneDrive\Desktop\Dev\Practice>node hwt.js
before
after
Sandeep Sharma 0
Jason Holder 3
T Natarajan 2
Shahbaz Nadeem 1
Rashid Khan 0
Mohammed Siraj 2
Navdeep Saini 0
Washington Sundar 0
Adam Zampa 1
Yuzvendra Chahal 1
Moeen Ali 0
Shivam Dube 0
``````````````````````````````````
Highest wicket taker Jason Holder 3
*/ 