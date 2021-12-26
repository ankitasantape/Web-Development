Function.prototype.myBind = function() {
    let orgFun = this; // fun1 this me aa jayega
    // let args = arguments; // convert this arguments into array
    let args = Array.from(arguments);  // [ o2, "Bhagyashree", "Prachi", "Parnavi" ]
    
    // bind ek future function banake deta hai jo future me call kiya jata hai  
    let boundFun = function() {
        let thisForOrgFun = args[0]; // o2 -> aur ye o2 this ban jayega -> 
        let argsForOrgFun = args.slice(1); // "Bhagyashree", "Prachi", "Parnavi"
        console.log(arguments); // [Arguments] { '0': 'Mayuri' } convert this into array
        let argsFromInvocation = Array.from(arguments); // jb humane ye kiya boundFunction("Mayuri") ko invoke kiya to Mayuri append ho jayegi inko [o2, "Bhagyashree", "Prachi", "Parnavi", "Mayuri"] to inko firse array me convert krna padega
        console.log(argsFromInvocation); // [ 'Mayuri' ]
        argsForOrgFun = argsForOrgFun.concat(argsFromInvocation); // ["Bhagyashree", "Prachi", "Parnavi"].append(['Mayuri']) => ["Bhagyashree", "Prachi", "Parnavi", "Mayuri"] 

        orgFun.apply(thisForOrgFun, argsForOrgFun);
    }

    return boundFun;
}


let obj = {
    fun1: function(frnd1, frnd2){
        console.log("This girls is called " + this.fullName + ". Her age is "+ this.age + ".");
        console.log(this.fullName + " says hello to  "+ frnd1 + ".");
        console.log(this.fullName + " says hello to  "+ frnd2 + ".");
        // console.log(arguments);   
    },
    fullName: "Ankita Santape",
    age: 22
};

// o2 obj me jake this ban jayega
let o2 = {
    fullName: "Sanchayati Bajganiya", // this.fullName =
    age: 23
};

let boundFunction1 = obj.fun1.bind(o2, "Bhagyashree", "Prachi", "Parnavi");
// boundFunction();

boundFunction1("Mayuri");
/*

This girls is called Sanchayati Bajganiya. Her age is 23.
Sanchayati Bajganiya says hello to  Bhagyashree.
Sanchayati Bajganiya says hello to  Prachi.

*/ 


let boundFunction2 = obj.fun1.myBind(o2, "Bhagyashree", "Prachi", "Parnavi");
// boundFunction();

boundFunction2("Mayuri"); // esame kuch pass kiye bina hi 'this' pass ho rha hai aur sath pe parameters bhi pass ho rhe hai
/*

This girls is called Sanchayati Bajganiya. Her age is 23.
Sanchayati Bajganiya says hello to  Bhagyashree.
Sanchayati Bajganiya says hello to  Prachi.

*/ 