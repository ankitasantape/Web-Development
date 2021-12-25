
Arrays.prototype.myCall() = {
    
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
obj.fun1.call(o2, "Mehwish", "Shailja");