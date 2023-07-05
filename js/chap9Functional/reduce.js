var arr = [1, 2, 3, 4, 5 ] 
// var sum = arr.reduce(function(prview, current){
//     return prview + current
// });
// console.log(sum)



// // abb sum more valu
// var arr = [1, 2, 3, 4, 5 ] 
// var sum = arr.reduce(function(prview, current){
//     return prview + current
// }, 100);
// console.log(sum)


// //  reduse max value
// var arr = [20, 80, 1, 8, 9]
// var max = arr.reduce(function(prview , current){
//     return Math.max(prview , current)
// },5)

// console.log(max)
// console.log(arr)




// indeth in reduce
function myReduce(arr, cb, acc){
    for(var i = 0; i<arr.length; i++){
    acc = cb(acc , arr[i])
   } 
   return acc;
}


var sum = myReduce(arr,function(prview, current){
        return prview + current
}, 0)
console.log(sum)


var max = myReduce(arr,function(prview, current){
    return Math.max(prview, current)
}, 0)
console.log(max)


var min = myReduce(arr,function(prview, current){
    return Math.min(prview, current)
}, 0)
console.log(min)

