function outer(first){
    console.log("Hello i am outer and i am returning Inner");
    return function inner(second) {
        console.log("I am Inner");
        return first * second;
    }
}
let rVal = outer(2);
console.log("Before calling rVal that contains inner"+rVal);
let ans = rVal(4);
console.log(ans);

/*
Hello i am outer and i am returning Inner
[Function: inner]

*/ 
