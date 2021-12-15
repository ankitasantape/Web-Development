// Find union of array
let arr2d = [[2, 8, 10, 73], [34], [45, 31, 25, 10, 64, 72, 88], [64], [25, 73]];

// let arr = [];
// union of arrays = [2, 8, 10, 73, 34, 45, 31, 25, 64, 72, 88]
let arr = arr2d.reduce(function(pv, cv, ci, oarr){
       let narr = [];
       if(pv == ''){
        //   console.log(pv + " => " + cv)
          narr = pv.concat( cv );
          return narr;
       }
       
       for(let i = 0; i < cv.length; i++){
            // console.log(pv + " => " + cv)
            let temparr;
            if( !pv.includes(cv[i]) ){
                // console.log(pv + " => " + cv[i]);
               temparr = pv.concat(cv[i]);
               console.log(narr);
               narr = narr.concat(temparr);
            } 
           
       }
       console.log(narr);
       return narr; 
}, []);
console.log(arr);



