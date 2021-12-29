// function powerFunctionCreator(exp){
    
//     if (typeof exp !== 'number'){
//         console.log("exp must be a number");
//         return null;
//     }

//     let powerFn = function(base){
//         let rv = Math.pow(base, exp);
//         return rv;
//     }
//     return powerFn;
// }

// let squarer = powerFunctionCreator(2);
// let val = squarer(8);
// console.log(val);


function powerFunctionCreator(obj){
    
    if (typeof obj.exp !== 'number'){
        console.log("exp must be a number.");
        return null;
    }
     
    let powerFn = function(base){
        let rv = Math.pow(base, obj.exp);
        return rv;
    }
    return powerFn;
}

let o1 = {
    exp: 2
}

o1.exp = 3;
let squarer = powerFunctionCreator(o1);
let val = squarer(8);
console.log(val);