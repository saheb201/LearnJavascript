// // function argument  video 62

// function add(a,b,c){
//   var result = a + b;
//   console.log(result)
// }
// add( 320, 300);
// add(20, 45);


// function sub(a,b){
//     var result = a -b;
//     console.log(a-b)
// }
// sub(500, 489)

// arry sum

// var arr = [20, 10, 50, 25];
// var arr3 = [ 10, 80]

// function arrySum(arr){
//   var sum = 0;
//   for(i = 0; i < arr.length; i++){
//     sum += arr[i]
//   }
//   console.log(sum)
// }
// arrySum(arr3)


// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = [7, 8, 9];

// function arrSum(arr){
//   var sum = 0;
//   for (i = 0; i < arr.length; i++){
//       sum += arr[i];
   
//   }

//   console.log(sum)
// }

// arrSum(arr1)
// arrSum(arr2)
// arrSum(arr3)


// arguments 
// function test(){
//   // console.log(arguments);
//   // console.log(typeof a)
//   for (var i = 0; i < arguments.length; i++){
//     console.log(arguments[i])
//   }
  
// }
// test(20)

// 

function addAll(){
  var sum = 0;
  for(var i = 0; i<arguments.length; i++){
    sum += arguments[i]

  }
  console.log(sum)
}

addAll(20,44)

// add result in a variable

var result = addAll(55,2)

