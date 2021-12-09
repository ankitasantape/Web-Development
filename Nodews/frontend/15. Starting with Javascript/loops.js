// var i = 1;

// while(i <= 5){
//     console.log(i);
//     i++; 
// }

// for(; i <= 5; i++){
//     console.log(i);
// }

// do{
//   console.log(i);
//   i++;
// }while(i < 5);


// Q.1 Which of the following 'for' loops would not produce any error?
// Ans : a), d)
// options : a)
// for(var i =0; i < 5; ++i){
//     console.log("Hello");
// }

// b)
// var i, j;
// for(i = 0, j = 10; i < 10, j < 100;){
//     console.log("Hello");
// }

// c)
// var i;
// for(i = 0; i < 5){
//     console.log("Hello");
// }

// d)
// var i,j;
// for(i = 0, j=10; i < 5; ++i){
//     console.log("Hello");
// }

// ******************* Print at Least Once **********************
// Q.2 Which of the following statements will print 'hii' at least once?
// Ans : a), d)
// option : a)

do{
    console.log("hii");
}
while(i < 5);

// b) 
// var i = 0;
// while(i < 5); // semicolon here - so loop will be going on continuously 
// { 
//     console.log("hii");
//     ++i;
// }

// c)
// for(i = 0, j =10; i < 5; ++i){
//     if(i < 5){
//         break;
//     }
//     console.log("hii");
// }


// d)
// var i = 0; 
// while(i < 5){
//     console.log("hii");
//     ++i;
// }