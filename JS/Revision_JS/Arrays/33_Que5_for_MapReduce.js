function f(x){
    return x * x;
}

function g(x){
    return x + 10;
}

function h(x){
    return 2*x;
}

let farr = [f, g, h]; // [h, g, f]
let x = 10;

let cv = farr.reverse().reduce(function(pv, cv){
    return cv(pv);
}, x);

console.log(cv);

// 10, f
// f(10), g
// g(f(10)), h
// h(g(f(10)))


// 10, h
// h(10), g
// g(h(10)), f
// f(g(h(10)))


// f(g(h(x))) = f(g(2x)) = f (2x + 10) = 4x^2 + 100 + 40x = 900

let fa = [f, g, h]; // [h, g, f] | pv = h, cv = g ==> cv(pv)
// let x = 10;
let cval = fa.reverse().reduce((pval, cval) => { 
      return cval(pval);
 }, x);
 
 console.log(cval);