let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
];

// Use the map function to produce the below output
//["S.M.", "A.M.", "I.M.", "D.M.", "K.M.", "A.M."];


let ans = arr.map((str, i, oarr) => {
       let fullname = str.split(" ");
       let fname = fullname[0].charAt(0);
       let lname = fullname[1].charAt(0);
       return fname + "." + lname + ".";
})
console.log(ans);


// [ 'S.M.', 'A.M.', 'I.M.', 'D.M.', 'K.M.', 'A.M.' ]