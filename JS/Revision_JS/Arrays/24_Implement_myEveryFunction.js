Array.prototype.myEvery = function(cb){
    let oarr = this;

    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rbv = cb(v, i, oarr);

        if(rbv == false){
            return false;
        }
    }
    return true;
}

let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 28, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 25, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 21, gender: "F"},
]

// console.log(arr);
let isThereAnyValidCandidate = arr.every(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        // console.log(v.age + " " + v.gender);
        return true;
    } else {
        return false;
    }
})
console.log(isThereAnyValidCandidate);


let isThereAnyValidCandidate2 = arr.myEvery(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        // console.log(v.age + " " + v.gender);
        return true;
    } else {
        return false;
    }
})
console.log(isThereAnyValidCandidate2);


// If every callback return true then "Every" return true otherwise false
// Are all Female Candidate Valid
let allFemaleCandidatesValid = arr.filter(c => c.gender == 'F').every(fc => fc.age >= 20 && fc.age <= 30);
console.log(allFemaleCandidatesValid);