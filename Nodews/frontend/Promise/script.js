// How to create promise?
// This is how promise object is created
// resolve and reject is callbacks, in asynchronous task/operation callbacks is something which is needed becoz
// in case of synchronous task the result you might not get away, you wait for the result and then continuing but in case of asynchronous, you will start the operation, will not wait for the operation and once you get the result you will do something.
// So, callack is basically once the task is complete, then the function that execute and I have to do the steps, that is the callback.Generally, it is a success callback or failure callback.   
var userLoggedIn = true;

function checkUserLoggedIn(){
    var promise = new Promise((resolve, reject) => {
        //    wait for 1 sec
        setTimeout( () => {
            //   Promise is resolved
            if(userLoggedIn){
                // You can pass values or parameter to this function if you don't want to print
                resolve("User Logged In Successfully"); 
                //  resolve();   
            }else{
                // Reject
                reject();
            }
        }, 1000);
    });
    return promise;
}

// var promise = new Promise((resolve, reject) => {
//     //    wait for 1 sec
//     setTimeout( () => {
//         //   Promise is resolved
//         if(userLoggedIn){
//             // You can pass values or parameter to this function if you don't want to print
//             resolve("User Logged In Successful"); 
//             //  resolve();   
//         }else{
//             // Reject
//             reject();
//         }
//     }, 1000);
// });

//Initially, the user is logged in,but After 500millisec user just want to decide to logged out
setTimeout( () => {
    // userLoggedIn = false;
    userLoggedIn = true;
}, 500);

// We can return promises through function and this is just a another way of writing promises and output will be same
checkUserLoggedIn().then( (successMsg) =>{
    console.log(successMsg);
}).catch( () => { console.log("User Logged Out")} );


// promise.then( (successMsg) =>{
//     console.log(successMsg)
// }).catch( () => { console.log("User Logged Out")} );


// If user is logged in then the promise is successful and If user is not logged in then the promise is unsuccessful
 