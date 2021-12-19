
let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"},
]
// first apply filter then apply map
// Question: print the age of the females whose age is betweem 20 >= && <= 30; 
// Output: ages of all the ladies [24, 44, 28, 47]
let females = arr.filter((v, i, oarr) =>  v.gender == 'F' ).map((v, i, oarr) => v.age );
console.log(females);

