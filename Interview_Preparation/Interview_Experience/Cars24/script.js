//Round 1:  Hoisting

function abc(){
    console.log(a); // undefined
    /*  why undefined ?
        Becoz this function abc() has initialized but this variable 'a' is not initialized yet, so this variable 'a' is undefined at this moment.
    */
    var a = 10;
    console.log(a); // 10
}
// abc();

// interviewer added two more variable b and c
// Q. What will be the output for b and c?
function xyz(){
    console.log(a, b, c); // undefined undefined undefined (in local scope)
    /* Q. Are this two variable b and c are going to be hoisted?
       -> Yes, they are going to be hoisted but they are going to be hoisted in temporal dead zone.
       Q. What is Temporal Dead Zone ?
       -> Temporal Dead Zone is the term to describe the state where variables are in the scope but they are not yet declared. 
    
    */ 
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a, b, c); // 10 20 30
}
// xyz();


// Que 2. Implicit and Explicit Binding
var obj = {
    name: "Ankita",
    display: function () {
        console.log(this.name);
    }
};
var obj1 = {
    name: "ABC"
}
// obj.display(); // Ankita
// obj.display.call(obj1); // ABC

// What if we change this normal anonymous into arrow function, what will it get output?
obj = {
    name: "Ankita",
    display: () => {
        console.log(this);
        console.log(this.name)
    }
};
obj1 = {
    name: "ABC"
}
// obj.display(); // console will print nothing
// obj.display.call(obj1); // console will print nothing
/*
Why did this happen?
why this.name print nothing in arrow function ? 
in arrow function () => {} 'this' is refers to global object or window object
and not refering to the name variable or any other variable which are in local scope 
*/ 


// Que 3. Implement Caching/Memoize Function

// this function is going to take expensive calculation
const clumsyProduct = (num1, num2) => {
    for (let i = 1; i <= 100000000; i++){

    }
    return num1 * num2;
}
/*
72413083
script.js:76 First call: 733.5791015625 ms
*/ 
// console.time("First call");
// console.log(clumsyProduct(9467, 7649));
// console.timeEnd("First call");

/*
72413083
script.js:80 First call: 496.148193359375 ms
*/ 
// console.time("First call");
// console.log(clumsyProduct(9467, 7649));
// console.timeEnd("First call");

// How do we minimize this time calculation if the parameters of the calculation are same
// we need to cache the result of the previous function's calculation somewhere

function myMemoize(fn, context){
   const res = {};
   return function (...args) {
       var argsCache = JSON.stringify(args);
       if ( !res[argsCache] ){
           res[argsCache] = fn.call(context || this, ...args);
       }
       return res[argsCache];
   };
}

const memoizedClumsyProduct = myMemoize(clumsyProduct);

/*
72413083
script.js:108 First call: 670.93603515625 ms
*/ 
console.time("First call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("First call");

/*
72413083
script.js:116 First call: 0.43603515625 ms
*/ 
console.time("First call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("First call");
