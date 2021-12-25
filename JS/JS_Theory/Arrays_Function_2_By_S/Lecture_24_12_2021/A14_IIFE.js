// (function(){
//     let uname = prompt("What's your name?");
//     alert("Hello " + uname);
// })();
// IIFE = immediately invoked function execution

// let count;
(function(){
    let timeUnits = parseInt(prompt("How much to count"));
    let interval = parseInt(prompt("Log after how much interval?"));
    
    setTimeOut((e) => {
        console.log(count + " left");
        count--;

        
    }, interval * 1000);
    
    alert("Hello " + count);
})();
// console.log("Counted upto "+count);