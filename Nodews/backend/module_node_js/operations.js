// I need this function available outside of this file then the syntax is
// This whole file is a module and module.exports.add is a object and add as a key corresponds to this function
module.exports.add = function add(a,b){
    return a+b;
}
// If I write above funtion like as given below, this function will not be accessible outside of this file
// var multiply = function(a,b){
//     return a*b;
// }
exports.multiply = function add(a,b){
    return a*b;
}