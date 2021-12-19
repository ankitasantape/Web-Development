let product = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 },
];


// return names of all products in uppercase who has price >= 100
// Hint : Que6
let filtered_products = product.filter((v, i, oarr) =>  v.price >= 100 ).map((v, i, oarr) => v.name.toUpperCase() );
// console.log(filtered_products);
// [ 'HEADPHONES', 'MONITOR' ]

let fproducts = product.filter(p => p.price >= 100).map(p => p.name.toUpperCase());
// console.log(fproducts);

let f_products = product.filter( function(v, i, oarr) {
         if( v.price >= 100) {
             return true;
         } else {
             return false;
         }
        
}).map( function(v, i, oarr) {
    return v.name.toUpperCase(); 
});
// console.log(f_products);

// all >= 100 name uppercase and < 100 lowercase
let filtered_produ = product.map((v, i, oarr) =>  v.price >= 100 ? v.name.toUpperCase() : v.name.toLowerCase());
console.log(filtered_produ);
// [ 't-shirt', 'HEADPHONES', 'keyboard', 'MONITOR' ]