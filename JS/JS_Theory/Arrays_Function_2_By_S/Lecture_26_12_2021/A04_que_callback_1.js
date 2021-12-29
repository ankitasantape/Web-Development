let fs = require("fs");

function stringSieve(sshandler, lshandler){
    let oarr = this;
    sshandler.calledForTheFirstTime = true;
    lshandler.calledForTheFirstTime = true;

    for(let i = 0; i < oarr.length; i++) {
        let str = oarr[i];
        let isShortStr = false;
        if(str.length > 1 && str.length < 50){
            isShortStr = true;
            str = str.split(".").filter(s => s.length > 0).map(s => s.trim().split(" ").reverse().join(" ") + ".").reduce(function(pv, cv){
                return pv + " " + cv;
            }); 
            // console.log(str);   
        } else {
            if ( str.length > 0 ){
                str = str.split(".").filter(s => s.length > 0).map(s => s.trim()).reverse().join(". ") + ".";
                // console.log(str);    
            }   
        }
        // console.log(str);
        if (isShortStr == true) {
            sshandler(str);
        } else {
            lshandler(str);
        }
    }
}


Array.prototype.sieve = stringSieve;
let arr = [
    "My name is Sumeet Malik. I am a teacher. I teach programming.",
    "",
    "",
    "",
    "My name is Sumeet Malik. I am a teacher.",
    "",
    "",
    ""
];

// add a fn to all arrays which takes as input two callbacks
// one for small string (< 50 in length) and the other for long strings

// short string callback should do the following
// My name is Sumeet Malik. I am a teacher. I teach programming.
// => Malik Sumeet is name My. teacher a am I. programming teach I.

// long string callback should do the following
// I teach programming. I am a teacher. My name is Sumeet Malik.

arr.sieve(logAllSmallString, logAllLongString);


function logAllSmallString(num) {
    if (logAllSmallString.calledForTheFirstTime == true) {
        if (fs.existsSync("smallStrings.txt")) {
            fs.rmSync("smallStrings.txt");
        }
        logAllSmallString.calledForTheFirstTime = false;
    }

    fs.appendFileSync("smallStrings.txt", num , "utf-8");
}

function logAllLongString(num) {
    if (logAllLongString.calledForTheFirstTime == true) {
        if (fs.existsSync("longStrings.txt")) {
            fs.rmSync("longStrings.txt");
        }
        logAllLongString.calledForTheFirstTime = false;
    }
    fs.appendFileSync("longStrings.txt", num , "utf-8");
}