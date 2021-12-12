let arr = [10, 20, 30, 40];
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length+1; j++){
        let slicearr = arr.slice(i,j); // Time complexity of Slice: O(n)
        displayArray(slicearr);
    }
}
// Time Complexity: O(n^3)
function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

/*
Output:

10 = 1
10,20 = 2
10,20,30 = 3
10,20,30,40 = 4
20 = 1
20,30 = 2
20,30,40 = 3
30 = 1
30,40 = 2
40 = 1

*/