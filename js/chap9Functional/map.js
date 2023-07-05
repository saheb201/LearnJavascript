//   var arr = [1, 2, 3];
//   var sqrArr = arr.map(function(value,index,arr){
//     return Math.random()*100 +1

//   });
//   console.log(arr)
//   console.log(sqrArr)


var arr = [1, 2, 3];
// var sqrArr = arr.map(function(value,index,arr){
// //   return Math.random()*100 +1
// return value * value

// });
// console.log(arr)
// console.log(sqrArr)


// indeth map
// function myMap(arr){
//     var newArr =  []
//     for(var i = 0; i <arr.length; i++){
//         var temp = arr[i] * arr[i]
//         newArr.push(temp)
//     }
//     return newArr;
// }
// console.log(myMap(arr))


// indeth map with callback
function myMap(arr, cb){
    var newArr =  []
    for(var i = 0; i <arr.length; i++){
        var temp = cb(arr[i])
        newArr.push(temp)
    }
    return newArr;
}
var qb = myMap(arr, function(value){
    return value * value* value
})

var mten = myMap(arr, function(value){
    return value * 10
})

console.log(arr)
console.log(qb)
console.log(mten)

