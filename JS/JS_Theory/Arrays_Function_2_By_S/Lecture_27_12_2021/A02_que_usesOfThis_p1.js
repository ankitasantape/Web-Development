console.log(a); // output: ReferenceError: a is not defined

function fun() {
    this.a = 10;
    console.log(a);
}

fun();
console.log(a);