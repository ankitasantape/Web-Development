//setInterval() --> sayHi() ko 2sec ke interval ke bad run krta hai continuously
// function sayHi(){
//     console.log('Hiiiii');
// }

// setInterval(sayHi, 2000);

// Above code is executed infinitely but this is not a good solution so we need to stop this code after some period

let counter = 0;
let intervalId;

function sayHi(){
    counter++;
    console.log("Hiii");
    if(counter >= 3){
        clearInterval(intervalId);
    }
}
intervalId = setInterval(sayHi, 2000);