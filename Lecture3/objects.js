// object used to represent 
// empty object create
let obj = {}
// key : value pair
// key -> string, number
// variables : properties
// function -> method
// value ->
let cap = {
    name : "Steve",
    lastName: "Rogers",
    friends: ["Peter","Bruce","Tony"],
    isAvenger: false,
    age : 34,
    sayHi: function(){
        console.log("cap say's Hi");
    },
    address:{
        state: "New York",
        city: "NY City"
    } 
}
// print
console.log("name", cap.name);
// get
// . notation
console.log("name", cap.name);
console.log("friends", cap.friends[1]);
console.log("Age", cap.age);
console.log("state", cap.address.state);
console.log("city", cap.address.city);
// if not present
console.log("movies", cap.movies);
cap.sayHi();
// [] operator
let varName = "address";
console.log("address", cap[varName]);
console.log("address", cap.varName);
console.log("friends", cap["friends"]);
console.log("friends", cap["friends"][0]);
console.log("friends", cap["friends"][1]);
console.log("friends", cap["friends"][2]);
console.log("address", cap["address"].city);
console.log("address", cap["address"]["city"]);
console.log("-----------------------------------");
// loop
for(let key in cap){
    console.log(key, " : ", cap[key]);
}
console.log("-----------------------------------");
console.log("We can add properties externally: ");
cap.movies = ["A","B","C","E"];
console.log(cap["movies"]);
for(let key in cap){
    console.log(key, " : ", cap[key]);
}
cap.age = 46;
console.log(cap);

/*
name Steve
name Steve
friends Bruce
Age 34
state New York
city NY City
movies undefined
cap say's Hi
address { state: 'New York', city: 'NY City' }
address undefined
friends [ 'Peter', 'Bruce', 'Tony' ]
friends Peter
friends Bruce
friends Tony
address NY City
address NY City
-----------------------------------
name  :  Steve
lastName  :  Rogers
friends  :  [ 'Peter', 'Bruce', 'Tony' ]
isAvenger  :  false
age  :  34
sayHi  :  [Function: sayHi]
address  :  { state: 'New York', city: 'NY City' }
-----------------------------------
We can add properties externally:
[ 'A', 'B', 'C', 'E' ]
name  :  Steve
lastName  :  Rogers
friends  :  [ 'Peter', 'Bruce', 'Tony' ]
isAvenger  :  false
age  :  34
sayHi  :  [Function: sayHi]
address  :  { state: 'New York', city: 'NY City' }
movies  :  [ 'A', 'B', 'C', 'E' ]
{
  name: 'Steve',
  lastName: 'Rogers',
  friends: [ 'Peter', 'Bruce', 'Tony' ],
  isAvenger: false,
  age: 46,
  sayHi: [Function: sayHi],
  address: { state: 'New York', city: 'NY City' },
  movies: [ 'A', 'B', 'C', 'E' ]
}

*/ 