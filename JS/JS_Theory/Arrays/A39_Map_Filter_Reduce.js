// map, filter and reduce is a higher order function.

const arr = [5, 1, 3, 2, 6];

// Double = [10, 2 ,6, 4, 12]

// Triple = [15, 3, 9, 6, 18]

// Binary = ["101", "1", "11", "10", "110"]


// Map

const output = arr.map(v => v * 2);
console.log(output);  // [ 10, 2, 6, 4, 12 ]

// Using function
const output1 = arr.map(double);
console.log(output1);  // [ 10, 2, 6, 4, 12 ]

function double(x){
    return x * 2;
}


/**************************************************************/


const output2 = arr.map(v => v * 3);
console.log(output2); // [ 15, 3, 9, 6, 18 ]

// Using function
const output3 = arr.map(triple);
console.log(output3); // [ 15, 3, 9, 6, 18 ]

function triple(x){
    return x * 3;
}


/**************************************************************/



const output4 = arr.map(v => v.toString(2) );
console.log(output4); // [ '101', '1', '11', '10', '110' ]

const output5 = arr.map(binary);
console.log(output5); // [ '101', '1', '11', '10', '110' ]

// This is also valid syntax
const output6 = arr.map(function binary(x){
    return x.toString(2);
});
console.log(output6); // [ '101', '1', '11', '10', '110' ]

function binary(x){
    return x.toString(2);
}


/**************************************************************/



// Filter

// const arr = [5, 1, 3, 2, 6];
// Odds
function isOdd(x) {
    return x % 2 === 1;
}
const odds = arr.filter(isOdd);
console.log(odds); // [ 5, 1, 3 ]


/**************************************************************/



// evens
function isEven(x) {
    return x % 2 === 0;
}
const evens = arr.filter(isEven);
console.log(evens); // [ 2, 6 ]

// Greater than 4 value
function greaterThan4(x) {
    return x > 4;
}
const gt4 = arr.filter(greaterThan4);
console.log(gt4); // [ 5, 6 ]



/**************************************************************/




// Reduce => takes four parameters and 1 argument

// const arr = [5, 1, 3, 2, 6];
// sum 
function findSum(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr)); // 17

// acc -> accumulator ==> sum = 0, cv -> current value
// accumulator is just appending the value in itself
const sum = arr.reduce((acc, cv) => {
   acc = acc + cv;
   return acc;
}, 0) // this argument represents an inital value would be 0 which will be initially passed inside this accumulator
console.log(sum); // 17




/**************************************************************/



// const arr = [5, 1, 3, 2, 6];
// max
function findMax(arr){
    let max = 0;
    for(let i = 0 ; i < arr.length; i++){
        max = Math.max(max, arr[i]);
    }
    return max;
}
console.log(findMax(arr)); // 6



// using reduce find max
let maxval = arr.reduce((max, curr) => {
      return curr > max ? curr : max;
}, 0)
console.log(maxval); // 6



/**************************************************************/


// Tricky -> map()
const users = [
     { firstName: "ankita", lastName: "santape", age: 22  },
     { firstName: "sumit", lastName: "santape", age: 20  },
     { firstName: "sakshi", lastName: "santape", age: 19  },
     { firstName: "aadity", lastName: "santape", age: 18  },
     { firstName: "tanmay", lastName: "santape", age: 17  },
     { firstName: "suprit", lastName: "santape", age: 14  },
     { firstName: "ghangari", lastName: "santape", age: 14  }
];

// list of full name

const fullnames = users.map(v =>  v.firstName + "  " + v.lastName )
console.log(fullnames);
/*
[
  'ankita  santape',
  'sumit  santape',
  'sakshi  santape',
  'aadity  santape',
  'tanmay  santape',
  'suprit  santape'
]
*/ 

// list of user having age >= 16 and <= 20
const list1 = users.map(v => v.age >= 14 && v.age < 20)
console.log(list1); // [ false, false, true, true, true, true ]


const list2 = users.filter(v => v.age >= 14 && v.age < 20)
console.log(list2); 
/*
[
  { firstName: 'sakshi', lastName: 'santape', age: 19 },
  { firstName: 'aadity', lastName: 'santape', age: 18 },
  { firstName: 'tanmay', lastName: 'santape', age: 17 },
  { firstName: 'suprit', lastName: 'santape', age: 14 }
]
*/

/****************************************************************/ 


// return first name of user having age greater than or equal to 20
const list3 = users.filter(v => v.age >= 20).map(v => v.firstName)
console.log(list3); // [ 'ankita',   'sumit' ]

// using reduce 
// Reduce name makes perfect sense, so function is basically reducing n elements of an array to Single Value
const list4 = users.reduce((acc, curr) => {
    if(curr.age >= 20){
       acc.push(curr.firstName); 
    } 
    return acc;
}, []) // initial argument passed as an array 
console.log(list4); // [ 'ankita', 'sumit' ]


const list5 = users.reduce((acc, curr) => {
    if(curr.age >= 20){
       acc.push(curr.firstName); 
    } 
    return acc;
}, {}) // initial argument passed as an object
console.log(list5); // { '20': 'sumit', '22': 'ankita' }



/****************************************************************/ 



// Tricky -> reduce()
// if you don't want to print the whole list of user just to return the count of users having similar age 
// acc = { '14': 2, '17': 1, '18': 1, '19': 1, '20': 1, '22': 1 }

// {} - empty object would be initial argument
const res = users.reduce((acc, curr) => { 
    console.log(acc); 
    if( acc[curr.age] ){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
     return acc;
 }, {});
console.log(res);

/*

{}
{ '22': 1 }
{ '20': 1, '22': 1 }
{ '19': 1, '20': 1, '22': 1 }
{ '18': 1, '19': 1, '20': 1, '22': 1 }
{ '17': 1, '18': 1, '19': 1, '20': 1, '22': 1 }
{ '14': 1, '17': 1, '18': 1, '19': 1, '20': 1, '22': 1 }
{ '14': 2, '17': 1, '18': 1, '19': 1, '20': 1, '22': 1 }

*/ 