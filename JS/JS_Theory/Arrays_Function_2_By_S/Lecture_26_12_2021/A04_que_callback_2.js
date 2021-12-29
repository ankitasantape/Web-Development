// add a fn to all arrays which takes as input two callbacks
// one for small string (< 50 in length) and the other for long strings

// short string callback should do the following
// My name is Sumeet Malik. I am a teacher. I teach programming.
// => Malik Sumeet is name My. teacher a am I. programming teach I.

// long string callback should do the following
// I teach programming. I am a teacher. My name is Sumeet Malik. 

let fs = require("fs");

function stringProcessor(shortStringHandler, longStringHandler, criteria){
    let oarr = this;
    shortStringHandler.calledForTheFirstTime = true;
    longStringHandler.calledForTheFirstTime = true;

    for(let i = 0; i < oarr.length; i++) {
        let str = oarr[i];

       
        if ( str.length > criteria ) {
            longStringHandler(str);    
        } else {
            shortStringHandler(str);
        }
  
    }
    // if you return this 
    // return this for chaining like arr.map().filter().reduce()...
}

function longStringHandler(str){
    str = str.split(".").filter(s => s.length > 0).map(s => s.trim()).reverse().join(". ") + ".";
}

function shortStringHandler(str){
    str = str.split(".").filter(s => s.length > 0).map(s => s.trim().split(" ").reverse().join(" ") + ".").reduce(function(pv, cv){
        return pv + " " + cv;
    }); 
}

Array.prototype.processStrings = stringProcessor;
let arr = [
    "My name is Sumeet Malik. I am a teacher. I teach programming.",
    "India won in Australia. England won't.",
    "India has gone to SA. India started well. But it rains.",
    "I am going to become a software engineer.",
];

arr.processStrings(shortStringHandler, longStringHandler, 40); // agar stringProcessor() function 'this' return krta hai to hum yaha map, reduce, filter kuch bhi use kr skte hai agar kuch return nhi krta to by default undefined return krta hai
// arr.processStrings(shortStringHandler, longStringHandler, criteria).map();
 