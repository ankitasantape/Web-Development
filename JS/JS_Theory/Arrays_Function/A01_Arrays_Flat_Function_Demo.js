Array.prototype.myFlat = function(level){
   let oarr = this;
   let res = [];

   customFlat(oarr, level, res);
   return res;
}

function customFlat(node, level, res) {
    if( Array.isArray(node) ){
         if ( level > 0 ){
            for(let i = 0; i < node.length; i++){
               customFlat(node[i], level - 1, res);
            }
         } else {
            for(let i = 0; i < node.length; i++){
               res.push(node[i]);
            }
         }
    } else {
         res.push(node);
    }
}



let arr = [10, 20, [50, 60, [90, 100]], 30, [70, [110, 120], 80], 40];
let res1 = arr.flat(1); 
console.log(res1); // [ 10, 20, 50, 60, [ 90, 100 ], 30, 70, [ 110, 120 ], 80, 40 ]
let myres1 = arr.myFlat(1); 
console.log(myres1); // [ 10, 20, 50, 60, [ 90, 100 ], 30, 70, [ 110, 120 ], 80, 40 ]

// let res2 = arr.flat(2);
// console.log(res2);

/*

[ 10, 20, 50, 60, [ 90, 100 ], 30, 70, [ 110, 120 ], 80, 40 ]
[
   10, 20, 50,  60,  90,
   100, 30, 70, 110, 120,
   80, 40
]

*/ 