let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];

// Question : Use the map function to produce the elow output
// ["S.M", "A.M", "I.M", "D.M", "K.M", "A.M"]

let ansarr = arr.map(function(v, i, arr){
     let nameParts = v.split(" ");
     let fname = nameParts[0];
     let lname = nameParts[1];
     let fnfc = fname[0];
     let lnfc = lname[0];
     let initials = fnfc + "." + lnfc + ".";
    console.log(initials);
    return initials;
});

console.log(ansarr);
// [ 'S.M.', 'A.M.', 'I.M.', 'D.M.', 'K.M.', 'A.M.' ]