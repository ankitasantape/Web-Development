// arguments is not an array just like an array
// you can't apply map, reduce => like let res = arguments.map(v => v * 2)
// you can do Array.from(arguments) to convert arguments into array and then apply map or reduce method

function fun(a, b){
     console.log(a + " " + b);
     console.log(arguments[0] + " " + arguments[1] + " " + arguments[2]);
     console.log(arguments); // array like, not an array
     let res = Array.from(arguments); // how to make an array
     let sq = res.map(x => x * x);
     console.log(sq);

}

// fun(); // undefined undefined , [Arguments] {}
// fun(10);  // 10 undefined , [Arguments] { '0': 10 }
// fun(10, 20); // 10 20 , [Arguments] { '0': 10, '1': 20 }
fun(10, 20, 30); // 10 20 , [Arguments] { '0': 10, '1': 20, '2': 30 }, [ 100, 400, 900 ]