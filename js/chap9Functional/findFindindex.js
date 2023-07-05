// // find value
// var arr = [20, 5, 8, 3, 7, 6,9]
// var result = arr.find(function(value){
//     return value == 9;
// })
// console.log(result)
// // find index
// var result = arr.findIndex(function(value){
//     return value == 9;
// })
// console.log(result)


//indeth find & find index
 var arr = [20, 5, 8, 3, 7, 6,9]
function myFind(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if (cb(arr[i])){
            return arr[i]
        }
    }
}

var result =myFind(arr , function(value){
    return value == 9;
})
console.log(result)


//indeth find index
var arr = [20, 5, 8, 3, 7, 6,9]
function myFindIndex(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if (cb(arr[i])){
            return i
        }
    }
}

var result =myFindIndex(arr , function(value){
    return value == 9;
})
console.log(result)