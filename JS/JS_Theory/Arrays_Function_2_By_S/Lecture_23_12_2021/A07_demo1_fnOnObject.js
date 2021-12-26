// This says ki object ke upper bhi functions banate hai

let obj = {
    fun1: function(){
        console.log("This girls is called " + this.fullName + ". Her age is "+ this.age);
    },
    fun2: function(){
        console.log("This girls is called " + obj.fullName + ". Her age is "+ obj.age);
    },
    fun3: function(){
        console.log("This girls is called " + fullName + ". Her age is "+ age);
    },
    fullName: "Ankita Santape",
    age: 22
};

obj.fun1();
obj.fun2();
obj.fun3();