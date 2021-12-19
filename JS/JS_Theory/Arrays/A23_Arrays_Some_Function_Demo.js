Array.prototype.mySome = function(cb){
    let oarr = this;

    for(let i = 0; i < oarr.length; i++){
        let v = oarr[i];
        let rbv = cb(v, i, oarr);

        if(rbv == true){
            return true;
        }
    }
    return false;
}

let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 14, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 18, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"},
]

// console.log(arr);
let isThereAnyValidCandidate = arr.some(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        console.log(v.age + " " + v.gender);
        return true;
    } else {
        return false;
    }
})
console.log(isThereAnyValidCandidate);


let isThereAnyValidCandidate2 = arr.mySome(function(v, i, oarr){
    if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
        console.log(v.age + " " + v.gender);
        return true;
    } else {
        return false;
    }
})
console.log(isThereAnyValidCandidate2);