Function.prototype.myBind = function() {
    let orgFun = this;
    let argsArray = Array.from(arguments);
    let newThis = argsArray[0];
    let newParams = argsArray.slice(1);

    let myBind = function(){
        newParams.concate(newThis);
    }
    return myBind;
}

let obj = {
    fun1: function(frnd1, frnd2){
       console.log("This person is called " + this.fullName + " His/Her age is " + this.age );
       console.log( this.fullName + " says hello to " +frnd1 + " . " );
       console.log( this.fullName + " says hello to " +frnd2 + " . " );
    },
    fullName: "Ankita Santape",
    age: 22
}

let o2 = {
    fullName: "Neha",
    age: 33
}

let boundFunction = obj.fun1.myBind(o2, "Ankita", "Santape", "Sakshi", "Aaditya", "Tanmay", "Suprit");
boundFunction("Sarang", "Sachin");