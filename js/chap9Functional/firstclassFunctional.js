// first class function  defination
// 1 . A Function can be stored in a variable
// 2 . A Function can be stored in a arry
// 3 . A Function can be stored in a  object
// 4 . We Can Creat Function as Need
//5 . We can Pass Function as an argumment 
// 6. we can return function from Another  Function


//example 1 . A Function can be stored in a variable
function add(a,b){
    return a+b;

}
var sum = add;
console.log(sum(10,20))
console.log(typeof sum)

// example 2 . A Function can be stored in a arry
var arr = [];
arr.push(sum)
console.log(arr)
console.log(arr[0](5,5))

// example 3 . A Function can be stored in a  object
var obj = {
    sum:add
}
console.log(obj)
console.log(obj.sum(20,10))

// example 4 . We Can Creat Function as Need
setTimeout(function(){
    console.log("I have Created....")

},1000)
