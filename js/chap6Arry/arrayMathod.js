// array .mathod video 50
var arr = [2, 5, 7, 4, 9, 8]
var arr2 = [25, 45, 78, 9]
console.log(arr)
console.log(arr.join( "  "))
arr.fill(true)
console.log(arr)
var arr3 = arr.concat(arr2)
console.log(arr3)
console.log(Array.isArray(arr))

var arr4 = Array.from(arr)
console.log(arr4)