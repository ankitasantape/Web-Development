let arr = [
    {
        gender: 'M',
        age: 24
    },
    {
        gender: 'F',
        age: 34
    },
    {
        gender: 'F',
        age: 28
    },
    {
        gender: 'M',
        age: 74
    },
    {
        gender: 'F',
        age: 31
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 26
    },
    {
        gender: 'M',
        age: 47
    },
    {
        gender: 'F',
        age: 47
    },
    {
        gender: 'F',
        age: 19
    },
    {
        gender: 'M',
        age: 20
    }
];

// Use the map function to produce the below output
// return an array with true and false for females between 20 and 30
// let us say xyz corp wants to hire females between age >= 20 and <= 30

// Traditional Method 
let shortlist = arr.map(function (v, i, oarr) {
    if (v.gender == 'F' && v.age >= 20 && v.age <= 30) {
        return true;
    } else {
        return false;
    }
})

console.log(shortlist);

// Functional Programming
// another method to write code
let sl3 = arr.map((v, i, oarr) => { 
    return v.gender == 'F' && v.age >= 20 && v.age <= 30 ;
});
console.log(sl3);

let sl2 = arr.map((v, i, oarr) => v.gender == 'F' && v.age >= 20 && v.age <= 30);
console.log(sl2);

/*
Gender: M Age: 24   (24 > 20 && 24 < 30)
Gender: F Age: 34   
Gender: F Age: 28
Gender: M Age: 74
Gender: F Age: 31
Gender: M Age: 47
Gender: F Age: 26
Gender: M Age: 47
Gender: F Age: 47
Gender: F Age: 19
Gender: M Age: 20
[
  true,  false, true,
  false, false, false,
  true,  false, false,
  false, true
]



*/ 