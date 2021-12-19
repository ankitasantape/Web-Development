let arr = [
    {name: "A", age: 14, gender: "M"}, 
    {name: "B", age: 34, gender: "M"}, 
    {name: "C", age: 24, gender: "F"}, 
    {name: "D", age: 44, gender: "F"}, 
    {name: "E", age: 44, gender: "M"}, 
    {name: "I", age: 28, gender: "F"}, 
    {name: "G", age: 36, gender: "M"}, 
    {name: "H", age: 47, gender: "F"}
]

// ages of all the ladies [24, 44, 28, 47]
let ages = arr.filter((v, i, oarr) => v.gender == 'F' )
.map((v, i, oarr) => v.age )
console.log(ages);  //  [ 24, 44, 28, 47 ]

let ans = arr.filter((v, i, oarr) => v.gender == 'F' )
.map((v, i, oarr) => v )
console.log(ans); 
/*
[
  { name: 'C', age: 24, gender: 'F' },
  { name: 'D', age: 44, gender: 'F' },
  { name: 'I', age: 28, gender: 'F' },
  { name: 'H', age: 47, gender: 'F' }
]
*/ 