// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var FilterArr = arr.filter(function(value){
//     return value % 2 == 0;

// })
// console.log(FilterArr)

// // odd number arry
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var FilterArr = arr.filter(function(value){
//     return value % 2 == 1;

// })
// console.log(FilterArr)

// // morethan 5

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var FilterArr = arr.filter(function(value){
//     return value > 5 ;

// })
// console.log(FilterArr)

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var FilterArr = arr.filter(function(value){
//     return value < 5 ;

// })
// console.log(FilterArr)



// indeth filter
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function myFilter(arr){
//     var newArr = []
//     for(var i = 0; i<arr.length; i++){
//         if (arr[i] % 2 == 0){
//             newArr.push(arr[i])
//         }

//     }
//     return newArr;
// }

// console.log(myFilter(arr))


// indeth filter with callback
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function myFilter(arr, cb){
    var newArr = []
    for(var i = 0; i<arr.length; i++){
        if (cb(arr[i])){
            newArr.push(arr[i])
        }

    }
    return newArr
}

console.log(myFilter(arr, function (value){
    return value % 2 == 0 
}))