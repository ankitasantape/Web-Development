let arr = [10, 47, 15, 17, 92, 97, 93, 31, 46, 54];

for(let i = arr.length - 1; i >= 0; i--){
    let val = arr[i];
    let isprime = isPrime(val);
    if( isprime == true ){
        arr.splice( i, 1 );
    }
}
displayArray(arr); // 10,15,92,93,46,54 = 6

function displayArray(arr) {
    console.log(arr + " = " + arr.length);
}

function isPrime(val) {
    for(let i = 2; i * i <= val; i++){
        if( val % i == 0 ){
             return false;
        }
    }
    return true;
}