//Write a JS code to print numbers from 1 to 10.

// function printNumber(){
//     for(var i = 1; i< 10; i++){
//         console.log(i)
//     }
// }
// printNumber()

// Write a JS code to print a 2D array.
//Function `printArray()` prints all the elements of a 2D array using nested for loops.

// function printArry(arr){
//     for(var i = 0; i<arr.length; i++){
//         for(var j = 0; j<arr[0].length; j++){
//             console.log(arr[i][j]);
//         }
//     }
// }
// var arr= [
//     [1,2,3],
//     [4,5,6],
    
// ];

// printArry(arr)


//3. Write a JS code to print Even numbers in given array
// Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.

// function printEven(arr){
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] % 2 == 0){
//             console.log(arr[i])
//         }
//     }
// }

// var arr = [1, 5, 8, 7, 3, 55, 4];
// printEven(arr)

// function printEven(arr){
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] % 2 == 1){
//             console.log(arr[i])
//         }
//     }
// }

// var arr = [1, 5, 8, 7, 3, 55, 4];
// printEven(arr)


//4. Write a JS code to delete all occurrence of element in given array
// Function `deleteElement()` deletes all the occurrence of element from the given array.

function delectElement (arr, ele){
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == ele){
            arr.splice(i , 1)
        }
    }
    return arr;
}
var arr = [55,45,78,43,77];
delectElement(arr,55)
console.log(arr)
  
