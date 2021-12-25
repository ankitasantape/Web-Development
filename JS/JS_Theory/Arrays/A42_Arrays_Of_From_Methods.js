let arr1 = [10, 20, 30];
console.log(arr1);

let arr2 = Array.of(10);
console.log(arr2);

let arr3 = Array.of(10, 20, 30, 40, 50);
console.log(arr3);

let arr4 = Array.from("sumeet"); // array like objects (for instance strings, nodelist, arguments)
console.log(arr4);

let arr5 = arr4.map((ch, i) => i <= 1? String.fromCharCode(ch.charCodeAt(0) + 1): String.fromCharCode(ch.charCodeAt(0) - 1));
console.log(arr5);

let str = arr5.join("");
console.log(str);

let str1 = "s";
console.log(str1.charCodeAt(0));