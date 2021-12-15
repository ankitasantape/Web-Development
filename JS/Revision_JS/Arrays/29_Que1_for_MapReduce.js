let arr = [51, 23, 37, 44, 73, 82, 97, 45];
// count all primes using reduce

let countOfprimes = arr.reduce(function(pv, cv, ci, oarr){
    // console.log(pv + "-" + cv + "-" + ci);
    if(isPrime(pv) && isPrime(cv)){
         return pv + 1;
    }  else {
        return pv;
    }
    
}, 0)

console.log(countOfprimes);

function isPrime(n){
    for(let i = 2; i * i <= n; i++){
          if(n / i == 0){
              return false;
          } 
    }
    return true;
}