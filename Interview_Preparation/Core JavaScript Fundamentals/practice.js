const name = {
    firstname : "Ankita",
    lastname : "Santape"
}

let printName = function(city, state, country) {
    console.log( this.firstname + " " + this.lastname + " , " + city + " , " + state + " , " + country);
} 
let printMyName = printName.bind( name , "Nagpur", "Maharastra", "India");
printMyName();


Function.prototype.mybind = function(...args) {
    // this => printName
    let obj = this;
    params = args.slice(1);
    return function(){
        obj.call(args[0]);
    }
}

let printMyName2 = printName.mybind(name);
printMyName2();

// IF you pass two arguments
Function.prototype.mybind = function(...args) {
    // this => printName
    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [ ...params , ...args2]);
    }
}

console.log("Print My City");
let printMyCity = printName.mybind(name);
printMyCity("Nagpur");

console.log("Print My State");
let printMyState = printName.mybind(name);
printMyState("Nagpur", "Maharastra");

console.log("Print My state");
let printMyState2 = printName.mybind(name, "Nagpur");
printMyState2("Maharastra");

console.log("Print My Country");
let printMyCountry = printName.mybind(name);
printMyCountry("Nagpur", "Maharastra", "India");

