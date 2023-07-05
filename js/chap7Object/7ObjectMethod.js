var obj = {
    x : 20,
    y : 25, 
    z : 45
}
// console.log(obj);
// console.log(Object.keys(obj));//  obj propaties store in array
// console.log(Object.values(obj)); //  obj value store in array
//console.log(Object.entries(obj)) ; //  obj propaties &value store in array
// duplicate object
var obj2 = Object.assign({ } , obj)
console.log(obj2)
obj2.x = 100;
console.log(obj2)
