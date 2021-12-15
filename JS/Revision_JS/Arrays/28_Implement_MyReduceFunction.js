Array.prototype.myReduce = function(cb, arg) {
    let oarr = this;
    let pv;
      
    if(arg == undefined){
        pv = oarr[0];
        for(let i = 1; i < oarr.length; i++){
            let cv = oarr[i];
            pv = cb(pv, cv, i, oarr);
        }
    } else {
        pv = arg;
        for(let i = 0; i < oarr.length; i++){
            let cv = oarr[i];
            pv = cb(pv, cv, i, oarr);
        }
    }
    return pv;
}


let arr = [10, 20, 30, 40, 50];

let sum1 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
})

console.log(sum1);

let sum2 = arr.reduce(function(pv, cv, ci, oarr){
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
}, 5);
console.log(sum2);
console.log("-----------------");

let sum3 = arr.myReduce(function(pv, cv, ci, oarr){
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
})
console.log(sum3);

let sum4 = arr.myReduce(function(pv, cv, ci, oarr){
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
}, 5);
console.log(sum4);


/*

10-20-1
30-30-2
60-40-3
100-50-4
150
5-10-0
15-20-1
35-30-2
65-40-3
105-50-4

*/ 