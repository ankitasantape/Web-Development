// Question: Remove all prime numbers from array
let arr = [10, 20, 47, 300, 400, 500, 50];

function isPrime(val){
    for(let j = 2; j*j <= val; j++){
        if(val % j == 0){
           return false
        }
    }
    return true;
}

for(let i = 0; i < arr.length; i++){
    let val = arr[i];
    let isprime = isPrime(val);
    if(isprime == true){ 
        arr.splice(i,1);
    }
}
displayArray(arr);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}


// Using Remove()
let arr = [2,3,4,5,6,7,8,9,10,11,13,16,17,23];

for(let i = arr.length - 1; i>=0; i--) {
    let num = arr[i];

    let flag = true;
    for(let j = 2; j*j<=num; j++){
        if(num % j == 0) {
            //non-prime
            flag = false;
            break;
        }
    }

    if(flag) {
        arr.splice(i, 1);
    }
}

console.log(arr);

