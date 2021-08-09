// let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
function processSinglematch(url) {

    request(url, cb);
}

// request(url, cb);
function cb(error, response, html) {

    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); // Print the HTML for the request made 
        dataExtracter(html);
        
    }
}


 // venue date opponent result runs balls fours(4's) sixes(6's) SR 
    // ipl
    //      team
    //             player
    //                     
    // css selector for venue date  -   .event .description
    // result        -    .event .status-text

function dataExtracter(html) {
    let searchTool = cheerio.load(html)
    let descripElmt =  searchTool(".event .description"); 
    let result = searchTool(".event .status-text").text().trim();
    let stringArr = descripElmt.text().split(",");
    let venue = stringArr[1].trim();
    let date = stringArr[2].trim();
    // console.log("Venue: ", venue);
    // console.log("Date: ", date);
    // console.log("Result: ", result.text());
    // team name
    let bothInningArr = searchTool(".Collapsible");
    for (let i = 0; i < bothInningArr.length; i++) {
        // scoreCard = searchTool(bothInningArr[i]).html();
        let teamNameElem = searchTool(bothInningArr[i]).find("h5");
        let teamName = teamNameElem.text();
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0];
        // console.log(teamName);
        teamName = teamName.trim();
       
        let opponentIndex = i == 0 ? 1 : 0;
        let opponentTeamName = searchTool(bothInningArr[opponentIndex]).find("h5").text().split("INNINGS")[0].trim();
        console.log(`${venue} ${date}  ${teamName} vs ${opponentTeamName}  ${result}`);
        let batsManTableBodyAllRows = searchTool(bothInningArr[i]).find(".table.batsman tbody tr");
        // console.log(batsManTableBodyAllRows.length)
        // type cohersion loops -> 
        for (let j = 0; j < batsManTableBodyAllRows.length; j++) {
            let numberofTds = searchTool(batsManTableBodyAllRows[j]).find("td");
            // console.log(numberofTds.length);
            if (numberofTds.length == 8) {
                // console.log("You are valid")
                let playerName = searchTool(numberofTds[0]).text().trim();
                let runs = searchTool(numberofTds[2]).text().trim();
                let balls = searchTool(numberofTds[3]).text().trim();
                let fours = searchTool(numberofTds[5]).text().trim();
                let sixes = searchTool(numberofTds[6]).text().trim();
                let sr = searchTool(numberofTds[7]).text().trim();
                console.log(`${playerName} ${runs} ${balls} ${fours} ${sixes} ${sr}`);
            }
        }
        console.log("``````````````````````````````````````")
        // fs.writeFileSync(`innning${i+1}.html`,scoreCard);

    }
    // players name
    
}
module.exports = {
    processSinglematch
}