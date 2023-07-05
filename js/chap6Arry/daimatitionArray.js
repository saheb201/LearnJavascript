// multiDaimantation Array video 48
var arr = [
    [99, 92, 88, 97],
    [98, 90, 85, 77],
    [97, 87, 84, 87]
]
// console.log(arr);
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// console.log(arr[0][0])
// console.log(arr[1][0])
// console.log(arr[2][0])


// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }



// for (var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++)
//     // console.log(arr[i][j])
//     console.log('element '+ i + " : " + arr[i][j])
// }



var arr = [
    [
       [99, 92, 88, 97],
       [98, 90, 85, 77],
       [97, 87, 84, 87]
    ]
]
for (var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        for(var k = 0; k < arr[i][j].length; k++){
            // console.log(arr[i])
            // console.log('element '+ i + " : " + arr[i][j])
            // console.log('element '+ i + " : " + arr[i][j][k])
             console.log('element' + j + " : " + arr[i][j][k])
        }



    }

   
}
