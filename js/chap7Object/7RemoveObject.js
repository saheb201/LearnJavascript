// video 55

// remove obj propaties
var obj = {x:20, b:22, c:55}

console.log(obj)
delete obj.x;
console.log(obj)


// compaire object

var obj1 = {a:20, b:15}
var obj2 = {a:20, b:15}
console.log(obj1.a === obj2.a)
 if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true)
 }else{
    console.log(false);
 }


console.log(obj1)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))