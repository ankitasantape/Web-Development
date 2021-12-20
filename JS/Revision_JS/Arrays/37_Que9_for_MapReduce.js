let str = "My name is Sumeet Malik. I am a software developer. I believe in learning by doing. I need courage and patience.";

"Malik Sumeet is name My. developer software a am I. doing by learning in believe I. patience and courage need I.";

// without for loops you have to do it.

let arr = str.split(".");
console.log(arr);
// [
//     'My name is Sumeet Malik',
//     ' I am a software developer',
//     ' I believe in learning by doing',
//     ' I need courage and patience',
//     ''
//   ]

arr = arr.filter(s => s.length > 0);
console.log(arr);
// [
//     'My name is Sumeet Malik',
//     ' I am a software developer',
//     ' I believe in learning by doing',
//     ' I need courage and patience'
//   ]

arr = arr.map(s => s.trim() );
console.log(arr);
// [
//     'My name is Sumeet Malik',
//     'I am a software developer',
//     'I believe in learning by doing',
//     'I need courage and patience'
//   ]

arr = arr.map(s => s.split(" "));
console.log(arr);
// [
//     [ 'My', 'name', 'is', 'Sumeet', 'Malik' ],
//     [ 'I', 'am', 'a', 'software', 'developer' ],
//     [ 'I', 'believe', 'in', 'learning', 'by', 'doing' ],
//     [ 'I', 'need', 'courage', 'and', 'patience' ]
//   ]


arr = arr.map(sarr => sarr.reverse() );
console.log(arr);
// [
//     [ 'Malik', 'Sumeet', 'is', 'name', 'My' ],
//     [ 'developer', 'software', 'a', 'am', 'I' ],
//     [ 'doing', 'by', 'learning', 'in', 'believe', 'I' ],
//     [ 'patience', 'and', 'courage', 'need', 'I' ]
//   ]

arr = arr.map(sarr => sarr.join(" "));
console.log(arr);
// [
//     'Malik Sumeet is name My',
//     'developer software a am I',
//     'doing by learning in believe I',
//     'patience and courage need I'
//   ]

arr = arr.reduce((pv, cv, ci, oarr) => { return pv + ". " + cv });
console.log(arr + ".");
// Malik Sumeet is name My. developer software a am I. doing by learning in believe I. patience and courage need I.


// let res = str.split(".").filter(s => s.length > 0).map(s => s.trim().split(" ").reverse().join(" ") + ".").reduce(function(pv, cv){
//     return pv + " " + cv;
// });

// console.log(res);


