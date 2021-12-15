Array.prototype.myforEach = function(cb){
    for(let i = 0; i < this.length; i++){    
        cb(this[i]);       
    }
    return cb;
}

let arr = [ 'a', 'b', 'c'];

// console.log(arr);
arr.myforEach(function(v, i, oarr){
     console.log(v);
})
console.log("---------------");

arr.forEach(function(v, i, oarr){
    console.log(v);
})



