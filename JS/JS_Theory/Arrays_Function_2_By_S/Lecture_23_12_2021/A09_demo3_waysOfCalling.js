let obj = {
    fun1: function(frnd1, frnd2){
        console.log("---------Passed this object---------------- ")
        console.log("This girls is called " + this.fullName + ". Her age is "+ this.age + ".");
        console.log(this.fullName + " says hello to  "+ frnd1 + ".");
        console.log(this.fullName + " says hello to  "+ frnd2 + ".");
        console.log("---------Passed Original object---------------------------------------")


        // agar obj pass krte hai to jo original object hai wahi aayega uski lagah koi aur nhi le skta
        console.log("This girls is called " + obj.fullName + ". Her age is "+ obj.age + ".");
        console.log(obj.fullName + " says hello to  "+ frnd1 + ".");
        console.log(obj.fullName + " says hello to  "+ frnd2 + "."); 
       
        console.log(arguments);   // [Arguments] { '0': 'Bhagyashree', '1': 'Parnavi' }
    },
    fullName: "Ankita Santape",
    age: 22
};

obj.fun1("Sakshi", "Nidhi");

/*
This girls is called Ankita Santape. Her age is 22.
Ankita Santape says hello to  Sakshi.
Ankita Santape says hello to  Nidhi.
[Arguments] { '0': 'Sakshi', '1': 'Nidhi' }
*/ 

// Another way of calling a function
// call is a function. It is available on all functions. It can be used to call the function.
// the use case is: If you want to override the default this
obj.fun1.call({
    fullName: "Prachi",
    age: 23
}, "Sakshi", "Nidhi");

/* Output same as above
This girls is called Prachi. Her age is 23.
Prachi says hello to  Sakshi.
Prachi says hello to  Nidhi.
[Arguments] { '0': 'Sakshi', '1': 'Nidhi' }
*/ 

// You can also call like this
let o2 = {
    fullName: "Sanchayati Bajganiya",
    age: 23
};

obj.fun1.call(o2, "Bhagyashree", "Parnavi");
/*
This girls is called Sanchayati Bajganiya. Her age is 23.
Sanchayati Bajganiya says hello to  Bhagyashree.
Sanchayati Bajganiya says hello to  Parnavi.
[Arguments] { '0': 'Bhagyashree', '1': 'Parnavi' }
*/ 

 
/***********************************************************************************/ 



// Another way of calling a function using apply()
// call and apply ka first parameter this hota hai aur usake bad jo bhi pass krte hai wo comma separated jate hai ya array me pass krte hai
// call un parameters ko comma separated form me bhejata hai aur
// apply un parameters ko array ke form me bhejata hai 
/*
What is the real life use of call() and apply() method ?
=> If you want to change 'this' only and do not want to change object itself.
=> Wherever we want to control 'this' we will use call() and apply() methods. 
=> agar functionality isi object ki use krni hai aur data kisi aur object se lena hai to hum call() and apply() ka use krenge. 

*/ 


obj.fun1.apply(o2, ['Prachi', 'Bhagyashree']);
/*
Sanchayati Bajganiya says hello to  Prachi.
Sanchayati Bajganiya says hello to  Bhagyashree.
[Arguments] { '0': 'Prachi', '1': 'Bhagyashree' }
*/ 


/*

---------Passed this object---------------- 
This girls is called Sanchayati Bajganiya. Her age is 23.
Sanchayati Bajganiya says hello to  Prachi.
Sanchayati Bajganiya says hello to  Bhagyashree.
---------Passed Original object---------------------------------------
This girls is called Ankita Santape. Her age is 22.
Ankita Santape says hello to  Prachi.
Ankita Santape says hello to  Bhagyashree.
[Arguments] { '0': 'Prachi', '1': 'Bhagyashree' }

*/ 



/*********************************************************************************/ 



// Another way of calling a function using bind()

// bind is dissimilar. It doesn't make a call. It gives you a new function to call.
// agar hum aise call krte hai to bind kuch bhi return nhi krega
// obj.fun1.bind(o2, ["Bhagyashree", "Prachi", "Parnavi"]); // it gives nothing
// bind does not calls the function it stores the future call
// bind ek future function banake deta hai jo future me call kiya jata hai
// arrow ke sath ye functions use nhi kr skte.

let boundFunction = obj.fun1.bind(o2, "Bhagyashree", "Prachi", "Parnavi");
boundFunction(); // esame kuch pass kiye bina hi 'this' pass ho rha hai aur sath pe parameters bhi pass ho rhe hai

/*

---------Passed this object---------------- 
This girls is called Sanchayati Bajganiya. Her age is 23.
Sanchayati Bajganiya says hello to  Bhagyashree.
Sanchayati Bajganiya says hello to  Prachi.
---------Passed Original object---------------------------------------
This girls is called Ankita Santape. Her age is 22.
Ankita Santape says hello to  Bhagyashree.
Ankita Santape says hello to  Prachi.
[Arguments] { '0': 'Bhagyashree', '1': 'Prachi', '2': 'Parnavi' }

*/ 

// Mayuri will append at the end of the parameters 
boundFunction("Mayuri"); // esame kuch pass kiye bina hi 'this' pass ho rha hai aur sath pe parameters bhi pass ho rhe hai
/*
---------Passed this object---------------- 
This girls is called Sanchayati Bajganiya. Her age is 23.
Sanchayati Bajganiya says hello to  Bhagyashree.
Sanchayati Bajganiya says hello to  Prachi.
---------Passed Original object---------------------------------------
This girls is called Ankita Santape. Her age is 22.
Ankita Santape says hello to  Bhagyashree.
Ankita Santape says hello to  Prachi.
[Arguments] {
  '0': 'Bhagyashree',
  '1': 'Prachi',
  '2': 'Parnavi',
  '3': 'Mayuri'
}
*/ 