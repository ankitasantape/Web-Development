// npm i request
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
console.log("Before");

let bowlersArr = [];
let bowlersCount = 0;
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
        if ( cols.length > 1)
        {
            bowlersCount++;
        }
   }
   for (let i = 0; i < bowlers.length; i++){
       // row -> col
       let cols = searchTool(bowlers[i]).find("td"); 
       if ( cols.length > 1)
        { 
        // find the anchor tag which gives link
        let aElem = searchTool(cols[0]).find("a");
        let link = aElem.attr("href");
        // // link 
        // // new page -> link get -> complete -> request
        let fullLink = `https://www.espncricinfo.com${link}`;
        request(fullLink, newcb);
        }
   }
   
}

function newcb(error, response, html){
    if (error) {
        console.log(error);
    } else if (response.statusCode == 404){
        console.log("Page Not Found");
    } else {
        // console.log(html); // Print the HTML 
        getBirthDay(html);

        if(bowlersArr.length == bowlersCount){
            console.table(bowlersArr);

            sortBirthDay(bowlersArr);
        }
    } 
}

function getBirthDay(html){
    let searchTool = cheerio.load(html);
    let headingsArr = searchTool(".player-card-description");
    let name = searchTool(headingsArr[0]).text();
    let age = searchTool(headingsArr[2]).text();
    
    // console.log(name, " ", age);
    bowlersArr.push({"name": name, "age":age});
} 
console.log("After");

function sortBirthDay(bowlersArr){
    // sort
    // age -> convert
    let newArr = bowlersArr.map(singleFn);
    // console.log("newArr", newArr);
    function singleFn(obj){
        let name = obj.name;
        let age = obj.age;
        let ageArr = obj.age.split(" ");
        let years = ageArr[0].slice(0, ageArr[0].length - 1); 
        let days = ageArr[1].slice(0, ageArr[1].length - 1); 
        let ageInDays = Number(years) * 365 + Number(days);
        return{
            name: name,
            ageInDays: ageInDays,
            age: age
        }
    }

    let sortedArr = newArr.sort(cb);
    // console.table(sortedArr);
    function cb(objA, objB){
        return objA.ageInDays - objB.ageInDays;
    }
    let finalArr = sortedArr.map(removeAgeInDays);
    function removeAgeInDays(obj){
        return {
            name: obj.name,
            age: obj.age
        }
    }
    console.table(finalArr);

}

/*
Before
After
┌─────────┬──────────────────────────┬────────────┐
│ (index) │           name           │    age     │
├─────────┼──────────────────────────┼────────────┤
│    0    │    'Moeen Munir Ali'     │ '34y 72d'  │
│    1    │ 'Yuzvendra Singh Chahal' │ '31y 37d'  │
│    2    │      'Shivam Dube'       │ '28y 64d'  │
│    3    │     'Sandeep Sharma'     │ '28y 103d' │
│    4    │  'Thangarasu Natarajan'  │ '30y 94d'  │
│    5    │   'Washington Sundar'    │ '21y 328d' │
│    6    │     'Mohammed Siraj'     │ '27y 169d' │
│    7    │     'Shahbaz Nadeem'     │ '32y 17d'  │
│    8    │   'Rashid Khan Arman'    │ '22y 343d' │
│    9    │       'Adam Zampa'       │ '29y 151d' │
│   10    │ 'Navdeep Amarjeet Saini' │ '28y 279d' │
│   11    │   'Jason Omar Holder'    │ '29y 297d' │
└─────────┴──────────────────────────┴────────────┘
┌─────────┬──────────────────────────┬────────────┐
│ (index) │           name           │    age     │
├─────────┼──────────────────────────┼────────────┤
│    0    │   'Washington Sundar'    │ '21y 328d' │
│    1    │   'Rashid Khan Arman'    │ '22y 343d' │
│    2    │     'Mohammed Siraj'     │ '27y 169d' │
│    3    │      'Shivam Dube'       │ '28y 64d'  │
│    4    │     'Sandeep Sharma'     │ '28y 103d' │
│    5    │ 'Navdeep Amarjeet Saini' │ '28y 279d' │
│    6    │       'Adam Zampa'       │ '29y 151d' │
│    7    │   'Jason Omar Holder'    │ '29y 297d' │
│    8    │  'Thangarasu Natarajan'  │ '30y 94d'  │
│    9    │ 'Yuzvendra Singh Chahal' │ '31y 37d'  │
│   10    │     'Shahbaz Nadeem'     │ '32y 17d'  │
│   11    │    'Moeen Munir Ali'     │ '34y 72d'  │
└─────────┴──────────────────────────┴────────────┘
*/ 

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