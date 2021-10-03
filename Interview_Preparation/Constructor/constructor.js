function car(brand, model, color){
    this.Brand = brand,
    this.Model = model,
    this.Color = color

    // you can create functions inside constructor function
    this.drive = function(){
        console.log("I am driving "+ this.Model);
    }
}

// we can create new  object 
let car1 = car("Mercedes", "X5", "White");  // returns undefined if you don't create new objects
let car2 = new car("Mercedes", "S class", "Black"); // returns car object with it's properties
console.log(car1);   // undefined 
console.log(car2);  // car { Brand: 'Mercedes', Model: 'X5', Color: 'White' }

// you can set the property to existing property
car2.Brand = "Jaguar";
console.log(car2); // car { Brand: 'Jaguar', Model: 'X5', Color: 'White' }

// you can access particular Property
console.log("Color : "+ car2.Color); 

car2.drive();