
function enterFirstName(firstName){
    return function enterLastName(lastName){
        return function enterAge(age){
            return function printDetails() {
                console.log("Your name is "+ firstName + " " + lastName + " and your age is "+ age);
            }
        }
    }
}

console.log("Kindly Enter your first Name");
let enterLastName = enterFirstName("Ankita");
console.log("Kindly Enter your last Name");
let enterAge = enterLastName("Santape");
console.log("Kindly Enter your Age");
let printDetails = enterAge(25);
console.log("Doing random stuff");
printDetails();









